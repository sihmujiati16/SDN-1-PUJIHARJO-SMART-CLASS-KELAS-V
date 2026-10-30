import React, { useState } from 'react';
import {
  Sparkles,
  Star,
  Award,
  BookOpen,
  Clock,
  CheckCircle,
  FileText,
  Upload,
  Send,
  HelpCircle,
  Trophy,
  Smile,
  Flame,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  Heart
} from 'lucide-react';
import {
  Student,
  Subject,
  SubjectId,
  ScheduleItem,
  StudentTask,
  StudentTaskSubmission,
  LKPDItem,
  PortfolioItem,
  BukuReferensi
} from '../types';
import { SubjectIcon } from '../components/SubjectIcon';

interface Props {
  student: Student;
  allStudents: Student[];
  subjects: Subject[];
  todaySchedule: ScheduleItem[];
  tasks: StudentTask[];
  submissions: StudentTaskSubmission[];
  lkpds: LKPDItem[];
  portfolios: PortfolioItem[];
  books: BukuReferensi[];
  onChangeStudent: (id: string) => void;
  onSubmitTask: (submission: StudentTaskSubmission) => void;
  onNavigateToSubject: (subjectId: SubjectId) => void;
}

export const StudentDashboardView: React.FC<Props> = ({
  student,
  allStudents,
  subjects,
  todaySchedule,
  tasks,
  submissions,
  lkpds,
  portfolios,
  books,
  onChangeStudent,
  onSubmitTask,
  onNavigateToSubject
}) => {
  const [activeTab, setActiveTab] = useState<'beranda' | 'ruang_belajar' | 'tugas' | 'portofolio' | 'kuis'>('beranda');
  const [selectedTaskForSubmission, setSelectedTaskForSubmission] = useState<StudentTask | null>(null);
  const [taskAnswerText, setTaskAnswerText] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Simple Interactive Quiz state for student
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  // Student religion mapping for appropriate religious studies
  const religionSubjectId = student.agama === 'Islam' ? 'pai-bp' : 'pak-bp';

  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTaskForSubmission || !taskAnswerText) return;

    const newSub: StudentTaskSubmission = {
      id: 'sub-' + Date.now(),
      taskId: selectedTaskForSubmission.id,
      studentId: student.id,
      tanggalKirim: new Date().toISOString().split('T')[0],
      status: 'Terkirim',
      jawabanTeks: taskAnswerText,
      nilai: undefined,
      umpanBalikGuru: undefined
    };

    onSubmitTask(newSub);
    setSubmissionSuccess(true);
    setTaskAnswerText('');
    setTimeout(() => {
      setSubmissionSuccess(false);
      setSelectedTaskForSubmission(null);
    }, 2500);
  };

  const handleQuizAnswer = (option: string, correct: boolean) => {
    setQuizAnswer(option);
    if (correct) {
      setQuizFeedback('Hebat sekali! Jawabanmu benar! (+20 XP Poin Belajar)');
      student.gamifikasi.xp += 20;
    } else {
      setQuizFeedback('Yuk coba cermati lagi konsepnya bersama Pak Angga!');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Student Welcome Banner with Gamification */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-extrabold border-2 border-white/30 shadow-inner shrink-0">
              {student.fotoUrl ? (
                <img src={student.fotoUrl} alt={student.nama} className="w-full h-full object-cover rounded-2xl" />
              ) : (
                student.nama.charAt(0)
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/25 backdrop-blur-md text-white">
                  Kelas V SD Negeri 1 Pujiharjo
                </span>
                <span className="text-[11px] font-mono font-medium text-emerald-100">
                  NIS: {student.nis || 'Diverifikasi'} · No. Urut #{student.noUrut}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                Halo, {student.nama}! 👋
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
                Selamat belajar dengan berkesadaran, bermakna, dan menggembirakan hari ini!
              </p>
            </div>
          </div>

          {/* Gamification Level & Badges Card */}
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shrink-0">
            <div className="text-center px-2">
              <span className="text-[10px] uppercase font-bold text-emerald-200 block">Level Belajar</span>
              <span className="text-2xl font-black font-mono leading-none">
                {student.gamifikasi.level}
              </span>
            </div>

            <div className="h-8 w-px bg-white/20" />

            <div className="text-center px-2">
              <span className="text-[10px] uppercase font-bold text-amber-300 block flex items-center gap-1 justify-center">
                <Star className="w-3 h-3 fill-current" /> Bintang
              </span>
              <span className="text-2xl font-black font-mono leading-none text-amber-300">
                {student.gamifikasi.bintang}
              </span>
            </div>

            <div className="h-8 w-px bg-white/20" />

            <div className="text-center px-2">
              <span className="text-[10px] uppercase font-bold text-cyan-200 block flex items-center gap-1 justify-center">
                <Flame className="w-3 h-3" /> XP Poin
              </span>
              <span className="text-2xl font-black font-mono leading-none">
                {student.gamifikasi.xp}
              </span>
            </div>
          </div>

        </div>

        {/* Quick Student Switcher for multi-student class exploration */}
        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-emerald-100 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span>Beralih Siswa:</span>
            <select
              value={student.id}
              onChange={(e) => onChangeStudent(e.target.value)}
              className="px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-semibold focus:outline-none cursor-pointer"
            >
              {allStudents.map((s) => (
                <option key={s.id} value={s.id} className="text-slate-900">
                  #{s.noUrut}. {s.nama} ({s.agama})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {student.gamifikasi.lencana.map((badge, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 font-medium">
                🎖️ {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Student Nav Tabs */}
      <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs overflow-x-auto">
        {[
          { id: 'beranda', label: 'Jadwal & Tugas Hari Ini', icon: Clock },
          { id: 'ruang_belajar', label: '10 Ruang Belajar Mapel', icon: BookOpen },
          { id: 'tugas', label: `Tugas Digital (${tasks.length})`, icon: FileText },
          { id: 'portofolio', label: `Portofolioku (${portfolios.length})`, icon: Award },
          { id: 'kuis', label: 'Tantangan Kuis Ceria', icon: Sparkles }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition whitespace-nowrap ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: BERANDA SISWA (JADWAL HARI INI & TUGAS AKTIF) */}
      {activeTab === 'beranda' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Jadwal Hari Ini */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Jadwal Belajarmu Hari Ini (SDN 1 Pujiharjo)
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                {new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            <div className="space-y-2.5">
              {todaySchedule.slice(0, 5).map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {item.jamMulai} - {item.jamSelesai}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        {item.kegiatan}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {item.keterangan || item.ruangan}
                      </p>
                    </div>
                  </div>
                  {item.jp > 0 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      {item.jp} JP
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tugas Digital Mendatang */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Tugas yang Perlu Diselesaikan
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {tasks.slice(0, 3).map((task) => {
                const sub = submissions.find((s) => s.taskId === task.id && s.studentId === student.id);
                return (
                  <div
                    key={task.id}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 uppercase">
                        {task.tipe}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Tenggat: {task.tenggatWaktu}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 dark:text-white leading-snug">
                      {task.judul}
                    </h4>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-700">
                      {sub ? (
                        <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                          ✓ Sudah Dikirim {sub.nilai ? `(Nilai: ${sub.nilai})` : '(Menunggu Nilai)'}
                        </span>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedTaskForSubmission(task);
                            setActiveTab('tugas');
                          }}
                          className="text-xs font-bold text-emerald-600 hover:underline"
                        >
                          Kerjakan Tugas Sekarang →
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: RUANG BELAJAR DIGITAL 10 MAPEL */}
      {activeTab === 'ruang_belajar' && (
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Ruang Belajar Digital 10 Mata Pelajaran Kelas V
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pilih mata pelajaran untuk membaca buku resmi SIBI, mengunduh LKPD, dan menyimak ringkasan materi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((sub) => {
              const bookObj = books.find((b) => b.subjectId === sub.id && b.jenis === 'siswa');
              const isReligiousFocus = sub.id === religionSubjectId;

              return (
                <div
                  key={sub.id}
                  className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border transition flex flex-col justify-between space-y-4 ${
                    isReligiousFocus
                      ? 'border-emerald-500 shadow-sm ring-1 ring-emerald-500/30'
                      : 'border-slate-200 dark:border-slate-800 hover:border-emerald-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                        style={{ backgroundColor: sub.bgLight, color: sub.color }}
                      >
                        <SubjectIcon name={sub.iconName} className="w-5 h-5" />
                      </div>
                      {isReligiousFocus && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          Sesuai Agamamu
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {sub.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {sub.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    {bookObj && (
                      <a
                        href={bookObj.urlSibi}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1"
                      >
                        Baca Buku SIBI <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <button
                      onClick={() => onNavigateToSubject(sub.id)}
                      className="text-slate-600 dark:text-slate-300 font-semibold hover:text-emerald-600"
                    >
                      Buka Materi →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: SISTEM TUGAS DIGITAL & PENGUMPULAN */}
      {activeTab === 'tugas' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Daftar Tugas & LKPD Digital Kelas V
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Kirimkan jawaban atau laporan kegiatan belajarmu untuk dinilai oleh Pak Angga
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* List of Tasks */}
            <div className="space-y-3">
              {tasks.map((task) => {
                const sub = submissions.find((s) => s.taskId === task.id && s.studentId === student.id);
                return (
                  <div
                    key={task.id}
                    onClick={() => setSelectedTaskForSubmission(task)}
                    className={`p-5 rounded-2xl border transition cursor-pointer ${
                      selectedTaskForSubmission?.id === task.id
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-500 shadow-xs'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-emerald-600 uppercase">
                        {task.tipe} · Poin Maks: {task.poinMaksimal}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">
                        Tenggat: {task.tenggatWaktu}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {task.judul}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {task.instruksi}
                    </p>

                    <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-500">
                        {task.materiPendukung}
                      </span>
                      {sub ? (
                        <span className="font-bold text-emerald-600">
                          ✓ Terkumpul {sub.nilai ? `· Nilai: ${sub.nilai}` : ''}
                        </span>
                      ) : (
                        <span className="font-bold text-blue-600">Klik untuk Jawab</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Task Submission Box */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
              {selectedTaskForSubmission ? (
                <>
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                    <span className="text-xs font-bold text-emerald-600">
                      Mengumpulkan Tugas
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {selectedTaskForSubmission.judul}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {selectedTaskForSubmission.instruksi}
                    </p>
                  </div>

                  {submissionSuccess && (
                    <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Tugasmu berhasil dikirimkan ke Pak Angga!</span>
                    </div>
                  )}

                  <form onSubmit={handleTaskSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Tuliskan Jawaban atau Hasil Pengamatanmu:
                      </label>
                      <textarea
                        rows={6}
                        value={taskAnswerText}
                        onChange={(e) => setTaskAnswerText(e.target.value)}
                        placeholder="Ketikkan jawaban lengkapmu di sini..."
                        className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-sans"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Lampirkan Foto Hasil Pekerjaan / Praktik (Opsional):
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        className="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Jawaban Tugas ke Guru</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-16 text-center text-slate-400">
                  <FileText className="w-8 h-8 mx-auto mb-2 opacity-60" />
                  <p>Pilih salah satu tugas di sebelah kiri untuk mulai mengerjakan dan mengumpulkan.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* TAB 4: PORTOFOLIO DIGITAL SISWA */}
      {activeTab === 'portofolio' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Portofolio Karya & Pencapaian Belajarku ({portfolios.length} Karya Terdata)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Koleksi hasil praktik inkuiri, produk karya seni, dan refleksi prestasi di SD Negeri 1 Pujiharjo
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolios.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      {item.kategori}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">{item.tanggal}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {item.judul}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">Nilai Karya: {item.nilai}</span>
                    <span className="text-[10px] text-slate-400">Diverifikasi Guru</span>
                  </div>
                  <p className="text-[11px] text-slate-500 italic bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg">
                    "{item.umpanBalik}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: TANTANGAN KUIS CERIA & GAMIFIKASI */}
      {activeTab === 'kuis' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-5">
          <div>
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
              Tantangan Mingguan Berhadiah XP
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
              Kuis Ceria Sains & Lingkungan Desa Pujiharjo
            </h3>
            <p className="text-xs text-slate-500">
              Jawab pertanyaan berikut dengan benar untuk meningkatkan poin pengalamanmu!
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Pertanyaan: "Ketika kamu berwisata ke Pantai Sipelot Desa Pujiharjo pada siang hari, mengapa dasar air laut yang jernih tampak lebih dangkal daripada aslinya?"
            </h4>

            <div className="space-y-2 text-xs">
              {[
                { opt: 'A', text: 'Karena adanya pembiasan (refraksi) cahaya saat melewati air dan udara.', correct: true },
                { opt: 'B', text: 'Karena gelombang air laut menyerap seluruh warna sinar matahari.', correct: false },
                { opt: 'C', text: 'Karena batu karang pantai memantulkan panas bumi.', correct: false },
                { opt: 'D', text: 'Karena mata manusia tidak bisa melihat di tempat terang.', correct: false }
              ].map((choice) => (
                <button
                  key={choice.opt}
                  type="button"
                  onClick={() => handleQuizAnswer(choice.opt, choice.correct)}
                  className={`w-full text-left p-3 rounded-xl border font-medium transition ${
                    quizAnswer === choice.opt
                      ? choice.correct
                        ? 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold'
                        : 'bg-rose-100 border-rose-500 text-rose-900'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <strong className="mr-2">{choice.opt}.</strong>
                  {choice.text}
                </button>
              ))}
            </div>

            {quizFeedback && (
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-emerald-300 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                {quizFeedback}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
