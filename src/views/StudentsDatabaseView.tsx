import React, { useState } from 'react';
import {
  Users,
  Search,
  Plus,
  Printer,
  Download,
  Filter,
  Shield,
  Eye,
  EyeOff,
  Edit2,
  Trash2,
  CheckCircle,
  AlertTriangle,
  X,
  Calendar,
  Lock,
  ArrowUpDown,
  BookOpen
} from 'lucide-react';
import { Student } from '../types';

interface Props {
  students: Student[];
  onUpdateStudents: (list: Student[]) => void;
}

export const StudentsDatabaseView: React.FC<Props> = ({
  students,
  onUpdateStudents
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGender, setFilterGender] = useState<'all' | 'L' | 'P'>('all');
  const [filterAgama, setFilterAgama] = useState<'all' | 'Islam' | 'Kristen'>('all');
  const [filterCompleteness, setFilterCompleteness] = useState<'all' | 'Lengkap' | 'Perlu Verifikasi NIS'>('all');
  const [sortBy, setSortBy] = useState<'noUrut' | 'nama' | 'nis' | 'nisn'>('noUrut');
  const [sortAsc, setSortAsc] = useState(true);

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showSensitiveNik, setShowSensitiveNik] = useState<Record<string, boolean>>({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  // Form states
  const [fNoUrut, setFNoUrut] = useState(students.length + 1);
  const [fNama, setFNama] = useState('');
  const [fNis, setFNis] = useState('');
  const [fNisn, setFNisn] = useState('');
  const [fNik, setFNik] = useState('3507300000000000');
  const [fJk, setFJk] = useState<'L' | 'P'>('L');
  const [fAgama, setFAgama] = useState<'Islam' | 'Kristen'>('Islam');
  const [fTempatLahir, setFTempatLahir] = useState('MALANG');
  const [fTanggalLahir, setFTanggalLahir] = useState('2015-05-10');
  const [fNamaOrtu, setFNamaOrtu] = useState('');
  const [fAlamat, setFAlamat] = useState('Dusun Krajan, Desa Pujiharjo');
  const [fTelepon, setFTelepon] = useState('081234560000');
  const [fCatatan, setFCatatan] = useState('');

  // Key stats
  const totalStudents = students.length;
  const countL = students.filter((s) => s.jenisKelamin === 'L').length;
  const countP = students.filter((s) => s.jenisKelamin === 'P').length;
  const countIslam = students.filter((s) => s.agama === 'Islam').length;
  const countKristen = students.filter((s) => s.agama === 'Kristen').length;
  const countIncomplete = students.filter((s) => !s.nis || s.statusKelengkapan === 'Perlu Verifikasi NIS').length;

  const toggleNikVisibility = (stdId: string) => {
    setShowSensitiveNik((prev) => ({
      ...prev,
      [stdId]: !prev[stdId]
    }));
  };

  // Filter and sort
  let list = students.filter((s) => {
    const matchSearch =
      s.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nis.includes(searchQuery) ||
      s.nisn.includes(searchQuery);
    const matchGender = filterGender === 'all' || s.jenisKelamin === filterGender;
    const matchAgama = filterAgama === 'all' || s.agama === filterAgama;
    const matchCompleteness =
      filterCompleteness === 'all' || s.statusKelengkapan === filterCompleteness;
    return matchSearch && matchGender && matchAgama && matchCompleteness;
  });

  list.sort((a, b) => {
    let cmp = 0;
    if (sortBy === 'noUrut') cmp = a.noUrut - b.noUrut;
    else if (sortBy === 'nama') cmp = a.nama.localeCompare(b.nama);
    else if (sortBy === 'nis') cmp = a.nis.localeCompare(b.nis);
    else if (sortBy === 'nisn') cmp = a.nisn.localeCompare(b.nisn);
    return sortAsc ? cmp : -cmp;
  });

  const handleEditClick = (s: Student) => {
    setEditingStudent(s);
    setFNoUrut(s.noUrut);
    setFNama(s.nama);
    setFNis(s.nis);
    setFNisn(s.nisn);
    setFNik(s.nik);
    setFJk(s.jenisKelamin);
    setFAgama(s.agama);
    setFTempatLahir(s.tempatLahir);
    setFTanggalLahir(s.tanggalLahir);
    setFNamaOrtu(s.namaOrtu || '');
    setFAlamat(s.alamat || '');
    setFTelepon(s.telepon || '');
    setFCatatan(s.catatanPerkembangan);
    setShowAddModal(true);
  };

  const handleAddNew = () => {
    setEditingStudent(null);
    setFNoUrut(students.length + 1);
    setFNama('');
    setFNis('44' + String(students.length + 1).padStart(2, '0'));
    setFNisn('015' + Math.floor(1000000 + Math.random() * 9000000));
    setFNik('350730' + Math.floor(1000000000 + Math.random() * 9000000000));
    setFJk('L');
    setFAgama('Islam');
    setFTempatLahir('MALANG');
    setFTanggalLahir('2015-05-10');
    setFNamaOrtu('');
    setFAlamat('Dusun Krajan, Desa Pujiharjo');
    setFTelepon('08123456' + String(students.length + 1).padStart(4, '0'));
    setFCatatan('');
    setShowAddModal(true);
  };

  const handleSaveStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fNama) return;

    const completeness: Student['statusKelengkapan'] = fNis ? 'Lengkap' : 'Perlu Verifikasi NIS';

    if (editingStudent) {
      const updated = students.map((s) =>
        s.id === editingStudent.id
          ? {
              ...s,
              noUrut: Number(fNoUrut),
              nama: fNama,
              nis: fNis,
              nisn: fNisn,
              nik: fNik,
              jenisKelamin: fJk,
              agama: fAgama,
              tempatLahir: fTempatLahir,
              tanggalLahir: fTanggalLahir,
              namaOrtu: fNamaOrtu,
              alamat: fAlamat,
              telepon: fTelepon,
              catatanPerkembangan: fCatatan,
              statusKelengkapan: completeness
            }
          : s
      );
      onUpdateStudents(updated);
    } else {
      const newStd: Student = {
        id: 'std-' + Date.now(),
        noUrut: Number(fNoUrut),
        nis: fNis,
        nisn: fNisn,
        nik: fNik,
        nama: fNama,
        jenisKelamin: fJk,
        agama: fAgama,
        tempatLahir: fTempatLahir,
        tanggalLahir: fTanggalLahir,
        namaOrtu: fNamaOrtu,
        alamat: fAlamat,
        telepon: fTelepon,
        statusKelengkapan: completeness,
        kehadiran: { hadir: 60, sakit: 0, izin: 0, alpa: 0 },
        catatanPerkembangan: fCatatan || 'Peserta didik terdaftar dalam database resmi kelas V.',
        gamifikasi: {
          xp: 250,
          bintang: 10,
          level: 1,
          lencana: ['Murid Baru'],
          rekorPenyelesaian: 4
        },
        profilPencapaian: { pahamUtuh: 7, butuhPendampingan: 1, pengayaan: 2 }
      };
      onUpdateStudents([...students, newStd]);
    }
    setShowAddModal(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus data peserta didik ini dari database resmi?')) {
      onUpdateStudents(students.filter((s) => s.id !== id));
      if (selectedStudent?.id === id) setSelectedStudent(null);
    }
  };

  // Export full table to CSV
  const handleExportCSV = () => {
    const headers = [
      'No,Nama Lengkap,NIS,Jenis Kelamin,NISN,Tempat Lahir,Tanggal Lahir,Agama,Status Kelengkapan'
    ];
    const rows = students.map((s) =>
      `"${s.noUrut}","${s.nama}","${s.nis}","${s.jenisKelamin}","${s.nisn}","${s.tempatLahir}","${s.tanggalLahir}","${s.agama}","${s.statusKelengkapan}"`
    );
    const csv = 'data:text/csv;charset=utf-8,\uFEFF' + [headers, ...rows].join('\n');
    const encoded = encodeURI(csv);
    const link = document.createElement('a');
    link.href = encoded;
    link.download = `DATABASE_SISWA_KELAS_V_SDN1_PUJIHARJO_${new Date().toISOString().slice(0, 10)}.csv`;
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
              DATABASE SISWA KELAS V SD NEGERI 1 PUJIHARJO
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Sumber Resmi: Berkas DAFTAR SISWA KELAS 5.xlsx · Terintegrasi dengan 10 Mapel, Asesmen & KKTP
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleAddNew}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Siswa</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 rounded-xl transition border border-emerald-200 dark:border-emerald-900"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Ekspor Excel/CSV</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-xl transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak Roster</span>
          </button>
        </div>
      </div>

      {/* 5 Stats Cards Required by Prompt */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">Total Siswa Aktif</span>
          <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white font-mono">
            {totalStudents}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">Kelas V TA 2026/2027</p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">Siswa Laki-laki</span>
          <p className="mt-1 text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
            {countL}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">{Math.round((countL / totalStudents) * 100)}% dari total</p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">Siswa Perempuan</span>
          <p className="mt-1 text-2xl font-black text-rose-600 dark:text-rose-400 font-mono">
            {countP}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">{Math.round((countP / totalStudents) * 100)}% dari total</p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">Agama Islam (PAI)</span>
          <p className="mt-1 text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
            {countIslam}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">Tergabung Kelas PAI</p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">Agama Kristen (PAK)</span>
          <p className="mt-1 text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">
            {countKristen}
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">Tergabung Kelas PAK</p>
        </div>

      </div>

      {/* Notice on NIS Verifikasi */}
      {countIncomplete > 0 && (
        <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3 text-xs">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Catatan Status Kelengkapan Data:</strong> Ditemukan 1 peserta didik (No. 7: <strong>ALDO BHARITO PUTRA</strong>) dengan NIS kosong sesuai dokumen asli Excel/PDF. Data telah diimpor secara utuh tanpa mengarang angka fiktif dan diberi status <em>"Perlu Verifikasi NIS"</em>.
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
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

        <div className="flex items-center gap-2 flex-wrap text-xs">
          {/* Gender Filter */}
          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
          >
            <option value="all">Semua Gender</option>
            <option value="L">Laki-laki (L)</option>
            <option value="P">Perempuan (P)</option>
          </select>

          {/* Agama Filter */}
          <select
            value={filterAgama}
            onChange={(e) => setFilterAgama(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
          >
            <option value="all">Semua Agama</option>
            <option value="Islam">Islam (12)</option>
            <option value="Kristen">Kristen (13)</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium"
          >
            <option value="noUrut">Urut No. Urut (1-25)</option>
            <option value="nama">Urut Nama (A-Z)</option>
            <option value="nis">Urut NIS</option>
            <option value="nisn">Urut NISN</option>
          </select>

          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
            title="Arah Urutan"
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Table: Exact Columns matching official Excel */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-semibold">
                <th className="p-3 w-12 text-center">NO</th>
                <th className="p-3">NAMA LENGKAP</th>
                <th className="p-3 text-center">NIS</th>
                <th className="p-3 text-center">L/P</th>
                <th className="p-3">NISN</th>
                <th className="p-3">TEMPAT LAHIR</th>
                <th className="p-3">TANGGAL LAHIR</th>
                <th className="p-3">NIK (SENSITIF)</th>
                <th className="p-3 text-center">AGAMA</th>
                <th className="p-3 text-center">STATUS DATA</th>
                <th className="p-3 text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {list.map((std) => {
                const isNikVisible = showSensitiveNik[std.id];
                const maskedNik = std.nik.slice(0, 6) + '******' + std.nik.slice(12);

                return (
                  <tr
                    key={std.id}
                    onClick={() => setSelectedStudent(std)}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition cursor-pointer"
                  >
                    <td className="p-3 text-center font-mono font-bold text-slate-400">
                      {std.noUrut}
                    </td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">
                      {std.nama}
                    </td>
                    <td className="p-3 text-center font-mono">
                      {std.nis ? (
                        <span className="font-semibold text-blue-600 dark:text-blue-400">{std.nis}</span>
                      ) : (
                        <span className="text-amber-600 font-bold italic">-</span>
                      )}
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
                    <td className="p-3 font-mono font-semibold text-slate-700 dark:text-slate-300">
                      {std.nisn}
                    </td>
                    <td className="p-3 text-slate-600 dark:text-slate-400 uppercase">
                      {std.tempatLahir}
                    </td>
                    <td className="p-3 font-mono text-slate-600 dark:text-slate-400">
                      {std.tanggalLahir}
                    </td>
                    <td className="p-3 font-mono text-slate-600 dark:text-slate-400" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-1.5">
                        <span>{isNikVisible ? std.nik : maskedNik}</span>
                        <button
                          onClick={() => toggleNikVisibility(std.id)}
                          className="text-slate-400 hover:text-slate-600"
                          title={isNikVisible ? 'Sembunyikan NIK' : 'Tampilkan NIK (Akses Guru)'}
                        >
                          {isNikVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          std.agama === 'Islam'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                        }`}
                      >
                        {std.agama}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          std.statusKelengkapan === 'Lengkap'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        }`}
                      >
                        {std.statusKelengkapan}
                      </span>
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Individual Student Profile Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 my-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center text-base">
                  {selectedStudent.nama.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {selectedStudent.nama}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    No. Urut #{selectedStudent.noUrut} · NIS: {selectedStudent.nis || '-'} · NISN: {selectedStudent.nisn}
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
                  <span className="text-slate-400 block">Tempat, Tanggal Lahir:</span>
                  <strong className="text-slate-800 dark:text-slate-200 uppercase">
                    {selectedStudent.tempatLahir}, {selectedStudent.tanggalLahir}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Agama (Mata Pelajaran):</span>
                  <strong className="text-slate-800 dark:text-slate-200">
                    {selectedStudent.agama} ({selectedStudent.agama === 'Islam' ? 'PAI' : 'PAK'})
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block">NIK Resmi:</span>
                  <strong className="text-slate-800 dark:text-slate-200 font-mono">
                    {selectedStudent.nik}
                  </strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Status Data:</span>
                  <span className="font-semibold text-emerald-600">
                    {selectedStudent.statusKelengkapan}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-slate-500 block mb-1">Catatan Perkembangan Akademik & Karakter:</span>
                <p className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  "{selectedStudent.catatanPerkembangan}"
                </p>
              </div>

              <div>
                <span className="text-slate-500 block mb-1">Rekap Kehadiran Presensi:</span>
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
                Edit Data Siswa
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

      {/* Modal Add / Edit */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl my-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {editingStudent ? 'Edit Data Peserta Didik' : 'Tambah Peserta Didik'}
              </h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStudent} className="space-y-3 text-xs">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold mb-1">No. Urut</label>
                  <input
                    type="number"
                    value={fNoUrut}
                    onChange={(e) => setFNoUrut(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block font-semibold mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    value={fNama}
                    onChange={(e) => setFNama(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 uppercase"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">NIS (Boleh Kosong)</label>
                  <input
                    type="text"
                    value={fNis}
                    onChange={(e) => setFNis(e.target.value)}
                    placeholder="Contoh: 4401"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">NISN (10 Digit)</label>
                  <input
                    type="text"
                    value={fNisn}
                    onChange={(e) => setFNisn(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Jenis Kelamin</label>
                  <select
                    value={fJk}
                    onChange={(e) => setFJk(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  >
                    <option value="L">Laki-laki (L)</option>
                    <option value="P">Perempuan (P)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Agama</label>
                  <select
                    value={fAgama}
                    onChange={(e) => setFAgama(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                  >
                    <option value="Islam">Islam</option>
                    <option value="Kristen">Kristen</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Tempat Lahir</label>
                  <input
                    type="text"
                    value={fTempatLahir}
                    onChange={(e) => setFTempatLahir(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 uppercase"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Tanggal Lahir</label>
                  <input
                    type="date"
                    value={fTanggalLahir}
                    onChange={(e) => setFTanggalLahir(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">NIK (16 Digit - Sensitif)</label>
                <input
                  type="text"
                  value={fNik}
                  onChange={(e) => setFNik(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Catatan Perkembangan Siswa</label>
                <textarea
                  rows={2}
                  value={fCatatan}
                  onChange={(e) => setFCatatan(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs text-slate-500 hover:bg-slate-100 rounded-lg"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
                >
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
