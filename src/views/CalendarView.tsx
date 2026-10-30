import React, { useState } from 'react';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Plus,
  Printer,
  Calendar,
  Sparkles,
  Info,
  CheckCircle2,
  X,
  Edit3
} from 'lucide-react';
import { AcademicCalendarEvent } from '../types';
import { SchoolProfile } from '../services/storageService';

interface Props {
  calendarEvents: AcademicCalendarEvent[];
  schoolProfile: SchoolProfile;
  onUpdateEvents: (events: AcademicCalendarEvent[]) => void;
}

export const CalendarView: React.FC<Props> = ({
  calendarEvents,
  schoolProfile,
  onUpdateEvents
}) => {
  const [selectedSemester, setSelectedSemester] = useState<1 | 2 | 0>(0); // 0 = all
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [editingEvent, setEditingEvent] = useState<AcademicCalendarEvent | null>(null);

  // Form states
  const [formJudul, setFormJudul] = useState('');
  const [formTglMulai, setFormTglMulai] = useState('2026-08-01');
  const [formTglSelesai, setFormTglSelesai] = useState('2026-08-01');
  const [formKategori, setFormKategori] = useState<AcademicCalendarEvent['kategori']>('kegiatan_sekolah');
  const [formSemester, setFormSemester] = useState<1 | 2>(1);
  const [formDeskripsi, setFormDeskripsi] = useState('');

  const categories = [
    { id: 'all', label: 'Semua Kategori', color: 'bg-slate-500' },
    { id: 'efektif', label: 'Hari Efektif Belajar', color: 'bg-emerald-500' },
    { id: 'asesmen', label: 'Asesmen (STS & SAS/SAT)', color: 'bg-blue-500' },
    { id: 'proyek', label: 'Proyek Pembelajaran', color: 'bg-purple-500' },
    { id: 'rapor', label: 'Penyerahan Rapor', color: 'bg-amber-500' },
    { id: 'libur_nasional', label: 'Libur Nasional & Agama', color: 'bg-rose-500' },
    { id: 'libur_semester', label: 'Libur Semester / Kenaikan', color: 'bg-red-700' },
    { id: 'kegiatan_sekolah', label: 'Kegiatan Sekolah', color: 'bg-cyan-500' }
  ];

  const filteredEvents = calendarEvents.filter((ev) => {
    const matchSem = selectedSemester === 0 || ev.semester === selectedSemester;
    const matchCat = selectedCategory === 'all' || ev.kategori === selectedCategory;
    return matchSem && matchCat;
  });

  const handleEditClick = (ev: AcademicCalendarEvent) => {
    setEditingEvent(ev);
    setFormJudul(ev.judul);
    setFormTglMulai(ev.tanggalMulai);
    setFormTglSelesai(ev.tanggalSelesai);
    setFormKategori(ev.kategori);
    setFormSemester(ev.semester);
    setFormDeskripsi(ev.deskripsi);
    setShowAddModal(true);
  };

  const handleAddNew = () => {
    setEditingEvent(null);
    setFormJudul('');
    setFormTglMulai('2026-08-15');
    setFormTglSelesai('2026-08-15');
    setFormKategori('kegiatan_sekolah');
    setFormSemester(1);
    setFormDeskripsi('');
    setShowAddModal(true);
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formJudul) return;

    if (editingEvent) {
      const updated = calendarEvents.map((ev) =>
        ev.id === editingEvent.id
          ? {
              ...ev,
              judul: formJudul,
              tanggalMulai: formTglMulai,
              tanggalSelesai: formTglSelesai,
              kategori: formKategori,
              semester: formSemester,
              deskripsi: formDeskripsi
            }
          : ev
      );
      onUpdateEvents(updated);
    } else {
      const newEv: AcademicCalendarEvent = {
        id: 'cal-' + Date.now(),
        judul: formJudul,
        tanggalMulai: formTglMulai,
        tanggalSelesai: formTglSelesai,
        kategori: formKategori,
        semester: formSemester,
        deskripsi: formDeskripsi,
        dapatDiedit: true
      };
      onUpdateEvents([...calendarEvents, newEv]);
    }
    setShowAddModal(false);
  };

  const handleDeleteEvent = (id: string) => {
    if (confirm('Hapus agenda ini dari kalender pendidikan?')) {
      onUpdateEvents(calendarEvents.filter((e) => e.id !== id));
      setShowAddModal(false);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Kalender Pendidikan TA 2026/2027
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Panduan Hari Efektif, Asesmen & Libur Resmi Jawa Timur / Kabupaten Malang · SD Negeri 1 Pujiharjo
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Semester Selector */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setSelectedSemester(0)}
              className={`px-3 py-1.5 rounded-md font-medium transition ${
                selectedSemester === 0
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Semua (1 Tahun)
            </button>
            <button
              onClick={() => setSelectedSemester(1)}
              className={`px-3 py-1.5 rounded-md font-medium transition ${
                selectedSemester === 1
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Semester Ganjil
            </button>
            <button
              onClick={() => setSelectedSemester(2)}
              className={`px-3 py-1.5 rounded-md font-medium transition ${
                selectedSemester === 2
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Semester Genap
            </button>
          </div>

          <button
            onClick={handleAddNew}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Agenda</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak</span>
          </button>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded-xl font-medium whitespace-nowrap transition ${
              selectedCategory === cat.id
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${cat.color}`} />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Overview Cards by Semester */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/40 dark:from-slate-900 dark:to-slate-800/60 border border-blue-200 dark:border-blue-900/50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase">
              Semester Ganjil 2026/2027
            </span>
            <span className="text-[11px] font-mono text-slate-500">Juli - Des 2026</span>
          </div>
          <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
            108 Hari Efektif Sekolah
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            STS: 21-26 Sept 2026 · SAS: 30 Nov-5 Des 2026 · Pembagian Rapor: 18 Des 2026
          </p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/40 dark:from-slate-900 dark:to-slate-800/60 border border-emerald-200 dark:border-emerald-900/50">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase">
              Semester Genap 2026/2027
            </span>
            <span className="text-[11px] font-mono text-slate-500">Jan - Juni 2027</span>
          </div>
          <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
            112 Hari Efektif Sekolah
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            STS: 8-13 Maret 2027 · SAT: 24-29 Mei 2027 · Rapor Kenaikan: 18 Juni 2027
          </p>
        </div>

      </div>

      {/* Events List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Daftar Lengkap Agenda Pendidikan (Tercatat {filteredEvents.length} Agenda)
          </h3>
          <span className="text-xs text-slate-500">
            Dapat diedit dan ditambah sesuai keputusan musyawarah sekolah
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {filteredEvents.map((ev) => {
            const getCatBadge = (cat: string) => {
              switch (cat) {
                case 'efektif':
                  return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300';
                case 'asesmen':
                  return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300';
                case 'proyek':
                  return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300';
                case 'rapor':
                  return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300';
                case 'libur_nasional':
                  return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300';
                case 'libur_semester':
                  return 'bg-red-100 text-red-800 border-red-300 dark:bg-red-950/80 dark:text-red-200 font-bold';
                default:
                  return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300';
              }
            };

            return (
              <div
                key={ev.id}
                className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-4">
                  <div className="w-24 px-2 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-center shrink-0 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">
                      {ev.tanggalMulai.split('-')[1] === '07' ? 'JULI' :
                       ev.tanggalMulai.split('-')[1] === '08' ? 'AGUST' :
                       ev.tanggalMulai.split('-')[1] === '09' ? 'SEPT' :
                       ev.tanggalMulai.split('-')[1] === '10' ? 'OKT' :
                       ev.tanggalMulai.split('-')[1] === '11' ? 'NOV' :
                       ev.tanggalMulai.split('-')[1] === '12' ? 'DES' :
                       ev.tanggalMulai.split('-')[1] === '01' ? 'JAN' :
                       ev.tanggalMulai.split('-')[1] === '02' ? 'FEB' :
                       ev.tanggalMulai.split('-')[1] === '03' ? 'MAR' :
                       ev.tanggalMulai.split('-')[1] === '04' ? 'APR' :
                       ev.tanggalMulai.split('-')[1] === '05' ? 'MEI' : 'JUNI'}
                    </span>
                    <span className="text-base font-extrabold font-mono text-slate-900 dark:text-white leading-none">
                      {ev.tanggalMulai.split('-')[2]}
                    </span>
                    <span className="text-[9px] text-slate-400 block mt-0.5">
                      {ev.tanggalMulai.split('-')[0]}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${getCatBadge(ev.kategori)}`}>
                        {ev.kategori.replace('_', ' ').toUpperCase()}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Semester {ev.semester}
                      </span>
                      {ev.tanggalMulai !== ev.tanggalSelesai && (
                        <span className="text-xs text-slate-500 font-mono">
                          s.d. {ev.tanggalSelesai}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      {ev.judul}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {ev.deskripsi}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => handleEditClick(ev)}
                    className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    title="Edit Agenda"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Add / Edit Event */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {editingEvent ? 'Edit Agenda Kalender' : 'Tambah Agenda Kalender'}
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEvent} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nama Agenda / Kegiatan
                </label>
                <input
                  type="text"
                  placeholder="Misal: Sumatif Tengah Semester Ganjil"
                  value={formJudul}
                  onChange={(e) => setFormJudul(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Tanggal Mulai
                  </label>
                  <input
                    type="date"
                    value={formTglMulai}
                    onChange={(e) => setFormTglMulai(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Tanggal Selesai
                  </label>
                  <input
                    type="date"
                    value={formTglSelesai}
                    onChange={(e) => setFormTglSelesai(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Kategori Agenda
                  </label>
                  <select
                    value={formKategori}
                    onChange={(e) => setFormKategori(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="efektif">Hari Efektif Belajar</option>
                    <option value="asesmen">Asesmen (STS/SAS/SAT)</option>
                    <option value="proyek">Proyek Pembelajaran</option>
                    <option value="rapor">Penyerahan Rapor</option>
                    <option value="libur_nasional">Libur Nasional</option>
                    <option value="libur_semester">Libur Semester</option>
                    <option value="kegiatan_sekolah">Kegiatan Sekolah</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Semester
                  </label>
                  <select
                    value={formSemester}
                    onChange={(e) => setFormSemester(Number(e.target.value) as 1 | 2)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value={1}>Semester 1 (Ganjil)</option>
                    <option value={2}>Semester 2 (Genap)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Deskripsi & Rincian Kegiatan
                </label>
                <textarea
                  rows={3}
                  value={formDeskripsi}
                  onChange={(e) => setFormDeskripsi(e.target.value)}
                  placeholder="Catatan pelaksanaan atau sasaran peserta didik..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 mt-4">
                {editingEvent ? (
                  <button
                    type="button"
                    onClick={() => handleDeleteEvent(editingEvent.id)}
                    className="text-xs font-semibold text-rose-600 hover:text-rose-700"
                  >
                    Hapus
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
                    className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
                  >
                    Simpan Agenda
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
