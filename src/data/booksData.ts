import { BukuReferensi } from '../types';

export const OFFICIAL_BOOKS: BukuReferensi[] = [
  // Bahasa Indonesia
  {
    id: 'buku-bin-siswa',
    subjectId: 'bahasa-indonesia',
    jenis: 'siswa',
    judul: 'Bahasa Indonesia: Bergerak Bersama untuk SD Kelas V (Buku Siswa)',
    penulis: 'Evy Verawaty, Zulqarnain',
    penerbit: 'Pusat Perbukuan, Badan Standar, Kurikulum, dan Asesmen Pendidikan (Kemendikdasmen)',
    tahun: '2023 / 2024 (Edisi Resmi Kurikulum Merdeka)',
    isbn: '978-602-244-672-9',
    sumber: 'Sistem Informasi Perbukuan Indonesia (SIBI) Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/buku-siswa-bahasa-indonesia-kelas-5',
    urlDownload: 'https://buku.kemdikbud.go.id/katalog/buku-siswa-bahasa-indonesia-kelas-5',
    daftarIsi: [
      'Bab 1: Aku yang Unik (Deskripsi Diri & Sahabat)',
      'Bab 2: Buku Jendela Dunia (Unsur Intrinsik Cerita)',
      'Bab 3: Ekspresi Diri Melalui Hobi (Presentasi Santun)',
      'Bab 4: Belajar Berwirausaha (Teks Wawancara & Prosedur)',
      'Bab 5: Menjadi Warga Dunia (Singkatan, Fakta & Opini)',
      'Bab 6: Cinta Indonesia (Teks Pengumuman & Brosur)',
      'Bab 7: Sayangi Bumi (Teks Eksposisi & Kalimat Majemuk)',
      'Bab 8: Bergerak Bersama (Naskah Pidato & Pantun)'
    ],
    babSedangDipelajari: 'Bab 1: Aku yang Unik',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },
  {
    id: 'buku-bin-guru',
    subjectId: 'bahasa-indonesia',
    jenis: 'guru',
    judul: 'Buku Panduan Guru Bahasa Indonesia: Bergerak Bersama untuk SD Kelas V',
    penulis: 'Evy Verawaty, Zulqarnain',
    penerbit: 'Pusat Perbukuan Kemendikdasmen',
    tahun: '2023 / 2024',
    isbn: '978-602-244-673-6',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/buku-panduan-guru-bahasa-indonesia-kelas-5',
    daftarIsi: [
      'Panduan Umum: Pendekatan Berbasis Genre & Deep Learning',
      'Panduan Khusus Bab 1 - Bab 4 (Semester 1)',
      'Panduan Khusus Bab 5 - Bab 8 (Semester 2)',
      'Lampiran Instrumen Penilaian dan Rubrik Berdiferensiasi'
    ],
    babSedangDipelajari: 'Panduan Khusus Bab 1: Aku yang Unik',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },

  // Matematika
  {
    id: 'buku-mat-siswa',
    subjectId: 'matematika',
    jenis: 'siswa',
    judul: 'Belajar Bersama Temanmu Matematika untuk SD Kelas V - Volume 1 & 2',
    penulis: 'Tim Gakkotosho (Diterjemahkan & Disesuaikan Puskurbuk Kemendikdasmen)',
    penerbit: 'Kementerian Pendidikan Dasar dan Menengah RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-814-3',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/matematika-sd-kelas-5-vol-1',
    daftarIsi: [
      'Bab 1: Bilangan Desimal dan Bilangan Bulat',
      'Bab 2: Pengukuran Per Kuantitas Unit',
      'Bab 3: Perkalian Bilangan Desimal',
      'Bab 4: Kekongruenan dan Sudut dari Bangun Datar',
      'Bab 5: Pembagian Bilangan Desimal',
      'Bab 6: Volume Bangun Ruang Kubus dan Balok',
      'Bab 7: Kelipatan dan Faktor (KPK dan FPB)',
      'Bab 8: Pecahan dan Operasi Hitungnya',
      'Bab 9: Luas Bangun Datar Segitiga dan Jajargenjang',
      'Bab 10: Rasio dan Diagram'
    ],
    babSedangDipelajari: 'Bab 8: Pecahan dan Operasi Hitungnya',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },
  {
    id: 'buku-mat-guru',
    subjectId: 'matematika',
    jenis: 'guru',
    judul: 'Buku Panduan Guru Matematika untuk SD Kelas V - Volume 1 & 2',
    penulis: 'Tim Gakkotosho, Tim Reviewer Kemendikdasmen',
    penerbit: 'Pusat Perbukuan Kemendikdasmen',
    tahun: '2023 / 2024',
    isbn: '978-602-244-815-0',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/buku-panduan-guru-matematika-kelas-5-vol-1',
    daftarIsi: [
      'Petunjuk Penggunaan Buku dan Pemetaan Capaian Fase C',
      'Metodologi Pembelajaran Pemecahan Masalah Matematis',
      'Rencana Pelaksanaan Pembelajaran Tiap Jam Pelajaran',
      'Kunci Jawaban dan Penjelasan Miskonsepsi Siswa'
    ],
    babSedangDipelajari: 'Rencana Bab 8: Pecahan',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },

  // IPAS
  {
    id: 'buku-ipas-siswa',
    subjectId: 'ipas',
    jenis: 'siswa',
    judul: 'Ilmu Pengetahuan Alam dan Sosial (IPAS) untuk SD Kelas V (Buku Siswa)',
    penulis: 'Amalia Fitri, Anggayudha A. Rasa, Aldyana Kusumawardhani, dkk.',
    penerbit: 'Pusat Perbukuan Kemendikdasmen RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-375-9',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/ilmu-pengetahuan-alam-dan-sosial-sd-kelas-5',
    daftarIsi: [
      'Bab 1: Melihat karena Cahaya, Mendengar karena Bunyi',
      'Bab 2: Harmoni dalam Ekosistem (Rantai Makanan & Jaring-Jaring)',
      'Bab 3: Magnet, Listrik, dan Teknologi untuk Kehidupan',
      'Bab 4: Ayo Berkenalan dengan Bumi Kita (Struktur & Litosfer)',
      'Bab 5: Bagaimana Kita Hidup dan Bertumbuh (Sistem Organ)',
      'Bab 6: Indonesiaku Kaya Raya (Keanekaragaman Hayati & Maritim)',
      'Bab 7: Daerahku Kebanggaanku (Warisan Budaya & Sejarah Lokal)',
      'Bab 8: Bumiku Sayang, Bumiku Malang (Mitigasi Bencana)'
    ],
    babSedangDipelajari: 'Bab 1: Melihat karena Cahaya, Mendengar karena Bunyi',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },
  {
    id: 'buku-ipas-guru',
    subjectId: 'ipas',
    jenis: 'guru',
    judul: 'Buku Panduan Guru Ilmu Pengetahuan Alam dan Sosial (IPAS) SD Kelas V',
    penulis: 'Amalia Fitri, Anggayudha A. Rasa, dkk.',
    penerbit: 'Pusat Perbukuan Kemendikdasmen RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-376-6',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/buku-panduan-guru-ipas-kelas-5',
    daftarIsi: [
      'Petunjuk Umum: Pendekatan Inkuiri Ilmiah dan Keterampilan Proses Sains',
      'Petunjuk Khusus Bab 1 - Bab 4 (Semester 1)',
      'Petunjuk Khusus Bab 5 - Bab 8 (Semester 2)',
      'Pedoman Praktikum Sederhana Berbasis Alat Lingkungan Sekitar'
    ],
    babSedangDipelajari: 'Petunjuk Khusus Bab 1: Cahaya dan Bunyi',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },

  // Pendidikan Pancasila
  {
    id: 'buku-pan-siswa',
    subjectId: 'pancasila',
    jenis: 'siswa',
    judul: 'Pendidikan Pancasila untuk SD/MI Kelas V (Buku Siswa)',
    penulis: 'Mohamad Alwi Laksana, dkk.',
    penerbit: 'Pusat Perbukuan Kemendikdasmen RI bekerjasama dengan BPIP',
    tahun: '2023 / 2024',
    isbn: '978-602-244-845-7',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/pendidikan-pancasila-sd-kelas-5',
    daftarIsi: [
      'Bab 1: Pancasila dalam Kehidupanku (Makna Sila & Keteladanan)',
      'Bab 2: Norma dalam Kehidupanku (Hak dan Kewajiban)',
      'Bab 3: Jati Diri dan Kebinekaan (Keragaman Suku & Budaya Bangsa)',
      'Bab 4: Negaraku Kesatuan Republik Indonesia (Menjaga Keutuhan)'
    ],
    babSedangDipelajari: 'Bab 1: Pancasila dalam Kehidupanku',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },
  {
    id: 'buku-pan-guru',
    subjectId: 'pancasila',
    jenis: 'guru',
    judul: 'Buku Panduan Guru Pendidikan Pancasila untuk SD/MI Kelas V',
    penulis: 'Mohamad Alwi Laksana, dkk.',
    penerbit: 'Pusat Perbukuan Kemendikdasmen RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-846-4',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/buku-panduan-guru-pendidikan-pancasila-kelas-5',
    daftarIsi: [
      'Panduan Umum Kurikulum Merdeka Pendidikan Kewargaan',
      'Strategi Pembelajaran Kontekstual Berbasis Masalah Nyata',
      'Pedoman Asesmen Formatif Karakter dan Sikap Sosial',
      'Lembar Kerja Peserta Didik (LKPD) Pengamalan Sila'
    ],
    babSedangDipelajari: 'Bab 1: Penerapan Gotong Royong',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },

  // Bahasa Inggris
  {
    id: 'buku-big-siswa',
    subjectId: 'bahasa-inggris',
    jenis: 'siswa',
    judul: 'My Next Words Grade 5 - Student’s Book for Elementary School',
    penulis: 'EYLC Team (Pusat Kurikulum dan Perbukuan Kemendikdasmen)',
    penerbit: 'Pusat Perbukuan Kemendikdasmen RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-747-4',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/my-next-words-grade-5-students-book',
    daftarIsi: [
      'Unit 1: What a delicious bakso! (Taste and food preferences)',
      'Unit 2: I want an ice cream cone (Ordering food & prices)',
      'Unit 3: How much is it? (Money, prices and local market transactions)',
      'Unit 4: I have got a stomachache (Health, body symptoms and feelings)',
      'Unit 5: What a nice dress! (Clothes and descriptions)',
      'Unit 6: Parts of our body (Health habits)'
    ],
    babSedangDipelajari: 'Unit 1: What a delicious bakso!',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },
  {
    id: 'buku-big-guru',
    subjectId: 'bahasa-inggris',
    jenis: 'guru',
    judul: 'Teacher’s Book - My Next Words Grade 5 for Elementary School',
    penulis: 'EYLC Team',
    penerbit: 'Pusat Perbukuan Kemendikdasmen RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-748-1',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/my-next-words-grade-5-teachers-book',
    daftarIsi: [
      'General Instructions for Primary English Language Teachers',
      'Step-by-Step TPR (Total Physical Response) & Speaking Activities',
      'Pronunciation Guide and Audio Script References',
      'Formative Assessment Sheets'
    ],
    babSedangDipelajari: 'Unit 1 Teacher Guide',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },

  // Seni Budaya
  {
    id: 'buku-sbd-guru',
    subjectId: 'seni-budaya',
    jenis: 'guru',
    judul: 'Buku Panduan Guru Seni Rupa untuk SD Kelas V',
    penulis: 'Marlan Triantono, dkk.',
    penerbit: 'Pusat Perbukuan Kemendikdasmen RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-618-7',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/buku-panduan-guru-seni-rupa-kelas-5',
    daftarIsi: [
      'Unit 1: Mengenal Unsur dan Prinsip Seni Rupa pada Objek di Sekitar Kita',
      'Unit 2: Menggambar Prinsip Ritme dan Motif Tradisional',
      'Unit 3: Membuat Karya Kriya Anyaman dari Bahan Serat Alam',
      'Unit 4: Eksplorasi Warna dan Proporsi Gambar Lingkungan Pesisir'
    ],
    babSedangDipelajari: 'Unit 1 & 2: Ornamen dan Motif Tradisional',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },
  {
    id: 'buku-sbd-siswa',
    subjectId: 'seni-budaya',
    jenis: 'siswa',
    judul: 'Modul Ajar dan Panduan Eksplorasi Seni Budaya Siswa Kelas V',
    penulis: 'Tim MGMP Seni Budaya SD Kabupaten Malang',
    penerbit: 'Dinas Pendidikan Kabupaten Malang',
    tahun: '2024 / 2026',
    isbn: 'Dokumen Resmi Pembelajaran Seni Budaya',
    sumber: 'Disdik Kab. Malang & SIBI',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/seni-budaya-sd-fase-c',
    daftarIsi: [
      'Bab 1: Menemukan Keindahan Bentuk di Alam Pujiharjo',
      'Bab 2: Menenun dan Menganyam Kerajinan Bambu & Serat Kelapa',
      'Bab 3: Nyanyian Tembang Tradisional Jawa Timur',
      'Bab 4: Gerak Dasar Tari Topeng Malangan'
    ],
    babSedangDipelajari: 'Bab 1: Keindahan Bentuk di Alam',
    statusKetersediaan: 'Buku Resmi Kemendikdasmen'
  },

  // PJOK
  {
    id: 'buku-pjok-guru',
    subjectId: 'pjok',
    jenis: 'guru',
    judul: 'Buku Panduan Guru PJOK untuk SD/MI Kelas V',
    penulis: 'Agus Margono, dkk.',
    penerbit: 'Pusat Perbukuan Kemendikdasmen RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-883-9',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/buku-panduan-guru-pjok-kelas-5',
    daftarIsi: [
      'Unit 1: Pola Gerak Dasar Permainan Invasi (Sepak Bola)',
      'Unit 2: Pola Gerak Dasar Permainan Net (Bola Voli)',
      'Unit 3: Pola Gerak Dasar Lapangan (Kasti/Rounders)',
      'Unit 4: Aktivitas Kebugaran Jasmani dan Pola Hidup Sehat'
    ],
    babSedangDipelajari: 'Unit 1: Permainan Bola Besar',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },
  {
    id: 'buku-pjok-siswa',
    subjectId: 'pjok',
    jenis: 'siswa',
    judul: 'Buku Teks Utama PJOK untuk Siswa SD Kelas V Fase C',
    penulis: 'Agus Margono, Tri Hadi K.',
    penerbit: 'Kementerian Pendidikan Dasar dan Menengah RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-882-2',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/pjok-sd-kelas-5',
    daftarIsi: [
      'Pelajaran 1: Menendang, Menggiring, dan Mengoper Bola',
      'Pelajaran 2: Servis Bawah dan Passing Bola Voli',
      'Pelajaran 3: Latihan Kebugaran Jasmani Anak Usia 10-11 Tahun',
      'Pelajaran 4: Memilih Makanan Bergizi Seimbang dan Higienis'
    ],
    babSedangDipelajari: 'Pelajaran 1: Permainan Bola Besar',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },

  // PAI-BP
  {
    id: 'buku-pai-siswa',
    subjectId: 'pai-bp',
    jenis: 'siswa',
    judul: 'Pendidikan Agama Islam dan Budi Pekerti untuk SD Kelas V (Buku Siswa)',
    penulis: 'Soleh Baedowi, Hairil Muhammad Anwar',
    penerbit: 'Kementerian Pendidikan Dasar & Kemenag RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-684-2',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/pendidikan-agama-islam-dan-budi-pekerti-sd-kelas-5',
    daftarIsi: [
      'Bab 1: Menyayangi Anak Yatim (QS. Al-Ma’un)',
      'Bab 2: Lebih Dekat dengan Nama-Nama Allah (Asmaul Husna)',
      'Bab 3: Aku Anak Saleh (Saling Menghargai Keragaman)',
      'Bab 4: Hidup Lapang dengan Berbagi (Zakat, Infak, Sedekah)',
      'Bab 5: Meneladani Perjuangan Rasulullah (Kisah Fathu Makkah)'
    ],
    babSedangDipelajari: 'Bab 1: Menyayangi Anak Yatim',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },
  {
    id: 'buku-pai-guru',
    subjectId: 'pai-bp',
    jenis: 'guru',
    judul: 'Buku Panduan Guru Pendidikan Agama Islam dan Budi Pekerti untuk SD Kelas V',
    penulis: 'Soleh Baedowi, Hairil Muhammad Anwar',
    penerbit: 'Pusat Perbukuan Kemendikdasmen & Kemenag RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-685-9',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/buku-panduan-guru-pai-kelas-5',
    daftarIsi: [
      'Petunjuk Umum Kurikulum Merdeka PAI-BP SD',
      'Metode Pembelajaran Membaca Al-Qur’an dan Tajwid Tartil',
      'Pedoman Asesmen Ranah Sikap Spiritual dan Kinerja Praktik Shalat/Zakat'
    ],
    babSedangDipelajari: 'Bab 1: Pembelajaran QS Al-Maun',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },

  // PAK-BP
  {
    id: 'buku-pak-siswa',
    subjectId: 'pak-bp',
    jenis: 'siswa',
    judul: 'Pendidikan Agama Kristen dan Budi Pekerti untuk SD Kelas V (Buku Siswa)',
    penulis: 'Norita Yudiet Tompah, M.Pd.K.',
    penerbit: 'Kementerian Pendidikan Dasar & Kemenag RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-706-1',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/pendidikan-agama-kristen-sd-kelas-5',
    daftarIsi: [
      'Pelajaran 1: Allah Berkarya dalam Alam Semesta',
      'Pelajaran 2: Menjaga Kelestarian Lingkungan Hidup Ciptaan Allah',
      'Pelajaran 3: Hidup Bersyukur dalam Segala Keadaan',
      'Pelajaran 4: Meneladani Kerendahan Hati dan Kasih Kristus',
      'Pelajaran 5: Menjadi Pembawa Damai di Rumah dan Sekolah'
    ],
    babSedangDipelajari: 'Pelajaran 1: Allah Berkarya dalam Alam Semesta',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },
  {
    id: 'buku-pak-guru',
    subjectId: 'pak-bp',
    jenis: 'guru',
    judul: 'Buku Panduan Guru Pendidikan Agama Kristen dan Budi Pekerti untuk SD Kelas V',
    penulis: 'Norita Yudiet Tompah, M.Pd.K.',
    penerbit: 'Pusat Perbukuan Kemendikdasmen & Kemenag RI',
    tahun: '2023 / 2024',
    isbn: '978-602-244-707-8',
    sumber: 'SIBI Kemendikdasmen',
    urlSibi: 'https://buku.kemdikbud.go.id/katalog/buku-panduan-guru-agama-kristen-kelas-5',
    daftarIsi: [
      'Petunjuk Umum Pengajaran Agama Kristen Ramah Anak',
      'Panduan Khusus Penjelasan Tiap Pelajaran',
      'Rubrik Penilaian Sikap Kasih dan Tindakan Nyata Peduli Alam'
    ],
    babSedangDipelajari: 'Pelajaran 1 Guru Guide',
    statusKetersediaan: 'Tersedia Resmi di SIBI'
  },

  // Bahasa Jawa
  {
    id: 'buku-bjw-siswa',
    subjectId: 'bahasa-jawa',
    jenis: 'siswa',
    judul: 'Tantri Basa Jawa Timur Kelas 5 SD/MI (Buku Siswa Muatan Lokal)',
    penulis: 'Drs. Samsul Hadi, M.Pd., dkk.',
    penerbit: 'Dinas Pendidikan Provinsi Jawa Timur',
    tahun: '2023 / 2024',
    isbn: '978-602-149-142-3',
    sumber: 'Dinas Pendidikan Provinsi Jawa Timur (Muatan Lokal Resmi)',
    urlSibi: 'https://disdik.jatimprov.go.id/buku-mulok-bahasa-jawa-kelas-5',
    daftarIsi: [
      'Wulangan 1: Guyub Rukun (Unggah-Ungguh Basa Ngoko & Krama)',
      'Wulangan 2: Peristiwa Alam (Teks Informasi & Pawarta Desa)',
      'Wulangan 3: Tembang Macapat Pocung lan Maskumambang',
      'Wulangan 4: Cerita Wayang Pandhawa & Puntadewa',
      'Wulangan 5: Aksara Jawa mawa Sandhangan Swara lan Sigeg'
    ],
    babSedangDipelajari: 'Wulangan 1: Guyub Rukun ing Desa',
    statusKetersediaan: 'Muatan Lokal Disdik'
  },
  {
    id: 'buku-bjw-guru',
    subjectId: 'bahasa-jawa',
    jenis: 'guru',
    judul: 'Buku Piwulang Guru Tantri Basa Jawa Timur Kelas 5 SD/MI',
    penulis: 'Drs. Samsul Hadi, M.Pd., dkk.',
    penerbit: 'Dinas Pendidikan Provinsi Jawa Timur',
    tahun: '2023 / 2024',
    isbn: '978-602-149-143-0',
    sumber: 'Dinas Pendidikan Provinsi Jawa Timur',
    urlSibi: 'https://disdik.jatimprov.go.id/panduan-guru-bahasa-jawa-kelas-5',
    daftarIsi: [
      'Pedoman Piwulang Unggah-Ungguh Basa ing Pasrawungan',
      'Tata Caranipun Nembang Macapat mawa Titi Laras Pelog lan Slendro',
      'Kunci Wangsulan Gladhen Wulangan 1 - 5'
    ],
    babSedangDipelajari: 'Panduan Wulangan 1: Basa Krama Alus',
    statusKetersediaan: 'Muatan Lokal Disdik'
  }
];
