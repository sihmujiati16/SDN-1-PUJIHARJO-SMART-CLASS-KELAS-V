import { ScheduleItem } from '../types';

export const INITIAL_SCHEDULE: ScheduleItem[] = [
  // SENIN
  {
    id: 'senin-1',
    hari: 'Senin',
    jamMulai: '07:00',
    jamSelesai: '07:50',
    kegiatan: 'Upacara Bendera',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama & Dewan Guru',
    ruangan: 'Lapangan Utama SDN 1 Pujiharjo',
    keterangan: 'Upacara bendera rutin & penanaman nilai nasionalisme'
  },
  {
    id: 'senin-2',
    hari: 'Senin',
    jamMulai: '07:50',
    jamSelesai: '09:00',
    kegiatan: 'Bahasa Indonesia',
    mapelId: 'bahasa-indonesia',
    jp: 2,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Bab 1: Aku yang Unik (Menyimak & Membaca Nyaring)'
  },
  {
    id: 'senin-3',
    hari: 'Senin',
    jamMulai: '09:00',
    jamSelesai: '09:30',
    kegiatan: 'Istirahat',
    jp: 0,
    guruPengajar: '-',
    ruangan: 'Halaman Sekolah',
    keterangan: 'Istirahat & makan bekal sehat bergizi'
  },
  {
    id: 'senin-4',
    hari: 'Senin',
    jamMulai: '09:30',
    jamSelesai: '10:40',
    kegiatan: 'Matematika',
    mapelId: 'matematika',
    jp: 2,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Operasi Hitung Pecahan Biasa & Campuran'
  },
  {
    id: 'senin-5',
    hari: 'Senin',
    jamMulai: '10:40',
    jamSelesai: '11:50',
    kegiatan: 'IPAS',
    mapelId: 'ipas',
    jp: 2,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Melihat karena Cahaya, Mendengar karena Bunyi'
  },

  // SELASA
  {
    id: 'selasa-1',
    hari: 'Selasa',
    jamMulai: '07:00',
    jamSelesai: '07:15',
    kegiatan: 'SPN (Santun Pagi Nusantara)',
    jp: 0,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Penyambutan siswa 5S (Senyum, Salam, Sapa, Sopan, Santun)'
  },
  {
    id: 'selasa-2',
    hari: 'Selasa',
    jamMulai: '07:15',
    jamSelesai: '08:25',
    kegiatan: 'Matematika',
    mapelId: 'matematika',
    jp: 2,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Penjumlahan & Pengurangan Pecahan Penyebut Berbeda'
  },
  {
    id: 'selasa-3',
    hari: 'Selasa',
    jamMulai: '08:25',
    jamSelesai: '09:00',
    kegiatan: 'Pendidikan Pancasila',
    mapelId: 'pancasila',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Pancasila dalam Kehidupanku & Nilai Gotong Royong'
  },
  {
    id: 'selasa-4',
    hari: 'Selasa',
    jamMulai: '09:00',
    jamSelesai: '09:30',
    kegiatan: 'Istirahat',
    jp: 0,
    guruPengajar: '-',
    ruangan: 'Halaman Sekolah',
    keterangan: 'Istirahat'
  },
  {
    id: 'selasa-5',
    hari: 'Selasa',
    jamMulai: '09:30',
    jamSelesai: '10:05',
    kegiatan: 'IPAS',
    mapelId: 'ipas',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Laboratorium Mini / Kelas V',
    keterangan: 'Eksperimen Sifat-Sifat Cahaya'
  },
  {
    id: 'selasa-6',
    hari: 'Selasa',
    jamMulai: '10:05',
    jamSelesai: '10:40',
    kegiatan: 'Bahasa Indonesia',
    mapelId: 'bahasa-indonesia',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Kosakata Baru & Menulis Paragraf Deskripsi'
  },
  {
    id: 'selasa-7',
    hari: 'Selasa',
    jamMulai: '10:40',
    jamSelesai: '11:50',
    kegiatan: 'Bahasa Indonesia',
    mapelId: 'bahasa-indonesia',
    jp: 2,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Membaca Cerita Rakyat Malang & Berdiskusi'
  },

  // RABU
  {
    id: 'rabu-1',
    hari: 'Rabu',
    jamMulai: '07:00',
    jamSelesai: '07:15',
    kegiatan: 'SPN (Santun Pagi Nusantara)',
    jp: 0,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Pembiasaan karakter & doa pagi bersama'
  },
  {
    id: 'rabu-2',
    hari: 'Rabu',
    jamMulai: '07:15',
    jamSelesai: '08:25',
    kegiatan: 'Bahasa Indonesia',
    mapelId: 'bahasa-indonesia',
    jp: 2,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Presentasi Hasil Wawancara & Cerita Diri'
  },
  {
    id: 'rabu-3',
    hari: 'Rabu',
    jamMulai: '08:25',
    jamSelesai: '09:00',
    kegiatan: 'Matematika',
    mapelId: 'matematika',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Penyelesaian Masalah Nyata Pecahan'
  },
  {
    id: 'rabu-4',
    hari: 'Rabu',
    jamMulai: '09:00',
    jamSelesai: '09:30',
    kegiatan: 'Istirahat',
    jp: 0,
    guruPengajar: '-',
    ruangan: 'Halaman Sekolah',
    keterangan: 'Istirahat'
  },
  {
    id: 'rabu-5',
    hari: 'Rabu',
    jamMulai: '09:30',
    jamSelesai: '10:40',
    kegiatan: 'IPAS',
    mapelId: 'ipas',
    jp: 2,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Struktur Telinga & Mekanisme Mendengar'
  },
  {
    id: 'rabu-6',
    hari: 'Rabu',
    jamMulai: '10:40',
    jamSelesai: '11:50',
    kegiatan: 'Seni Budaya',
    mapelId: 'seni-budaya',
    jp: 2,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kesenian / Kelas V',
    keterangan: 'Mengenal Prinsip Seni Rupa & Motif Topeng Malang'
  },

  // KAMIS
  {
    id: 'kamis-1',
    hari: 'Kamis',
    jamMulai: '07:00',
    jamSelesai: '07:15',
    kegiatan: 'SPN (Santun Pagi Nusantara)',
    jp: 0,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Santun Pagi & Pengecekan Kesiapan Belajar'
  },
  {
    id: 'kamis-2',
    hari: 'Kamis',
    jamMulai: '07:15',
    jamSelesai: '09:00',
    kegiatan: 'PJOK',
    mapelId: 'pjok',
    jp: 3,
    guruPengajar: 'Guru PJOK SDN 1 Pujiharjo',
    ruangan: 'Lapangan Olahraga',
    keterangan: 'Pola Gerak Dasar Permainan Bola Besar (Sepak Bola & Voli)'
  },
  {
    id: 'kamis-3',
    hari: 'Kamis',
    jamMulai: '09:00',
    jamSelesai: '09:30',
    kegiatan: 'Istirahat',
    jp: 0,
    guruPengajar: '-',
    ruangan: 'Halaman Sekolah',
    keterangan: 'Istirahat'
  },
  {
    id: 'kamis-4',
    hari: 'Kamis',
    jamMulai: '09:30',
    jamSelesai: '11:15',
    kegiatan: 'Pendidikan Agama',
    mapelId: 'pai-bp',
    jp: 3,
    guruPengajar: 'Guru PAI & Guru PAK',
    ruangan: 'Ruang Agama / Kelas V',
    keterangan: 'PAI: Surah At-Tin & Menyayangi Anak Yatim | PAK: Allah Pemelihara'
  },
  {
    id: 'kamis-5',
    hari: 'Kamis',
    jamMulai: '11:15',
    jamSelesai: '11:50',
    kegiatan: 'Pendidikan Pancasila',
    mapelId: 'pancasila',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Norma dan Aturan dalam Kehidupan Sehari-hari'
  },

  // JUMAT
  {
    id: 'jumat-1',
    hari: 'Jumat',
    jamMulai: '07:00',
    jamSelesai: '07:15',
    kegiatan: 'Pembiasaan',
    jp: 0,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Halaman / Masjid / Kelas',
    keterangan: 'Jum’at Bersih, Sehat, dan Religi (Asmaul Husna/Doa Bersama)'
  },
  {
    id: 'jumat-2',
    hari: 'Jumat',
    jamMulai: '07:15',
    jamSelesai: '08:25',
    kegiatan: 'Muatan Lokal',
    mapelId: 'bahasa-jawa',
    jp: 2,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Bahasa Jawa: Unggah-ungguh Basa & Sandhangan Aksara Jawa'
  },
  {
    id: 'jumat-3',
    hari: 'Jumat',
    jamMulai: '08:25',
    jamSelesai: '09:00',
    kegiatan: 'Bahasa Inggris',
    mapelId: 'bahasa-inggris',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Unit 1: What a Delicious Bakso! (Expressing Taste & Price)'
  },
  {
    id: 'jumat-4',
    hari: 'Jumat',
    jamMulai: '09:00',
    jamSelesai: '09:30',
    kegiatan: 'Istirahat',
    jp: 0,
    guruPengajar: '-',
    ruangan: 'Halaman Sekolah',
    keterangan: 'Istirahat'
  },
  {
    id: 'jumat-5',
    hari: 'Jumat',
    jamMulai: '09:30',
    jamSelesai: '10:05',
    kegiatan: 'Jadwal sesuai dokumen asli (Bahasa Inggris / Penguatan)',
    mapelId: 'bahasa-inggris',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Sesuai dokumen asli: Dialog interaktif & kosakata'
  },
  {
    id: 'jumat-6',
    hari: 'Jumat',
    jamMulai: '10:05',
    jamSelesai: '10:50',
    kegiatan: "Jum'at Budaya",
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama & Tim Kesenian',
    ruangan: 'Aula / Panggung Ekspresi',
    keterangan: 'Pentas Seni, Tembang Macapat, & Apresiasi Tradisi Pujiharjo'
  },
  {
    id: 'jumat-7',
    hari: 'Jumat',
    jamMulai: '10:50',
    jamSelesai: '11:50',
    kegiatan: 'Jadwal sesuai dokumen asli (Ibadah & Budi Pekerti)',
    jp: 1,
    guruPengajar: 'Guru PAI & Guru PAK',
    ruangan: 'Masjid Sekolah / Ruang Budi Pekerti',
    keterangan: 'Sesuai dokumen: Shalat Jum’at & Pembinaan Karakter Siswa'
  },

  // SABTU
  {
    id: 'sabtu-1',
    hari: 'Sabtu',
    jamMulai: '07:00',
    jamSelesai: '07:15',
    kegiatan: 'Pembiasaan',
    jp: 0,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Literasi Pojok Baca & Gerakan Peduli Lingkungan Kelas'
  },
  {
    id: 'sabtu-2',
    hari: 'Sabtu',
    jamMulai: '07:15',
    jamSelesai: '09:00',
    kegiatan: 'Pramuka',
    jp: 2,
    guruPengajar: 'Pembina Pramuka SDN 1 Pujiharjo',
    ruangan: 'Halaman & Lingkungan Alam Pujiharjo',
    keterangan: 'Latihan Kepramukaan Siaga/Penggalang: Sandi, Semaphore & Tali Temali'
  },
  {
    id: 'sabtu-3',
    hari: 'Sabtu',
    jamMulai: '09:00',
    jamSelesai: '09:30',
    kegiatan: 'Istirahat',
    jp: 0,
    guruPengajar: '-',
    ruangan: 'Halaman Sekolah',
    keterangan: 'Istirahat'
  },
  {
    id: 'sabtu-4',
    hari: 'Sabtu',
    jamMulai: '09:30',
    jamSelesai: '10:05',
    kegiatan: 'Bahasa Inggris',
    mapelId: 'bahasa-inggris',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Reading & Viewing Simple Daily Texts'
  },
  {
    id: 'sabtu-5',
    hari: 'Sabtu',
    jamMulai: '10:05',
    jamSelesai: '10:40',
    kegiatan: 'Pendidikan Pancasila',
    mapelId: 'pancasila',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kelas V',
    keterangan: 'Hak dan Kewajiban sebagai Warga Sekolah dan Masyarakat'
  },
  {
    id: 'sabtu-6',
    hari: 'Sabtu',
    jamMulai: '10:40',
    jamSelesai: '11:15',
    kegiatan: 'Seni Budaya',
    mapelId: 'seni-budaya',
    jp: 1,
    guruPengajar: 'Angga Yoga Pratama, S.Pd.',
    ruangan: 'Ruang Kesenian / Kelas V',
    keterangan: 'Apresiasi Karya Kolase & Anyaman Bahan Alam'
  },
  {
    id: 'sabtu-7',
    hari: 'Sabtu',
    jamMulai: '11:15',
    jamSelesai: '11:50',
    kegiatan: 'Ekstrakurikuler',
    jp: 1,
    guruPengajar: 'Instruktur Ekskul',
    ruangan: 'Ruang Multimedia / Lapangan',
    keterangan: 'Pilihan: Kesenian Tari Malangan, Komputer Dasar, & Voli'
  }
];

export const JP_SUMMARY_REFERENCE = [
  { mapel: 'Bahasa Indonesia', jpTarget: 6, keterangan: 'Senin 2 JP, Selasa 3 JP, Rabu 2 JP' },
  { mapel: 'Matematika', jpTarget: 5, keterangan: 'Senin 2 JP, Selasa 2 JP, Rabu 1 JP' },
  { mapel: 'Pendidikan Pancasila', jpTarget: 4, keterangan: 'Selasa 1 JP, Kamis 1 JP, Sabtu 2 JP' },
  { mapel: 'IPAS', jpTarget: 5, keterangan: 'Senin 2 JP, Selasa 1 JP, Rabu 2 JP' },
  { mapel: 'Pendidikan Agama dan BP', jpTarget: 3, keterangan: 'Kamis 3 JP (PAI & PAK)' },
  { mapel: 'Bahasa Inggris', jpTarget: 2, keterangan: 'Jumat 1-2 JP, Sabtu 1 JP' },
  { mapel: 'Seni Budaya', jpTarget: 3, keterangan: 'Rabu 2 JP, Sabtu 1 JP' },
  { mapel: 'Muatan Lokal (Bahasa Jawa)', jpTarget: 2, keterangan: 'Jumat 2 JP' },
  { mapel: "Jum'at Budaya / Ekstra / Pramuka", jpTarget: 4, keterangan: "Jumat Budaya 1 JP, Ibadah 1 JP, Pramuka 2 JP, Ekskul 1 JP" }
];
