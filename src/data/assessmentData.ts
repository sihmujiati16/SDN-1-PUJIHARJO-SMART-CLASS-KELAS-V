import { AsesmenItem, StudentScore } from '../types';

export const INITIAL_ASSESSMENTS: AsesmenItem[] = [
  {
    id: 'asm-diag-ipas-1',
    subjectId: 'ipas',
    tpId: 'tp-ipas-1',
    judul: 'Asesmen Awal / Diagnostik: Pemahaman Cahaya, Bunyi & Lingkungan Pesisir Pujiharjo',
    jenis: 'diagnostik',
    bentuk: 'Pilihan Ganda & Uraian',
    tanggal: '2026-07-22',
    kisiKisi: '1. Mengidentifikasi sifat perambatan cahaya. 2. Memahami pembiasan pada zat cair. 3. Menganalisis peran bunyi pada navigasi nelayan pesisir. 4. Menentukan bagian mata yang peka cahaya.',
    rubrik: 'Skor 80-100: Paham Utuh (Lanjut Pengayaan Eksplorasi Optik). Skor 60-79: Paham Sebagian (Bimbingan Teman Sebaya). Skor <60: Perlu Pendampingan Khusus Guru dengan Media Konkret.',
    soalList: [
      {
        id: 'soal-1',
        pertanyaan: 'Saat Pak Joko berlayar mencari ikan di malam hari di Pantai Sipelot Desa Pujiharjo, cahaya lampu mercusuar tampak lurus membelah kegelapan laut. Peristiwa ini membuktikan bahwa cahaya memiliki sifat...',
        tipe: 'pilihan_ganda',
        opsi: [
          'A. Merambat lurus',
          'B. Mengendap di dasar air',
          'C. Membengkok saat bertemu angin',
          'D. Tidak dapat menembus udara'
        ],
        kunci: 'A. Merambat lurus',
        pembahasan: 'Cahaya merambat lurus melalui medium transparan homogen seperti udara malam.',
        konteksLokal: 'Navigasi perahu nelayan di Pantai Sipelot Pujiharjo'
      },
      {
        id: 'soal-2',
        pertanyaan: 'Ketika seorang anak memasukkan sebatang sedotan bambu ke dalam gelas berisi air jernih dari mata air Sumberpitu, sedotan tampak patah pada batas permukaan air. Fenomena ini disebut...',
        tipe: 'pilihan_ganda',
        opsi: [
          'A. Pemantulan cahaya (refleksi)',
          'B. Pembiasan cahaya (refraksi)',
          'C. Penguraian cahaya (dispersi)',
          'D. Penyerapan cahaya (absorpsi)'
        ],
        kunci: 'B. Pembiasan cahaya (refraksi)',
        pembahasan: 'Pembiasan terjadi karena cahaya merambat melalui dua medium yang berbeda kerapatan optiknya (udara dan air).',
        konteksLokal: 'Mata air alami Sumberpitu Tirtoyudo'
      },
      {
        id: 'soal-3',
        pertanyaan: 'Benda-benda berikut yang dapat ditembus oleh seluruh berkas cahaya secara optimal (benda bening/transparan) adalah...',
        tipe: 'pilihan_ganda',
        opsi: [
          'A. Kaca jendela kelas dan plastik bening',
          'B. Papan tulis kayu dan batu karang pantai',
          'C. Kain sarung dan buku tulis',
          'D. Dinding beton dan kardus'
        ],
        kunci: 'A. Kaca jendela kelas dan plastik bening',
        pembahasan: 'Benda bening meneruskan hampir seluruh cahaya yang mengenainya.',
        konteksLokal: 'Ruang kelas V SDN 1 Pujiharjo'
      },
      {
        id: 'soal-4',
        pertanyaan: 'Jelaskan mengapa suara deburan ombak di Pantai Sipelot terdengar lebih keras dan jelas saat malam hari yang sunyi dibandingkan siang hari ketika aktivitas warga ramai!',
        tipe: 'uraian',
        kunci: 'Pada malam hari, suhu udara dekat permukaan tanah lebih dingin dan kerapatan udara lebih tinggi sehingga gelombang bunyi dibiaskan ke arah bawah/tanah. Selain itu, tidak banyak kebisingan lingkungan pengganggu.',
        pembahasan: 'Kombinasi pengaruh kerapatan udara malam hari dan minimnya polusi suara latar belakang.',
        konteksLokal: 'Pantai Sipelot Pujiharjo'
      }
    ]
  },
  {
    id: 'asm-diag-mat-1',
    subjectId: 'matematika',
    tpId: 'tp-mat-1',
    judul: 'Asesmen Diagnostik Awal: Pecahan dan Pemecahan Masalah Hasil Perkebunan',
    jenis: 'diagnostik',
    bentuk: 'Pilihan Ganda & Uraian',
    tanggal: '2026-07-24',
    kisiKisi: '1. Menyamakan penyebut pecahan. 2. Penjumlahan pecahan beda penyebut. 3. Soal cerita kontekstual panen kopi & pisang.',
    rubrik: 'Mengidentifikasi miskonsepsi penjumlahan langsung pembilang + pembilang dan penyebut + penyebut.',
    soalList: [
      {
        id: 'soal-mat-1',
        pertanyaan: 'Hasil dari 1/2 + 1/4 adalah...',
        tipe: 'pilihan_ganda',
        opsi: ['A. 2/6', 'B. 3/4', 'C. 2/4', 'D. 1/8'],
        kunci: 'B. 3/4',
        pembahasan: 'Disamakan penyebut menjadi 2/4 + 1/4 = 3/4.',
        konteksLokal: 'Perhitungan takaran bahan'
      },
      {
        id: 'soal-mat-2',
        pertanyaan: 'Ibu membeli 3/4 kg bubuk kopi Robusta Tirtoyudo dan 1/2 kg gula merah kelapa. Berapa total berat seluruh belanjaan ibu?',
        tipe: 'uraian',
        kunci: '3/4 + 1/2 = 3/4 + 2/4 = 5/4 kg = 1 1/4 kg (atau 1,25 kg).',
        pembahasan: 'Menyamakan penyebut 4 dan 2 menjadi 4, lalu menjumlahkan dan mengubah ke pecahan campuran.',
        konteksLokal: 'Komoditas kopi Robusta Tirtoyudo'
      }
    ]
  },
  {
    id: 'asm-form-bin-1',
    subjectId: 'bahasa-indonesia',
    tpId: 'tp-bin-1',
    judul: 'Asesmen Formatif: Menulis Teks Deskripsi Profil Sahabat Kelas V',
    jenis: 'formatif',
    bentuk: 'Praktik/Kinerja',
    tanggal: '2026-08-14',
    kisiKisi: 'Penggunaan kata sifat, tanda baca kapital dan titik, kepaduan paragraf, kesantunan bertutur.',
    rubrik: 'Rubrik 4 Aspek (Kelengkapan isi, Variasi kata sifat, Tata bahasa ejaan, Kreativitas penyajian).',
    soalList: [
      {
        id: 'soal-bin-1',
        pertanyaan: 'Tuliskan satu paragraf deskripsi (minimal 4 kalimat) tentang sahabat sebangkumu di kelas V, sertakan minimal 3 kata sifat yang menggambarkan karakternya yang positif!',
        tipe: 'uraian',
        kunci: 'Paragraf deskripsi memuat nama sahabat, ciri fisik, minimal 3 kata sifat (misal: ramah, tekun, dermawan), dan alasan bangga berteman dengannya.',
        pembahasan: 'Melihat kemampuan menyusun ide kohesif dan kosakata sifat.',
        konteksLokal: 'Persahabatan siswa di SDN 1 Pujiharjo'
      }
    ]
  }
];

export const INITIAL_STUDENT_SCORES: Record<string, StudentScore[]> = {
  'asm-diag-ipas-1': [
    { studentId: 'std-01', studentName: 'Aditya Surya Pratama', score: 85, kategori: 'Mencapai', tindakLanjut: 'Melanjutkan materi perambatan bunyi.' },
    { studentId: 'std-02', studentName: 'Anindya Kirana Putri', score: 95, kategori: 'Melampaui', tindakLanjut: 'Diberikan tantangan membuat model optik lanjutan.' },
    { studentId: 'std-03', studentName: 'Bagus Dwi Wicaksono', score: 65, kategori: 'Mulai Mencapai', miskonsepsiTerdeteksi: 'Bingung membedakan pembiasan dan pemantulan.', tindakLanjut: 'Praktikum ulang pembiasan pensil dalam air.' },
    { studentId: 'std-04', studentName: 'Bernadetha Citra Lestari', score: 90, kategori: 'Melampaui', tindakLanjut: 'Diberi tugas memandu teman kelompok.' },
    { studentId: 'std-05', studentName: 'Daniel Christian Nugroho', score: 85, kategori: 'Mencapai', tindakLanjut: 'Lanjut kegiatan perakitan periskop.' },
    { studentId: 'std-06', studentName: 'Dewi Ayu Sekar Wangi', score: 95, kategori: 'Melampaui', tindakLanjut: 'Tutor sebaya pemantulan cermin.' },
    { studentId: 'std-07', studentName: 'Fajar Eko Saputro', score: 55, kategori: 'Belum Mencapai', miskonsepsiTerdeteksi: 'Menganggap bayangan terbentuk karena cahaya membelok sendiri.', tindakLanjut: 'Bimbingan intensif senter dan karton berlubang.' },
    { studentId: 'std-08', studentName: 'Grace Natalia Sihotang', score: 90, kategori: 'Melampaui', tindakLanjut: 'Lanjut materi struktur telinga.' },
    { studentId: 'std-09', studentName: 'Hafizh Ilham Ramadhan', score: 80, kategori: 'Mencapai', tindakLanjut: 'Melanjutkan proyek periskop.' },
    { studentId: 'std-10', studentName: 'Indah Permata Sari', score: 85, kategori: 'Mencapai', tindakLanjut: 'Eksperimen pembiasan kaca prisma.' },
    { studentId: 'std-11', studentName: 'Jonathan Kevin Prasetyo', score: 90, kategori: 'Melampaui', tindakLanjut: 'Eksplorasi spektrum warna pelangi.' },
    { studentId: 'std-12', studentName: 'Kurnia Ramadhani', score: 80, kategori: 'Mencapai', tindakLanjut: 'Melanjutkan aktivitas inkuiri.' },
    { studentId: 'std-13', studentName: 'Lukman Hakim Al-Farisi', score: 70, kategori: 'Mulai Mencapai', miskonsepsiTerdeteksi: 'Menyangka semua benda transparan adalah kaca.', tindakLanjut: 'Eksplorasi aneka plastik dan mika bening.' },
    { studentId: 'std-14', studentName: 'Maria Angelina Kristi', score: 95, kategori: 'Melampaui', tindakLanjut: 'Pengayaan sains periskop kapal selam.' },
    { studentId: 'std-15', studentName: 'Muhammad Rizky Maulana', score: 80, kategori: 'Mencapai', tindakLanjut: 'Melanjutkan praktikum bunyi ombak.' },
    { studentId: 'std-16', studentName: 'Nabila Zahra Syahrani', score: 90, kategori: 'Melampaui', tindakLanjut: 'Menyusun laporan inkuiri mandiri.' },
    { studentId: 'std-17', studentName: 'Otniel Evan Saputra', score: 85, kategori: 'Mencapai', tindakLanjut: 'Lanjut materi frekuensi bunyi.' },
    { studentId: 'std-18', studentName: 'Putri Rahmadani', score: 80, kategori: 'Mencapai', tindakLanjut: 'Menggambar sketsa lintasan cahaya.' },
    { studentId: 'std-19', studentName: 'Rendi Firmansyah', score: 55, kategori: 'Belum Mencapai', miskonsepsiTerdeteksi: 'Keliru membedakan benda gelap dan benda tembus cahaya.', tindakLanjut: 'Percobaan senter di kamar gelap dengan aneka benda.' },
    { studentId: 'std-20', studentName: 'Siti Nur Aisyah', score: 95, kategori: 'Melampaui', tindakLanjut: 'Tutor sebaya dan pengayaan fisika optik.' },
    { studentId: 'std-21', studentName: 'Timothy Bagas Wicaksono', score: 85, kategori: 'Mencapai', tindakLanjut: 'Eksplorasi sudut pantul cermin datar.' },
    { studentId: 'std-22', studentName: 'Umi Kalsum', score: 80, kategori: 'Mencapai', tindakLanjut: 'Melanjutkan materi indra penglihatan.' },
    { studentId: 'std-23', studentName: 'Wahyu Tri Pamungkas', score: 70, kategori: 'Mulai Mencapai', miskonsepsiTerdeteksi: 'Mengira bunyi tidak merambat melalui zat padat.', tindakLanjut: 'Praktikum telepon kaleng benang kasur.' },
    { studentId: 'std-24', studentName: 'Yohana Putri Santoso', score: 90, kategori: 'Melampaui', tindakLanjut: 'Pengayaan materi resonansi bunyi.' }
  ]
};
