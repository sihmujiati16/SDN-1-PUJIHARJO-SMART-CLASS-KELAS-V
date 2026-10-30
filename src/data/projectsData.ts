import { ProyekPembelajaran } from '../types';

export const INITIAL_PROJECTS: ProyekPembelajaran[] = [
  {
    id: 'proyek-1',
    judul: 'Garda Cilik Konservasi Pesisir Pantai Sipelot & Hutan Lindung Pujiharjo',
    tema: 'Gaya Hidup Berkelanjutan (Kearifan Lokal & Ekologi)',
    tujuan: 'Peserta didik memahami pentingnya menjaga ekosistem pesisir Pantai Sipelot dari sampah plastik dan erosi pantai, serta melakukan aksi nyata pembibitan tanaman pencegah abrasi dan pembersihan pantai.',
    mapelTerkait: ['IPAS', 'Pendidikan Pancasila', 'Bahasa Indonesia', 'Seni Budaya'],
    dimensiProfil: [
      'Kewargaan',
      'Penalaran kritis',
      'Kolaborasi',
      'Kreativitas'
    ],
    pertanyaanMendasar: 'Bagaimana peran kita sebagai anak-anak Desa Pujiharjo dalam menjaga keindahan serta kelestarian biota Pantai Sipelot agar tidak rusak oleh sampah?',
    langkahPelaksanaan: [
      'Tahap Pengenalan: Eksplorasi ekosistem pesisir Pujiharjo dan dampak mikroplastik pada ikan tangkapan nelayan.',
      'Tahap Kontekstualisasi: Wawancara dengan Ketua Kelompok Nelayan dan Pengelola Wisata Pantai Sipelot Tirtoyudo.',
      'Tahap Aksi: Gerakan Bersih Pantai (Coastal Clean-Up), memilah sampah organik dan anorganik.',
      'Tahap Kreasi: Mengolah limbah plastik/kayu apung menjadi plang himbauan ramah lingkungan dan karya seni mozaik daur ulang.',
      'Tahap Refleksi & Tindak Lanjut: Pameran mini di balai desa dan kampanye lisan kepada adik kelas di sekolah.'
    ],
    alatBahan: [
      'Sarung tangan kain pelindung',
      'Kantong sampah terpilah (organik & anorganik)',
      'Cat akrilik ramah lingkungan dan kuas',
      'Papan kayu daur ulang bekas palet',
      'Kamera/smartphone untuk dokumentasi portofolio'
    ],
    jadwal: 'September - Oktober 2026 (Alokasi 36 JP Terpadu)',
    produkKarya: '1) Plang edukatif pelestarian pantai di 4 titik Pantai Sipelot, 2) Buku saku panduan ekowisata cilik Pujiharjo, 3) Mozaik seni daur ulang limbah pantai.',
    konteksPujiharjo: 'Desa Pujiharjo memiliki bentang alam pesisir selatan Jawa yang terkenal dengan Pantai Sipelot, muara sungai Payau, dan bukit kapur perkebunan kelapa.',
    rubrikPenilaian: [
      {
        kriteria: 'Pemahaman Masalah Lingkungan Lokal',
        skor4: 'Mampu menjelaskan secara komprehensif rantai dampak sampah terhadap biota laut Sipelot dan mata pencaharian nelayan.',
        skor3: 'Mampu menjelaskan hubungan dasar antara kebersihan pantai dan kenyamanan pengunjung.',
        skor2: 'Mengetahui jenis sampah namun belum memahami dampak jangka panjangnya.',
        skor1: 'Belum mampu membedakan dampak sampah terhadap ekosistem pesisir.'
      },
      {
        kriteria: 'Kolaborasi & Gotong Royong',
        skor4: 'Aktif berinisiatif, berbagi peran dengan adil, membantu rekan lain dengan penuh empati, dan menjaga keselamatan kelompok.',
        skor3: 'Menjalankan tugas yang diberikan dengan baik dan kooperatif.',
        skor2: 'Memerlukan dorongan guru untuk terlibat aktif dalam tim.',
        skor1: 'Pasif atau cenderung bekerja sendiri tanpa menghiraukan tim.'
      },
      {
        kriteria: 'Kualitas Produk & Aksi Nyata',
        skor4: 'Plang edukasi informatif, estetis, kokoh, dan pesan kampanye mudah dipahami oleh wisatawan dan warga desa.',
        skor3: 'Produk selesai dengan baik dan pesan tersampaikan.',
        skor2: 'Produk selesai namun pesan kurang jelas atau kurang rapi.',
        skor1: 'Produk belum selesai sesuai tenggat waktu.'
      }
    ],
    refleksiProyek: 'Peserta didik merasakan kebanggaan mendalam menjadi penjaga alam desanya sendiri. Tumbuh kesadaran tidak membuang sampah sembarangan dan terbiasa membawa tumbler air minum ke sekolah.'
  },
  {
    id: 'proyek-2',
    judul: 'Wirausaha Cilik: Eksplorasi Nilai Tambah Kopi Robusta & Pisang Mas Tirtoyudo',
    tema: 'Kewirausahaan Berbasis Potensi Lokal',
    tujuan: 'Peserta didik mengamati rantai pasok hasil pertanian perkebunan kopi dan pisang di Desa Pujiharjo & Tirtoyudo, menghitung modal dan keuntungan sederhana, serta mendesain kemasan kreatif bernilai jual tinggi.',
    mapelTerkait: ['Matematika', 'IPAS', 'Bahasa Indonesia', 'Seni Budaya'],
    dimensiProfil: [
      'Kreativitas',
      'Kemandirian',
      'Penalaran kritis',
      'Kolaborasi'
    ],
    pertanyaanMendasar: 'Bagaimana kita dapat mengolah hasil panen kopi dan pisang yang melimpah di perkebunan Tirtoyudo menjadi oleh-oleh khas yang diminati wisatawan?',
    langkahPelaksanaan: [
      'Tahap Orientasi: Berkunjung ke kebun kopi warga di lereng bukit Pujiharjo untuk melihat proses pemetikan biji merah petik matang.',
      'Tahap Penyelidikan: Menghitung selisih harga jual biji kopi basah vs bubuk olahan menggunakan operasi pecahan dan persen matematika.',
      'Tahap Produksi: Belajar membuat keripik pisang aneka rasa atau sachet kopi drip saring higienis bersama kelompok tani.',
      'Tahap Desain & Pemasaran: Mendesain stiker label kemasan bermotif etnik Malangan dan menuliskan slogan promosi berbahasa Indonesia dan Inggris.',
      'Tahap Market Day: Menggelar "Bazar Mini Pujiharjo Smart Class" saat penerimaan rapor tengah semester.'
    ],
    alatBahan: [
      'Bahan olahan pisang & kopi hasil perkebunan lokal',
      'Kemasan standing pouch transparan ramah makanan',
      'Kertas label stiker, spidol warna, & gunting',
      'Timbangan digital dapur untuk praktik pengukuran satuan massa',
      'Buku catatan kas dan uang mainan untuk simulasi transaksi'
    ],
    jadwal: 'Februari - Maret 2027 (Alokasi 36 JP Terpadu)',
    produkKarya: '1) Produk cemilan khas berlabel karya siswa kelas V, 2) Buku kas catatan laba rugi sederhana, 3) Brosur promosi wisata kuliner Pujiharjo.',
    konteksPujiharjo: 'Kecamatan Tirtoyudo terkenal sebagai salah satu sentra penghasil kopi Robusta Dampit-Tirtoyudo terbaik di Jawa Timur dan pisang mas kirana yang melimpah.',
    rubrikPenilaian: [
      {
        kriteria: 'Kecakapan Berhitung & Finansial Dasar',
        skor4: 'Mampu menyusun rincian modal, harga pokok penjualan, dan persentase keuntungan dengan perhitungan akurat tanpa kekeliruan.',
        skor3: 'Mampu menghitung modal dan harga jual dengan benar.',
        skor2: 'Perhitungan ada sedikit kekeliruan pada penjumlahan pecahan/desimal.',
        skor1: 'Kesulitan menghitung modal dasar dan laba.'
      },
      {
        kriteria: 'Kreativitas Desain & Branding',
        skor4: 'Desain label orisinil, memuat informasi komposisi, tanggal produksi, identitas lokal Pujiharjo, dan menarik secara visual.',
        skor3: 'Desain rapi dan memuat informasi pokok.',
        skor2: 'Desain sederhana dan informasi belum lengkap.',
        skor1: 'Desain tidak selesai atau menjiplak tanpa modifikasi.'
      }
    ],
    refleksiProyek: 'Siswa memahami kerja keras orang tua mereka yang sebagian besar adalah petani kebun, dan bangga akan kekayaan bumi Tirtoyudo.'
  },
  {
    id: 'proyek-3',
    judul: 'Laskar Budaya Pujiharjo: Revitalisasi Tembang & Seni Pertunjukan Tradisi',
    tema: 'Kearifan Lokal dan Kebhinekaan Global',
    tujuan: 'Mendokumentasikan dan mempraktikkan seni tutur cerita rakyat, tembang macapat, serta tata rias busana tari topeng Malangan khas pesisir Malang Selatan.',
    mapelTerkait: ['Bahasa Jawa', 'Seni Budaya', 'Pendidikan Pancasila'],
    dimensiProfil: [
      'Kewargaan',
      'Keimanan dan ketakwaan',
      'Kreativitas',
      'Komunikasi'
    ],
    pertanyaanMendasar: 'Bagaimana cerita rakyat Petik Laut dan tradisi para leluhur Pujiharjo dapat terus hidup dan dicintai oleh generasi muda saat ini?',
    langkahPelaksanaan: [
      'Tahap Riset: Menemui sesepuh desa Pujiharjo untuk mendengarkan kisah asal-usul desa dan tradisi Larung Sesaji Petik Laut.',
      'Tahap Pengolahan: Menuliskan kembali cerita tersebut ke dalam bahasa Jawa krama alus dan bahasa Indonesia.',
      'Tahap Latihan: Melatih tembang macapat Pocung dan gerak dasar tari bersama guru pamong seni.',
      'Tahap Pementasan: Tampil dalam agenda Jum’at Budaya SDN 1 Pujiharjo di hadapan seluruh siswa dan komite sekolah.'
    ],
    alatBahan: [
      'Rekaman audio tembang macapat',
      'Kostum sederhana kain jarik & selendang sampur',
      'Topeng Malangan kayu atau cetakan kertas bubur',
      'Kamera dokumentasi'
    ],
    jadwal: 'November - Desember 2026 (Alokasi 24 JP)',
    produkKarya: '1) Pementasan drama tari kolosal cilik, 2) Kompilasi naskah dongeng lokal bergambar, 3) Rekaman video tembang macapat.',
    konteksPujiharjo: 'Desa Pujiharjo memiliki tradisi budaya yang kental, perpaduan antara budaya agraris perkebunan dan tradisi bahari nelayan yang menjunjung tinggi toleransi antarwarga.',
    rubrikPenilaian: [
      {
        kriteria: 'Apresiasi dan Penguasaan Seni Tradisi',
        skor4: 'Sangat percaya diri, pelafalan krama alus fasih, intonasi tembang tepat titi laras, dan gerak tari selaras dengan irama.',
        skor3: 'Mampu menampilkan karya dengan baik dan lancar.',
        skor2: 'Masih ragu-ragu dalam beberapa bait tembang atau gerakan.',
        skor1: 'Kurang hafal naskah dan enggan tampil.'
      }
    ],
    refleksiProyek: 'Siswa merasa bangga memiliki identitas budaya Jawa Timur yang luhur dan tidak malu menggunakan bahasa daerah dengan santun.'
  }
];
