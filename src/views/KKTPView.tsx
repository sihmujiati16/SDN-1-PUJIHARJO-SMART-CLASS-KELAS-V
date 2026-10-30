import React, { useState } from 'react';
import { Target, Printer, Filter, Scale, ChevronRight } from 'lucide-react';
import { KKTPItem, Subject, SubjectId } from '../types';

interface Props {
  kktpList: KKTPItem[];
  subjects: Subject[];
  onNavigateToSubject: (subjectId: SubjectId) => void;
}

export const KKTPView: React.FC<Props> = ({
  kktpList,
  subjects,
  onNavigateToSubject
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId | 'all'>('all');

  const filteredKKTP = kktpList.filter((k) =>
    selectedSubjectId === 'all' ? true : k.subjectId === selectedSubjectId
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Rubrik Penilaian & Deskripsi 4 Kategori Ketercapaian Seluruh Mata Pelajaran Kelas V SDN 1 Pujiharjo
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Subject Filter Dropdown */}
          <select
            value={selectedSubjectId}
            onChange={(e) => setSelectedSubjectId(e.target.value as any)}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none"
          >
            <option value="all">Semua Mata Pelajaran</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-xl transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak KKTP</span>
          </button>
        </div>
      </div>

      {/* 4 Category Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
          <span className="font-bold text-rose-800 dark:text-rose-300 block">1. Belum Mencapai</span>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Rentang 0 - 59% (Perlu remedial terfokus & bimbingan individual)</p>
        </div>
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
          <span className="font-bold text-amber-800 dark:text-amber-300 block">2. Mulai Mencapai</span>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Rentang 60 - 74% (Perlu latihan terbimbing & tutor sebaya)</p>
        </div>
        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40">
          <span className="font-bold text-blue-800 dark:text-blue-300 block">3. Mencapai</span>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Rentang 75 - 89% (Telah tuntas mencapai tujuan pembelajaran)</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
          <span className="font-bold text-emerald-800 dark:text-emerald-300 block">4. Melampaui</span>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Rentang 90 - 100% (Diberikan tantangan pengayaan / eksplorasi lanjutan)</p>
        </div>
      </div>

      {/* KKTP Cards */}
      <div className="space-y-4">
        {filteredKKTP.map((kktp) => {
          const sub = subjects.find((s) => s.id === kktp.subjectId);
          return (
            <div
              key={kktp.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  {sub && (
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: sub.color }}
                    />
                  )}
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {sub ? sub.name : kktp.subjectId}
                  </h3>
                </div>

                {sub && (
                  <button
                    onClick={() => onNavigateToSubject(sub.id)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    Buka Ruang Mapel <ChevronRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                  Tujuan Pembelajaran:
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                  {kktp.tujuanPembelajaranText}
                </p>

                <div className="mt-2 text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Indikator Ketercapaian:
                  </span>
                  <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-600 dark:text-slate-400">
                    {kktp.indikatorKetercapaian.map((ind, i) => (
                      <li key={i}>{ind}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
                  <div className="flex items-center justify-between font-bold text-rose-800 dark:text-rose-300 mb-1">
                    <span>Belum Mencapai</span>
                    <span className="font-mono">{kktp.kategori.belumMencapai.rentang}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                    {kktp.kategori.belumMencapai.deskripsi}
                  </p>
                  <p className="text-[11px] text-rose-700 dark:text-rose-400 pt-1 border-t border-rose-200 dark:border-rose-900/60">
                    <strong>Tindak Lanjut:</strong> {kktp.kategori.belumMencapai.tindakLanjut}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
                  <div className="flex items-center justify-between font-bold text-amber-800 dark:text-amber-300 mb-1">
                    <span>Mulai Mencapai</span>
                    <span className="font-mono">{kktp.kategori.mulaiMencapai.rentang}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                    {kktp.kategori.mulaiMencapai.deskripsi}
                  </p>
                  <p className="text-[11px] text-amber-700 dark:text-amber-400 pt-1 border-t border-amber-200 dark:border-amber-900/60">
                    <strong>Tindak Lanjut:</strong> {kktp.kategori.mulaiMencapai.tindakLanjut}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40">
                  <div className="flex items-center justify-between font-bold text-blue-800 dark:text-blue-300 mb-1">
                    <span>Mencapai</span>
                    <span className="font-mono">{kktp.kategori.mencapai.rentang}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                    {kktp.kategori.mencapai.deskripsi}
                  </p>
                  <p className="text-[11px] text-blue-700 dark:text-blue-400 pt-1 border-t border-blue-200 dark:border-blue-900/60">
                    <strong>Tindak Lanjut:</strong> {kktp.kategori.mencapai.tindakLanjut}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                  <div className="flex items-center justify-between font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                    <span>Melampaui</span>
                    <span className="font-mono">{kktp.kategori.melampaui.rentang}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                    {kktp.kategori.melampaui.deskripsi}
                  </p>
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-400 pt-1 border-t border-emerald-200 dark:border-emerald-900/60">
                    <strong>Tindak Lanjut:</strong> {kktp.kategori.melampaui.tindakLanjut}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
