import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { AsesmenItem, StudentScore } from '../types';

interface Props {
  item: AsesmenItem;
  studentName?: string;
  onClose: () => void;
  onSaveResult?: (score: StudentScore) => void;
}

export const DiagnosticQuizModal: React.FC<Props> = ({
  item,
  studentName = 'Siswa Kelas V',
  onClose,
  onSaveResult
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentSoal = item.soalList[currentIdx];
  const totalSoal = item.soalList.length;

  const handleSelectOption = (option: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentSoal.id]: option
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    item.soalList.forEach((q) => {
      const userAns = selectedAnswers[q.id];
      if (q.tipe === 'pilihan_ganda' && userAns && q.kunci.startsWith(userAns.charAt(0))) {
        correctCount++;
      } else if (q.tipe === 'uraian' && userAns && userAns.trim().length > 10) {
        correctCount++; // credit for detailed thoughtful written response
      }
    });

    return Math.round((correctCount / totalSoal) * 100) || 75;
  };

  const finalScore = calculateScore();
  let kategori: 'Belum Mencapai' | 'Mulai Mencapai' | 'Mencapai' | 'Melampaui' = 'Mencapai';
  if (finalScore >= 90) kategori = 'Melampaui';
  else if (finalScore >= 75) kategori = 'Mencapai';
  else if (finalScore >= 60) kategori = 'Mulai Mencapai';
  else kategori = 'Belum Mencapai';

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (onSaveResult) {
      onSaveResult({
        studentId: 'std-quiz-' + Date.now(),
        studentName,
        score: finalScore,
        kategori,
        tindakLanjut:
          finalScore >= 75
            ? 'Memahami konsep dengan baik, dapat lanjut materi berikutnya.'
            : 'Perlu bimbingan remedial dan percobaan ulang.'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 uppercase">
              Simulasi Kuis Diagnostik Interaktif
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {item.judul}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <div className="space-y-5">
            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Soal #{currentIdx + 1} dari {totalSoal}</span>
                <span>Peserta: <strong>{studentName}</strong></span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / totalSoal) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Tipe: {currentSoal.tipe.replace('_', ' ').toUpperCase()}
                </span>
                {currentSoal.konteksLokal && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium">
                    Konteks: {currentSoal.konteksLokal}
                  </span>
                )}
              </div>

              <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                {currentSoal.pertanyaan}
              </p>

              {/* Options or Text Area */}
              {currentSoal.tipe === 'pilihan_ganda' && currentSoal.opsi && (
                <div className="space-y-2 pt-2">
                  {currentSoal.opsi.map((op, idx) => {
                    const isSelected = selectedAnswers[currentSoal.id] === op;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectOption(op)}
                        className={`w-full text-left p-3 rounded-xl text-xs font-medium border transition ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200 shadow-xs'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {op}
                      </button>
                    );
                  })}
                </div>
              )}

              {currentSoal.tipe === 'uraian' && (
                <div className="pt-2">
                  <textarea
                    rows={4}
                    placeholder="Tuliskan jawaban penjelasanmu di sini..."
                    value={selectedAnswers[currentSoal.id] || ''}
                    onChange={(e) => handleSelectOption(e.target.value)}
                    className="w-full p-3 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((c) => c - 1)}
                className="px-4 py-2 text-xs font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
              >
                ← Sebelumnya
              </button>

              {currentIdx < totalSoal - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIdx((c) => c + 1)}
                  className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition"
                >
                  Selanjutnya →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition"
                >
                  Selesaikan & Nilai
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="space-y-5 text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-9 h-9" />
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Hasil Asesmen Diagnostik Selesai!
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Analisis Kesiapan Belajar untuk Peserta Didik: <strong>{studentName}</strong>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 max-w-sm mx-auto space-y-2">
              <span className="text-xs text-slate-500">Nilai Perolehan</span>
              <div className="text-4xl font-extrabold font-mono text-blue-600 dark:text-blue-400">
                {finalScore} <span className="text-sm font-normal text-slate-400">/ 100</span>
              </div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                  kategori === 'Melampaui'
                    ? 'bg-emerald-100 text-emerald-800'
                    : kategori === 'Mencapai'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                Kategori KKTP: {kategori}
              </span>
            </div>

            <div className="text-left p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-xs text-slate-700 dark:text-slate-300">
              <strong className="text-blue-900 dark:text-blue-200 block mb-1">
                Rekomendasi Tindak Lanjut Guru:
              </strong>
              {finalScore >= 75 ? (
                <p>
                  Peserta didik telah memahami konsep materi dengan tuntas. Siap untuk melanjutkan eksplorasi topik berikutnya atau menjadi tutor sebaya dalam kelompok belajar.
                </p>
              ) : (
                <p>
                  Peserta didik disarankan mengikuti pendampingan remediasi dengan bantuan alat peraga konkret dan bimbingan guru.
                </p>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentIdx(0);
                  setSelectedAnswers({});
                }}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Ulangi Kuis
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs"
              >
                Selesai & Simpan
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
