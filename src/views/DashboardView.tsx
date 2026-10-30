import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileText,
  Compass,
  Award,
  ChevronRight,
  TrendingUp,
  Heart,
  Share2,
  Printer
} from 'lucide-react';
import { Subject, SubjectId, ScheduleItem, AcademicCalendarEvent, Student } from '../types';
import { SchoolProfile } from '../services/storageService';
import { SubjectIcon } from '../components/SubjectIcon';

interface Props {
  schoolProfile: SchoolProfile;
  subjects: Subject[];
  schedule: ScheduleItem[];
  calendarEvents: AcademicCalendarEvent[];
  students: Student[];
  onNavigate: (view: string, subjectId?: SubjectId) => void;
  onOpenDiagnosticModal?: () => void;
}

export const DashboardView: React.FC<Props> = ({
  schoolProfile,
  subjects,
  schedule,
  calendarEvents,
  students,
  onNavigate
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('Senin');

  // Days list
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  // Filter schedule by selected day
  const todaysSchedule = schedule.filter((s) => s.hari === selectedDay);

  // Upcoming 3 calendar events
  const upcomingEvents = calendarEvents.slice(0, 4);

  // Statistics
  const totalStudents = students.length;
  const avgAttendance = Math.round(
    students.reduce((acc, s) => {
      const totalDays = s.kehadiran.hadir + s.kehadiran.sakit + s.kehadiran.izin + s.kehadiran.alpa;
      return acc + (totalDays > 0 ? (s.kehadiran.hadir / totalDays) * 100 : 100);
    }, 0) / (totalStudents || 1)
  );

  return (
    <div className="space-y-6">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 text-white p-6 sm:p-8 shadow-lg">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-blue-100 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Pusat Administrasi & Pembelajaran Digital Terintegrasi</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            PUJIHARJO SMART CLASS – KELAS V
          </h1>
          <p className="mt-1 text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
            "{schoolProfile.tagline}"
          </p>

          <div className="mt-4 pt-4 border-t border-white/20 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-blue-100">
            <div>
              <span className="opacity-80">Sekolah:</span>{' '}
              <strong className="text-white font-semibold">{schoolProfile.namaSekolah}</strong>
            </div>
            <div>
              <span className="opacity-80">Lokasi:</span>{' '}
              <strong className="text-white font-semibold">Kec. Tirtoyudo, Kab. Malang</strong>
            </div>
            <div>
              <span className="opacity-80">Guru Kelas:</span>{' '}
              <strong className="text-white font-semibold">{schoolProfile.guruKelas}</strong>
            </div>
            <div>
              <span className="opacity-80">Tahun Ajaran:</span>{' '}
              <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-900 font-bold">
                {schoolProfile.tahunAjaran}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute right-24 top-6 w-36 h-36 rounded-full bg-sky-400/20 blur-xl pointer-events-none" />
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div
          onClick={() => onNavigate('mapel')}
          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-400 transition cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Ruang Mapel</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">10</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Mata Pelajaran Lengkap Fase C
          </p>
        </div>

        <div
          onClick={() => onNavigate('siswa')}
          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-400 transition cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Peserta Didik</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{totalStudents}</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Siswa Aktif Kelas V (100% Terdata)
          </p>
        </div>

        <div
          onClick={() => onNavigate('jadwal')}
          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 transition cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Jadwal Pelajaran</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">30 JP</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Sesuai Dokumen Resmi PDF
          </p>
        </div>

        <div
          onClick={() => onNavigate('kktp')}
          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-amber-400 transition cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Kehadiran Rata-rata</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{avgAttendance}%</p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Tingkat Presensi Siswa Sangat Baik
          </p>
        </div>

      </div>

      {/* Grid: Jadwal Hari Ini (Live View) & Agenda Sekolah */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (2 span): Jadwal Pelajaran Interaktif */}
        <div className="lg:col-span-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Jadwal Pelajaran Kelas V (Sesuai Dokumen PDF)
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                SD Negeri 1 Pujiharjo · Tahun Ajaran 2026/2027
              </p>
            </div>

            {/* Day Selector Buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-x-auto">
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDay(d)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedDay === d
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule List */}
          <div className="space-y-2.5">
            {todaysSchedule.map((item, idx) => {
              const subObj = subjects.find((s) => s.id === item.mapelId);
              return (
                <div
                  key={item.id}
                  className="flex items-start sm:items-center justify-between p-3 rounded-lg border border-slate-100 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 shrink-0">
                      {item.jamMulai} - {item.jamSelesai}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        {subObj && (
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: subObj.color }}
                          />
                        )}
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {item.kegiatan}
                        </h4>
                        {item.jp > 0 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-medium">
                            {item.jp} JP
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.keterangan || item.ruangan} · <span className="italic">{item.guruPengajar}</span>
                      </p>
                    </div>
                  </div>

                  {subObj && (
                    <button
                      onClick={() => onNavigate('mapel', subObj.id)}
                      className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline shrink-0 hidden sm:inline"
                    >
                      Buka Mapel →
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Menampilkan {todaysSchedule.length} sesi kegiatan hari {selectedDay}
            </span>
            <button
              onClick={() => onNavigate('jadwal')}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1"
            >
              Lihat Tabel Mingguan Lengkap
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Agenda & Pengingat Administrasi */}
        <div className="space-y-6">
          
          {/* Agenda Sekolah Terdekat */}
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Agenda Kalender Pendidikan
                </h3>
              </div>
              <button
                onClick={() => onNavigate('kalender')}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                Semua
              </button>
            </div>

            <div className="space-y-3">
              {upcomingEvents.map((ev) => (
                <div
                  key={ev.id}
                  className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60"
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {ev.tanggalMulai}
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-medium bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      {ev.kategori.replace('_', ' ')}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                    {ev.judul}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {ev.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pengingat Administrasi Guru */}
          <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-slate-900 dark:to-slate-900 border border-amber-200 dark:border-amber-900/40 p-4">
            <div className="flex items-center gap-2 mb-2 text-amber-800 dark:text-amber-400">
              <AlertCircle className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Pengingat Administrasi Guru
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>Pengisian Jurnal Harian Mengajar minggu ini sudah tersedia.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span>Asesmen diagnostik IPAS Bab 1 telah terisi untuk 24 siswa.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                <span>Persiapan Jum'at Budaya pementasan Tembang Macapat minggu depan.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Deep Learning 3 Pillars & 8 Profil Lulusan */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pendekatan Pembelajaran Mendalam (Deep Learning)</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Tiga Prinsip Pokok & Delapan Dimensi Profil Lulusan
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Diintegrasikan dalam setiap modul ajar, asesmen, dan kegiatan kontekstual di SD Negeri 1 Pujiharjo.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Pengalaman Belajar:</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              1. Memahami
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              2. Mengaplikasi
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              3. Merefleksi
            </span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          
          <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
            <h4 className="text-sm font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
              Berkesadaran (Mindful)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Membangun kehadiran penuh siswa sebelum belajar (teknik pernapasan STOP, doa khusyuk, dan fokus indrawi pada tujuan belajar).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
            <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">2</span>
              Bermakna (Meaningful)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Mengaitkan konsep abstrak kurikulum dengan realitas kehidupan warga Pujiharjo: kebun kopi Tirtoyudo, pantai Sipelot, dan budaya lokal.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40">
            <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs">3</span>
              Menggembirakan (Joyful)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              Pembelajaran eksploratif berbasis game edukatif, eksperimen langsung, karya seni, gerak aktif, dan suasana kelas yang hangat saling menghargai.
            </p>
          </div>

        </div>

        {/* 8 Dimensi Badges */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2.5">
            8 Dimensi Profil Lulusan yang Ditumbuhkan:
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {[
              '1. Keimanan dan Ketakwaan Terhadap Tuhan YME',
              '2. Kewargaan',
              '3. Penalaran Kritis',
              '4. Kreativitas',
              '5. Kolaborasi',
              '6. Kemandirian',
              '7. Kesehatan',
              '8. Komunikasi'
            ].map((dim, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
              >
                {dim}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 10 Ruang Mata Pelajaran Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              10 Ruang Mata Pelajaran Kelas V (Fase C)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Setiap mapel memuat CP, TP, ATP, Modul Ajar, Proyek, Buku SIBI, KKTP, Asesmen & Refleksi
            </p>
          </div>
          <button
            onClick={() => onNavigate('mapel')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            Buka Semua Mapel
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
          {subjects.map((sub) => (
            <div
              key={sub.id}
              onClick={() => onNavigate('mapel', sub.id)}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: sub.bgLight, color: sub.color }}
                  >
                    <SubjectIcon name={sub.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
                    {sub.jpPerWeek} JP/mgg
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {sub.name}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {sub.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-mono">{sub.code}</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-0.5">
                  Masuk <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
