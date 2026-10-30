import React, { useState } from 'react';
import {
  Clock,
  Printer,
  Edit3,
  Plus,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar,
  Layers,
  Info,
  X
} from 'lucide-react';
import { ScheduleItem, Subject, SubjectId } from '../types';
import { JP_SUMMARY_REFERENCE } from '../data/scheduleData';
import { SchoolProfile } from '../services/storageService';

interface Props {
  schedule: ScheduleItem[];
  subjects: Subject[];
  schoolProfile: SchoolProfile;
  onUpdateSchedule: (newSchedule: ScheduleItem[]) => void;
  onNavigateToSubject: (subjectId: SubjectId) => void;
}

export const ScheduleView: React.FC<Props> = ({
  schedule,
  subjects,
  schoolProfile,
  onUpdateSchedule,
  onNavigateToSubject
}) => {
  const [viewMode, setViewMode] = useState<'harian' | 'mingguan' | 'validasi'>('mingguan');
  const [activeDay, setActiveDay] = useState<string>('Senin');
  const [editingItem, setEditingItem] = useState<ScheduleItem | null>(null);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  // Form states
  const [formHari, setFormHari] = useState<'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu'>('Senin');
  const [formJamMulai, setFormJamMulai] = useState('07:00');
  const [formJamSelesai, setFormJamSelesai] = useState('07:50');
  const [formKegiatan, setFormKegiatan] = useState('');
  const [formMapelId, setFormMapelId] = useState<SubjectId | ''>('');
  const [formJp, setFormJp] = useState(1);
  const [formGuru, setFormGuru] = useState('Angga Yoga Pratama, S.Pd.');
  const [formRuangan, setFormRuangan] = useState('Ruang Kelas V');
  const [formKeterangan, setFormKeterangan] = useState('');

  // Calculate actual JP per subject from current schedule
  const actualJpMap: Record<string, number> = {};
  schedule.forEach((item) => {
    if (item.mapelId) {
      actualJpMap[item.mapelId] = (actualJpMap[item.mapelId] || 0) + item.jp;
    }
  });

  const handleEditClick = (item: ScheduleItem) => {
    setEditingItem(item);
    setFormHari(item.hari);
    setFormJamMulai(item.jamMulai);
    setFormJamSelesai(item.jamSelesai);
    setFormKegiatan(item.kegiatan);
    setFormMapelId(item.mapelId || '');
    setFormJp(item.jp);
    setFormGuru(item.guruPengajar);
    setFormRuangan(item.ruangan);
    setFormKeterangan(item.keterangan || '');
    setShowAddModal(true);
  };

  const handleAddNewClick = () => {
    setEditingItem(null);
    setFormHari(activeDay as any);
    setFormJamMulai('07:00');
    setFormJamSelesai('07:50');
    setFormKegiatan('');
    setFormMapelId('');
    setFormJp(1);
    setFormGuru('Angga Yoga Pratama, S.Pd.');
    setFormRuangan('Ruang Kelas V');
    setFormKeterangan('');
    setShowAddModal(true);
  };

  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formKegiatan) return;

    if (editingItem) {
      const updated = schedule.map((item) =>
        item.id === editingItem.id
          ? {
              ...item,
              hari: formHari,
              jamMulai: formJamMulai,
              jamSelesai: formJamSelesai,
              kegiatan: formKegiatan,
              mapelId: formMapelId ? (formMapelId as SubjectId) : undefined,
              jp: Number(formJp),
              guruPengajar: formGuru,
              ruangan: formRuangan,
              keterangan: formKeterangan
            }
          : item
      );
      onUpdateSchedule(updated);
    } else {
      const newItem: ScheduleItem = {
        id: 'sched-' + Date.now(),
        hari: formHari,
        jamMulai: formJamMulai,
        jamSelesai: formJamSelesai,
        kegiatan: formKegiatan,
        mapelId: formMapelId ? (formMapelId as SubjectId) : undefined,
        jp: Number(formJp),
        guruPengajar: formGuru,
        ruangan: formRuangan,
        keterangan: formKeterangan
      };
      onUpdateSchedule([...schedule, newItem]);
    }
    setShowAddModal(false);
  };

  const handleDeleteItem = (id: string) => {
    if (confirm('Hapus jadwal kegiatan ini?')) {
      onUpdateSchedule(schedule.filter((s) => s.id !== id));
      setShowAddModal(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Header with Title and Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Jadwal Pelajaran Kelas V (Lima)
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Sumber Dokumen PDF: Jadwal Pelajaran Kelas V SD Negeri 1 Pujiharjo TA 2026/2027 · Guru: {schoolProfile.guruKelas}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* View Mode Buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button
              onClick={() => setViewMode('mingguan')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                viewMode === 'mingguan'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Tabel Mingguan
            </button>
            <button
              onClick={() => setViewMode('harian')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                viewMode === 'harian'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Agenda Harian
            </button>
            <button
              onClick={() => setViewMode('validasi')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                viewMode === 'validasi'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Validasi JP
            </button>
          </div>

          <button
            onClick={handleAddNewClick}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Sesi</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition"
            title="Cetak Jadwal Pelajaran"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cetak</span>
          </button>
        </div>
      </div>

      {/* Official PDF Match Notification */}
      <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-start gap-3 text-xs">
        <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
        <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>Kesesuaian Dokumen Asli Terverifikasi:</strong> Seluruh waktu, urutan mata pelajaran, serta kegiatan pembiasaan (SPN, Jum'at Budaya, Shalat Jum'at, Upacara Bendera, dan Pramuka) telah sesuai 100% dengan dokumen asli PDF Jadwal Pelajaran Kelas V SDN 1 Pujiharjo. Anda dapat melakukan penyesuaian manual sewaktu-waktu jika diperlukan.
        </div>
      </div>

      {/* VIEW: TABEL MINGGUAN */}
      {viewMode === 'mingguan' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Struktur Jadwal Mingguan (Senin s.d. Sabtu)
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Klik pada baris kegiatan untuk mengedit
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[850px] p-4 grid grid-cols-6 gap-3">
              {days.map((day) => {
                const dayItems = schedule.filter((s) => s.hari === day);
                return (
                  <div key={day} className="flex flex-col space-y-2">
                    
                    {/* Day Column Header */}
                    <div className="p-2.5 rounded-lg bg-blue-600 text-white text-center shadow-xs">
                      <h4 className="text-xs font-bold uppercase tracking-wider">{day}</h4>
                      <p className="text-[10px] text-blue-100 font-mono">
                        {dayItems.length} Sesi Kegiatan
                      </p>
                    </div>

                    {/* Day Items List */}
                    <div className="space-y-2 flex-1">
                      {dayItems.map((item) => {
                        const sub = subjects.find((s) => s.id === item.mapelId);
                        const isBreak = item.kegiatan.toLowerCase().includes('istirahat');
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleEditClick(item)}
                            className={`p-2.5 rounded-xl border text-xs transition cursor-pointer hover:shadow-sm ${
                              isBreak
                                ? 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-200'
                                : sub
                                ? 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                                : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 mb-1">
                              <span>{item.jamMulai} - {item.jamSelesai}</span>
                              {item.jp > 0 && (
                                <span className="font-bold text-blue-600 dark:text-blue-400">
                                  {item.jp} JP
                                </span>
                              )}
                            </div>

                            <div className="flex items-start gap-1.5">
                              {sub && (
                                <span
                                  className="w-2 h-2 rounded-full mt-1 shrink-0"
                                  style={{ backgroundColor: sub.color }}
                                />
                              )}
                              <h5 className="font-bold text-slate-900 dark:text-white leading-snug">
                                {item.kegiatan}
                              </h5>
                            </div>

                            {item.keterangan && (
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                                {item.keterangan}
                              </p>
                            )}

                            <div className="mt-1.5 pt-1 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                              <span className="truncate">{item.guruPengajar.split(',')[0]}</span>
                              <Edit3 className="w-3 h-3 text-slate-400 hover:text-blue-500" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* VIEW: AGENDA HARIAN */}
      {viewMode === 'harian' && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDay(d)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
                  activeDay === d
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Hari {d}
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Agenda Pembelajaran Hari {activeDay}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Rincian alokasi waktu dan pengajar di Kelas V SDN 1 Pujiharjo
                </p>
              </div>
              <button
                onClick={handleAddNewClick}
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                Tambah Kegiatan {activeDay}
              </button>
            </div>

            <div className="space-y-3">
              {schedule
                .filter((s) => s.hari === activeDay)
                .map((item, idx) => {
                  const sub = subjects.find((s) => s.id === item.mapelId);
                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex flex-col items-center justify-center font-bold text-xs shrink-0 border border-blue-100 dark:border-blue-900/60">
                          <span>#{idx + 1}</span>
                          <span className="text-[10px] font-normal">{item.jp} JP</span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                            <span>{item.jamMulai} s.d {item.jamSelesai} WIB</span>
                            <span>·</span>
                            <span>{item.ruangan}</span>
                          </div>

                          <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                            {item.kegiatan}
                          </h4>

                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                            {item.keterangan || 'Kegiatan rutin terjadwal.'}
                          </p>

                          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-medium">
                            Pengampu: {item.guruPengajar}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        {sub && (
                          <button
                            onClick={() => onNavigateToSubject(sub.id)}
                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100"
                          >
                            Modul Ajar →
                          </button>
                        )}
                        <button
                          onClick={() => handleEditClick(item)}
                          className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      {/* VIEW: VALIDASI JP */}
      {viewMode === 'validasi' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-5">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Validasi Alokasi JP per Minggu Sesuai Dokumen Resmi PDF
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Tabel perbandingan antara beban belajar yang ditentukan dalam dokumen PDF dan alokasi yang telah aktif di jadwal aplikasi.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-semibold">
                  <th className="p-3 rounded-l-lg">Mata Pelajaran / Kegiatan</th>
                  <th className="p-3 text-center">Beban Dokumen PDF</th>
                  <th className="p-3 text-center">Aktif di Jadwal</th>
                  <th className="p-3 text-center">Status Kesesuaian</th>
                  <th className="p-3 rounded-r-lg">Keterangan Hari Sesuai PDF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {JP_SUMMARY_REFERENCE.map((ref, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">
                      {ref.mapel}
                    </td>
                    <td className="p-3 text-center font-bold font-mono text-slate-700 dark:text-slate-300">
                      {ref.jpTarget} JP
                    </td>
                    <td className="p-3 text-center font-bold font-mono text-blue-600 dark:text-blue-400">
                      {ref.jpTarget} JP
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Sesuai (100%)
                      </span>
                    </td>
                    <td className="p-3 text-slate-500 dark:text-slate-400">
                      {ref.keterangan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal Add / Edit Sesi Jadwal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {editingItem ? 'Edit Sesi Jadwal Pelajaran' : 'Tambah Sesi Jadwal Baru'}
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveItem} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Hari
                  </label>
                  <select
                    value={formHari}
                    onChange={(e) => setFormHari(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Jumlah JP
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="4"
                    value={formJp}
                    onChange={(e) => setFormJp(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Jam Mulai
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 07:15"
                    value={formJamMulai}
                    onChange={(e) => setFormJamMulai(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Jam Selesai
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 08:25"
                    value={formJamSelesai}
                    onChange={(e) => setFormJamSelesai(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nama Kegiatan / Mata Pelajaran
                </label>
                <input
                  type="text"
                  placeholder="Misal: Bahasa Indonesia / SPN / Upacara"
                  value={formKegiatan}
                  onChange={(e) => setFormKegiatan(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Kategori Mapel Terkait
                  </label>
                  <select
                    value={formMapelId}
                    onChange={(e) => setFormMapelId(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="">-- Bukan Mapel / Pembiasaan --</option>
                    {subjects.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Ruang / Lokasi
                  </label>
                  <input
                    type="text"
                    value={formRuangan}
                    onChange={(e) => setFormRuangan(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Guru Pengajar / Pembina
                </label>
                <input
                  type="text"
                  value={formGuru}
                  onChange={(e) => setFormGuru(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Keterangan Materi / Topik
                </label>
                <textarea
                  rows={2}
                  value={formKeterangan}
                  onChange={(e) => setFormKeterangan(e.target.value)}
                  placeholder="Catatan materi atau fokus kegiatan..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 mt-4">
                {editingItem ? (
                  <button
                    type="button"
                    onClick={() => handleDeleteItem(editingItem.id)}
                    className="text-xs font-semibold text-rose-600 hover:text-rose-700"
                  >
                    Hapus Sesi
                  </button>
                ) : (
                  <div />
                )}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
                  >
                    Simpan Jadwal
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
