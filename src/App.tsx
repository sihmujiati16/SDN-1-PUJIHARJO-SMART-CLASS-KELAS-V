import React, { useState, useEffect } from 'react';
import { StorageService, SchoolProfile } from './services/storageService';
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
  StudentScore,
  Student,
  ScheduleItem,
  AcademicCalendarEvent,
  ReflectionEntry,
  JurnalMengajar,
  StudentTask,
  StudentTaskSubmission,
  LKPDItem,
  PortfolioItem,
  AIGeneratorResult
} from './types';

import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { SearchModal } from './components/SearchModal';
import { DiagnosticQuizModal } from './components/DiagnosticQuizModal';

import { DashboardView } from './views/DashboardView';
import { ScheduleView } from './views/ScheduleView';
import { CalendarView } from './views/CalendarView';
import { SubjectListView } from './views/SubjectListView';
import { SubjectDetailView } from './views/SubjectDetailView';
import { KKTPView } from './views/KKTPView';
import { DiagnosticView } from './views/DiagnosticView';
import { AssessmentsView } from './views/AssessmentsView';
import { ReflectionsView } from './views/ReflectionsView';
import { StudentsView } from './views/StudentsView';
import { TeacherAdministrationView } from './views/TeacherAdministrationView';
import { StudentsDatabaseView } from './views/StudentsDatabaseView';
import { AITeachingAssistantView } from './views/AITeachingAssistantView';
import { LearningAnalyticsView } from './views/LearningAnalyticsView';
import { StudentDashboardView } from './views/StudentDashboardView';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => StorageService.getDarkMode());

  // User role state
  const [userRole, setUserRole] = useState<'guru' | 'siswa'>(() => StorageService.getUserRole());
  const [activeStudentId, setActiveStudentId] = useState<string>(() => StorageService.getActiveStudentId());

  // Navigation states
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId | undefined>(undefined);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Active quiz modal state
  const [activeQuizItem, setActiveQuizItem] = useState<AsesmenItem | null>(null);

  // Persistent data states
  const [schoolProfile, setSchoolProfile] = useState<SchoolProfile>(() => StorageService.getSchoolProfile());
  const [subjects, setSubjects] = useState<Subject[]>(() => StorageService.getSubjects());
  const [cpList, setCpList] = useState<CapaianPembelajaran[]>(() => StorageService.getCP());
  const [tpList, setTpList] = useState<TujuanPembelajaran[]>(() => StorageService.getTP());
  const [atpList, setAtpList] = useState<AlurTujuanPembelajaran[]>(() => StorageService.getATP());
  const [modulList, setModulList] = useState<ModulAjar[]>(() => StorageService.getModulAjar());
  const [proyekList, setProyekList] = useState<ProyekPembelajaran[]>(() => StorageService.getProyek());
  const [bukuList, setBukuList] = useState<BukuReferensi[]>(() => StorageService.getBuku());
  const [kktpList, setKktpList] = useState<KKTPItem[]>(() => StorageService.getKKTP());
  const [asesmenList, setAsesmenList] = useState<AsesmenItem[]>(() => StorageService.getAsesmen());
  const [studentScores, setStudentScores] = useState<Record<string, StudentScore[]>>(() => StorageService.getScores());
  const [students, setStudents] = useState<Student[]>(() => StorageService.getStudents());
  const [schedule, setSchedule] = useState<ScheduleItem[]>(() => StorageService.getSchedule());
  const [calendarEvents, setCalendarEvents] = useState<AcademicCalendarEvent[]>(() => StorageService.getCalendar());
  const [reflections, setReflections] = useState<ReflectionEntry[]>(() => StorageService.getReflections());
  const [journals, setJournals] = useState<JurnalMengajar[]>(() => StorageService.getJournals());
  const [tasks, setTasks] = useState<StudentTask[]>(() => StorageService.getTasks());
  const [submissions, setSubmissions] = useState<StudentTaskSubmission[]>(() => StorageService.getSubmissions());
  const [lkpds, setLkpds] = useState<LKPDItem[]>(() => StorageService.getLKPDs());
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>(() => StorageService.getPortfolios());

  // Dark mode class sync on HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    StorageService.setDarkMode(darkMode);
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleRole = () => {
    const nextRole = userRole === 'guru' ? 'siswa' : 'guru';
    setUserRole(nextRole);
    StorageService.setUserRole(nextRole);
  };

  const handleChangeStudent = (studentId: string) => {
    setActiveStudentId(studentId);
    StorageService.setActiveStudentId(studentId);
  };

  const handleNavigate = (view: string, sId?: SubjectId) => {
    setCurrentView(view);
    setSelectedSubjectId(sId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateLogo = (newLogoUrl: string) => {
    const updated = { ...schoolProfile, logoUrl: newLogoUrl };
    setSchoolProfile(updated);
    StorageService.saveSchoolProfile(updated);
  };

  const handleUpdateSchoolProfile = (newProfile: SchoolProfile) => {
    setSchoolProfile(newProfile);
    StorageService.saveSchoolProfile(newProfile);
  };

  const handleUpdateSchedule = (newSchedule: ScheduleItem[]) => {
    setSchedule(newSchedule);
    StorageService.saveSchedule(newSchedule);
  };

  const handleUpdateCalendar = (newEvents: AcademicCalendarEvent[]) => {
    setCalendarEvents(newEvents);
    StorageService.saveCalendar(newEvents);
  };

  const handleUpdateStudents = (newStudents: Student[]) => {
    setStudents(newStudents);
    StorageService.saveStudents(newStudents);
  };

  const handleUpdateCP = (items: CapaianPembelajaran[]) => {
    setCpList(items);
    StorageService.saveCP(items);
  };

  const handleUpdateTP = (items: TujuanPembelajaran[]) => {
    setTpList(items);
    StorageService.saveTP(items);
  };

  const handleUpdateATP = (items: AlurTujuanPembelajaran[]) => {
    setAtpList(items);
    StorageService.saveATP(items);
  };

  const handleUpdateModul = (items: ModulAjar[]) => {
    setModulList(items);
    StorageService.saveModulAjar(items);
  };

  const handleUpdateJournals = (newJournals: JurnalMengajar[]) => {
    setJournals(newJournals);
    StorageService.saveJournals(newJournals);
  };

  const handleAddReflection = (entry: ReflectionEntry) => {
    const updated = [entry, ...reflections];
    setReflections(updated);
    StorageService.saveReflections(updated);
  };

  const handleUpdateScore = (asmId: string, updatedScores: StudentScore[]) => {
    const updated = { ...studentScores, [asmId]: updatedScores };
    setStudentScores(updated);
    StorageService.saveScores(updated);
  };

  const handleSubmitTask = (newSubmission: StudentTaskSubmission) => {
    const existingIndex = submissions.findIndex(
      (s) => s.taskId === newSubmission.taskId && s.studentId === newSubmission.studentId
    );
    let updatedSubs: StudentTaskSubmission[];
    if (existingIndex >= 0) {
      updatedSubs = [...submissions];
      updatedSubs[existingIndex] = newSubmission;
    } else {
      updatedSubs = [newSubmission, ...submissions];
    }
    setSubmissions(updatedSubs);
    StorageService.saveSubmissions(updatedSubs);

    // Reward student with XP and Stars for submitting work
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === newSubmission.studentId) {
          const currentXp = s.gamifikasi?.xp || 250;
          const currentStars = s.gamifikasi?.bintang || 12;
          const newXp = currentXp + 60;
          const newLevel = Math.floor(newXp / 100) + 1;
          const newStars = currentStars + 2;
          const badges = s.gamifikasi?.lencana ? [...s.gamifikasi.lencana] : ['Pembelajar Rajin'];
          if (!badges.includes('Penjelajah Mandiri')) {
            badges.push('Penjelajah Mandiri');
          }
          return {
            ...s,
            gamifikasi: {
              xp: newXp,
              level: newLevel,
              bintang: newStars,
              lencana: badges,
              rekorPenyelesaian: (s.gamifikasi?.rekorPenyelesaian || 3) + 1
            }
          };
        }
        return s;
      })
    );
  };

  const handleSaveToCurriculum = (result: AIGeneratorResult) => {
    if (result.kategori === 'modul_ajar') {
      const newModul: ModulAjar = {
        id: `modul-ai-${Date.now()}`,
        subjectId: result.subjectId,
        tpId: `tp-${result.subjectId}-1`,
        judul: result.topik,
        fase: 'Fase C',
        kelas: 'Kelas V',
        semester: 1,
        alokasiWaktu: '4 JP (2 Pertemuan)',
        penyusun: schoolProfile.guruKelas,
        instansi: schoolProfile.namaSekolah,
        identifikasiPesertaDidik: 'Peserta didik kelas V dengan keberagaman minat dan profil belajar visual-kinestetik.',
        karakteristikMateri: 'Materi kontekstual yang mengintegrasikan kearifan lokal pesisir dan perkebunan.',
        dimensiProfilLulusan: ['Bernalar Kritis', 'Kreatif', 'Bergotong Royong', 'Mandiri'],
        pemahamanBermakna: `Memahami esensi ${result.topik} untuk memecahkan permasalahan nyata di lingkungan sekitar.`,
        pertanyaanPemantik: [
          `Mengapa konsep ${result.topik} penting dalam kehidupan kita di Desa Pujiharjo?`,
          `Bagaimana cara kita membuktikan fenomena ini dalam kegiatan sehari-hari?`
        ],
        praktikPedagogis: 'Pendekatan Deep Learning (Mindful, Meaningful, Joyful) dengan metode eksperimen dan diskusi kelompok.',
        lingkunganBelajar: 'Ruang kelas kolaboratif, laboratorium mini alam pesisir Pantai Sipelot.',
        teknologiDigital: 'Platform Pujiharjo Smart Class, LKPD interaktif, simulasi digital.',
        kegiatanPendahuluan: [
          'Guru menyapa dan berdoa bersama.',
          'Apersepsi mengaitkan fenomena sekitar dengan materi.',
          'Menyampaikan tujuan pembelajaran dan alur aktivitas.'
        ],
        kegiatanInti: {
          memahami: ['Eksplorasi konsep melalui pemodelan dan literasi digital.'],
          mengaplikasi: ['Investigasi dan pengerjaan LKPD kolaboratif.'],
          merefleksi: ['Presentasi hasil temuan dan penyimpulan bersama kelompok.']
        },
        kegiatanPenutup: [
          'Refleksi bermakna bersama siswa.',
          'Umpan balik konstruktif dari guru.',
          'Doa penutup dan tindak lanjut mandiri.'
        ],
        diferensiasi: {
          konten: 'Tersedia teks visual, audio-penjelasan, dan objek nyata lingkungan.',
          proses: 'Pendampingan berjenjang (scaffolding) untuk siswa yang butuh asistensi.',
          produk: 'Siswa dapat memilih memaparkan dalam bentuk diagram, tulisan, atau presentasi lisan.'
        },
        asesmen: {
          awal: 'Tanya jawab pemahaman awal siswa.',
          formatif: 'Observasi keaktifan diskusi dan LKPD interaktif.',
          sumatif: 'Uji kompetensi akhir materi dan unjuk karya.'
        },
        remedialPengayaan: {
          remedial: 'Bimbingan terfokus pada konsep dasar dan pendampingan sebaya.',
          pengayaan: 'Tantangan investigasi lanjutan penerapan di Desa Pujiharjo.'
        },
        konteksLokalPujiharjo: 'Konteks alam pesisir Pantai Sipelot dan perkebunan rakyat Tirtoyudo.'
      };
      const updated = [newModul, ...modulList];
      setModulList(updated);
      StorageService.saveModulAjar(updated);
    } else if (result.kategori === 'lkpd') {
      const newLKPD: LKPDItem = {
        id: `lkpd-ai-${Date.now()}`,
        subjectId: result.subjectId,
        tpId: `tp-${result.subjectId}-1`,
        judul: `LKPD: ${result.topik}`,
        kelas: 'Kelas V',
        semester: 1,
        konteksLokal: 'SDN 1 Pujiharjo, Tirtoyudo',
        rubrikSkor: 'Skor 1-4 berdasarkan ketepatan, kelengkapan data, dan ketajaman analisis.',
        petunjuk: [
          'Baca instruksi dengan cermat.',
          'Diskusikan bersama kelompok.',
          'Tuliskan hasil refleksi dan kesimpulan.'
        ],
        kegiatan: [
          {
            langkah: 'Aktivitas Utama',
            pertanyaan: `Jelaskan bagaimana konsep ${result.topik} diterapkan dalam aktivitas sehari-hari di desa!`,
            tipeJawaban: 'isian'
          }
        ]
      };
      const updated = [newLKPD, ...lkpds];
      setLkpds(updated);
      StorageService.saveLKPDs(updated);
    } else if (result.kategori === 'soal_asesmen') {
      const newAsm: AsesmenItem = {
        id: `asm-ai-${Date.now()}`,
        subjectId: result.subjectId,
        tpId: `tp-${result.subjectId}-1`,
        judul: `Asesmen: ${result.topik}`,
        jenis: 'formatif',
        bentuk: 'Pilihan Ganda & Uraian',
        tanggal: new Date().toISOString().split('T')[0],
        kisiKisi: `Kisi-kisi asesmen kompetensi materi ${result.topik}`,
        soalList: [
          {
            id: `q-${Date.now()}-1`,
            pertanyaan: `Jelaskan konsep dasar tentang ${result.topik}!`,
            tipe: 'isian',
            kunci: `Konsep ${result.topik} dipahami secara bermakna dan kritis.`,
            pembahasan: 'Pemahaman konsep dasar berdasarkan esensi materi pembelajaran mendalam.',
            konteksLokal: 'SDN 1 Pujiharjo'
          },
          {
            id: `q-${Date.now()}-2`,
            pertanyaan: `Bagaimana pemanfaatan atau dampak ${result.topik} dalam kehidupan masyarakat Desa Pujiharjo?`,
            tipe: 'uraian',
            kunci: 'Penerapan kontekstual dalam bidang maritim pesisir atau pertanian perkebunan lokal.',
            pembahasan: 'Menguji penalaran kritis dan keterkaitan materi dengan lingkungan siswa.',
            konteksLokal: 'Desa Pujiharjo, Tirtoyudo'
          }
        ],
        rubrik: 'Rubrik penilaian 0 - 100 dengan skala interval ketercapaian KKTP'
      };
      const updated = [newAsm, ...asesmenList];
      setAsesmenList(updated);
      StorageService.saveAsesmen(updated);
    }
  };

  const handleRestoreDataSuccess = () => {
    setSchoolProfile(StorageService.getSchoolProfile());
    setSubjects(StorageService.getSubjects());
    setCpList(StorageService.getCP());
    setTpList(StorageService.getTP());
    setAtpList(StorageService.getATP());
    setModulList(StorageService.getModulAjar());
    setProyekList(StorageService.getProyek());
    setBukuList(StorageService.getBuku());
    setKktpList(StorageService.getKKTP());
    setAsesmenList(StorageService.getAsesmen());
    setStudentScores(StorageService.getScores());
    setStudents(StorageService.getStudents());
    setSchedule(StorageService.getSchedule());
    setCalendarEvents(StorageService.getCalendar());
    setReflections(StorageService.getReflections());
    setJournals(StorageService.getJournals());
    setTasks(StorageService.getTasks());
    setSubmissions(StorageService.getSubmissions());
    setLkpds(StorageService.getLKPDs());
    setPortfolios(StorageService.getPortfolios());
  };

  // Find currently selected student and subject object
  const activeStudent = students.find((s) => s.id === activeStudentId) || students[0];
  const currentSubject = subjects.find((s) => s.id === selectedSubjectId);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-150">
      
      {/* Top Navbar */}
      <Navbar
        schoolProfile={schoolProfile}
        userRole={userRole}
        activeStudentName={activeStudent?.nama}
        onToggleRole={handleToggleRole}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onUpdateLogo={handleUpdateLogo}
        onNavigate={handleNavigate}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Left Sidebar */}
        <Sidebar
          currentView={currentView}
          selectedSubjectId={selectedSubjectId}
          subjects={subjects}
          onNavigate={handleNavigate}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 lg:pl-72 p-4 sm:p-6 lg:p-8 min-w-0 transition-all">
          <div className="max-w-6xl mx-auto">
            
            {/* When in Siswa mode OR 'student-space' is selected: render dedicated Student Learning Platform */}
            {(userRole === 'siswa' || currentView === 'student-space') && (
              <StudentDashboardView
                student={activeStudent}
                allStudents={students}
                subjects={subjects}
                todaySchedule={schedule.filter((s) => s.hari === 'Senin')}
                tasks={tasks}
                submissions={submissions}
                lkpds={lkpds}
                portfolios={portfolios}
                books={bukuList}
                onChangeStudent={handleChangeStudent}
                onSubmitTask={handleSubmitTask}
                onNavigateToSubject={(sId) => handleNavigate('mapel', sId)}
              />
            )}

            {/* Teacher Views (Active when userRole === 'guru' and not student-space) */}
            {userRole === 'guru' && currentView !== 'student-space' && (
              <>
                {currentView === 'dashboard' && (
                  <DashboardView
                    schoolProfile={schoolProfile}
                    subjects={subjects}
                    schedule={schedule}
                    calendarEvents={calendarEvents}
                    students={students}
                    onNavigate={handleNavigate}
                    onOpenDiagnosticModal={() => {
                      if (asesmenList[0]) setActiveQuizItem(asesmenList[0]);
                    }}
                  />
                )}

                {currentView === 'jadwal' && (
                  <ScheduleView
                    schedule={schedule}
                    subjects={subjects}
                    schoolProfile={schoolProfile}
                    onUpdateSchedule={handleUpdateSchedule}
                    onNavigateToSubject={(sId) => handleNavigate('mapel', sId)}
                  />
                )}

                {currentView === 'kalender' && (
                  <CalendarView
                    calendarEvents={calendarEvents}
                    schoolProfile={schoolProfile}
                    onUpdateEvents={handleUpdateCalendar}
                  />
                )}

                {currentView === 'mapel' && !selectedSubjectId && (
                  <SubjectListView
                    subjects={subjects}
                    onSelectSubject={(sId) => setSelectedSubjectId(sId)}
                  />
                )}

                {currentView === 'mapel' && selectedSubjectId && currentSubject && (
                  <SubjectDetailView
                    subject={currentSubject}
                    allSubjects={subjects}
                    schoolProfile={schoolProfile}
                    cpList={cpList}
                    tpList={tpList}
                    atpList={atpList}
                    modulList={modulList}
                    proyekList={proyekList}
                    bukuList={bukuList}
                    kktpList={kktpList}
                    asesmenList={asesmenList}
                    refleksiList={reflections}
                    onSelectSubject={(sId) => setSelectedSubjectId(sId)}
                    onUpdateCP={handleUpdateCP}
                    onUpdateTP={handleUpdateTP}
                    onUpdateATP={handleUpdateATP}
                    onUpdateModul={handleUpdateModul}
                    onOpenDiagnosticQuiz={(asm) => setActiveQuizItem(asm)}
                  />
                )}

                {currentView === 'ai-assistant' && (
                  <AITeachingAssistantView
                    subjects={subjects}
                    onSaveToCurriculum={handleSaveToCurriculum}
                  />
                )}

                {currentView === 'analitik' && (
                  <LearningAnalyticsView
                    students={students}
                    subjects={subjects}
                    kktpList={kktpList}
                    asesmenList={asesmenList}
                    studentScores={studentScores}
                  />
                )}

                {currentView === 'database-siswa' && (
                  <StudentsDatabaseView
                    students={students}
                    onUpdateStudents={handleUpdateStudents}
                  />
                )}

                {currentView === 'kktp' && (
                  <KKTPView
                    kktpList={kktpList}
                    subjects={subjects}
                    onNavigateToSubject={(sId) => handleNavigate('mapel', sId)}
                  />
                )}

                {currentView === 'asesmen-awal' && (
                  <DiagnosticView
                    asesmenList={asesmenList}
                    studentScores={studentScores}
                    students={students}
                    subjects={subjects}
                    onOpenQuiz={(asm) => setActiveQuizItem(asm)}
                    onNavigateToSubject={(sId) => handleNavigate('mapel', sId)}
                  />
                )}

                {currentView === 'asesmen-evaluasi' && (
                  <AssessmentsView
                    asesmenList={asesmenList}
                    studentScores={studentScores}
                    students={students}
                    subjects={subjects}
                    onUpdateScore={handleUpdateScore}
                  />
                )}

                {currentView === 'refleksi' && (
                  <ReflectionsView
                    reflections={reflections}
                    subjects={subjects}
                    students={students}
                    userRole={userRole}
                    activeStudentId={activeStudentId}
                    onAddReflection={handleAddReflection}
                  />
                )}

                {currentView === 'siswa' && (
                  <StudentsView
                    students={students}
                    onUpdateStudents={handleUpdateStudents}
                  />
                )}

                {currentView === 'administrasi' && (
                  <TeacherAdministrationView
                    schoolProfile={schoolProfile}
                    journals={journals}
                    students={students}
                    subjects={subjects}
                    onUpdateSchoolProfile={handleUpdateSchoolProfile}
                    onUpdateJournals={handleUpdateJournals}
                    onRestoreDataSuccess={handleRestoreDataSuccess}
                  />
                )}
              </>
            )}

          </div>
        </main>
      </div>

      {/* Global Interactive Diagnostic Quiz Modal */}
      {activeQuizItem && (
        <DiagnosticQuizModal
          item={activeQuizItem}
          studentName={userRole === 'siswa' ? activeStudent.nama : 'Simulasi Guru (Angga Yoga P.)'}
          onClose={() => setActiveQuizItem(null)}
          onSaveResult={(newScore) => {
            const cur = studentScores[activeQuizItem.id] || [];
            handleUpdateScore(activeQuizItem.id, [newScore, ...cur]);
          }}
        />
      )}

      {/* Quick Search Modal (Ctrl + K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        subjects={subjects}
        schedule={schedule}
        students={students}
        calendarEvents={calendarEvents}
        onNavigate={handleNavigate}
      />

      {/* Clean Educational Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700 dark:text-slate-300">PUJIHARJO SMART CLASS</span>
            <span>·</span>
            <span>SD Negeri 1 Pujiharjo, Kec. Tirtoyudo, Kab. Malang</span>
          </div>
          <div>
            <span>Tahun Ajaran 2026/2027 · Kurikulum Merdeka Fase C (Kelas V)</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
