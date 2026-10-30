export type SubjectId =
  | 'bahasa-indonesia'
  | 'bahasa-inggris'
  | 'matematika'
  | 'ipas'
  | 'pancasila'
  | 'seni-budaya'
  | 'pjok'
  | 'pai-bp'
  | 'pak-bp'
  | 'bahasa-jawa';

export interface Subject {
  id: SubjectId;
  name: string;
  code: string;
  category: 'wajib' | 'pilihan_agama' | 'mulok';
  jpPerWeek: number;
  iconName: string;
  color: string;
  bgLight: string;
  description: string;
  fase: string;
  kelas: string;
}

export interface CapaianPembelajaran {
  id: string;
  subjectId: SubjectId;
  elemen: string;
  fase: string;
  kelas: string;
  deskripsi: string;
  semester: 'Ganjil' | 'Genap' | 'Semua';
  sumberResmi: string;
  tahun: string;
}

export interface TujuanPembelajaran {
  id: string;
  subjectId: SubjectId;
  cpId: string;
  kodeTp: string;
  elemen: string;
  bab: string;
  deskripsi: string;
  dimensiProfilLulusan: string[];
  semester: 1 | 2;
  alokasiJp: number;
}

export interface AlurTujuanPembelajaran {
  id: string;
  subjectId: SubjectId;
  tpId: string;
  kodeTp: string;
  urutan: number;
  materiPokok: string;
  alokasiJp: number;
  semester: 1 | 2;
  status: 'Belum Dimulai' | 'Sedang Berjalan' | 'Selesai';
  keterangan: string;
}

export interface ModulAjar {
  id: string;
  subjectId: SubjectId;
  tpId: string;
  judul: string;
  fase: string;
  kelas: string;
  semester: 1 | 2;
  alokasiWaktu: string;
  penyusun: string;
  instansi: string;
  identifikasiPesertaDidik: string;
  karakteristikMateri: string;
  dimensiProfilLulusan: string[];
  pemahamanBermakna: string;
  pertanyaanPemantik: string[];
  praktikPedagogis: string;
  lingkunganBelajar: string;
  teknologiDigital: string;
  kegiatanPendahuluan: string[];
  kegiatanInti: {
    memahami: string[];
    mengaplikasi: string[];
    merefleksi: string[];
  };
  kegiatanPenutup: string[];
  diferensiasi: {
    konten: string;
    proses: string;
    produk: string;
  };
  asesmen: {
    awal: string;
    formatif: string;
    sumatif: string;
  };
  remedialPengayaan: {
    remedial: string;
    pengayaan: string;
  };
  konteksLokalPujiharjo: string;
}

export interface ProyekPembelajaran {
  id: string;
  judul: string;
  tema: string;
  tujuan: string;
  mapelTerkait: string[];
  dimensiProfil: string[];
  pertanyaanMendasar: string;
  langkahPelaksanaan: string[];
  alatBahan: string[];
  jadwal: string;
  produkKarya: string;
  konteksPujiharjo: string;
  rubrikPenilaian: {
    kriteria: string;
    skor4: string;
    skor3: string;
    skor2: string;
    skor1: string;
  }[];
  dokumentasiFoto?: string[];
  refleksiProyek: string;
}

export interface BukuReferensi {
  id: string;
  subjectId: SubjectId;
  jenis: 'siswa' | 'guru';
  judul: string;
  penulis: string;
  penerbit: string;
  tahun: string;
  isbn: string;
  sumber: string;
  urlSibi: string;
  urlDownload?: string;
  daftarIsi: string[];
  babSedangDipelajari: string;
  statusKetersediaan: 'Tersedia Resmi di SIBI' | 'Buku Resmi Kemendikdasmen' | 'Muatan Lokal Disdik';
}

export interface KKTPItem {
  id: string;
  subjectId: SubjectId;
  tpId: string;
  tujuanPembelajaranText: string;
  indikatorKetercapaian: string[];
  kriteriaPenilaian: string;
  kategori: {
    belumMencapai: { rentang: string; deskripsi: string; tindakLanjut: string };
    mulaiMencapai: { rentang: string; deskripsi: string; tindakLanjut: string };
    mencapai: { rentang: string; deskripsi: string; tindakLanjut: string };
    melampaui: { rentang: string; deskripsi: string; tindakLanjut: string };
  };
}

export interface DiagnosticQuestion {
  id: string;
  pertanyaan: string;
  tipe: 'pilihan_ganda' | 'isian' | 'uraian';
  opsi?: string[];
  kunci: string;
  pembahasan: string;
  konteksLokal?: string;
  gambarUrl?: string;
}

export interface AsesmenItem {
  id: string;
  subjectId: SubjectId;
  tpId: string;
  judul: string;
  jenis: 'diagnostik' | 'formatif' | 'sumatif';
  bentuk: 'Pilihan Ganda & Uraian' | 'Praktik/Kinerja' | 'Proyek' | 'Produk' | 'Tes Tertulis';
  tanggal: string;
  kisiKisi: string;
  soalList: DiagnosticQuestion[];
  rubrik: string;
}

export interface StudentScore {
  studentId: string;
  studentName: string;
  score: number;
  kategori: 'Belum Mencapai' | 'Mulai Mencapai' | 'Mencapai' | 'Melampaui';
  miskonsepsiTerdeteksi?: string;
  tindakLanjut: string;
}

export interface Student {
  id: string;
  noUrut: number;
  nis: string;
  nisn: string;
  nik: string; // Restricted sensitive data
  nama: string;
  jenisKelamin: 'L' | 'P';
  agama: 'Islam' | 'Kristen';
  tempatLahir: string;
  tanggalLahir: string;
  namaOrtu?: string;
  alamat?: string;
  telepon?: string;
  fotoUrl?: string;
  statusKelengkapan: 'Lengkap' | 'Perlu Verifikasi NIS' | 'Belum Lengkap';
  kehadiran: {
    hadir: number;
    sakit: number;
    izin: number;
    alpa: number;
  };
  catatanPerkembangan: string;
  gamifikasi: {
    xp: number;
    bintang: number;
    level: number;
    lencana: string[];
    rekorPenyelesaian: number;
  };
  profilPencapaian: {
    pahamUtuh: number;
    butuhPendampingan: number;
    pengayaan: number;
  };
}

export interface StudentTask {
  id: string;
  subjectId: SubjectId;
  judul: string;
  tenggatWaktu: string;
  instruksi: string;
  materiPendukung: string;
  poinMaksimal: number;
  tipe: 'lkpd' | 'proyek' | 'latihan' | 'portofolio';
}

export interface StudentTaskSubmission {
  id: string;
  taskId: string;
  studentId: string;
  tanggalKirim: string;
  status: 'Belum Mengerjakan' | 'Terkirim' | 'Dinilai' | 'Perlu Perbaikan';
  jawabanTeks?: string;
  fotoLampiran?: string;
  nilai?: number;
  umpanBalikGuru?: string;
}

export interface LKPDItem {
  id: string;
  subjectId: SubjectId;
  tpId: string;
  judul: string;
  kelas: string;
  semester: 1 | 2;
  petunjuk: string[];
  kegiatan: {
    langkah: string;
    pertanyaan: string;
    tipeJawaban: 'isian' | 'gambar' | 'tabel' | 'pilihan';
    opsi?: string[];
  }[];
  konteksLokal: string;
  rubrikSkor: string;
}

export interface PortfolioItem {
  id: string;
  studentId: string;
  subjectId: SubjectId;
  judul: string;
  tanggal: string;
  kategori: 'Karya Seni' | 'Laporan Praktik' | 'Proyek Lokal' | 'LKPD Unggulan';
  deskripsi: string;
  fotoUrl?: string;
  umpanBalik: string;
  nilai: number;
}

export interface AIGeneratorResult {
  id: string;
  kategori:
    | 'modul_ajar'
    | 'lkpd'
    | 'soal_asesmen'
    | 'rekomendasi_remedial'
    | 'pertanyaan_pemantik'
    | 'proyek_pbl'
    | 'refleksi'
    | 'narasi_rapor';
  subjectId: SubjectId;
  topik: string;
  konten: string;
  dibuatPada: string;
  statusVerifikasi: 'Draf AI' | 'Diverifikasi Guru' | 'Digunakan';
}

export interface ScheduleItem {
  id: string;
  hari: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu';
  jamMulai: string;
  jamSelesai: string;
  kegiatan: string;
  mapelId?: SubjectId;
  jp: number;
  guruPengajar: string;
  ruangan: string;
  keterangan?: string;
}

export interface AcademicCalendarEvent {
  id: string;
  judul: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  kategori:
    | 'efektif'
    | 'libur_nasional'
    | 'libur_semester'
    | 'asesmen'
    | 'rapor'
    | 'proyek'
    | 'kegiatan_sekolah'
    | 'ekstrakurikuler';
  semester: 1 | 2;
  deskripsi: string;
  dapatDiedit?: boolean;
}

export interface ReflectionEntry {
  id: string;
  tanggal: string;
  jenis: 'guru' | 'siswa';
  subjectId?: SubjectId;
  authorName: string;
  studentId?: string;
  ratingPemahaman?: number; // 1-5
  emotikon?: 'senang' | 'paham' | 'bingung' | 'perlu_bantuan';
  q1: string; // Guru: Apakah TP tercapai? / Siswa: Apa yang saya pelajari hari ini?
  q2: string; // Guru: Bagaimana keterlibatan siswa? / Siswa: Apa hal paling menarik?
  q3: string; // Guru: Apa yang berjalan baik? / Siswa: Apa yang belum saya pahami?
  q4: string; // Guru: Apa kendala yang ditemukan? / Siswa: Bagaimana menerapkan di kehidupan?
  q5: string; // Guru: Rencana perbaikan? / Siswa: Apa yang ingin dipelajari berikutnya?
}

export interface JurnalMengajar {
  id: string;
  tanggal: string;
  hari: string;
  jamKe: string;
  subjectId: SubjectId;
  materiAjar: string;
  kodeTp: string;
  tujuanRingkas: string;
  hadir: number;
  tidakHadir: number;
  keteranganAbsen: string;
  catatanKejadian: string;
  tindakLanjut: string;
}
