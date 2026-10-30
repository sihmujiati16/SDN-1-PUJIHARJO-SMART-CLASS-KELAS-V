import { AcademicCalendarEvent } from '../types';

export const INITIAL_CALENDAR_EVENTS: AcademicCalendarEvent[] = [
  // SEMESTER GANJIL 2026/2027
  {
    id: 'cal-1',
    judul: 'Hari Pertama Masuk Sekolah & MPLS Ramah Anak',
    tanggalMulai: '2026-07-13',
    tanggalSelesai: '2026-07-15',
    kategori: 'efektif',
    semester: 1,
    deskripsi: 'Awal Tahun Ajaran 2026/2027 di SD Negeri 1 Pujiharjo, pembagian ruang kelas V dan kontrak belajar gembira bersama Pak Angga.',
    dapatDiedit: true
  },
  {
    id: 'cal-2',
    judul: 'Asesmen Diagnostik Awal Fase C (Kognitif & Non-Kognitif)',
    tanggalMulai: '2026-07-20',
    tanggalSelesai: '2026-07-24',
    kategori: 'asesmen',
    semester: 1,
    deskripsi: 'Pemetaan gaya belajar, minat bakat, dan pemahaman dasar matematika serta literasi membaca murid kelas V.',
    dapatDiedit: true
  },
  {
    id: 'cal-3',
    judul: 'Upacara HUT Kemerdekaan RI ke-81',
    tanggalMulai: '2026-08-17',
    tanggalSelesai: '2026-08-17',
    kategori: 'libur_nasional',
    semester: 1,
    deskripsi: 'Peringatan Hari Kemerdekaan Republik Indonesia dan pawai budaya anak se-Kecamatan Tirtoyudo.',
    dapatDiedit: true
  },
  {
    id: 'cal-4',
    judul: 'Sumatif Tengah Semester (STS) Ganjil',
    tanggalMulai: '2026-09-21',
    tanggalSelesai: '2026-09-26',
    kategori: 'asesmen',
    semester: 1,
    deskripsi: 'Penilaian ketercapaian tujuan pembelajaran bab-bab awal semester ganjil untuk seluruh 10 mata pelajaran.',
    dapatDiedit: true
  },
  {
    id: 'cal-5',
    judul: 'Peringatan Maulid Nabi Muhammad SAW 1448 H',
    tanggalMulai: '2026-09-04',
    tanggalSelesai: '2026-09-04',
    kategori: 'libur_nasional',
    semester: 1,
    deskripsi: 'Hari libur nasional keagamaan.',
    dapatDiedit: true
  },
  {
    id: 'cal-6',
    judul: 'Gelar Karya Proyek: Garda Cilik Pesisir Pantai Sipelot',
    tanggalMulai: '2026-10-26',
    tanggalSelesai: '2026-10-28',
    kategori: 'proyek',
    semester: 1,
    deskripsi: 'Aksi nyata peduli lingkungan pesisir dan pemasangan plang ramah lingkungan karya siswa kelas V di Pantai Sipelot.',
    dapatDiedit: true
  },
  {
    id: 'cal-7',
    judul: 'Hari Pahlawan Nasional & Parade Puisi Pahlawan',
    tanggalMulai: '2026-11-10',
    tanggalSelesai: '2026-11-10',
    kategori: 'kegiatan_sekolah',
    semester: 1,
    deskripsi: 'Kegiatan pembiasaan literasi puisi kepahlawanan mengenang Arek-Arek Suroboyo dan pejuang Malang.',
    dapatDiedit: true
  },
  {
    id: 'cal-8',
    judul: 'Sumatif Akhir Semester (SAS) Ganjil',
    tanggalMulai: '2026-11-30',
    tanggalSelesai: '2026-12-05',
    kategori: 'asesmen',
    semester: 1,
    deskripsi: 'Asesmen komprehensif akhir semester ganjil tahun ajaran 2026/2027.',
    dapatDiedit: true
  },
  {
    id: 'cal-9',
    judul: 'Pekan Remedial, Pengayaan & Olah Nilai Rapor',
    tanggalMulai: '2026-12-07',
    tanggalSelesai: '2026-12-16',
    kategori: 'efektif',
    semester: 1,
    deskripsi: 'Bimbingan khusus bagi siswa yang belum mencapai KKTP dan penyusunan deskripsi capaian rapor kurikulum merdeka.',
    dapatDiedit: true
  },
  {
    id: 'cal-10',
    judul: 'Penyerahan Buku Laporan Hasil Belajar (Rapor) Semester Ganjil',
    tanggalMulai: '2026-12-18',
    tanggalSelesai: '2026-12-18',
    kategori: 'rapor',
    semester: 1,
    deskripsi: 'Pertemuan wali murid kelas V dengan Pak Angga Yoga Pratama untuk konsultasi tumbuh kembang anak.',
    dapatDiedit: true
  },
  {
    id: 'cal-11',
    judul: 'Hari Raya Natal & Libur Semester Ganjil',
    tanggalMulai: '2026-12-21',
    tanggalSelesai: '2026-12-31',
    kategori: 'libur_semester',
    semester: 1,
    deskripsi: 'Libur pembelajaran semester ganjil dan libur perayaan Natal 2026.',
    dapatDiedit: true
  },

  // SEMESTER GENAP 2026/2027
  {
    id: 'cal-12',
    judul: 'Hari Pertama Masuk Sekolah Semester Genap',
    tanggalMulai: '2027-01-04',
    tanggalSelesai: '2027-01-04',
    kategori: 'efektif',
    semester: 2,
    deskripsi: 'Memulai kegiatan belajar mengajar semester genap dan penegakan target resolusi belajar murid kelas V.',
    dapatDiedit: true
  },
  {
    id: 'cal-13',
    judul: 'Peringatan Isra Mikraj & Tahun Baru Imlek 2578',
    tanggalMulai: '2027-02-06',
    tanggalSelesai: '2027-02-07',
    kategori: 'libur_nasional',
    semester: 2,
    deskripsi: 'Hari libur nasional keagamaan dan toleransi antarumat beragama.',
    dapatDiedit: true
  },
  {
    id: 'cal-14',
    judul: 'Sumatif Tengah Semester (STS) Genap & Libur Awal Ramadhan 1448 H',
    tanggalMulai: '2027-03-08',
    tanggalSelesai: '2027-03-13',
    kategori: 'asesmen',
    semester: 2,
    deskripsi: 'Penilaian tengah semester genap dan pondok Ramadhan bagi siswa muslim.',
    dapatDiedit: true
  },
  {
    id: 'cal-15',
    judul: 'Libur Hari Raya Idul Fitri 1448 H & Cuti Bersama',
    tanggalMulai: '2027-03-22',
    tanggalSelesai: '2027-03-27',
    kategori: 'libur_nasional',
    semester: 2,
    deskripsi: 'Libur hari raya Idul Fitri 1448 H.',
    dapatDiedit: true
  },
  {
    id: 'cal-16',
    judul: 'Pelaksanaan Proyek Wirausaha Cilik Kopi & Pisang Tirtoyudo',
    tanggalMulai: '2027-04-19',
    tanggalSelesai: '2027-04-24',
    kategori: 'proyek',
    semester: 2,
    deskripsi: 'Kunjungan edukatif sentra kopi dan pembuatan kemasan produk bernilai ekonomi.',
    dapatDiedit: true
  },
  {
    id: 'cal-17',
    judul: 'Hari Pendidikan Nasional (Hardiknas)',
    tanggalMulai: '2027-05-02',
    tanggalSelesai: '2027-05-02',
    kategori: 'kegiatan_sekolah',
    semester: 2,
    deskripsi: 'Upacara bendera Hardiknas mengenang Ki Hajar Dewantara dan penganugerahan Bintang Pelajar SDN 1 Pujiharjo.',
    dapatDiedit: true
  },
  {
    id: 'cal-18',
    judul: 'Sumatif Akhir Tahun (SAT) Kenaikan Kelas Fase C',
    tanggalMulai: '2027-05-24',
    tanggalSelesai: '2027-05-29',
    kategori: 'asesmen',
    semester: 2,
    deskripsi: 'Evaluasi akhir tahun pembelajaran kelas V untuk penentuan kenaikan ke kelas VI.',
    dapatDiedit: true
  },
  {
    id: 'cal-19',
    judul: 'Hari Lahir Pancasila',
    tanggalMulai: '2027-06-01',
    tanggalSelesai: '2027-06-01',
    kategori: 'libur_nasional',
    semester: 2,
    deskripsi: 'Hari libur nasional memperingati lahirnya dasar falsafah negara.',
    dapatDiedit: true
  },
  {
    id: 'cal-20',
    judul: 'Penyerahan Rapor Kenaikan Kelas TA 2026/2027',
    tanggalMulai: '2027-06-18',
    tanggalSelesai: '2027-06-18',
    kategori: 'rapor',
    semester: 2,
    deskripsi: 'Titimangsa resmi pembagian Rapor Kenaikan Kelas V ke Kelas VI SD Negeri 1 Pujiharjo.',
    dapatDiedit: true
  },
  {
    id: 'cal-21',
    judul: 'Libur Akhir Tahun Ajaran 2026/2027',
    tanggalMulai: '2027-06-21',
    tanggalSelesai: '2027-07-10',
    kategori: 'libur_semester',
    semester: 2,
    deskripsi: 'Libur panjang akhir tahun ajaran menyambut tahun ajaran baru 2027/2028.',
    dapatDiedit: true
  }
];
