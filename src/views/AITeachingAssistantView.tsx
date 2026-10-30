import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  FileText,
  FileQuestion,
  HelpCircle,
  Lightbulb,
  Printer,
  Save,
  CheckCircle2,
  RefreshCw,
  Copy,
  Edit3,
  Layers,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Subject, SubjectId, AIGeneratorResult } from '../types';
import { AIAssistantService, GenerateOptions } from '../services/aiAssistantService';

interface Props {
  subjects: Subject[];
  onSaveToCurriculum: (result: AIGeneratorResult) => void;
}

export const AITeachingAssistantView: React.FC<Props> = ({
  subjects,
  onSaveToCurriculum
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('ipas');
  const [selectedCategory, setSelectedCategory] = useState<GenerateOptions['kategori']>('modul_ajar');
  const [topikInput, setTopikInput] = useState('Sifat-sifat Cahaya dan Bunyi');
  const [difficulty, setDifficulty] = useState<'Dasar' | 'Sedang' | 'Tinggi (HOTS)'>('Sedang');
  const [useLocalContext, setUseLocalContext] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [currentResult, setCurrentResult] = useState<AIGeneratorResult | null>(null);
  const [editedContent, setEditedContent] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(false);

  const activeSubject = subjects.find((s) => s.id === selectedSubjectId) || subjects[0];

  const handleGenerate = async () => {
    setIsLoading(true);
    setSaveSuccessMessage(false);
    try {
      const res = await AIAssistantService.generateEducationalContent({
        kategori: selectedCategory,
        subjectId: selectedSubjectId,
        subjectName: activeSubject.name,
        topik: topikInput,
        tingkatKesulitan: difficulty,
        konteksLokal: useLocalContext
      });
      setCurrentResult(res);
      setEditedContent(res.konten);
      setIsVerified(false);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = () => {
    setIsVerified(true);
    if (currentResult) {
      currentResult.statusVerifikasi = 'Diverifikasi Guru';
    }
  };

  const handleSave = () => {
    if (!currentResult) return;
    const finalResult: AIGeneratorResult = {
      ...currentResult,
      konten: editedContent,
      statusVerifikasi: isVerified ? 'Diverifikasi Guru' : 'Draf AI'
    };
    onSaveToCurriculum(finalResult);
    setSaveSuccessMessage(true);
    setTimeout(() => setSaveSuccessMessage(false), 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editedContent);
    alert('Teks berhasil disalin ke papan klip!');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>AI Teaching Assistant · Asisten Cerdas Guru Kelas V</span>
          </div>
          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Pusat Generator Perangkat & Analisis Pembelajaran Berbasis AI
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Membantu penyusunan Modul Ajar Deep Learning, LKPD, Soal HOTS, Rubrik, dan Rekomendasi Diferensiasi yang dapat diedit dan diverifikasi guru.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Wajib Verifikasi Guru</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Form Kontrol Generator */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4 text-xs">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">
              Parameter Penyusunan AI
            </h3>
            <p className="text-slate-500 mt-0.5">
              Pilih kebutuhan perangkat atau analisis yang diinginkan
            </p>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Kategori Bantuan AI:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
            >
              <option value="modul_ajar">1. Rancangan Modul Ajar Deep Learning</option>
              <option value="lkpd">2. Lembar Kerja Peserta Didik (LKPD) A4</option>
              <option value="soal_asesmen">3. Bank Soal & Kisi-kisi Asesmen HOTS</option>
              <option value="rekomendasi_remedial">4. Analisis Rekomendasi Remedial & Pengayaan</option>
              <option value="pertanyaan_pemantik">5. Pertanyaan Pemantik Kontekstual</option>
              <option value="proyek_pbl">6. Rancangan Proyek Berbasis Masalah (PBL)</option>
              <option value="refleksi">7. Instrumen Refleksi Guru & Siswa</option>
              <option value="narasi_rapor">8. Narasi Deskripsi Rapor Kurikulum Merdeka</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Mata Pelajaran (Fase C):
            </label>
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value as SubjectId)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
            >
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.code})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Topik / Lingkup Materi Pokok:
            </label>
            <input
              type="text"
              value={topikInput}
              onChange={(e) => setTopikInput(e.target.value)}
              placeholder="Contoh: Operasi Hitung Pecahan / Ekosistem Pantai Sipelot"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Tingkat Kesulitan / Ranah Kognitif:
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {(['Dasar', 'Sedang', 'Tinggi (HOTS)'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setDifficulty(lvl)}
                  className={`py-1.5 px-2 rounded-lg font-semibold transition text-center ${
                    difficulty === lvl
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={useLocalContext}
                onChange={(e) => setUseLocalContext(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-slate-700 dark:text-slate-300">
                Integrasikan Konteks Lokal Desa Pujiharjo & Kec. Tirtoyudo
              </span>
            </label>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading || !topikInput}
            className="w-full py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Menyusun Dokumen Pembelajaran...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Hasilkan Dokumen Pembelajaran</span>
              </>
            )}
          </button>
        </div>

        {/* Right Column (2 span): Editor & Pratinjau Dokumen AI */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs flex flex-col justify-between space-y-4">
          
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      isVerified
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}
                  >
                    {isVerified ? '✓ Diverifikasi Guru Kelas' : '⚠ Status: Draf AI (Perlu Verifikasi)'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeSubject.name} · {topikInput}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  Editor & Pratinjau Perangkat Pembelajaran
                </h3>
              </div>

              {/* Action Tools */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 text-xs flex items-center gap-1"
                  title="Salin Teks"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Salin</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 text-xs flex items-center gap-1"
                  title="Cetak Dokumen"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Cetak</span>
                </button>

                {!isVerified && (
                  <button
                    type="button"
                    onClick={handleVerify}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verifikasi Guru</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleSave}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1 shadow-xs"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan ke Database</span>
                </button>
              </div>
            </div>

            {saveSuccessMessage && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Dokumen pembelajaran berhasil disimpan ke dalam repositori kurikulum!</span>
              </div>
            )}

            {/* Editable Content Area */}
            <div className="mt-4">
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Teks dapat diedit secara langsung oleh guru sebelum disetujui:
              </label>
              <textarea
                rows={16}
                value={editedContent || (currentResult ? currentResult.konten : 'Silakan klik tombol "Hasilkan Dokumen Pembelajaran" di sebelah kiri untuk menyusun perangkat ajar berbasis kurikulum resmi dan kearifan lokal Pujiharjo...')}
                onChange={(e) => setEditedContent(e.target.value)}
                className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-900 dark:text-white font-mono text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
            <strong>Catatan Kepatuhan Profesional:</strong> Hasil kecerdasan buatan disesuaikan dengan Capaian Pembelajaran Fase C BSKAP Kemendikdasmen No. 032/H/KR/2024 dan tidak dapat dianggap sebagai dokumen resmi sebelum diperiksa dan diverifikasi oleh Guru Kelas V.
          </div>
        </div>

      </div>

    </div>
  );
};
