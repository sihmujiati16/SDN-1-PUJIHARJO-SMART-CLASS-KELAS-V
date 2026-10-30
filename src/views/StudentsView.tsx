import React, { useState } from 'react';
import {
  Users,
  Search,
  Plus,
  Download,
  Upload,
  Printer,
  ChevronRight,
  Edit2,
  Trash2,
  CheckCircle,
  AlertCircle,
  FileSpreadsheet,
  X,
  Phone,
  MapPin,
  Calendar,
  Award
} from 'lucide-react';
import { Student } from '../types';

interface Props {
  students: Student[];
  onUpdateStudents: (list: Student[]) => void;
}

export const StudentsView: React.FC<Props> = ({
  students,
  onUpdateStudents
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<'all' | 'L' | 'P'>('all');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  // Form states
  const [formNama, setFormNama] = useState('');
  const [formNis, setFormNis] = useState('');
  const [formNisn, setFormNisn] = useState('');
  const [formJk, setFormJk] = useState<'L' | 'P'>('L');
  const [formAgama, setFormAgama] = useState<'Islam' | 'Kristen'>('Islam');
  const [formAlamat, setFormAlamat] = useState('Desa Pujiharjo, Kec. Tirtoyudo');
  const [formTelepon, setFormTelepon] = useState('081234567800');
  const [formOrtu, setFormOrtu] = useState('');
  const [formCatatan, setFormCatatan] = useState('');

  // Filter students
  const filteredStudents = students.filter((s) => {
    const matchSearch =
      s.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nis.includes(searchQuery) ||
      s.nisn.includes(searchQuery);
    const matchGender = selectedGender === 'all' || s.jenisKelamin === selectedGender;
    return matchSearch && matchGender;
  });

  const handleEditClick = (s: Student) => {
    setEditingStudent(s);
    setFormNama(s.nama);
    setFormNis(s.nis);
    setFormNisn(s.nisn);
    setFormJk(s.jenisKelamin);
    setFormAgama(s.agama as any);
    setFormAlamat(s.alamat || '');
    setFormTelepon(s.telepon || '');
    setFormOrtu(s.namaOrtu || '');
    setFormCatatan(s.catatanPerkembangan);
    setShowAddModal(true);
  };

  const handleAddNew = () => {
    setEditingStudent(null);
    setFormNama('');
    setFormNis('26' + String(students.length + 1).padStart(2, '0'));
    setFormNisn('01428391' + String(students.length + 1).padStart(2, '0'));
    setFormJk('L');
    setFormAgama('Islam');
    setFormAlamat('Dusun Krajan, Desa Pujiharjo');
    setFormTelepon('0812345678' + String(students.length + 1).padStart(2, '0'));
    setFormOrtu('');
    setFormCatatan('');
    setShowAddModal(true);
  };

  const handleSaveStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formNama) return;

    if (editingStudent) {
      const updated = students.map((s) =>
        s.id === editingStudent.id
          ? {
              ...s,
              nama: formNama,
              nis: formNis,
              nisn: formNisn,
              jenisKelamin: formJk,
              agama: formAgama,
              alamat: formAlamat,
              telepon: formTelepon,
              namaOrtu: formOrtu,
              catatanPerkembangan: formCatatan
            }
          : s
      );
      onUpdateStudents(updated);
    } else {
      const nextNoUrut = students.length > 0 ? Math.max(...students.map((s) => s.noUrut || 0)) + 1 : 1;
      const newStd: Student = {
        id: 'std-' + Date.now(),
        noUrut: nextNoUrut,
        nis: formNis,
        nisn: formNisn,
        nik: '350720' + String(Date.now()).slice(-10),
        nama: formNama,
        jenisKelamin: formJk,
        agama: formAgama,
        tempatLahir: 'Malang',
        tanggalLahir: '2015-05-10',
        namaOrtu: formOrtu,
        alamat: formAlamat,
        telepon: formTelepon,
        statusKelengkapan: 'Lengkap',
        kehadiran: { hadir: 60, sakit: 0, izin: 0, alpa: 0 },
        catatanPerkembangan: formCatatan || 'Peserta didik baru terdaftar di kelas V SDN 1 Pujiharjo.',
        profilPencapaian: { pahamUtuh: 8, butuhPendampingan: 1, pengayaan: 2 },
        gamifikasi: {
          xp: 200,
          level: 1,
          bintang: 10,
          rekorPenyelesaian: 0,
          lencana: ['Pembelajar Rajin']
        }
      };
      onUpdateStudents([...students, newStd]);
    }
    setShowAddModal(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus data siswa ini?')) {
      onUpdateStudents(students.filter((s) => s.id !== id));
      if (selectedStudent?.id === id) setSelectedStudent(null);
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['No,NIS,NISN,Nama Siswa,L/P,Agama,Nama Orang Tua,Alamat,Telepon,Hadir,Sakit,Izin,Alpa'];
    const rows = students.map((s, idx) =>
      `"${idx + 1}","${s.nis}","${s.nisn}","${s.nama}","${s.jenisKelamin}","${s.agama}","${s.namaOrtu}","${s.alamat}","${s.telepon}","${s.kehadiran.hadir}","${s.kehadiran.sakit}","${s.kehadiran.izin}","${s.kehadiran.alpa}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DATA_SISWA_KELAS_V_SDN1_PUJIHARJO_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Pengelolaan Peserta Didik Kelas V
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Data Pokok Siswa, Rekap Presensi, Catatan Karakter, dan Portofolio Belajar · SD Negeri 1 Pujiharjo
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleAddNew}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Siswa</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 rounded-xl transition border border-emerald-200 dark:border-emerald-900"
            title="Ekspor Data Siswa ke Format Excel / CSV"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Ekspor Excel/CSV</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-xl transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama, NIS, atau NISN..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-500 whitespace-nowrap">Jenis Kelamin:</span>
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setSelectedGender('all')}
              className={`px-3 py-1 rounded-md font-medium transition ${
                selectedGender === 'all'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Semua ({students.length})
            </button>
            <button
              onClick={() => setSelectedGender('L')}
              className={`px-3 py-1 rounded-md font-medium transition ${
                selectedGender === 'L'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Laki-laki ({students.filter((s) => s.jenisKelamin === 'L').length})
            </button>
            <button
              onClick={() => setSelectedGender('P')}
              className={`px-3 py-1 rounded-md font-medium transition ${
                selectedGender === 'P'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Perempuan ({students.filter((s) => s.jenisKelamin === 'P').length})
            </button>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-semibold">
                <th className="p-3 w-12 text-center">No</th>
                <th className="p-3">NIS / NISN</th>
                <th className="p-3">Nama Lengkap Siswa</th>
                <th className="p-3 text-center">L/P</th>
                <th className="p-3">Agama</th>
                <th className="p-3">Orang Tua / Wali</th>
                <th className="p-3 text-center">Presensi (H/S/I/A)</th>
                <th className="p-3">Catatan Karakter</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredStudents.map((std, idx) => (
                <tr
                  key={std.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition cursor-pointer"
                  onClick={() => setSelectedStudent(std)}
                >
                  <td className="p-3 text-center font-mono font-medium text-slate-400">
                    {idx + 1}
                  </td>
                  <td className="p-3 font-mono">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{std.nis}</span>
                    <span className="text-[10px] text-slate-400 block">{std.nisn}</span>
                  </td>
                  <td className="p-3 font-bold text-slate-900 dark:text-white">
                    {std.nama}
                  </td>
                  <td className="p-3 text-center font-bold">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        std.jenisKelamin === 'L'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                      }`}
                    >
                      {std.jenisKelamin}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600 dark:text-slate-400">
                    {std.agama}
                  </td>
                  <td className="p-3 text-slate-600 dark:text-slate-400">
                    {std.namaOrtu}
                  </td>
                  <td className="p-3 text-center font-mono">
                    <span className="text-emerald-600 font-bold">{std.kehadiran.hadir}H</span> ·{' '}
                    <span className="text-amber-600">{std.kehadiran.sakit}S</span> ·{' '}
                    <span className="text-blue-600">{std.kehadiran.izin}I</span> ·{' '}
                    <span className="text-rose-600">{std.kehadiran.alpa}A</span>
                  </td>
                  <td className="p-3 text-slate-600 dark:text-slate-400 max-w-xs truncate">
                    {std.catatanPerkembangan}
                  </td>
                  <td className="p-3 text-center" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => handleEditClick(std)}
                        className="p-1.5 text-slate-400 hover:text-blue-600 rounded-md hover:bg-slate-100"
                        title="Edit Data Siswa"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(std.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-slate-100"
                        title="Hapus Data Siswa"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Individual Student Detail Modal / Drawer */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center text-sm">
                  {selectedStudent.nama.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {selectedStudent.nama}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    NIS: {selectedStudent.nis} · NISN: {selectedStudent.nisn}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <div>
                  <span className="text-slate-400 block">Jenis Kelamin:</span>
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    {selectedStudent.jenisKelamin === 'L' ? 'Laki-laki' : 'Perempuan'}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Agama:</span>
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    {selectedStudent.agama}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Nama Orang Tua / Wali:</span>
                  <strong className="text-slate-900 dark:text-white font-semibold">
                    {selectedStudent.namaOrtu}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Kontak Telepon:</span>
                  <strong className="text-slate-900 dark:text-white font-semibold font-mono">
                    {selectedStudent.telepon}
                  </strong>
                </div>
              </div>

              <div>
                <span className="text-slate-500 block mb-0.5">Alamat Tempat Tinggal:</span>
                <p className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 font-medium text-slate-800 dark:text-slate-200">
                  {selectedStudent.alamat}
                </p>
              </div>

              <div>
                <span className="text-slate-500 block mb-0.5">Rekap Kehadiran Siswa:</span>
                <div className="grid grid-cols-4 gap-2 text-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div>
                    <span className="text-[10px] text-emerald-600 font-bold block">HADIR</span>
                    <strong className="text-base text-emerald-700">{selectedStudent.kehadiran.hadir}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-600 font-bold block">SAKIT</span>
                    <strong className="text-base text-amber-700">{selectedStudent.kehadiran.sakit}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-600 font-bold block">IZIN</span>
                    <strong className="text-base text-blue-700">{selectedStudent.kehadiran.izin}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-rose-600 font-bold block">ALPA</span>
                    <strong className="text-base text-rose-700">{selectedStudent.kehadiran.alpa}</strong>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-slate-500 block mb-0.5">Catatan Perkembangan & Karakter Guru:</span>
                <p className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  "{selectedStudent.catatanPerkembangan}"
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  handleEditClick(selectedStudent);
                  setSelectedStudent(null);
                }}
                className="px-4 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                Edit Data
              </button>
              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Add / Edit Student */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {editingStudent ? 'Edit Data Peserta Didik' : 'Tambah Peserta Didik Baru'}
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStudent} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nama Lengkap Siswa
                </label>
                <input
                  type="text"
                  placeholder="Misal: Anindya Kirana Putri"
                  value={formNama}
                  onChange={(e) => setFormNama(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    NIS
                  </label>
                  <input
                    type="text"
                    value={formNis}
                    onChange={(e) => setFormNis(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    NISN
                  </label>
                  <input
                    type="text"
                    value={formNisn}
                    onChange={(e) => setFormNisn(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Jenis Kelamin
                  </label>
                  <select
                    value={formJk}
                    onChange={(e) => setFormJk(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="L">Laki-laki (L)</option>
                    <option value="P">Perempuan (P)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Agama
                  </label>
                  <select
                    value={formAgama}
                    onChange={(e) => setFormAgama(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="Islam">Islam</option>
                    <option value="Kristen">Kristen</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Orang Tua / Wali
                  </label>
                  <input
                    type="text"
                    value={formOrtu}
                    onChange={(e) => setFormOrtu(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="Nama bapak/ibu"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    No. Telepon / WA
                  </label>
                  <input
                    type="text"
                    value={formTelepon}
                    onChange={(e) => setFormTelepon(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Alamat Rumah
                </label>
                <input
                  type="text"
                  value={formAlamat}
                  onChange={(e) => setFormAlamat(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Catatan Karakter & Perkembangan
                </label>
                <textarea
                  rows={2}
                  value={formCatatan}
                  onChange={(e) => setFormCatatan(e.target.value)}
                  placeholder="Bakat, kebiasaan positif, dan aspek yang perlu didampingi..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 mt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 rounded-lg"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
                >
                  Simpan Data Siswa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
