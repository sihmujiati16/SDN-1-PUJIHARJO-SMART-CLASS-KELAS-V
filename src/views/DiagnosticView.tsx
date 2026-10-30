import React, { useState } from 'react';
import {
  FileQuestion,
  Sparkles,
  Users,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Play,
  Printer,
  Plus,
  TrendingUp,
  BrainCircuit,
  Filter
} from 'lucide-react';
import { AsesmenItem, StudentScore, Student, Subject, SubjectId } from '../types';

interface Props {
  asesmenList: AsesmenItem[];
  studentScores: Record<string, StudentScore[]>;
  students: Student[];
  subjects: Subject[];
  onOpenQuiz: (item: AsesmenItem) => void;
  onNavigateToSubject: (subjectId: SubjectId) => void;
}

export const DiagnosticView: React.FC<Props> = ({
  asesmenList,
  studentScores,
  students,
  subjects,
  onOpenQuiz,
  onNavigateToSubject
}) => {
  // Only diagnostic assessments
  const diagnostics = asesmenList.filter((a) => a.jenis === 'diagnostik');
  const [selectedAsmId, setSelectedAsmId] = useState<string>(
    diagnostics[0]?.id || ''
  );

  const activeAsm = diagnostics.find((d) => d.id === selectedAsmId) || diagnostics[0];
  const scores = activeAsm ? studentScores[activeAsm.id] || [] : [];

  // Analytics calculation
  const totalStudents = scores.length || students.length;
  const melampauiCount = scores.filter((s) => s.kategori === 'Melampaui').length;
  const mencapaiCount = scores.filter((s) => s.kategori === 'Mencapai').length;
  const mulaiCount = scores.filter((s) => s.kategori === 'Mulai Mencapai').length;
  const belumCount = scores.filter((s) => s.kategori === 'Belum Mencapai').length;

  const pahamUtuhCount = melampauiCount + mencapaiCount;
  const pendampinganCount = mulaiCount + belumCount;
  const pengayaanCount = melampauiCount;

  // List of misconceptions detected
  const misconceptions = scores.filter((s) => s.miskonsepsiTerdeteksi);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <FileQuestion className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Asesmen Awal / Diagnostik Kelas V
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Pemetaan Kesiapan Belajar, Analisis Kebutuhan, Deteksi Miskonsepsi, dan Rekomendasi Diferensiasi
          </p>
        </div>

        <div className="flex items-center gap-2">
          {activeAsm && (
            <button
              onClick={() => onOpenQuiz(activeAsm)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Simulasi Kuis / Input Nilai</span>
            </button>
          )}

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-xl transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak Hasil</span>
          </button>
        </div>
      </div>

      {/* Select Assessment Dropdown */}
      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-2 rounded-xl text-xs overflow-x-auto">
        <span className="font-semibold text-slate-500 pl-2">Pilih Asesmen Diagnostik:</span>
        {diagnostics.map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedAsmId(d.id)}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              selectedAsmId === d.id
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {d.judul.split(':')[0]} ({subjects.find((s) => s.id === d.subjectId)?.name})
          </button>
        ))}
      </div>

      {activeAsm && (
        <>
          {/* Diagnostic Analytics Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-xs text-slate-500">Paham Utuh (Mandiri)</span>
              <p className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {pahamUtuhCount} <span className="text-xs font-normal text-slate-400">/ {totalStudents} Siswa</span>
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Telah menguasai konsep dasar dengan sangat baik.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-xs text-slate-500">Butuh Pendampingan Khusus</span>
              <p className="mt-1 text-2xl font-bold text-rose-600 dark:text-rose-400">
                {pendampinganCount} <span className="text-xs font-normal text-slate-400">/ {totalStudents} Siswa</span>
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Memerlukan bimbingan media konkret & scaffolding.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-xs text-slate-500">Kandidat Pengayaan Cepat</span>
              <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
                {pengayaanCount} <span className="text-xs font-normal text-slate-400">/ {totalStudents} Siswa</span>
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Siap memandu sebagai tutor sebaya dan proyek lanjutan.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-xs text-slate-500">Miskonsepsi Terdeteksi</span>
              <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">
                {misconceptions.length} <span className="text-xs font-normal text-slate-400">Kasus</span>
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Pola kekeliruan pemahaman konsep telah teridentifikasi.
              </p>
            </div>

          </div>

          {/* Visual Distribution Bar */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900 dark:text-white">
                Distribusi Kategori Kesiapan Belajar Siswa
              </span>
              <span className="text-slate-500 font-mono">
                Total {totalStudents} Peserta Didik
              </span>
            </div>

            <div className="h-5 rounded-full overflow-hidden flex bg-slate-100 dark:bg-slate-800">
              <div
                style={{ width: `${(melampauiCount / (totalStudents || 1)) * 100}%` }}
                className="bg-emerald-500 h-full"
                title={`Melampaui: ${melampauiCount} siswa`}
              />
              <div
                style={{ width: `${(mencapaiCount / (totalStudents || 1)) * 100}%` }}
                className="bg-blue-500 h-full"
                title={`Mencapai: ${mencapaiCount} siswa`}
              />
              <div
                style={{ width: `${(mulaiCount / (totalStudents || 1)) * 100}%` }}
                className="bg-amber-500 h-full"
                title={`Mulai Mencapai: ${mulaiCount} siswa`}
              />
              <div
                style={{ width: `${(belumCount / (totalStudents || 1)) * 100}%` }}
                className="bg-rose-500 h-full"
                title={`Belum Mencapai: ${belumCount} siswa`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500" />
                <span className="text-slate-600 dark:text-slate-400">Melampaui ({melampauiCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-500" />
                <span className="text-slate-600 dark:text-slate-400">Mencapai ({mencapaiCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-500" />
                <span className="text-slate-600 dark:text-slate-400">Mulai Mencapai ({mulaiCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-rose-500" />
                <span className="text-slate-600 dark:text-slate-400">Belum Mencapai ({belumCount})</span>
              </div>
            </div>
          </div>

          {/* Detected Misconceptions & Intervention Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <AlertCircle className="w-4 h-4" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Miskonsepsi Siswa yang Ditemukan
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Pola kesalahpahaman konsep yang terdeteksi dari pengerjaan soal diagnostik:
              </p>

              <div className="space-y-2">
                {misconceptions.length > 0 ? (
                  misconceptions.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs"
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <strong className="text-slate-900 dark:text-white">{m.studentName}</strong>
                        <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300">
                          Skor {m.score}
                        </span>
                      </div>
                      <p className="text-amber-950 dark:text-amber-200">
                        {m.miskonsepsiTerdeteksi}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 italic">
                    Belum ada miskonsepsi kritis yang terdeteksi.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <BrainCircuit className="w-4 h-4" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Rekomendasi Tindak Lanjut Guru (Diferensiasi)
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Langkah pedagogis konkret untuk sesi pembelajaran berikutnya:
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                  <strong className="text-rose-600 dark:text-rose-400 block mb-1">
                    1. Kelompok Butuh Pendampingan ({pendampinganCount} Siswa):
                  </strong>
                  <p className="leading-relaxed">
                    Diberikan manipulasi langsung benda nyata (senter, pensil dalam air gelas bening) serta bimbingan perancah bertahap di meja guru.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                  <strong className="text-blue-600 dark:text-blue-400 block mb-1">
                    2. Kelompok Reguler ({mencapaiCount} Siswa):
                  </strong>
                  <p className="leading-relaxed">
                    Mengerjakan lembar eksplorasi inkuiri sains terpadu dalam kelompok heterogen 4-5 siswa.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                  <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">
                    3. Kelompok Pengayaan ({pengayaanCount} Siswa):
                  </strong>
                  <p className="leading-relaxed">
                    Diberikan tantangan membuat model periskop lipat ganda atau kamera lubang jarum dan memandu teman kelompok sebagai tutor sebaya.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Student Scores Roster Table */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Tabel Rekap Nilai Asesmen Diagnostik Siswa Kelas V
              </h3>
              <span className="text-xs text-slate-500">
                Data terhubung otomatis dengan KKTP
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-semibold">
                    <th className="p-3 w-12 text-center">No</th>
                    <th className="p-3">Nama Siswa</th>
                    <th className="p-3 text-center">Nilai Asesmen</th>
                    <th className="p-3 text-center">Kategori KKTP</th>
                    <th className="p-3">Catatan / Miskonsepsi</th>
                    <th className="p-3">Tindak Lanjut Rekomendasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {scores.map((sc, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3 text-center font-mono font-medium text-slate-400">
                        {idx + 1}
                      </td>
                      <td className="p-3 font-semibold text-slate-900 dark:text-white">
                        {sc.studentName}
                      </td>
                      <td className="p-3 text-center font-bold font-mono text-sm">
                        <span
                          className={`px-2.5 py-0.5 rounded-full ${
                            sc.score >= 90
                              ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60'
                              : sc.score >= 75
                              ? 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60'
                              : sc.score >= 60
                              ? 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60'
                              : 'text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60'
                          }`}
                        >
                          {sc.score}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                            sc.kategori === 'Melampaui'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : sc.kategori === 'Mencapai'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                              : sc.kategori === 'Mulai Mencapai'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          }`}
                        >
                          {sc.kategori}
                        </span>
                      </td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">
                        {sc.miskonsepsiTerdeteksi ? (
                          <span className="text-amber-600 dark:text-amber-400 font-medium">
                            ⚠ {sc.miskonsepsiTerdeteksi}
                          </span>
                        ) : (
                          <span className="text-slate-400 italic">Konsep dipahami baik</span>
                        )}
                      </td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">
                        {sc.tindakLanjut}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

    </div>
  );
};
