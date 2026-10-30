import { StudentTask, StudentTaskSubmission, LKPDItem, PortfolioItem } from '../types';

export const INITIAL_TASKS: StudentTask[] = [
  {
    id: 'task-1',
    subjectId: 'ipas',
    judul: 'LKPD Digital: Mengamati Sifat Cahaya pada Percobaan Air dan Pensil',
    tenggatWaktu: '2026-11-05',
    instruksi: 'Lakukan percobaan sederhana memasukkan pensil ke dalam gelas air bening di rumah atau kelas. Catat hasil pengamatanmu dan jelaskan mengapa pensil terlihat patah!',
    materiPendukung: 'Buku Siswa IPAS Bab 1: Melihat karena Cahaya, Mendengar karena Bunyi (Halaman 12-18).',
    poinMaksimal: 100,
    tipe: 'lkpd'
  },
  {
    id: 'task-2',
    subjectId: 'matematika',
    judul: 'Latihan Mandiri: Menghitung Penjumlahan Pecahan Hasil Panen Kopi',
    tenggatWaktu: '2026-11-08',
    instruksi: 'Selesaikan 4 butir soal cerita tentang hasil panen kopi Robusta Tirtoyudo. Tuliskan langkah menyamakan penyebut menggunakan KPK!',
    materiPendukung: 'Modul Bab 8 Pecahan & LKPD Digital Matematika.',
    poinMaksimal: 100,
    tipe: 'latihan'
  },
  {
    id: 'task-3',
    subjectId: 'bahasa-indonesia',
    judul: 'Tugas Portofolio: Menulis Paragraf Deskripsi Profil Sahabat Kelas V',
    tenggatWaktu: '2026-11-12',
    instruksi: 'Tuliskan deskripsi sahabat sebangkumu di kelas V (minimal 5 kalimat) dengan menyertakan kata sifat positif dan ejaan huruf kapital yang tepat.',
    materiPendukung: 'Buku Siswa Bahasa Indonesia Bab 1: Aku yang Unik.',
    poinMaksimal: 100,
    tipe: 'portofolio'
  },
  {
    id: 'task-4',
    subjectId: 'pancasila',
    judul: 'Aksi Nyata: Dokumentasi Praktik Gotong Royong di Lingkungan Desa',
    tenggatWaktu: '2026-11-15',
    instruksi: 'Unggah foto atau ceritakan pengalamanmu bergotong royong membersihkan pekarangan rumah atau jalan desa di Desa Pujiharjo.',
    materiPendukung: 'Buku Siswa Pendidikan Pancasila Bab 1: Penerapan Nilai Pancasila.',
    poinMaksimal: 100,
    tipe: 'proyek'
  }
];

export const INITIAL_SUBMISSIONS: StudentTaskSubmission[] = [
  {
    id: 'sub-1',
    taskId: 'task-1',
    studentId: 'std-03', // AFIKA RIZKY AULIA
    tanggalKirim: '2026-10-28',
    status: 'Dinilai',
    jawabanTeks: 'Saat pensil dimasukkan ke dalam gelas air, pensil tampak bengkok atau patah pada batas udara dan air. Hal ini membuktikan bahwa cahaya dibiaskan (refraksi) ketika melewati dua zat yang berbeda kerapatan optiknya (udara dan air).',
    nilai: 95,
    umpanBalikGuru: 'Luar biasa Afika! Penjelasanmu sangat tepat dan ilmiah sesuai konsep pembiasan cahaya.'
  },
  {
    id: 'sub-2',
    taskId: 'task-1',
    studentId: 'std-01', // ABRAHAM GALIARTA GEOFANI
    tanggalKirim: '2026-10-28',
    status: 'Dinilai',
    jawabanTeks: 'Pensilnya jadi terlihat lebih besar dan miring patah karena ada pembiasan sinar dari air ke udara.',
    nilai: 90,
    umpanBalikGuru: 'Bagus sekali Abraham, pengamatan yang teliti.'
  },
  {
    id: 'sub-3',
    taskId: 'task-2',
    studentId: 'std-03',
    tanggalKirim: '2026-10-29',
    status: 'Terkirim',
    jawabanTeks: 'Jawaban soal 1: 1/2 kg + 1/4 kg = 2/4 + 1/4 = 3/4 kg kopi. Soal 2: 2/3 + 1/6 = 4/6 + 1/6 = 5/6 kg.',
    nilai: 90,
    umpanBalikGuru: 'Penyelesaian pecahan sangat runtut dan tepat.'
  }
];

export const INITIAL_LKPDS: LKPDItem[] = [
  {
    id: 'lkpd-ipas-1',
    subjectId: 'ipas',
    tpId: 'tp-ipas-1',
    judul: 'LKPD Inkuiri: Menyelidiki Pembiasan dan Pemantulan Cahaya di Pesisir Pujiharjo',
    kelas: 'Kelas V',
    semester: 1,
    konteksLokal: 'Mata air alami dan gelombang pesisir Pantai Sipelot Desa Pujiharjo',
    rubrikSkor: 'Skor 4: Penjelasan ilmiah akurat disertai gambar dan simpulan logis. Skor 3: Penjelasan benar. Skor 2: Penjelasan kurang lengkap. Skor 1: Belum lengkap.',
    petunjuk: [
      'Siapkan satu gelas kaca bening, air secukupnya, dan sebuah pensil/sedotan.',
      'Amati pensil saat berada di udara terbuka.',
      'Masukkan pensil ke dalam gelas yang sudah diisi air 3/4 penuh.',
      'Lihat dari arah samping gelas dan catat apa yang terjadi!'
    ],
    kegiatan: [
      {
        langkah: 'Langkah 1: Pengamatan visual',
        pertanyaan: 'Bagaimana penampakan batang pensil pada perbatasan antara air dan udara?',
        tipeJawaban: 'isian'
      },
      {
        langkah: 'Langkah 2: Analisis sifat',
        pertanyaan: 'Sifat cahaya apakah yang dibuktikan melalui peristiwa tersebut?',
        tipeJawaban: 'pilihan',
        opsi: [
          'A. Cahaya merambat lurus',
          'B. Cahaya dapat dibiaskan (refraksi)',
          'C. Cahaya dapat dipantulkan sempurna',
          'D. Cahaya tidak dapat menembus air'
        ]
      },
      {
        langkah: 'Langkah 3: Penerapan nyata',
        pertanyaan: 'Mengapa dasar air di muara Pantai Sipelot yang jernih terlihat lebih dangkal dari kedalaman aslinya?',
        tipeJawaban: 'isian'
      }
    ]
  },
  {
    id: 'lkpd-mat-1',
    subjectId: 'matematika',
    tpId: 'tp-mat-1',
    judul: 'LKPD Matematika: Operasi Penjumlahan Pecahan Komoditas Kebun Tirtoyudo',
    kelas: 'Kelas V',
    semester: 1,
    konteksLokal: 'Penimbangan hasil panen kopi robusta dan buah pisang warga Pujiharjo',
    rubrikSkor: 'Ketepatan menyamakan penyebut, keakuratan hasil hitung, dan penyederhanaan pecahan.',
    petunjuk: [
      'Bacalah soal cerita dengan seksama.',
      'Tuliskan pecahan yang diketahui.',
      'Samakan penyebut menggunakan KPK sebelum dijumlahkan.',
      'Sederhanakan hasil pecahan ke bentuk paling sederhana.'
    ],
    kegiatan: [
      {
        langkah: 'Soal Cerita 1',
        pertanyaan: 'Paman memetik 2/3 karung kopi di pagi hari dan 1/4 karung di sore hari. Berapa bagian karung kopi yang berhasil dipetik paman hari ini?',
        tipeJawaban: 'isian'
      },
      {
        langkah: 'Soal Cerita 2',
        pertanyaan: 'Ibu membeli 1/2 kg gula kelapa dan 3/8 kg kopi bubuk. Berapa kilogram total belanjaan ibu?',
        tipeJawaban: 'isian'
      }
    ]
  }
];

export const INITIAL_PORTFOLIOS: PortfolioItem[] = [
  {
    id: 'port-1',
    studentId: 'std-03', // AFIKA RIZKY AULIA
    subjectId: 'ipas',
    judul: 'Prototipe Periskop Sederhana Karton Bekas',
    tanggal: '2026-10-25',
    kategori: 'Laporan Praktik',
    deskripsi: 'Merakit periskop dari kardus odol dan dua cermin datar dengan sudut 45 derajat untuk mengamati benda di atas pembatas kelas.',
    umpanBalik: 'Konstruksi periskop sangat presisi, sudut pantul tepat 45 derajat sehingga bayangan jernih.',
    nilai: 96
  },
  {
    id: 'port-2',
    studentId: 'std-03',
    subjectId: 'seni-budaya',
    judul: 'Karya Mozaik Bahan Alam Biji Kopi & Serat Kelapa',
    tanggal: '2026-10-20',
    kategori: 'Karya Seni',
    deskripsi: 'Membuat motif topeng Malangan menggunakan susunan biji kopi Tirtoyudo dan tempelan serat kelapa kering.',
    umpanBalik: 'Kreativitas komposisi bahan alam sangat tinggi dan mencerminkan kearifan lokal Pujiharjo.',
    nilai: 94
  },
  {
    id: 'port-3',
    studentId: 'std-01', // ABRAHAM GALIARTA GEOFANI
    subjectId: 'pancasila',
    judul: 'Poster Pengamalan Sila Kedua: Peduli Sesama Teman',
    tanggal: '2026-10-22',
    kategori: 'Karya Seni',
    deskripsi: 'Poster ajakan saling menolong teman yang kesusahan di sekolah tanpa membeda-bedakan.',
    umpanBalik: 'Pesan moral tersampaikan sangat kuat dan warnanya menarik.',
    nilai: 92
  }
];
