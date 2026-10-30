import React, { useState } from 'react';
import {
  Subject,
  SubjectId,
  CapaianPembelajaran,
  TujuanPembelajaran,
  AlurTujuanPembelajaran,
  ModulAjar,
  ProyekPembelajaran,
  BukuReferensi,
  KKTPItem,
  AsesmenItem,
  ReflectionEntry
} from '../types';
import { SchoolProfile } from '../services/storageService';
import { SubjectIcon } from '../components/SubjectIcon';
import {
  BookOpen,
  Target,
  GitBranch,
  FileText,
  FolderKanban,
  Library,
  Scale,
  FileQuestion,
  MessageSquareHeart,
  Printer,
  Edit3,
  Plus,
  ExternalLink,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Clock,
  Download,
  Bookmark,
  Award,
  Layers,
  X
} from 'lucide-react';

interface Props {
  subject: Subject;
  allSubjects: Subject[];
  schoolProfile: SchoolProfile;
  cpList: CapaianPembelajaran[];
  tpList: TujuanPembelajaran[];
  atpList: AlurTujuanPembelajaran[];
  modulList: ModulAjar[];
  proyekList: ProyekPembelajaran[];
  bukuList: BukuReferensi[];
  kktpList: KKTPItem[];
  asesmenList: AsesmenItem[];
  refleksiList: ReflectionEntry[];
  onSelectSubject: (id: SubjectId) => void;
  onUpdateCP: (items: CapaianPembelajaran[]) => void;
  onUpdateTP: (items: TujuanPembelajaran[]) => void;
  onUpdateATP: (items: AlurTujuanPembelajaran[]) => void;
  onUpdateModul: (items: ModulAjar[]) => void;
  onOpenDiagnosticQuiz?: (item: AsesmenItem) => void;
}

export const SubjectDetailView: React.FC<Props> = ({
  subject,
  allSubjects,
  schoolProfile,
  cpList,
  tpList,
  atpList,
  modulList,
  proyekList,
  bukuList,
  kktpList,
  asesmenList,
  refleksiList,
  onSelectSubject,
  onUpdateCP,
  onUpdateTP,
  onUpdateATP,
  onUpdateModul,
  onOpenDiagnosticQuiz
}) => {
  const [activeTab, setActiveTab] = useState<
    'cp' | 'tp' | 'atp' | 'modul' | 'proyek' | 'buku' | 'kktp' | 'asesmen' | 'refleksi'
  >('modul');

  // Filter items for current subject
  const currentCP = cpList.filter((item) => item.subjectId === subject.id);
  const currentTP = tpList.filter((item) => item.subjectId === subject.id);
  const currentATP = atpList.filter((item) => item.subjectId === subject.id);
  const currentModul = modulList.filter((item) => item.subjectId === subject.id);
  const currentBuku = bukuList.filter((item) => item.subjectId === subject.id);
  const currentKKTP = kktpList.filter((item) => item.subjectId === subject.id);
  const currentAsesmen = asesmenList.filter((item) => item.subjectId === subject.id);
  const currentRefleksi = refleksiList.filter((item) => item.subjectId === subject.id);

  // Contextual projects related to this subject or all
  const relatedProjects = proyekList.filter(
    (p) => p.mapelTerkait.includes(subject.name) || p.mapelTerkait.some((m) => subject.name.includes(m))
  );

  const tabs = [
    { id: 'cp', label: 'Capaian (CP)', count: currentCP.length, icon: Target },
    { id: 'tp', label: 'Tujuan (TP)', count: currentTP.length, icon: CheckCircle },
    { id: 'atp', label: 'Alur (ATP)', count: currentATP.length, icon: GitBranch },
    { id: 'modul', label: 'Modul Ajar PM', count: currentModul.length, icon: FileText, highlight: true },
    { id: 'proyek', label: 'Proyek Pujiharjo', count: relatedProjects.length, icon: FolderKanban },
    { id: 'buku', label: 'Buku SIBI', count: currentBuku.length, icon: Library },
    { id: 'kktp', label: 'KKTP', count: currentKKTP.length, icon: Scale },
    { id: 'asesmen', label: 'Asesmen', count: currentAsesmen.length, icon: FileQuestion },
    { id: 'refleksi', label: 'Refleksi', count: currentRefleksi.length, icon: MessageSquareHeart }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Subject Header Card */}
      <div
        className="rounded-2xl p-6 sm:p-7 text-white shadow-md relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${subject.color} 0%, #1e293b 100%)`
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 shadow-inner">
              <SubjectIcon name={subject.iconName} className="w-8 h-8 text-white" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                  {subject.code} · {subject.fase} · {subject.kelas}
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 font-bold">
                  {subject.jpPerWeek} JP per Minggu
                </span>
                <span className="text-[11px] text-white/80">
                  SD Negeri 1 Pujiharjo · TA 2026/2027
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {subject.name}
              </h1>

              <p className="mt-1 text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                {subject.description}
              </p>
            </div>
          </div>

          {/* Quick Subject Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            <select
              value={subject.id}
              onChange={(e) => onSelectSubject(e.target.value as SubjectId)}
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none cursor-pointer"
            >
              {allSubjects.map((s) => (
                <option key={s.id} value={s.id} className="text-slate-900">
                  {s.name} ({s.code})
                </option>
              ))}
            </select>

            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition flex items-center gap-1.5 text-xs font-semibold"
              title="Cetak Dokumen Mapel"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Cetak</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-2 shadow-xs overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl transition ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB CONTENT: CAPAIAN PEMBELAJARAN (CP) */}
      {activeTab === 'cp' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Capaian Pembelajaran (CP) {subject.name} - Fase C (Kelas V)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Dokumen Resmi BSKAP Kemendikdasmen No. 032/H/KR/2024 · Berlaku TA 2026/2027
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
            >
              <Printer className="w-3.5 h-3.5" /> Cetak CP
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {currentCP.length > 0 ? (
              currentCP.map((cp) => (
                <div
                  key={cp.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60">
                      Elemen: {cp.elemen}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Semester {cp.semester} · {cp.fase}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {cp.deskripsi}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="truncate">Sumber Resmi: {cp.sumberResmi}</span>
                    <span className="font-mono">Tahun {cp.tahun}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <Target className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Data Capaian Pembelajaran Resmi Tersedia
                </h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                  CP resmi Kurikulum Merdeka Fase C terintegrasi otomatis dari Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB CONTENT: TUJUAN PEMBELAJARAN (TP) */}
      {activeTab === 'tp' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Tujuan Pembelajaran (TP) {subject.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Diturunkan dari CP dan dihubungkan dengan 8 Dimensi Profil Lulusan
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {currentTP.map((tp) => (
              <div
                key={tp.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                      {tp.kodeTp}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {tp.bab}
                    </span>
                    <span className="text-[11px] text-slate-400">· Elemen {tp.elemen}</span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {tp.alokasiJp} JP · Semester {tp.semester}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {tp.deskripsi}
                  </p>

                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      Dimensi Profil:
                    </span>
                    {tp.dimensiProfilLulusan.map((dim, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                      >
                        {dim}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: ALUR TUJUAN PEMBELAJARAN (ATP) */}
      {activeTab === 'atp' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Alur Tujuan Pembelajaran (ATP) - {subject.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Peta urutan pembelajaran, alokasi JP, dan pemantauan keterlaksanaan
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
            >
              <Download className="w-3.5 h-3.5" /> Unduh / Cetak ATP
            </button>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-semibold">
                    <th className="p-3 w-16 text-center">Urutan</th>
                    <th className="p-3">Kode TP</th>
                    <th className="p-3">Materi Pokok Pembelajaran</th>
                    <th className="p-3 text-center">Alokasi Waktu</th>
                    <th className="p-3 text-center">Semester</th>
                    <th className="p-3 text-center">Status Keterlaksanaan</th>
                    <th className="p-3">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {currentATP.length > 0 ? (
                    currentATP.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 text-center font-bold font-mono">
                          #{item.urutan}
                        </td>
                        <td className="p-3 font-mono font-semibold text-blue-600 dark:text-blue-400">
                          {item.kodeTp}
                        </td>
                        <td className="p-3 font-medium text-slate-900 dark:text-white">
                          {item.materiPokok}
                        </td>
                        <td className="p-3 text-center font-mono">
                          {item.alokasiJp} JP
                        </td>
                        <td className="p-3 text-center">
                          Semester {item.semester}
                        </td>
                        <td className="p-3 text-center">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              item.status === 'Selesai'
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                                : item.status === 'Sedang Berjalan'
                                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="p-3 text-slate-500 dark:text-slate-400">
                          {item.keterangan}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="p-6 text-center text-slate-400">
                        Alur Tujuan Pembelajaran disusun berurutan berdasarkan kalender efektif sekolah.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: MODUL AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING) */}
      {activeTab === 'modul' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Format Resmi Pembelajaran Mendalam (Deep Learning)</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Modul Ajar Kelas V - {subject.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Menerapkan 3 Pilar: Berkesadaran (Mindful), Bermakna (Meaningful), Menggembirakan (Joyful) · Konteks Pujiharjo & Tirtoyudo
              </p>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Modul Ajar Resmi</span>
            </button>
          </div>

          {currentModul.length > 0 ? (
            currentModul.map((modul) => (
              <div
                key={modul.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6"
              >
                {/* Official School Header for Print & Display */}
                <div className="border-b-2 border-slate-900 dark:border-slate-200 pb-4 text-center">
                  <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    PEMERINTAH KABUPATEN MALANG · DINAS PENDIDIKAN
                  </h4>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {schoolProfile.namaSekolah}
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-serif">
                    {schoolProfile.alamat}, Desa {schoolProfile.desa}, Kec. {schoolProfile.kecamatan}, {schoolProfile.kabupaten} - Pos {schoolProfile.kodePos}
                  </p>
                </div>

                {/* Modul Title & Metadata */}
                <div>
                  <div className="text-center space-y-1 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                      MODUL AJAR KURIKULUM MERDEKA FASE C (DEEP LEARNING)
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white pt-1">
                      {modul.judul}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Penyusun: <strong>{modul.penyusun}</strong> · {modul.alokasiWaktu} · Semester {modul.semester}
                    </p>
                  </div>

                  {/* 1. Identifikasi & Karakteristik */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                        A. Identifikasi Peserta Didik:
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {modul.identifikasiPesertaDidik}
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                        B. Karakteristik Materi:
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {modul.karakteristikMateri}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Dimensi Profil Lulusan & Pemahaman Bermakna */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Dimensi Profil Lulusan yang Ditumbuhkan:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {modul.dimensiProfilLulusan.map((dim, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900"
                        >
                          ✓ {dim}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60">
                    <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 block mb-1">
                      Pemahaman Bermakna (Meaningful Learning):
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 italic">
                      "{modul.pemahamanBermakna}"
                    </p>
                  </div>
                </div>

                {/* 3. Pertanyaan Pemantik */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Pertanyaan Pemantik Berbasis Konteks Lokal:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {modul.pertanyaanPemantik.map((q, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                          {idx + 1}
                        </span>
                        <span className="font-medium pt-0.5">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Konteks Lokal Pujiharjo & Tirtoyudo */}
                <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-300 block mb-1">
                    Konteks Lokal Nyata (Desa Pujiharjo & Kec. Tirtoyudo):
                  </span>
                  <p className="text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                    {modul.konteksLokalPujiharjo}
                  </p>
                </div>

                {/* 5. Langkah Pembelajaran (Memahami, Mengaplikasi, Merefleksi) */}
                <div className="space-y-4">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider border-b pb-2">
                    Langkah-Langkah Pembelajaran Berorientasi Pembelajaran Mendalam
                  </h4>

                  {/* Pendahuluan */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400 block">
                      1. Kegiatan Pendahuluan (Berkesadaran / Mindful) - 15 Menit:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc">
                      {modul.kegiatanPendahuluan.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Kegiatan Inti (3 Pengalaman Belajar) */}
                  <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      2. Kegiatan Inti (Integrasi 3 Pengalaman Belajar) - 50 Menit:
                    </span>

                    <div className="space-y-2 text-xs">
                      <div className="pl-3 border-l-2 border-blue-500">
                        <strong className="text-blue-700 dark:text-blue-300">
                          A. Pengalaman Memahami (Concept Building):
                        </strong>
                        <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-600 dark:text-slate-400">
                          {modul.kegiatanInti.memahami.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pl-3 border-l-2 border-emerald-500">
                        <strong className="text-emerald-700 dark:text-emerald-300">
                          B. Pengalaman Mengaplikasi (Bermakna / Hands-on Inquiry):
                        </strong>
                        <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-600 dark:text-slate-400">
                          {modul.kegiatanInti.mengaplikasi.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pl-3 border-l-2 border-amber-500">
                        <strong className="text-amber-700 dark:text-amber-300">
                          C. Pengalaman Merefleksi (Menggembirakan / Joyful Sharing):
                        </strong>
                        <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-600 dark:text-slate-400">
                          {modul.kegiatanInti.merefleksi.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Penutup */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400 block">
                      3. Kegiatan Penutup & Refleksi Berkesadaran - 10 Menit:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc">
                      {modul.kegiatanPenutup.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 6. Diferensiasi Pembelajaran */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Diferensiasi Pembelajaran (Menjawab Kebutuhan Beragam Peserta Didik):
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Diferensiasi Konten:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-0.5">{modul.diferensiasi.konten}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">Diferensiasi Proses:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-0.5">{modul.diferensiasi.proses}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">Diferensiasi Produk:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-0.5">{modul.diferensiasi.produk}</p>
                    </div>
                  </div>
                </div>

                {/* 7. Asesmen & Remedial/Pengayaan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white mb-1.5">
                      Rencana Asesmen:
                    </h5>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                      <li><strong>Asesmen Awal:</strong> {modul.asesmen.awal}</li>
                      <li><strong>Asesmen Formatif:</strong> {modul.asesmen.formatif}</li>
                      <li><strong>Asesmen Sumatif:</strong> {modul.asesmen.sumatif}</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white mb-1.5">
                      Tindak Lanjut Pembelajaran:
                    </h5>
                    <p className="text-slate-600 dark:text-slate-400 mb-1">
                      <strong>Remedial:</strong> {modul.remedialPengayaan.remedial}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong>Pengayaan:</strong> {modul.remedialPengayaan.pengayaan}
                    </p>
                  </div>
                </div>

                {/* Signatures for Official Print */}
                <div className="pt-8 flex items-center justify-between text-xs text-slate-800 dark:text-slate-200">
                  <div className="text-center">
                    <p>Mengetahui,</p>
                    <p>Kepala SD Negeri 1 Pujiharjo</p>
                    <div className="h-16" />
                    <p className="font-bold underline">{schoolProfile.kepalaSekolah}</p>
                    <p className="text-[11px] text-slate-500">NIP. {schoolProfile.nipKepalaSekolah}</p>
                  </div>

                  <div className="text-center">
                    <p>Pujiharjo, 13 Juli 2026</p>
                    <p>Guru Kelas V,</p>
                    <div className="h-16" />
                    <p className="font-bold underline">{schoolProfile.guruKelas}</p>
                    <p className="text-[11px] text-slate-500">NIP. {schoolProfile.nipGuru}</p>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <FileText className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Modul Ajar {subject.name}
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                Modul ajar disusun lengkap mencakup 3 pengalaman belajar dan konteks perkebunan serta pantai Pujiharjo.
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT: BUKU SISWA & BUKU GURU (SIBI KEMENDIKDASMEN) */}
      {activeTab === 'buku' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Buku Teks Resmi SIBI Kemendikdasmen - {subject.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Buku Siswa dan Buku Panduan Guru Resmi dari Sistem Informasi Perbukuan Indonesia (SIBI)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentBuku.map((buku) => (
              <div
                key={buku.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        buku.jenis === 'siswa'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                          : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}
                    >
                      {buku.jenis === 'siswa' ? 'BUKU TEKS SISWA' : 'BUKU PANDUAN GURU'}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {buku.tahun}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {buku.judul}
                  </h4>

                  <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <p><strong>Penulis:</strong> {buku.penulis}</p>
                    <p><strong>Penerbit:</strong> {buku.penerbit}</p>
                    <p className="font-mono text-[11px]"><strong>ISBN:</strong> {buku.isbn}</p>
                    <p><strong>Status:</strong> <span className="text-emerald-600 font-semibold">{buku.statusKetersediaan}</span></p>
                  </div>

                  {/* Bookmark Active Chapter */}
                  <div className="mt-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center gap-2 text-xs">
                    <Bookmark className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-slate-500">Sedang dipelajari:</span>
                    <strong className="text-slate-900 dark:text-white truncate">
                      {buku.babSedangDipelajari}
                    </strong>
                  </div>

                  {/* Table of Contents Preview */}
                  <div className="mt-3">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Daftar Isi Pokok:
                    </p>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 pl-4 list-disc max-h-36 overflow-y-auto">
                      {buku.daftarIsi.map((bab, i) => (
                        <li key={i}>{bab}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 truncate">
                    Sumber: {buku.sumber}
                  </span>
                  <a
                    href={buku.urlSibi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition"
                  >
                    <span>Katalog SIBI</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: KKTP (KRITERIA KETERCAPAIAN) */}
      {activeTab === 'kktp' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) - {subject.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Rubrik deskriptor 4 kategori: Belum Mencapai, Mulai Mencapai, Mencapai, dan Melampaui
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {currentKKTP.map((kktp) => (
              <div
                key={kktp.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    TP Rujukan
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {kktp.tujuanPembelajaranText}
                  </h4>

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

                {/* 4 Tier Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  
                  <div className="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
                    <div className="flex items-center justify-between mb-1 text-rose-800 dark:text-rose-300 font-bold">
                      <span>1. Belum Mencapai</span>
                      <span className="font-mono">{kktp.kategori.belumMencapai.rentang}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                      {kktp.kategori.belumMencapai.deskripsi}
                    </p>
                    <p className="text-[11px] text-rose-700 dark:text-rose-400 border-t border-rose-200 dark:border-rose-900/60 pt-1">
                      <strong>Tindak Lanjut:</strong> {kktp.kategori.belumMencapai.tindakLanjut}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
                    <div className="flex items-center justify-between mb-1 text-amber-800 dark:text-amber-300 font-bold">
                      <span>2. Mulai Mencapai</span>
                      <span className="font-mono">{kktp.kategori.mulaiMencapai.rentang}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                      {kktp.kategori.mulaiMencapai.deskripsi}
                    </p>
                    <p className="text-[11px] text-amber-700 dark:text-amber-400 border-t border-amber-200 dark:border-amber-900/60 pt-1">
                      <strong>Tindak Lanjut:</strong> {kktp.kategori.mulaiMencapai.tindakLanjut}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40">
                    <div className="flex items-center justify-between mb-1 text-blue-800 dark:text-blue-300 font-bold">
                      <span>3. Mencapai</span>
                      <span className="font-mono">{kktp.kategori.mencapai.rentang}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                      {kktp.kategori.mencapai.deskripsi}
                    </p>
                    <p className="text-[11px] text-blue-700 dark:text-blue-400 border-t border-blue-200 dark:border-blue-900/60 pt-1">
                      <strong>Tindak Lanjut:</strong> {kktp.kategori.mencapai.tindakLanjut}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                    <div className="flex items-center justify-between mb-1 text-emerald-800 dark:text-emerald-300 font-bold">
                      <span>4. Melampaui</span>
                      <span className="font-mono">{kktp.kategori.melampaui.rentang}</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                      {kktp.kategori.melampaui.deskripsi}
                    </p>
                    <p className="text-[11px] text-emerald-700 dark:text-emerald-400 border-t border-emerald-200 dark:border-emerald-900/60 pt-1">
                      <strong>Tindak Lanjut:</strong> {kktp.kategori.melampaui.tindakLanjut}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: PROYEK KONTEKSTUAL PUJIHARJO */}
      {activeTab === 'proyek' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Proyek Pembelajaran Berbasis Masalah Nyata Pujiharjo & Tirtoyudo
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                PBL Kontekstual yang mengintegrasikan {subject.name} dengan potensi lokal pesisir dan perkebunan
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {relatedProjects.length > 0 ? (
              relatedProjects.map((p) => (
                <div
                  key={p.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                        {p.tema}
                      </span>
                      <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                        {p.judul}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {p.jadwal}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
                      <strong className="block text-slate-900 dark:text-white mb-1">
                        Tujuan Proyek:
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {p.tujuan}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
                      <strong className="block text-slate-900 dark:text-white mb-1">
                        Konteks Nyata Lingkungan:
                      </strong>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {p.konteksPujiharjo}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Tahapan Langkah Pelaksanaan:
                    </h5>
                    <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {p.langkahPelaksanaan.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-medium pt-0.5">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs">
                    <strong className="text-emerald-900 dark:text-emerald-300 block mb-1">
                      Produk / Hasil Karya Nyata Siswa:
                    </strong>
                    <p className="text-emerald-950 dark:text-emerald-200">
                      {p.produkKarya}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <FolderKanban className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Proyek Terintegrasi Tematik
                </h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                  Mata pelajaran ini berkolaborasi dalam Proyek Konservasi Pesisir Pantai Sipelot dan Wirausaha Cilik Tirtoyudo.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB CONTENT: ASESMEN */}
      {activeTab === 'asesmen' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Bank Soal & Asesmen - {subject.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Asesmen Awal (Diagnostik), Asesmen Formatif, dan Asesmen Sumatif
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {currentAsesmen.map((asm) => (
              <div
                key={asm.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 uppercase">
                      {asm.jenis}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                      {asm.judul}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    Tanggal: {asm.tanggal}
                  </span>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-400">
                  <p><strong>Kisi-kisi:</strong> {asm.kisiKisi}</p>
                  <p className="mt-1"><strong>Rubrik Penilaian:</strong> {asm.rubrik}</p>
                </div>

                {/* Soal List Preview */}
                <div className="space-y-3 pt-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Daftar Butir Soal Terintegrasi Konteks Lokal ({asm.soalList.length} Butir):
                  </h5>
                  {asm.soalList.map((soal, idx) => (
                    <div
                      key={soal.id}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-slate-900 dark:text-white">
                          Soal #{idx + 1} ({soal.tipe.replace('_', ' ').toUpperCase()})
                        </span>
                        {soal.konteksLokal && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium">
                            Konteks: {soal.konteksLokal}
                          </span>
                        )}
                      </div>

                      <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                        {soal.pertanyaan}
                      </p>

                      {soal.opsi && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2">
                          {soal.opsi.map((op, oIdx) => (
                            <span key={oIdx} className="text-slate-600 dark:text-slate-400">
                              {op}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px]">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          Kunci: {soal.kunci}
                        </span>
                        <span className="text-slate-500 italic">
                          {soal.pembahasan}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-end">
                  {onOpenDiagnosticQuiz && (
                    <button
                      onClick={() => onOpenDiagnosticQuiz(asm)}
                      className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition"
                    >
                      Simulasi Kuis / Input Nilai Asesmen
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: REFLEKSI */}
      {activeTab === 'refleksi' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Catatan Refleksi Pembelajaran - {subject.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Umpan balik berkesadaran dari Guru Kelas dan Peserta Didik
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {currentRefleksi.length > 0 ? (
              currentRefleksi.map((ref) => (
                <div
                  key={ref.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                          ref.jenis === 'guru'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        }`}
                      >
                        Refleksi {ref.jenis}
                      </span>
                      <strong className="text-slate-900 dark:text-white font-semibold">
                        {ref.authorName}
                      </strong>
                    </div>
                    <span className="text-slate-400 font-mono">{ref.tanggal}</span>
                  </div>

                  <div className="space-y-1.5 text-slate-700 dark:text-slate-300">
                    <p><strong>1. Ketercapaian TP / Yang Dipelajari:</strong> {ref.q1}</p>
                    <p><strong>2. Keterlibatan Siswa / Hal Menarik:</strong> {ref.q2}</p>
                    <p><strong>3. Yang Berjalan Baik / Perlu Ditingkatkan:</strong> {ref.q3}</p>
                    <p><strong>4. Kendala / Penerapan Nyata:</strong> {ref.q4}</p>
                    <p><strong>5. Rencana Perbaikan / Keinginan Belajar:</strong> {ref.q5}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <MessageSquareHeart className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Belum Ada Riwayat Refleksi Khusus
                </h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
                  Guru dan siswa dapat mengisi jurnal refleksi harian melalui menu Refleksi Pembelajaran.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
