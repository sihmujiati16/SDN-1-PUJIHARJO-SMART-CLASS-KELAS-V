import React, { useState } from 'react';
import {
  BookOpen,
  Target,
  FileText,
  Library,
  ChevronRight,
  Filter,
  Sparkles,
  Award
} from 'lucide-react';
import { Subject, SubjectId } from '../types';
import { SubjectIcon } from '../components/SubjectIcon';

interface Props {
  subjects: Subject[];
  onSelectSubject: (id: SubjectId) => void;
}

export const SubjectListView: React.FC<Props> = ({ subjects, onSelectSubject }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'wajib' | 'pilihan_agama' | 'mulok'>('all');

  const filtered = subjects.filter((s) =>
    filterCategory === 'all' ? true : s.category === filterCategory
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
              10 Ruang Mata Pelajaran Kelas V (Fase C)
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Struktur Kurikulum Merdeka Lengkap: CP, TP, ATP, Modul Ajar Deep Learning, Proyek, Buku SIBI, KKTP & Asesmen
          </p>
        </div>

        {/* Filter Category */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              filterCategory === 'all'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Semua (10)
          </button>
          <button
            onClick={() => setFilterCategory('wajib')}
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              filterCategory === 'wajib'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Mata Pelajaran Wajib (7)
          </button>
          <button
            onClick={() => setFilterCategory('pilihan_agama')}
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              filterCategory === 'pilihan_agama'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Pilihan Agama (2)
          </button>
          <button
            onClick={() => setFilterCategory('mulok')}
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              filterCategory === 'mulok'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Muatan Lokal (1)
          </button>
        </div>
      </div>

      {/* Grid of 10 Subjects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((sub) => (
          <div
            key={sub.id}
            onClick={() => onSelectSubject(sub.id)}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-xs hover:shadow-md transition cursor-pointer flex flex-col justify-between group space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs"
                    style={{ backgroundColor: sub.bgLight, color: sub.color }}
                  >
                    <SubjectIcon name={sub.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {sub.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      Kode: {sub.code} · {sub.fase}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                    {sub.jpPerWeek} JP / Minggu
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-1 capitalize">
                    {sub.category.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {sub.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-500">
                <span>CP</span> · <span>TP</span> · <span>ATP</span> · <span>Modul Ajar</span> · <span>KKTP</span>
              </div>
              <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Masuk Ruang Belajar <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
