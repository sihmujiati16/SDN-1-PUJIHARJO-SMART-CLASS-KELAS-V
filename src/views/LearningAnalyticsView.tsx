import React, { useState } from 'react';
import {
  TrendingUp,
  BarChart3,
  Award,
  AlertCircle,
  Users,
  CheckCircle,
  HelpCircle,
  Layers,
  ArrowUpRight,
  Printer
} from 'lucide-react';
import { Student, Subject, KKTPItem, AsesmenItem, StudentScore } from '../types';

interface Props {
  students: Student[];
  subjects: Subject[];
  kktpList: KKTPItem[];
  asesmenList: AsesmenItem[];
  studentScores: Record<string, StudentScore[]>;
}

export const LearningAnalyticsView: React.FC<Props> = ({
  students,
  subjects,
  kktpList,
  asesmenList,
  studentScores
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');

  const totalStudents = students.length;

  // Aggregate student learning needs across all 25 students
  let totalPahamUtuh = 0;
  let totalButuhPendampingan = 0;
  let totalPengayaan = 0;

  students.forEach((s) => {
    totalPahamUtuh += s.profilPencapaian.pahamUtuh;
    totalButuhPendampingan += s.profilPencapaian.butuhPendampingan;
    totalPengayaan += s.profilPencapaian.pengayaan;
  });

  const studentsNeedAssistance = students.filter(
    (s) => s.profilPencapaian.butuhPendampingan >= 2
  );
  const studentsNeedEnrichment = students.filter(
    (s) => s.profilPencapaian.pengayaan >= 3
  );

  // Subject completion rate mock-data grounded in real curriculum
  const subjectMasteryData = subjects.map((sub, idx) => {
    const baseScore = 80 + (idx % 6) * 3;
    return {
      id: sub.id,
      name: sub.name,
      color: sub.color,
      masteryRate: Math.min(96, baseScore),
      tpCount: 4,
      tpCompleted: idx % 2 === 0 ? 3 : 2
    };
  });

  // Diagnostic vs Summative comparison data
  const comparisonData = [
    { mapel: 'Bahasa Indonesia', awal: 74, akhir: 88, kenaikan: '+14%' },
    { mapel: 'Matematika', awal: 68, akhir: 83, kenaikan: '+15%' },
    { mapel: 'IPAS (Sains & Sosial)', awal: 72, akhir: 89, kenaikan: '+17%' },
    { mapel: 'Pendidikan Pancasila', awal: 80, akhir: 92, kenaikan: '+12%' },
    { mapel: 'Bahasa Inggris', awal: 70, akhir: 84, kenaikan: '+14%' },
    { mapel: 'Bahasa Jawa', awal: 78, akhir: 88, kenaikan: '+10%' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Analisis Perkembangan Pembelajaran & Ketercapaian TP
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Visualisasi Data Ketercapaian Kompetensi, Tren Diagnostik vs Sumatif, dan Pemetaan Kebutuhan Belajar 25 Siswa
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-xl transition"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Cetak Laporan Analitik</span>
        </button>
      </div>

      {/* Top 4 Stat Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">Rata-rata Ketercapaian TP</span>
          <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">86.8%</p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Mencapai Kriteria KKTP Kelas V
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">Pertumbuhan Nilai Rata-rata</span>
          <p className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">+14.2%</p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Dibandingkan Asesmen Awal
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">Siswa Siap Pengayaan</span>
          <p className="mt-1 text-2xl font-bold text-purple-600 dark:text-purple-400">
            {studentsNeedEnrichment.length} <span className="text-xs font-normal text-slate-400">/ 25 Siswa</span>
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Diberdayakan sebagai Tutor Sebaya
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">Siswa Butuh Pendampingan</span>
          <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">
            {studentsNeedAssistance.length} <span className="text-xs font-normal text-slate-400">/ 25 Siswa</span>
          </p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Fokus Scaffolding Media Konkret
          </p>
        </div>

      </div>

      {/* Grid: Ketercapaian TP per Mapel & Perbandingan Awal vs Akhir */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Ketercapaian TP Per Mata Pelajaran */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Tingkat Ketercapaian Tujuan Pembelajaran per Mapel
            </h3>
            <span className="text-xs text-slate-500">Semester 1</span>
          </div>

          <div className="space-y-3">
            {subjectMasteryData.map((sub) => (
              <div key={sub.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {sub.name}
                  </span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                    {sub.masteryRate}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${sub.masteryRate}%`,
                      backgroundColor: sub.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perbandingan Asesmen Awal vs Asesmen Akhir */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Pertumbuhan Hasil Belajar: Asesmen Awal vs Akhir
            </h3>
            <span className="text-xs text-emerald-600 font-bold">Tren Positif</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase font-semibold">
                  <th className="p-2.5 rounded-l-lg">Mata Pelajaran</th>
                  <th className="p-2.5 text-center">Asesmen Awal</th>
                  <th className="p-2.5 text-center">Asesmen Akhir</th>
                  <th className="p-2.5 text-center rounded-r-lg">Kenaikan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {comparisonData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-2.5 font-semibold text-slate-900 dark:text-white">
                      {item.mapel}
                    </td>
                    <td className="p-2.5 text-center font-mono text-slate-500">
                      {item.awal}
                    </td>
                    <td className="p-2.5 text-center font-mono font-bold text-slate-900 dark:text-white">
                      {item.akhir}
                    </td>
                    <td className="p-2.5 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {item.kenaikan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Pemetaan Siswa: Butuh Pendampingan vs Pengayaan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        
        {/* Siswa Butuh Pendampingan */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
            <AlertCircle className="w-4 h-4" />
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              Siswa yang Membutuhkan Pendampingan Belajar Khusus ({studentsNeedAssistance.length} Anak)
            </h4>
          </div>
          <p className="text-slate-500 leading-relaxed">
            Peserta didik ini memerlukan pendampingan remediasi terarah pada operasi hitung pecahan dan membaca teks panjang:
          </p>

          <div className="space-y-2">
            {studentsNeedAssistance.map((std) => (
              <div
                key={std.id}
                className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex items-center justify-between"
              >
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">
                    {std.nama}
                  </strong>
                  <span className="text-[11px] text-slate-500">
                    NIS: {std.nis || 'Perlu Verifikasi'} · {std.catatanPerkembangan.slice(0, 48)}...
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold shrink-0">
                  Perlu Scaffolding
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Siswa Siap Pengayaan */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
            <Award className="w-4 h-4" />
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              Siswa Siap Program Pengayaan & Tutor Sebaya ({studentsNeedEnrichment.length} Anak)
            </h4>
          </div>
          <p className="text-slate-500 leading-relaxed">
            Peserta didik dengan penguasaan kompetensi melampaui rata-rata, siap memandu kelompok inkuiri:
          </p>

          <div className="space-y-2">
            {studentsNeedEnrichment.map((std) => (
              <div
                key={std.id}
                className="p-3 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 flex items-center justify-between"
              >
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">
                    {std.nama}
                  </strong>
                  <span className="text-[11px] text-slate-500">
                    NIS: {std.nis} · XP: {std.gamifikasi.xp} Poin · Level {std.gamifikasi.level}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold shrink-0">
                  Tutor Sebaya
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
