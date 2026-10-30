import { ReflectionEntry, JurnalMengajar } from '../types';

export const INITIAL_REFLECTIONS: ReflectionEntry[] = [
  // Refleksi Guru
  {
    id: 'ref-guru-1',
    tanggal: '2026-10-27',
    jenis: 'guru',
    subjectId: 'ipas',
    authorName: 'Angga Yoga Pratama, S.Pd.',
    q1: 'Tujuan pembelajaran sifat cahaya 85% tercapai dengan baik melalui kegiatan perakitan periskop karton.',
    q2: 'Siswa sangat antusias dan bersemangat ketika menguji periskop untuk melihat ke luar jendela kelas tanpa berdiri.',
    q3: 'Media konkret kardus dan cermin datar ukuran 5x5 cm sangat membantu siswa memahami sudut pantul 45 derajat.',
    q4: 'Beberapa siswa seperti Rendi dan Fajar sempat kesulitan merekatkan cermin dengan sudut yang pas sehingga bayangan terpotong.',
    q5: 'Untuk pertemuan berikutnya, saya akan menyiapkan mal sudut segitiga bantu agar siswa lebih presisi menempelkan cermin.'
  },
  {
    id: 'ref-guru-2',
    tanggal: '2026-10-28',
    jenis: 'guru',
    subjectId: 'matematika',
    authorName: 'Angga Yoga Pratama, S.Pd.',
    q1: 'Sebagian besar anak sudah mampu menyamakan penyebut pecahan menggunakan kelipatan persekutuan terkecil (KPK).',
    q2: 'Keterlibatan tinggi saat menggunakan kancing warna dan lembar berpetak berjenjang.',
    q3: 'Konteks lokal pembagian hasil panen kopi dan pisang Tirtoyudo membuat soal cerita terasa dekat dan bermakna.',
    q4: 'Kelemahan masih ada pada saat menyederhanakan bentuk pecahan hasil akhir ke bentuk paling sederhana.',
    q5: 'Menambahkan ice breaking game "Tepuk Pecahan Senilai" sebelum masuk ke operasi pengurangan.'
  },

  // Refleksi Siswa
  {
    id: 'ref-siswa-1',
    tanggal: '2026-10-27',
    jenis: 'siswa',
    subjectId: 'ipas',
    authorName: 'Anindya Kirana Putri',
    studentId: 'std-02',
    ratingPemahaman: 5,
    emotikon: 'senang',
    q1: 'Hari ini saya belajar bahwa cahaya merambat lurus dan dapat dipantulkan oleh cermin datar pada sudut yang sama.',
    q2: 'Hal paling seru adalah membuat periskop sendiri dari kardus pasta gigi dan melihat teman yang sembunyi di luar pintu kelas!',
    q3: 'Saya sudah paham semua bagian, tinggal penasaran bagaimana kalau cerminnya diganti kaca cembung seperti spion motor bapak.',
    q4: 'Saya bisa membantu adik di rumah belajar cara kerja senter saat mati lampu.',
    q5: 'Berikutnya saya ingin belajar tentang pelangi di air terjun Sumberpitu dekat desa kita.'
  },
  {
    id: 'ref-siswa-2',
    tanggal: '2026-10-27',
    jenis: 'siswa',
    subjectId: 'ipas',
    authorName: 'Bagus Dwi Wicaksono',
    studentId: 'std-03',
    ratingPemahaman: 4,
    emotikon: 'paham',
    q1: 'Saya belajar sifat pembiasan saat sedotan kelihatan bengkok di air minum.',
    q2: 'Melihat bayangan di sendok stainless steel sisi depan dan belakang yang beda bentuknya.',
    q3: 'Masih agak bingung menghafal nama cermin cekung dan cembung.',
    q4: 'Nanti di rumah mau coba pantulin sinar senter ke cermin lemari ibu.',
    q5: 'Ingin belajar bagaimana ikan di laut Pantai Sipelot bisa melihat di air yang agak keruh.'
  },
  {
    id: 'ref-siswa-3',
    tanggal: '2026-10-28',
    jenis: 'siswa',
    subjectId: 'matematika',
    authorName: 'Daniel Christian Nugroho',
    studentId: 'std-05',
    ratingPemahaman: 5,
    emotikon: 'senang',
    q1: 'Belajar menjumlahkan pecahan 1/2 ditambah 1/4 menjadi 3/4 dengan menyamakan penyebutnya dulu.',
    q2: 'Menghitung berat kopi pesanan warung bibi dengan soal cerita Pak Angga.',
    q3: 'Kadang lupa mengubah pecahan biasa yang pembilangnya lebih besar jadi pecahan campuran.',
    q4: 'Bisa membantu bapak menimbang pupuk kandang untuk tanaman kopi di kebun.',
    q5: 'Ingin belajar cara cepat mengalikan pecahan desimal.'
  }
];

export const INITIAL_JOURNALS: JurnalMengajar[] = [
  {
    id: 'jrn-1',
    tanggal: '2026-10-26',
    hari: 'Senin',
    jamKe: 'Jam ke-1 s.d 2 (07.50 - 09.00)',
    subjectId: 'bahasa-indonesia',
    materiAjar: 'Membaca Nyaring Teks Narasi & Kosakata Kata Sifat',
    kodeTp: 'TP-BIN.5.1',
    tujuanRingkas: 'Peserta didik membaca nyaring teks "Aku dan Sahabatku" dengan intonasi tepat dan menandai 5 kata sifat.',
    hadir: 24,
    tidakHadir: 0,
    keteranganAbsen: 'Seluruh siswa hadir lengkap',
    catatanKejadian: 'Pembelajaran berjalan kondusif, siswa antusias membacakan cerita di depan kelas.',
    tindakLanjut: 'Memberikan umpan balik positif pada volume suara beberapa anak yang masih pemalu.'
  },
  {
    id: 'jrn-2',
    tanggal: '2026-10-26',
    hari: 'Senin',
    jamKe: 'Jam ke-3 s.d 4 (09.30 - 10.40)',
    subjectId: 'matematika',
    materiAjar: 'Penjumlahan Pecahan Berpenyebut Beda',
    kodeTp: 'TP-MAT.5.1',
    tujuanRingkas: 'Menyelesaikan 5 butir soal penjumlahan pecahan biasa dengan menyamakan penyebut menggunakan KPK.',
    hadir: 24,
    tidakHadir: 0,
    keteranganAbsen: 'Lengkap',
    catatanKejadian: '20 anak tuntas mandiri, 4 anak (Bagus, Fajar, Rendi, Wahyu) memerlukan bimbingan meja guru.',
    tindakLanjut: 'Diberikan kartu pecahan bantu bergaris untuk 4 siswa tersebut.'
  },
  {
    id: 'jrn-3',
    tanggal: '2026-10-26',
    hari: 'Senin',
    jamKe: 'Jam ke-5 s.d 6 (10.40 - 11.50)',
    subjectId: 'ipas',
    materiAjar: 'Eksperimen Sifat Cahaya: Merambat Lurus & Benda Bening',
    kodeTp: 'TP-IPAS.5.1',
    tujuanRingkas: 'Membuktikan cahaya merambat lurus dengan 3 karton berlubang dan lampu senter.',
    hadir: 24,
    tidakHadir: 0,
    keteranganAbsen: 'Lengkap',
    catatanKejadian: 'Semua kelompok berhasil membuktikan cahaya senter hanya terlihat saat ketiga lubang karton sejajar lurus.',
    tindakLanjut: 'Melanjutkan ke sifat pembiasan cahaya pada pertemuan berikutnya.'
  }
];
