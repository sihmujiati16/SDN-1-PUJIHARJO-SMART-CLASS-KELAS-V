import {
  Subject,
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
  PortfolioItem
} from '../types';

import {
  SUBJECTS,
  INITIAL_CAPAIAN_PEMBELAJARAN,
  INITIAL_TUJUAN_PEMBELAJARAN,
  INITIAL_ALUR_TUJUAN_PEMBELAJARAN,
  INITIAL_MODUL_AJAR,
  INITIAL_KKTP_ITEMS
} from '../data/curriculumData';

import { INITIAL_SCHEDULE } from '../data/scheduleData';
import { OFFICIAL_BOOKS } from '../data/booksData';
import { INITIAL_PROJECTS } from '../data/projectsData';
import { INITIAL_CALENDAR_EVENTS } from '../data/calendarData';
import { INITIAL_STUDENTS } from '../data/studentsData';
import { INITIAL_ASSESSMENTS, INITIAL_STUDENT_SCORES } from '../data/assessmentData';
import { INITIAL_REFLECTIONS, INITIAL_JOURNALS } from '../data/reflectionsData';
import {
  INITIAL_TASKS,
  INITIAL_SUBMISSIONS,
  INITIAL_LKPDS,
  INITIAL_PORTFOLIOS
} from '../data/studentLearningData';

const PREFIX = 'pujiharjo_smart_class_v1_';

export interface SchoolProfile {
  namaSekolah: string;
  npsn: string;
  alamat: string;
  desa: string;
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  kodePos: string;
  tahunAjaran: string;
  kelas: string;
  fase: string;
  guruKelas: string;
  nipGuru: string;
  kepalaSekolah: string;
  nipKepalaSekolah: string;
  tagline: string;
  logoUrl: string;
}

export const DEFAULT_SCHOOL_PROFILE: SchoolProfile = {
  namaSekolah: 'SD NEGERI 1 PUJIHARJO',
  npsn: '20518742',
  alamat: 'Jl. Pantai Sipelot No. 12, Dusun Krajan',
  desa: 'Pujiharjo',
  kecamatan: 'Tirtoyudo',
  kabupaten: 'Kabupaten Malang',
  provinsi: 'Jawa Timur',
  kodePos: '65182',
  tahunAjaran: '2026/2027',
  kelas: 'Kelas V (Lima)',
  fase: 'Fase C',
  guruKelas: 'Angga Yoga Pratama, S.E.',
  nipGuru: '199105142024211009',
  kepalaSekolah: 'Sih Mujiati, S.Pd.SD',
  nipKepalaSekolah: '197707252014082002',
  tagline: 'Satu Aplikasi untuk Pembelajaran, Administrasi, dan Pengembangan Kompetensi Siswa.',
  logoUrl: ''
};

function getStored<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (!raw) return defaultValue;
    return JSON.parse(raw);
  } catch (e) {
    console.error(`Error loading key ${key}:`, e);
    return defaultValue;
  }
}

function setStored<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving key ${key}:`, e);
  }
}

export const StorageService = {
  getSchoolProfile(): SchoolProfile {
    return getStored<SchoolProfile>('school_profile', DEFAULT_SCHOOL_PROFILE);
  },
  saveSchoolProfile(profile: SchoolProfile): void {
    setStored('school_profile', profile);
  },

  getSubjects(): Subject[] {
    return getStored<Subject[]>('subjects', SUBJECTS);
  },

  getCP(): CapaianPembelajaran[] {
    return getStored<CapaianPembelajaran[]>('cp', INITIAL_CAPAIAN_PEMBELAJARAN);
  },
  saveCP(list: CapaianPembelajaran[]): void {
    setStored('cp', list);
  },

  getTP(): TujuanPembelajaran[] {
    return getStored<TujuanPembelajaran[]>('tp', INITIAL_TUJUAN_PEMBELAJARAN);
  },
  saveTP(list: TujuanPembelajaran[]): void {
    setStored('tp', list);
  },

  getATP(): AlurTujuanPembelajaran[] {
    return getStored<AlurTujuanPembelajaran[]>('atp', INITIAL_ALUR_TUJUAN_PEMBELAJARAN);
  },
  saveATP(list: AlurTujuanPembelajaran[]): void {
    setStored('atp', list);
  },

  getModulAjar(): ModulAjar[] {
    return getStored<ModulAjar[]>('modul_ajar', INITIAL_MODUL_AJAR);
  },
  saveModulAjar(list: ModulAjar[]): void {
    setStored('modul_ajar', list);
  },

  getProyek(): ProyekPembelajaran[] {
    return getStored<ProyekPembelajaran[]>('proyek', INITIAL_PROJECTS);
  },
  saveProyek(list: ProyekPembelajaran[]): void {
    setStored('proyek', list);
  },

  getBuku(): BukuReferensi[] {
    return getStored<BukuReferensi[]>('buku', OFFICIAL_BOOKS);
  },
  saveBuku(list: BukuReferensi[]): void {
    setStored('buku', list);
  },

  getKKTP(): KKTPItem[] {
    return getStored<KKTPItem[]>('kktp', INITIAL_KKTP_ITEMS);
  },
  saveKKTP(list: KKTPItem[]): void {
    setStored('kktp', list);
  },

  getAsesmen(): AsesmenItem[] {
    return getStored<AsesmenItem[]>('asesmen', INITIAL_ASSESSMENTS);
  },
  saveAsesmen(list: AsesmenItem[]): void {
    setStored('asesmen', list);
  },

  getScores(): Record<string, StudentScore[]> {
    return getStored<Record<string, StudentScore[]>>('scores', INITIAL_STUDENT_SCORES);
  },
  saveScores(scores: Record<string, StudentScore[]>): void {
    setStored('scores', scores);
  },

  getStudents(): Student[] {
    return getStored<Student[]>('students', INITIAL_STUDENTS);
  },
  saveStudents(list: Student[]): void {
    setStored('students', list);
  },

  getSchedule(): ScheduleItem[] {
    return getStored<ScheduleItem[]>('schedule', INITIAL_SCHEDULE);
  },
  saveSchedule(list: ScheduleItem[]): void {
    setStored('schedule', list);
  },

  getCalendar(): AcademicCalendarEvent[] {
    return getStored<AcademicCalendarEvent[]>('calendar', INITIAL_CALENDAR_EVENTS);
  },
  saveCalendar(list: AcademicCalendarEvent[]): void {
    setStored('calendar', list);
  },

  getReflections(): ReflectionEntry[] {
    return getStored<ReflectionEntry[]>('reflections', INITIAL_REFLECTIONS);
  },
  saveReflections(list: ReflectionEntry[]): void {
    setStored('reflections', list);
  },

  getJournals(): JurnalMengajar[] {
    return getStored<JurnalMengajar[]>('journals', INITIAL_JOURNALS);
  },
  saveJournals(list: JurnalMengajar[]): void {
    setStored('journals', list);
  },

  getTasks(): StudentTask[] {
    return getStored<StudentTask[]>('tasks', INITIAL_TASKS);
  },
  saveTasks(list: StudentTask[]): void {
    setStored('tasks', list);
  },

  getSubmissions(): StudentTaskSubmission[] {
    return getStored<StudentTaskSubmission[]>('submissions', INITIAL_SUBMISSIONS);
  },
  saveSubmissions(list: StudentTaskSubmission[]): void {
    setStored('submissions', list);
  },

  getLKPDs(): LKPDItem[] {
    return getStored<LKPDItem[]>('lkpds', INITIAL_LKPDS);
  },
  saveLKPDs(list: LKPDItem[]): void {
    setStored('lkpds', list);
  },

  getPortfolios(): PortfolioItem[] {
    return getStored<PortfolioItem[]>('portfolios', INITIAL_PORTFOLIOS);
  },
  savePortfolios(list: PortfolioItem[]): void {
    setStored('portfolios', list);
  },

  getUserRole(): 'guru' | 'siswa' {
    return getStored<'guru' | 'siswa'>('user_role', 'guru');
  },
  setUserRole(role: 'guru' | 'siswa'): void {
    setStored('user_role', role);
  },

  getActiveStudentId(): string {
    return getStored<string>('active_student_id', 'std-02');
  },
  setActiveStudentId(id: string): void {
    setStored('active_student_id', id);
  },

  getDarkMode(): boolean {
    return getStored<boolean>('dark_mode', false);
  },
  setDarkMode(isDark: boolean): void {
    setStored('dark_mode', isDark);
  },

  // Export all application state into a clean JSON file backup
  exportFullBackup(): string {
    const backupData = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      schoolProfile: this.getSchoolProfile(),
      subjects: this.getSubjects(),
      cp: this.getCP(),
      tp: this.getTP(),
      atp: this.getATP(),
      modulAjar: this.getModulAjar(),
      proyek: this.getProyek(),
      buku: this.getBuku(),
      kktp: this.getKKTP(),
      asesmen: this.getAsesmen(),
      scores: this.getScores(),
      students: this.getStudents(),
      schedule: this.getSchedule(),
      calendar: this.getCalendar(),
      reflections: this.getReflections(),
      journals: this.getJournals(),
      tasks: this.getTasks(),
      submissions: this.getSubmissions(),
      lkpds: this.getLKPDs(),
      portfolios: this.getPortfolios()
    };
    return JSON.stringify(backupData, null, 2);
  },

  // Import application state from JSON
  importBackup(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (data.schoolProfile) this.saveSchoolProfile(data.schoolProfile);
      if (data.cp) this.saveCP(data.cp);
      if (data.tp) this.saveTP(data.tp);
      if (data.atp) this.saveATP(data.atp);
      if (data.modulAjar) this.saveModulAjar(data.modulAjar);
      if (data.proyek) this.saveProyek(data.proyek);
      if (data.buku) this.saveBuku(data.buku);
      if (data.kktp) this.saveKKTP(data.kktp);
      if (data.asesmen) this.saveAsesmen(data.asesmen);
      if (data.scores) this.saveScores(data.scores);
      if (data.students) this.saveStudents(data.students);
      if (data.schedule) this.saveSchedule(data.schedule);
      if (data.calendar) this.saveCalendar(data.calendar);
      if (data.reflections) this.saveReflections(data.reflections);
      if (data.journals) this.saveJournals(data.journals);
      if (data.tasks) this.saveTasks(data.tasks);
      if (data.submissions) this.saveSubmissions(data.submissions);
      if (data.lkpds) this.saveLKPDs(data.lkpds);
      if (data.portfolios) this.savePortfolios(data.portfolios);
      return true;
    } catch (e) {
      console.error('Import error:', e);
      return false;
    }
  },

  // Reset to default seed dataset
  resetToDefaults(): void {
    localStorage.clear();
  }
};
