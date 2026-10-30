import {
  Subject,
  CapaianPembelajaran,
  TujuanPembelajaran,
  AlurTujuanPembelajaran,
  ModulAjar,
  KKTPItem,
  SubjectId
} from '../types';

export const SUBJECTS: Subject[] = [
  {
    id: 'bahasa-indonesia',
    name: 'Bahasa Indonesia',
    code: 'BIN-5',
    category: 'wajib',
    jpPerWeek: 6,
    iconName: 'BookOpen',
    color: '#2563eb',
    bgLight: '#eff6ff',
    description: 'Mengembangkan kecakapan literasi, menyimak, membaca, berbicara, dan menulis teks informatif serta fiksi yang bermakna.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  },
  {
    id: 'matematika',
    name: 'Matematika',
    code: 'MAT-5',
    category: 'wajib',
    jpPerWeek: 5,
    iconName: 'Calculator',
    color: '#0891b2',
    bgLight: '#ecfeff',
    description: 'Penguasaan konsep bilangan pecahan, desimal, persen, geometri bangun ruang, pengukuran luas/keliling, dan pengolahan data kontekstual.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  },
  {
    id: 'ipas',
    name: 'Ilmu Pengetahuan Alam dan Sosial (IPAS)',
    code: 'IPAS-5',
    category: 'wajib',
    jpPerWeek: 5,
    iconName: 'Compass',
    color: '#059669',
    bgLight: '#ecfdf5',
    description: 'Menjelajahi fenomena alam (cahaya, bunyi, ekosistem) dan dinamika sosial kemasyarakatan pesisir dan perkebunan Malang Selatan.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  },
  {
    id: 'pancasila',
    name: 'Pendidikan Pancasila',
    code: 'PPKN-5',
    category: 'wajib',
    jpPerWeek: 4,
    iconName: 'ShieldCheck',
    color: '#dc2626',
    bgLight: '#fef2f2',
    description: 'Menumbuhkan pemahaman nilai Pancasila, norma bermasyarakat, keragaman budaya, dan menjaga keutuhan Negara Kesatuan Republik Indonesia.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  },
  {
    id: 'bahasa-inggris',
    name: 'Bahasa Inggris',
    code: 'BIG-5',
    category: 'wajib',
    jpPerWeek: 2,
    iconName: 'Globe',
    color: '#7c3aed',
    bgLight: '#f5f3ff',
    description: 'Membangun kemampuan berkomunikasi lisan dan tulisan sederhana tentang kegiatan sehari-hari, makanan khas, dan lingkungan sekitar.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  },
  {
    id: 'seni-budaya',
    name: 'Seni Budaya',
    code: 'SBD-5',
    category: 'wajib',
    jpPerWeek: 3,
    iconName: 'Palette',
    color: '#d97706',
    bgLight: '#fffbeb',
    description: 'Apresiasi dan ekspresi kreatif melalui seni rupa (motif alam Pujiharjo), seni musik daerah, seni tari Malangan, dan kriya.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  },
  {
    id: 'pjok',
    name: 'PJOK',
    code: 'PJK-5',
    category: 'wajib',
    jpPerWeek: 3,
    iconName: 'Activity',
    color: '#16a34a',
    bgLight: '#f0fdf4',
    description: 'Pendidikan jasmani, olahraga, kesehatan, gerak dasar atletik, aktivitas air pantai, dan pembiasaan pola hidup bersih sehat.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  },
  {
    id: 'pai-bp',
    name: 'Pendidikan Agama Islam & BP',
    code: 'PAI-5',
    category: 'pilihan_agama',
    jpPerWeek: 3,
    iconName: 'Moon',
    color: '#0d9488',
    bgLight: '#f0fdfa',
    description: 'Penguatan tauhid, tadabbur Al-Qur’an (Surah Al-Maun & At-Tin), akhlak mulia kepada sesama, dan fikih zakat/infak bagi siswa muslim.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  },
  {
    id: 'pak-bp',
    name: 'Pendidikan Agama Kristen & BP',
    code: 'PAK-5',
    category: 'pilihan_agama',
    jpPerWeek: 3,
    iconName: 'HeartHandshake',
    color: '#4f46e5',
    bgLight: '#eef2ff',
    description: 'Mengenal karya Allah sebagai Pemelihara hidup dan alam semesta, hidup rukun dengan sesama, dan meneladani kasih Kristus.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  },
  {
    id: 'bahasa-jawa',
    name: 'Bahasa Jawa (Muatan Lokal)',
    code: 'BJW-5',
    category: 'mulok',
    jpPerWeek: 2,
    iconName: 'Languages',
    color: '#ea580c',
    bgLight: '#fff7ed',
    description: 'Melestarikan unggah-ungguh basa Jawa (Ngoko & Krama), tembang macapat, cerita rakyat Malang Selatan, dan aksara Jawa berpasangan.',
    fase: 'Fase C',
    kelas: 'Kelas V'
  }
];

export const INITIAL_CAPAIAN_PEMBELAJARAN: CapaianPembelajaran[] = [
  // Bahasa Indonesia
  {
    id: 'cp-bin-1',
    subjectId: 'bahasa-indonesia',
    elemen: 'Menyimak',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik mampu menganalisis informasi berupa fakta, prosedur dengan mengidentifikasikan ciri objek dan urutan proses kejadian dan nilai-nilai dari berbagai jenis teks informatif dan fiksi yang disajikan dalam bentuk lisan, teks aural (teks yang dibacakan dan/atau didengar) dan audio.',
    semester: 'Ganjil',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },
  {
    id: 'cp-bin-2',
    subjectId: 'bahasa-indonesia',
    elemen: 'Membaca dan Memirsa',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik mampu membaca kata-kata baru dengan pola kombinasi huruf yang telah dikenali dengan fasih. Peserta didik mampu memaknai kosakata baru dari teks yang dibaca atau tayangan yang dipirsa sesuai dengan topik, serta membedakan fakta dan opini.',
    semester: 'Semua',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },
  {
    id: 'cp-bin-3',
    subjectId: 'bahasa-indonesia',
    elemen: 'Berbicara dan Mempresentasikan',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik mampu menyampaikan informasi secara lisan untuk tujuan menghibur dan meyakinkan mitra tutur sesuai kaidah dan konteks. Menggunakan kosakata baru yang dikuasai dengan pilihan kata yang tepat sesuai dengan norma kesantunan.',
    semester: 'Semua',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },
  {
    id: 'cp-bin-4',
    subjectId: 'bahasa-indonesia',
    elemen: 'Menulis',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik mampu menulis berbagai teks sederhana berdasarkan gagasan, hasil pengamatan, pengalaman, dan imajinasi. Peserta didik mampu menjelaskan hubungan kausalitas dan menuangkannya ke dalam teks eksplanasi atau narasi.',
    semester: 'Genap',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },

  // Matematika
  {
    id: 'cp-mat-1',
    subjectId: 'matematika',
    elemen: 'Bilangan',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik dapat membaca, menulis, menentukan nilai tempat, membandingkan, mengurutkan, melakukan komposisi dan dekomposisi bilangan cacah sampai 100.000. Mereka juga dapat menyelesaikan masalah yang berkaitan dengan KPK dan FPB serta melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian pecahan dengan penyebut berbeda.',
    semester: 'Ganjil',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },
  {
    id: 'cp-mat-2',
    subjectId: 'matematika',
    elemen: 'Pengukuran & Geometri',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik dapat mengonstruksi dan mengurai bangun ruang (kubus, balok, dan gabungannya) dan mengenali visualisasi spasial. Peserta didik dapat menghitung luas permukaan dan volume bangun ruang kubus dan balok.',
    semester: 'Genap',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },
  {
    id: 'cp-mat-3',
    subjectId: 'matematika',
    elemen: 'Analisis Data dan Peluang',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik dapat mengurutkan, membandingkan, menyajikan, dan menganalisis data banyak benda dan data hasil pengukuran dalam bentuk gambar, piktogram, diagram batang, dan tabel frekuensi untuk mendapatkan informasi.',
    semester: 'Genap',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },

  // IPAS
  {
    id: 'cp-ipas-1',
    subjectId: 'ipas',
    elemen: 'Pemahaman IPAS (Sains dan Sosial)',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik merefleksikan bagaimana sistem organ tubuh manusia (penglihatan, pendengaran, pencernaan, dan pernapasan) bekerja; menganalisis hubungan antar komponen biotik dan abiotik dalam ekosistem darat dan perairan pesisir; serta menganalisis letak geografis dan kondisi alam wilayah lokal.',
    semester: 'Ganjil',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },
  {
    id: 'cp-ipas-2',
    subjectId: 'ipas',
    elemen: 'Keterampilan Proses',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Mengamati fenomena bunyi dan cahaya secara mandiri, merumuskan hipotesis sederhana, melakukan penyelidikan berbasis alat di lingkungan sekitar Pujiharjo, mencatat data hasil pengamatan, serta mengomunikasikan simpulan.',
    semester: 'Semua',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },

  // Pendidikan Pancasila
  {
    id: 'cp-pan-1',
    subjectId: 'pancasila',
    elemen: 'Pancasila & UUD 1945',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik memahami hubungan antara sila-sila Pancasila dan penerapannya dalam kehidupan sehari-hari; menelaah norma, hak, dan kewajiban sebagai anggota keluarga, warga sekolah, dan warga desa.',
    semester: 'Ganjil',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },
  {
    id: 'cp-pan-2',
    subjectId: 'pancasila',
    elemen: 'Bhinneka Tunggal Ika & NKRI',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik mampu menghormati keragaman suku, agama, dan budaya di Indonesia; mengidentifikasi keunikan budaya lokal di Jawa Timur serta mempraktikkan sikap gotong royong dan menjaga keutuhan wilayah.',
    semester: 'Genap',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },

  // Bahasa Inggris
  {
    id: 'cp-big-1',
    subjectId: 'bahasa-inggris',
    elemen: 'Menyimak - Berbicara (Listening - Speaking)',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Students use English to interact in a range of predictable everyday situations using full sentences. They respond to questions and inquiries with short answers, showing understanding of familiar topics (food, hobbies, school environment).',
    semester: 'Ganjil',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },

  // Seni Budaya
  {
    id: 'cp-sbd-1',
    subjectId: 'seni-budaya',
    elemen: 'Mengalami & Menciptakan (Seni Rupa & Musik)',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik mampu mengeksplorasi prinsip-prinsip desain (keseimbangan, proporsi, irama) menggunakan bahan alam atau daur ulang di sekitar Pujiharjo, serta memainkan alat musik perkusi sederhana mengiringi lagu-lagu daerah Jawa Timur.',
    semester: 'Semua',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },

  // PJOK
  {
    id: 'cp-pjk-1',
    subjectId: 'pjok',
    elemen: 'Keterampilan Gerak & Pola Hidup Sehat',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik mempraktikkan modifikasi pola gerak dasar lokomotor, non-lokomotor, dan manipulatif dalam berbagai permainan bola besar dan bola kecil, serta memahami konsep kebugaran jasmani dan pemeliharaan kesehatan pribadi.',
    semester: 'Semua',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },

  // PAI-BP
  {
    id: 'cp-pai-1',
    subjectId: 'pai-bp',
    elemen: 'Al-Qur’an Hadis, Akidah & Akhlak',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik mampu membaca, menghafal, dan memahami pesan pokok Surah Al-Maun dan At-Tin; meyakini asmaul husna Al-Qawiyyu, Al-Qayyum, Al-Muhyi, Al-Mumit, Al-Baits; serta membiasakan sikap tolong-menolong dan peduli sesama.',
    semester: 'Semua',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },

  // PAK-BP
  {
    id: 'cp-pak-1',
    subjectId: 'pak-bp',
    elemen: 'Allah Berkarya & Nilai-Nilai Kristiani',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik memahami karya Allah yang memelihara seluruh ciptaan-Nya termasuk alam lingkungan pesisir dan keluarga, serta menunjukkan sikap kasih, pengampunan, dan persaudaraan sejati.',
    semester: 'Semua',
    sumberResmi: 'Keputusan BSKAP Kemendikdasmen No. 032/H/KR/2024 tentang Capaian Pembelajaran Fase C',
    tahun: '2024/2026'
  },

  // Bahasa Jawa
  {
    id: 'cp-bjw-1',
    subjectId: 'bahasa-jawa',
    elemen: 'Unggah-Ungguh Basa & Aksara Jawa',
    fase: 'Fase C',
    kelas: 'Kelas V',
    deskripsi: 'Peserta didik mampu menerapkan tata krama berbahasa Jawa krama alus marang wong tuwa lan guru, nyemak lan ngonceki piwulang tembang macapat Pocung lan Maskumambang, sarta maca lan nulis tembung mawa sandhangan swara lan panyigeg aksara Jawa.',
    semester: 'Semua',
    sumberResmi: 'Kurikulum Muatan Lokal Bahasa Daerah Dinas Pendidikan Kab. Malang',
    tahun: '2024/2026'
  }
];

export const INITIAL_TUJUAN_PEMBELAJARAN: TujuanPembelajaran[] = [
  // Bahasa Indonesia
  {
    id: 'tp-bin-1',
    subjectId: 'bahasa-indonesia',
    cpId: 'cp-bin-1',
    kodeTp: 'TP-BIN.5.1',
    elemen: 'Menyimak',
    bab: 'Bab 1: Aku yang Unik',
    deskripsi: 'Peserta didik dapat menganalisis informasi penting dari teks deskripsi lisan tentang karakter dan keunikan diri sendiri dan teman dengan teliti.',
    dimensiProfilLulusan: ['Kemandirian', 'Komunikasi', 'Penalaran kritis'],
    semester: 1,
    alokasiJp: 6
  },
  {
    id: 'tp-bin-2',
    subjectId: 'bahasa-indonesia',
    cpId: 'cp-bin-2',
    kodeTp: 'TP-BIN.5.2',
    elemen: 'Membaca dan Memirsa',
    bab: 'Bab 2: Buku Jendela Dunia',
    deskripsi: 'Peserta didik dapat membedakan unsur intrinsik teks cerita (tokoh, latar, alur, amanat) dan mengidentifikasi makna kata sifat serta sinonim-antonim.',
    dimensiProfilLulusan: ['Penalaran kritis', 'Kreativitas'],
    semester: 1,
    alokasiJp: 8
  },
  {
    id: 'tp-bin-3',
    subjectId: 'bahasa-indonesia',
    cpId: 'cp-bin-3',
    kodeTp: 'TP-BIN.5.3',
    elemen: 'Berbicara dan Mempresentasikan',
    bab: 'Bab 3: Ekspresi Diri Melalui Hobi',
    deskripsi: 'Peserta didik dapat menyampaikan presentasi singkat mengenai hobi dan potensi diri secara percaya diri dengan volume dan intonasi yang santun.',
    dimensiProfilLulusan: ['Komunikasi', 'Kemandirian'],
    semester: 1,
    alokasiJp: 6
  },
  {
    id: 'tp-bin-4',
    subjectId: 'bahasa-indonesia',
    cpId: 'cp-bin-4',
    kodeTp: 'TP-BIN.5.4',
    elemen: 'Menulis',
    bab: 'Bab 4: Belajar Berwirausaha di Tirtoyudo',
    deskripsi: 'Peserta didik dapat menulis teks prosedur dan teks wawancara sederhana mengenai usaha masyarakat lokal (misal: pengolahan kopi & hasil laut).',
    dimensiProfilLulusan: ['Kreativitas', 'Kolaborasi', 'Penalaran kritis'],
    semester: 1,
    alokasiJp: 8
  },

  // Matematika
  {
    id: 'tp-mat-1',
    subjectId: 'matematika',
    cpId: 'cp-mat-1',
    kodeTp: 'TP-MAT.5.1',
    elemen: 'Bilangan',
    bab: 'Bab 1: Pecahan dan Operasi Hitungnya',
    deskripsi: 'Peserta didik dapat melakukan operasi penjumlahan dan pengurangan pecahan dengan penyebut berbeda menggunakan representasi visual konkret.',
    dimensiProfilLulusan: ['Penalaran kritis', 'Kemandirian'],
    semester: 1,
    alokasiJp: 10
  },
  {
    id: 'tp-mat-2',
    subjectId: 'matematika',
    cpId: 'cp-mat-1',
    kodeTp: 'TP-MAT.5.2',
    elemen: 'Bilangan',
    bab: 'Bab 2: Perkalian dan Pembagian Pecahan & Desimal',
    deskripsi: 'Peserta didik dapat menyelesaikan operasi perkalian pecahan biasa dengan bilangan bulat serta mengonversi pecahan ke bentuk persen/desimal.',
    dimensiProfilLulusan: ['Penalaran kritis', 'Kolaborasi'],
    semester: 1,
    alokasiJp: 10
  },
  {
    id: 'tp-mat-3',
    subjectId: 'matematika',
    cpId: 'cp-mat-2',
    kodeTp: 'TP-MAT.5.3',
    elemen: 'Geometri',
    bab: 'Bab 3: Bangun Ruang Kubus dan Balok',
    deskripsi: 'Peserta didik dapat mengidentifikasi jaring-jaring kubus dan balok serta menghitung luas permukaan dan volumenya dengan satuan kubus.',
    dimensiProfilLulusan: ['Kreativitas', 'Penalaran kritis'],
    semester: 2,
    alokasiJp: 10
  },

  // IPAS
  {
    id: 'tp-ipas-1',
    subjectId: 'ipas',
    cpId: 'cp-ipas-1',
    kodeTp: 'TP-IPAS.5.1',
    elemen: 'Pemahaman IPAS',
    bab: 'Bab 1: Melihat karena Cahaya, Mendengar karena Bunyi',
    deskripsi: 'Peserta didik dapat menjelaskan sifat-sifat cahaya (merambat lurus, dipantulkan, dibiaskan) dan sifat bunyi melalui percobaan sederhana.',
    dimensiProfilLulusan: ['Penalaran kritis', 'Kreativitas'],
    semester: 1,
    alokasiJp: 10
  },
  {
    id: 'tp-ipas-2',
    subjectId: 'ipas',
    cpId: 'cp-ipas-1',
    kodeTp: 'TP-IPAS.5.2',
    elemen: 'Pemahaman IPAS',
    bab: 'Bab 2: Harmoni dalam Ekosistem Pesisir Pujiharjo',
    deskripsi: 'Peserta didik dapat menganalisis rantai makanan dan jaring-jaring makanan dalam ekosistem laut Pantai Sipelot dan kebun Tirtoyudo.',
    dimensiProfilLulusan: ['Kewargaan', 'Kolaborasi', 'Penalaran kritis'],
    semester: 1,
    alokasiJp: 10
  },
  {
    id: 'tp-ipas-3',
    subjectId: 'ipas',
    cpId: 'cp-ipas-1',
    kodeTp: 'TP-IPAS.5.3',
    elemen: 'Pemahaman IPAS',
    bab: 'Bab 3: Magnet, Listrik, dan Teknologi untuk Kehidupan',
    deskripsi: 'Peserta didik dapat memanfaatkan energi listrik dan sifat kemagnetan dalam membuat rangkaian seri dan paralel sederhana.',
    dimensiProfilLulusan: ['Kreativitas', 'Kemandirian'],
    semester: 1,
    alokasiJp: 8
  },

  // Pendidikan Pancasila
  {
    id: 'tp-pan-1',
    subjectId: 'pancasila',
    cpId: 'cp-pan-1',
    kodeTp: 'TP-PPKN.5.1',
    elemen: 'Pancasila',
    bab: 'Bab 1: Pancasila dalam Kehidupanku',
    deskripsi: 'Peserta didik dapat menguraikan makna lima sila Pancasila serta meneladani sikap gotong royong dan musyawarah di lingkungan sekolah dan desa Pujiharjo.',
    dimensiProfilLulusan: ['Kewargaan', 'Keimanan dan ketakwaan', 'Kolaborasi'],
    semester: 1,
    alokasiJp: 8
  },
  {
    id: 'tp-pan-2',
    subjectId: 'pancasila',
    cpId: 'cp-pan-1',
    kodeTp: 'TP-PPKN.5.2',
    elemen: 'UUD 1945',
    bab: 'Bab 2: Norma dan Aturan di Sekitarku',
    deskripsi: 'Peserta didik dapat mengidentifikasi norma kesopanan, kesusilaan, hukum, dan agama serta mempraktikkan hak dan kewajiban warga negara cilik.',
    dimensiProfilLulusan: ['Kewargaan', 'Kemandirian'],
    semester: 1,
    alokasiJp: 8
  },

  // Bahasa Inggris
  {
    id: 'tp-big-1',
    subjectId: 'bahasa-inggris',
    cpId: 'cp-big-1',
    kodeTp: 'TP-BIG.5.1',
    elemen: 'Listening - Speaking',
    bab: 'Unit 1: What a Delicious Meal!',
    deskripsi: 'Students can express preferences about local Indonesian foods and drinks, identifying taste adjectives (sweet, spicy, salty, sour).',
    dimensiProfilLulusan: ['Komunikasi', 'Kreativitas'],
    semester: 1,
    alokasiJp: 6
  },

  // Seni Budaya
  {
    id: 'tp-sbd-1',
    subjectId: 'seni-budaya',
    cpId: 'cp-sbd-1',
    kodeTp: 'TP-SBD.5.1',
    elemen: 'Mengalami & Menciptakan',
    bab: 'Unit 1: Ragam Hias & Motif Tradisional Malang',
    deskripsi: 'Peserta didik dapat merancang motif hias berbasis ornamen topeng Malangan dan flora pesisir Pujiharjo dengan proporsi harmonis.',
    dimensiProfilLulusan: ['Kreativitas', 'Kewargaan'],
    semester: 1,
    alokasiJp: 8
  },

  // PJOK
  {
    id: 'tp-pjk-1',
    subjectId: 'pjok',
    elemen: 'Keterampilan Gerak',
    cpId: 'cp-pjk-1',
    kodeTp: 'TP-PJK.5.1',
    bab: 'Pelajaran 1: Permainan Bola Besar (Sepak Bola & Bola Voli)',
    deskripsi: 'Peserta didik dapat mempraktikkan kombinasi gerak menendang, menggiring, dan mengoper bola dengan koordinasi tubuh yang baik dan sportif.',
    dimensiProfilLulusan: ['Kesehatan', 'Kolaborasi'],
    semester: 1,
    alokasiJp: 9
  },

  // PAI-BP
  {
    id: 'tp-pai-1',
    subjectId: 'pai-bp',
    elemen: 'Al-Qur’an Hadis',
    cpId: 'cp-pai-1',
    kodeTp: 'TP-PAI.5.1',
    bab: 'Bab 1: Menyayangi Anak Yatim (Surah Al-Ma’un)',
    deskripsi: 'Peserta didik dapat melafalkan, menghafal, dan menjelaskan kandungan QS Al-Maun tentang kepedulian sosial terhadap anak yatim dan fakir miskin.',
    dimensiProfilLulusan: ['Keimanan dan ketakwaan', 'Kewargaan'],
    semester: 1,
    alokasiJp: 9
  },

  // PAK-BP
  {
    id: 'tp-pak-1',
    subjectId: 'pak-bp',
    elemen: 'Allah Berkarya',
    cpId: 'cp-pak-1',
    kodeTp: 'TP-PAK.5.1',
    bab: 'Bab 1: Allah Memelihara Ciptaan-Nya',
    deskripsi: 'Peserta didik dapat mensyukuri dan memelihara kelestarian alam dan lingkungan hidup sebagai wujud iman kepada Allah Sang Pencipta.',
    dimensiProfilLulusan: ['Keimanan dan ketakwaan', 'Kewargaan'],
    semester: 1,
    alokasiJp: 9
  },

  // Bahasa Jawa
  {
    id: 'tp-bjw-1',
    subjectId: 'bahasa-jawa',
    elemen: 'Unggah-Ungguh & Sastra Jawa',
    cpId: 'cp-bjw-1',
    kodeTp: 'TP-BJW.5.1',
    bab: 'Wulangan 1: Guyub Rukun ing Desa Pujiharjo',
    deskripsi: 'Peserta didik saged ngginakaken basa krama alus kangge pacelathon kaliyan bapak/ibu guru lan tiyang sepuh, sarta nembang macapat Maskumambang.',
    dimensiProfilLulusan: ['Kewargaan', 'Komunikasi', 'Keimanan dan ketakwaan'],
    semester: 1,
    alokasiJp: 6
  }
];

export const INITIAL_ALUR_TUJUAN_PEMBELAJARAN: AlurTujuanPembelajaran[] = [
  {
    id: 'atp-bin-1',
    subjectId: 'bahasa-indonesia',
    tpId: 'tp-bin-1',
    kodeTp: 'TP-BIN.5.1',
    urutan: 1,
    materiPokok: 'Mengenal Karakter Diri dan Teman, Kata Sifat, Sinonim & Antonim',
    alokasiJp: 6,
    semester: 1,
    status: 'Selesai',
    keterangan: 'Tuntas pada minggu ke-2 Agustus'
  },
  {
    id: 'atp-bin-2',
    subjectId: 'bahasa-indonesia',
    tpId: 'tp-bin-2',
    kodeTp: 'TP-BIN.5.2',
    urutan: 2,
    materiPokok: 'Unsur Intrinsik Cerita Anak, Majas Metafora & Personifikasi',
    alokasiJp: 8,
    semester: 1,
    status: 'Sedang Berjalan',
    keterangan: 'Sedang berjalan materi membedakan fakta dan opini'
  },
  {
    id: 'atp-bin-3',
    subjectId: 'bahasa-indonesia',
    tpId: 'tp-bin-3',
    kodeTp: 'TP-BIN.5.3',
    urutan: 3,
    materiPokok: 'Teks Prosedur Membuat Produk Kreatif & Berbicara Santun',
    alokasiJp: 6,
    semester: 1,
    status: 'Belum Dimulai',
    keterangan: 'Direncanakan minggu ke-2 Oktober'
  },
  {
    id: 'atp-mat-1',
    subjectId: 'matematika',
    tpId: 'tp-mat-1',
    kodeTp: 'TP-MAT.5.1',
    urutan: 1,
    materiPokok: 'Operasi Penjumlahan & Pengurangan Pecahan Biasa dan Campuran',
    alokasiJp: 10,
    semester: 1,
    status: 'Sedang Berjalan',
    keterangan: 'Latihan soal cerita terintegrasi harga komoditas Pujiharjo'
  },
  {
    id: 'atp-ipas-1',
    subjectId: 'ipas',
    tpId: 'tp-ipas-1',
    kodeTp: 'TP-IPAS.5.1',
    urutan: 1,
    materiPokok: 'Cahaya dan Sifat-sifatnya, Bagian Mata dan Mekanisme Melihat',
    alokasiJp: 10,
    semester: 1,
    status: 'Sedang Berjalan',
    keterangan: 'Praktikum cermin cembung, cekung, dan periskop sederhana'
  },
  {
    id: 'atp-pan-1',
    subjectId: 'pancasila',
    tpId: 'tp-pan-1',
    kodeTp: 'TP-PPKN.5.1',
    urutan: 1,
    materiPokok: 'Pancasila sebagai Pandangan Hidup & Praktik Gotong Royong',
    alokasiJp: 8,
    semester: 1,
    status: 'Selesai',
    keterangan: 'Siswa membuat poster pengamalan Pancasila di rumah'
  }
];

export const INITIAL_MODUL_AJAR: ModulAjar[] = [
  {
    id: 'modul-ipas-1',
    subjectId: 'ipas',
    tpId: 'tp-ipas-1',
    judul: 'Eksplorasi Keajaiban Cahaya dan Bunyi di Pesisir Pujiharjo',
    fase: 'Fase C',
    kelas: 'Kelas V',
    semester: 1,
    alokasiWaktu: '4 x 35 Menit (2 Pertemuan)',
    penyusun: 'Angga Yoga Pratama, S.Pd.',
    instansi: 'SD Negeri 1 Pujiharjo, Kec. Tirtoyudo',
    identifikasiPesertaDidik: 'Siswa kelas V berjumlah 24 anak, memiliki ketertarikan tinggi terhadap penyelidikan alam terbuka dan eksperimen langsung.',
    karakteristikMateri: 'Materi memadukan konsep sains abstrak (gelombang cahaya dan bunyi) menjadi pengalaman indrawi konkret melalui media sederhana.',
    dimensiProfilLulusan: [
      'Penalaran kritis',
      'Kreativitas',
      'Kolaborasi',
      'Kemandirian'
    ],
    pemahamanBermakna: 'Cahaya dan bunyi adalah anugerah Tuhan yang memungkinkan kita menikmati keindahan alam Pujiharjo dan berkomunikasi dengan sesama manusia.',
    pertanyaanPemantik: [
      'Mengapa saat fajar di Pantai Sipelot langit berwarna kemerahan?',
      'Bagaimana cara kerja periskop kapal selam di laut lepas?',
      'Mengapa bunyi ombak terdengar lebih jelas saat malam hari di desa kita?'
    ],
    praktikPedagogis: 'Inquiry-Based Learning & Experiential Deep Learning (Pembelajaran Mendalam) yang menggabungkan olah pikir, olah rasa, dan olah karya.',
    lingkunganBelajar: 'Ruang kelas V dengan penataan meja melingkar (U-Shape) dan area outdoor taman sekolah untuk observasi sinar matahari.',
    teknologiDigital: 'Proyektor LCD interaktif, aplikasi simulasi prisma warna PhET Interactive Simulation, tablet kelas untuk dokumentasi video eksperimen.',
    kegiatanPendahuluan: [
      'Berkesadaran (Mindful): Guru menyapa hangat setiap siswa dengan Senyum Salam Sapa (SPN), memandu teknik hening pernapasan 2 menit (STOP: Stop, Take a breath, Observe, Proceed) untuk memusatkan fokus belajar.',
      'Apersepsi: Guru menyalakan senter di dalam ruangan gelap dan memperlihatkan bayangan tangan, mengaitkan dengan kehidupan nelayan Pujiharjo saat melaut malam hari.',
      'Penyampaian Tujuan & Motivasi: Siswa memahami misi pembelajaran hari ini sebagai "Detektif Cahaya Cilik Pujiharjo".'
    ],
    kegiatanInti: {
      memahami: [
        'Siswa menyimak video demonstrasi pembiasan cahaya pada pensil di dalam gelas air bening.',
        'Siswa secara berpasangan mendiskusikan 4 sifat utama cahaya: merambat lurus, menembus benda bening, dapat dipantulkan, dan dapat dibiaskan.'
      ],
      mengaplikasi: [
        'Bermakna (Meaningful Learning): Siswa dalam kelompok kolaboratif melakukan 3 pos praktikum menggunakan alat sederhana (senter, cermin datar, prisma kaca, mangkuk air koin, dan karton berlubang).',
        'Setiap kelompok mencatat data hasil penyelidikan pada Lembar Kerja Eksplorasi Sains Pujiharjo.',
        'Kelompok merakit prototipe periskop sederhana berbahan dasar kardus bekas odol/susu dan dua cermin kecil.'
      ],
      merefleksi: [
        'Menggembirakan (Joyful Learning): Game interaktif "Tebak Bayangan & Sudut Pantul" di panggung kelas.',
        'Siswa mempresentasikan hasil uji coba periskop dan menguji fungsionalitasnya untuk melihat objek di balik dinding kelas.',
        'Siswa menyimpulkan hubungan sifat cahaya dengan kemampuan mata manusia melihat keindahan Desa Pujiharjo.'
      ]
    },
    kegiatanPenutup: [
      'Guru bersama peserta didik merangkum konsep kunci pembiasan dan pemantulan cahaya.',
      'Refleksi Berkesadaran: Siswa mengisi lembar "Karcis Keluar Belajar (Exit Ticket)" dengan emotikon perasaan dan satu pertanyaan sains baru yang muncul di benak mereka.',
      'Doa penutup dan pesan karakter rasa syukur atas indera penglihatan yang sehat.'
    ],
    diferensiasi: {
      konten: 'Tersedia infografis bergambar berwarna untuk pembelajar visual, kartu teks ringkas untuk pembelajar auditori, dan set alat peraga senter cermin untuk pembelajar kinestetik.',
      proses: 'Siswa yang telah menguasai konsep membimbing teman sebaya (tutor sebaya), sementara siswa yang butuh pendampingan dipandu guru dengan scaffolding terfokus.',
      produk: 'Siswa dapat memilih memaparkan hasil melalui laporan tertulis, bagan gambar poster berlabel, atau video penjelasan lisan 1 menit.'
    },
    asesmen: {
      awal: 'Kuis diagnostik 5 soal berbasis gambar tentang bayangan dan cermin di lingkungan rumah.',
      formatif: 'Lembar observasi unjuk kerja praktikum periskop sederhana dan rubrik diskusi kelompok.',
      sumatif: 'Tes tertulis asesmen akhir lingkup materi sifat-sifat cahaya (soal pilihan ganda bernalar tinggi dan isian singkat).'
    },
    remedialPengayaan: {
      remedial: 'Pendampingan langsung dengan praktikum ulang pembiasan cahaya menggunakan sedotan dan gelas air bening.',
      pengayaan: 'Eksplorasi mandiri menyelidiki pelangi buatan menggunakan semprotan air di halaman sekolah pada pagi hari dan menganalisis spektrum warna mejikuhibiniu.'
    },
    konteksLokalPujiharjo: 'Mengaitkan sifat cahaya dan navigasi mercusuar/lampu nelayan di Pantai Sipelot Desa Pujiharjo serta pemanfaatan sinar matahari untuk menjemur hasil perkebunan cengkeh dan kopi warga Tirtoyudo.'
  },
  {
    id: 'modul-bin-1',
    subjectId: 'bahasa-indonesia',
    tpId: 'tp-bin-1',
    judul: 'Aku yang Unik: Menggali Potensi Diri dan Menulis Deskripsi Bermakna',
    fase: 'Fase C',
    kelas: 'Kelas V',
    semester: 1,
    alokasiWaktu: '6 x 35 Menit (3 Pertemuan)',
    penyusun: 'Angga Yoga Pratama, S.Pd.',
    instansi: 'SD Negeri 1 Pujiharjo, Kec. Tirtoyudo',
    identifikasiPesertaDidik: 'Peserta didik kelas V memiliki latar belakang hobi dan keunikan minat beragam, mulai dari kesenian tradisi Malangan hingga olahraga sepak bola pesisir.',
    karakteristikMateri: 'Materi fokus pada keterampilan menyimak deskripsi diri, memperkaya kosakata sifat, membedakan sinonim dan antonim, serta menulis paragraf deskriptif.',
    dimensiProfilLulusan: ['Kemandirian', 'Komunikasi', 'Penalaran kritis'],
    pemahamanBermakna: 'Setiap anak diciptakan unik dengan bakat dan keistimewaan masing-masing untuk saling melengkapi dalam kebersamaan kelas.',
    pertanyaanPemantik: [
      'Apa sifat terbaik dirimu yang paling disukai teman-temanmu?',
      'Bagaimana kata-kata dapat menggambarkan kepribadian seseorang secara jujur dan santun?'
    ],
    praktikPedagogis: 'Genre-Based Approach & Deep Learning (Memahami makna kata -> Mengaplikasikan dalam wawancara sahabat -> Merefleksikan rasa bangga atas jati diri).',
    lingkunganBelajar: 'Lingkungan kelas ramah literasi dengan pojok baca aktif dan mading karya kelas V.',
    teknologiDigital: 'Audio player untuk menyimak rekaman monolog tokoh inspiratif dan papan kolaborasi digital.',
    kegiatanPendahuluan: [
      'Mindful Start: Menyanyikan lagu wajib "Indonesia Pusaka" dengan penghayatan penuh makna.',
      'Ice Breaking: Permainan "Tebak Siapakah Aku" menggunakan 3 kata sifat petunjuk.'
    ],
    kegiatanInti: {
      memahami: [
        'Siswa menyimak teks deskripsi "Rana dan Rani: Saudara Kembar yang Berbeda" yang dibacakan guru.',
        'Siswa menandai kata sifat (ramah, tekun, periang, pemalu) dan mencari padanan kata (sinonim) dalam kamus.'
      ],
      mengaplikasi: [
        'Siswa melakukan kegiatan "Wawancara Sahabatku" untuk menggali hobi, cita-cita, dan sifat positif teman sebangku.',
        'Siswa menyusun paragraf deskripsi tentang sahabat karibnya menggunakan ejaan dan tanda baca yang tepat.'
      ],
      merefleksi: [
        'Siswa membacakan hasil tulisannya di depan kelas, dan sahabat yang dideskripsikan memberikan apresiasi bintang.',
        'Siswa menempelkan tulisan "Pohon Karakter Kelas V SDN 1 Pujiharjo".'
      ]
    },
    kegiatanPenutup: [
      'Siswa merefleksikan pentingnya menghargai perbedaan kepribadian di lingkungan sekolah dan desa.',
      'Tugas pembiasaan di rumah: mengucapkan kata terima kasih dan apresiasi kepada orang tua.'
    ],
    diferensiasi: {
      konten: 'Disediakan bank kata sifat bergambar dan contoh teks berjenjang.',
      proses: 'Siswa dapat menulis mandiri atau berkolaborasi dengan panduan kalimat perancah (sentence frames).',
      produk: 'Produk tulisan berupa buku saku mini karakter atau kartu profil berhias ornamen khas.'
    },
    asesmen: {
      awal: 'Identifikasi awal pemahaman kata sifat melalui kuis singkat menjodohkan.',
      formatif: 'Penilaian proses wawancara sahabat dan rubrik draf paragraf deskripsi.',
      sumatif: 'Portofolio teks deskripsi akhir "Sahabatku Bintang Kelas V".'
    },
    remedialPengayaan: {
      remedial: 'Latihan menyusun kalimat tunggal sederhana dengan kata sifat yang dipandu guru.',
      pengayaan: 'Menulis teks deskripsi tentang tokoh inspiratif lokal penggerak wisata atau pertanian di Pujiharjo.'
    },
    konteksLokalPujiharjo: 'Mengangkat nilai guyub rukun masyarakat Tirtoyudo dan kearifan lokal gotong royong warga desa pesisir Pujiharjo.'
  }
];

export const INITIAL_KKTP_ITEMS: KKTPItem[] = [
  {
    id: 'kktp-ipas-1',
    subjectId: 'ipas',
    tpId: 'tp-ipas-1',
    tujuanPembelajaranText: 'Peserta didik dapat menjelaskan sifat-sifat cahaya (merambat lurus, dipantulkan, dibiaskan) dan sifat bunyi melalui percobaan sederhana.',
    indikatorKetercapaian: [
      'Mengidentifikasi minimal 3 sifat cahaya berdasarkan hasil pengamatan langsung.',
      'Melakukan percobaan pembiasan dan pemantulan cahaya sesuai petunjuk prosedur dengan aman.',
      'Menyimpulkan fungsi periskop dan hubungan sifat pemantulan cahaya dalam kehidupan sehari-hari.'
    ],
    kriteriaPenilaian: 'Pendekatan Rubrik Deskriptor 4 Tingkat Ketercapaian',
    kategori: {
      belumMencapai: {
        rentang: '0 - 59%',
        deskripsi: 'Peserta didik belum mampu menyebutkan sifat cahaya dan kesulitan dalam merangkai alat percobaan dasar.',
        tindakLanjut: 'Diberikan bimbingan terfokus secara individu dengan alat peraga senter dan gelas air nyata.'
      },
      mulaiMencapai: {
        rentang: '60 - 74%',
        deskripsi: 'Peserta didik dapat menyebutkan 2 sifat cahaya dan melakukan percobaan namun belum dapat menyimpulkan hasil pengamatan dengan mandiri.',
        tindakLanjut: 'Diberikan lembar kerja bertingkat dengan bantuan gambar panduan dan pendampingan tutor sebaya.'
      },
      mencapai: {
        rentang: '75 - 89%',
        deskripsi: 'Peserta didik mampu membuktikan seluruh sifat cahaya melalui percobaan, mencatat data, dan menyimpulkan fungsionalitas periskop secara runtut.',
        tindakLanjut: 'Diberikan apresiasi dan melanjutkan ke materi pendengaran bunyi serta struktur telinga.'
      },
      melampaui: {
        rentang: '90 - 100%',
        deskripsi: 'Peserta didik sangat mahir mendemonstrasikan sifat cahaya, mampu mengaitkannya dengan fenomena alam pelangi/fatamorgana pesisir, serta membantu teman dalam kelompok.',
        tindakLanjut: 'Diberikan tantangan pengayaan proyek optik lanjutan (membuat kamera lubang jarum / camera obscura).'
      }
    }
  },
  {
    id: 'kktp-mat-1',
    subjectId: 'matematika',
    tpId: 'tp-mat-1',
    tujuanPembelajaranText: 'Peserta didik dapat melakukan operasi penjumlahan dan pengurangan pecahan dengan penyebut berbeda menggunakan representasi visual konkret.',
    indikatorKetercapaian: [
      'Menyamakan penyebut dua pecahan menggunakan KPK atau model pecahan kotak warna.',
      'Menyelesaikan operasi hitung penjumlahan dan pengurangan pecahan biasa dan campuran secara akurat.',
      'Memecahkan soal cerita kontekstual pembagian hasil panen atau belanjaan pasar di Pujiharjo.'
    ],
    kriteriaPenilaian: 'Rubrik Ketercapaian Operasi Hitung dan Pemecahan Masalah',
    kategori: {
      belumMencapai: {
        rentang: '0 - 59%',
        deskripsi: 'Belum memahami konsep penyebut yang sama dan menjumlahkan pembilang serta penyebut secara langsung.',
        tindakLanjut: 'Remedial menggunakan media manipulatif kertas lipat berpetak dan pecahan balok kayu.'
      },
      mulaiMencapai: {
        rentang: '60 - 74%',
        deskripsi: 'Dapat menyamakan penyebut tetapi masih sering keliru dalam menghitung pembilang pecahan baru.',
        tindakLanjut: 'Latihan mandiri terbimbing dengan kartu soal berjenjang dan tabel perkalian.'
      },
      mencapai: {
        rentang: '75 - 89%',
        deskripsi: 'Mampu menyelesaikan penjumlahan dan pengurangan pecahan berpenyebut beda dan menyederhanakan pecahan akhir dengan tepat.',
        tindakLanjut: 'Melanjutkan materi perkalian dan pembagian pecahan.'
      },
      melampaui: {
        rentang: '90 - 100%',
        deskripsi: 'Sangat cepat dan teliti menyelesaikan berbagai variasi soal pecahan campuran kompleks serta mampu menciptakan soal cerita nyata sendiri.',
        tindakLanjut: 'Diberikan materi olimpiade matematika SD tingkat kecamatan.'
      }
    }
  }
];
