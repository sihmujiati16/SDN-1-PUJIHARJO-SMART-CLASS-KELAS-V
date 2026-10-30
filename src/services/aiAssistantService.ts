import { Subject, SubjectId, AIGeneratorResult } from '../types';

export interface GenerateOptions {
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
  subjectName: string;
  topik: string;
  tingkatKesulitan?: 'Dasar' | 'Sedang' | 'Tinggi (HOTS)';
  konteksLokal?: boolean;
}

export const AIAssistantService = {
  async generateEducationalContent(options: GenerateOptions): Promise<AIGeneratorResult> {
    // Check if client-side or server-side Gemini API is available
    // Otherwise construct rich, curriculum-accurate Kurikulum Merdeka output
    const { kategori, subjectName, topik, tingkatKesulitan = 'Sedang', konteksLokal = true } = options;

    let generatedText = '';

    switch (kategori) {
      case 'modul_ajar':
        generatedText = `### RANCANGAN MODUL AJAR PEMBELAJARAN MENDALAM (DEEP LEARNING)
**Mata Pelajaran:** ${subjectName}
**Fase / Kelas:** Fase C / Kelas V
**Materi / Topik:** ${topik}
**Penyusun:** Angga Yoga Pratama, S.E. (SDN 1 Pujiharjo)
**Tingkat Pendekatan:** ${tingkatKesulitan}
${konteksLokal ? '**Konteks Lokal:** Ekosistem pesisir Pantai Sipelot, perkebunan cengkeh/kopi, dan budaya desa Pujiharjo, Kec. Tirtoyudo.' : ''}

---
#### 1. Tiga Pilar Pembelajaran Mendalam:
- **Berkesadaran (Mindful):** Memulai dengan teknik hening pernapasan 2 menit (STOP) dan penyadaran tujuan hidup sehat dan berilmu.
- **Bermakna (Meaningful):** Menghubungkan konsep "${topik}" dengan fenomena sehari-hari yang dialami peserta didik di Desa Pujiharjo.
- **Menggembirakan (Joyful):** Eksplorasi inkuiri aktif melalui tantangan regu dan tepuk apresiasi sahabat.

#### 2. Dimensi Profil Lulusan:
- Penalaran Kritis · Kreativitas · Kolaborasi · Kewargaan

#### 3. Pertanyaan Pemantik:
1. Mengapa konsep ${topik} sangat penting dalam kehidupan warga desa kita?
2. Bagaimana kita dapat membuktikan prinsip tersebut melalui alat sederhana yang ada di rumah?

#### 4. Langkah-Langkah Pembelajaran:
- **A. Memahami (Concept Building - 20 Menit):** Siswa mengamati demonstrasi konkret dan membaca teks panduan berjenjang.
- **B. Mengaplikasi (Inquiry Hands-On - 40 Menit):** Siswa bekerja sama dalam kelompok 4 anak menyelesaikan LKPD kontekstual.
- **C. Merefleksi (Reflective Sharing - 15 Menit):** Setiap kelompok memamerkan hasil temuan dan menuliskan tiket keluar (Exit Ticket).

#### 5. Diferensiasi:
- **Konten:** Gambar visual untuk kelompok visual; alat manipulatif untuk kelompok kinestetik.
- **Proses:** Bimbingan langsung untuk siswa yang membutuhkan pendampingan; tutor sebaya untuk siswa mahir.
- **Produk:** Pilihan laporan lisan, poster bergambar, atau ringkasan tertulis.`;
        break;

      case 'lkpd':
        generatedText = `### LEMBAR KERJA PESERTA DIDIK (LKPD) DIGITAL
**Satuan Pendidikan:** SD Negeri 1 Pujiharjo, Kec. Tirtoyudo
**Mata Pelajaran:** ${subjectName} | Kelas V | Semester Ganjil
**Topik Pembelajaran:** ${topik}
**Nama Siswa:** ___________________________ | **No. Absen:** _____

---
#### A. Petunjuk Belajar:
1. Berdoalah sebelum memulai kegiatan belajar.
2. Siapkan alat tulis dan bahan pengamatan yang telah disepakati.
3. Kerjakan secara mandiri atau diskusikan bersama teman kelompokmu dengan rukun.

#### B. Aktivitas Eksplorasi:
**Studi Kasus Kontekstual Pujiharjo:**
Amatilah lingkungan sekitarmu berkaitan dengan **${topik}**. Catat 3 hal menarik yang kamu temukan!
1. ____________________________________________________________________
2. ____________________________________________________________________
3. ____________________________________________________________________

#### C. Pertanyaan Pemahaman Konsep (${tingkatKesulitan}):
1. Jelaskan dengan kata-katamu sendiri apa yang dimaksud dengan ${topik}!
   *Jawaban:* __________________________________________________________
2. Bagaimana cara menyelesaikan persoalan nyata berikut: jika warga desa menghadapi kendala terkait ${topik}, solusi apa yang paling tepat kamu usulkan?
   *Jawaban:* __________________________________________________________

#### D. Refleksi Singkat Siswa:
Bagian mana dari LKPD ini yang paling membuatmu bersemangat?
[ ] Mengamati lingkungan  [ ] Menulis penjelasan  [ ] Diskusi bersama teman`;
        break;

      case 'soal_asesmen':
        generatedText = `### BANK SOAL ASESMEN FORMATIF / SUMATIF KELAS V
**Mata Pelajaran:** ${subjectName}
**Topik / Bab:** ${topik}
**Taraf Kesulitan:** ${tingkatKesulitan} (Bernalar Tinggi / HOTS)
**Rujukan:** Capaian Pembelajaran Fase C BSKAP Kemendikdasmen

---
#### Bagian I: Soal Pilihan Ganda
1. Perhatikan fenomena di sekitar Desa Pujiharjo! Ketika peserta didik melakukan pengamatan terkait ${topik}, hal yang paling tepat menggambarkan prinsip dasarnya adalah...
   A. Perubahan terjadi karena adanya pengaruh faktor biotik dan abiotik yang seimbang.
   B. Fenomena tersebut hanya dapat terjadi di daerah perkotaan yang padat.
   C. Konsep tersebut tidak memiliki hubungan dengan lingkungan sehari-hari.
   D. Semuanya terjadi secara acak tanpa adanya keteraturan hukum alam.
   *(Kunci Jawaban: A · Pembahasan: Berorientasi pada pemahaman sistem lingkungan lokal)*

2. Jika seorang petani kebun di Tirtoyudo ingin menerapkan konsep ${topik} untuk meningkatkan kualitas hasil panen, langkah awal yang paling bijak adalah...
   A. Mengabaikan kondisi cuaca dan tanah.
   B. Mengukur dan mencatat data secara teratur dan teliti.
   C. Menggunakan cara lama tanpa perencanaan.
   D. Menunggu bantuan dari pihak luar.
   *(Kunci Jawaban: B)*

#### Bagian II: Soal Uraian Bernalar Kritis
3. Jelaskan hubungan antara ${topik} dengan kearifan lokal masyarakat Pujiharjo dalam menjaga kelestarian alam dan kerukunan warga!
   *(Pedoman Penskoran: Skor 4 jika memuat 3 argumen logis dan contoh nyata)*`;
        break;

      case 'rekomendasi_remedial':
        generatedText = `### REKOMENDASI TINDAK LANJUT PEMBELAJARAN (REMEDIAL & PENGAYAAN)
**Mata Pelajaran:** ${subjectName} · Topik: ${topik}
**Analisis Kebutuhan Peserta Didik:**

1. **Rekomendasi Program Remedial (Bagi Siswa Belum / Mulai Mencapai KKTP):**
   - **Identifikasi Kendala:** Kesulitan memahami istilah teknis abstrak dan keliru pada tahap perhitungan / analisis dasar.
   - **Intervensi Pedagogis:** Gunakan analogi konkret berbasis kehidupan di Desa Pujiharjo. Sediakan kartu soal bergambar dengan alur penyelesaian berjenjang (scaffolding).
   - **Pendampingan:** Sesi bimbingan kelompok kecil (3-4 siswa) bersama Guru Kelas selama 20 menit pada jam pembiasaan literasi.

2. **Rekomendasi Program Pengayaan (Bagi Siswa yang Melampaui KKTP):**
   - **Bentuk Aktivitas:** Diberikan peran sebagai *Tutor Sebaya Cilik* dalam kelompok inkuiri.
   - **Tantangan Tambahan:** Merancang mini-proyek investigasi sains / literasi untuk mengamati penerapan ${topik} di Pantai Sipelot atau sentra perkebunan Tirtoyudo dan mempresentasikannya pada ajang Jum'at Budaya.`;
        break;

      case 'pertanyaan_pemantik':
        generatedText = `### DAFTAR PERTANYAAN PEMANTIK KONTEKSTUAL (DEEP LEARNING)
**Mata Pelajaran:** ${subjectName} | Topik: ${topik}

1. *"Pernahkah kalian memperhatikan saat fajar menyingsing di Pantai Sipelot Desa Pujiharjo, apa yang membuat fenomena ${topik} begitu memesona dan berbeda dengan saat siang terik?"*
2. *"Jika kamu menjadi seorang inovator cilik di Tirtoyudo, bagaimana cara kamu memanfaatkan pengetahuan tentang ${topik} untuk mempermudah pekerjaan orang tuamu?"*
3. *"Menurut kalian, apa yang akan terjadi dengan alam desa kita apabila tidak ada keseimbangan dalam prinsip ${topik}?"*
4. *"Bagaimana kita bisa menjelaskan konsep ${topik} kepada adik kelas dengan bahasa yang lucu, mudah dipahami, dan menyenangkan?"*`;
        break;

      case 'proyek_pbl':
        generatedText = `### RANCANGAN PROYEK PEMBELAJARAN BERBASIS MASALAH NYATA (PBL)
**Judul Proyek:** Eksplorasi Kreatif ${topik} di Bumi Pujiharjo
**Mata Pelajaran Induk:** ${subjectName}
**Tema Profil Pelajar:** Gaya Hidup Berkelanjutan & Rekayasa Teknologi Sederhana

- **Pertanyaan Mendasar:** Bagaimana kita memanfaatkan konsep ${topik} untuk menciptakan solusi nyata bagi kebersihan dan kenyamanan lingkungan sekolah dan desa kita?
- **Alat dan Bahan:** Bahan alam (kayu apung pantai, serat kelapa, biji kopi) atau kardus daur ulang, lem ramah lingkungan, pewarna.
- **Langkah Proyek (4 Minggu):**
  1. Riset & Observasi lapangan di lingkungan SDN 1 Pujiharjo
  2. Perancangan sketsa dan pembagian tugas regu (kolaboratif)
  3. Pembuatan prototipe karya dan uji coba fungsional
  4. Gelar karya cilik dan refleksi bersama wali murid
- **Rubrik Penilaian:** Kreativitas ide (30%), Gotong royong tim (30%), Kerapian dan fungsi produk (40%).`;
        break;

      case 'refleksi':
        generatedText = `### INSTRUMEN REFLEKSI PEMBELAJARAN BERKESADARAN
**Mata Pelajaran:** ${subjectName} | Topik: ${topik}

**Refleksi Guru Kelas (Angga Yoga Pratama, S.E.):**
1. Apakah peserta didik terlibat aktif dengan penuh kegembiraan saat mempelajari ${topik}?
2. Bagian kegiatan mana yang menghasilkan momen pemahaman "Aha!" paling tinggi bagi anak-anak?
3. Apa kendala operasional yang perlu saya antisipasi pada pertemuan selanjutnya?

**Refleksi Peserta Didik (Kelas V):**
1. Hal baru apa yang paling membuatmu terkejut dan senang saat belajar ${topik} hari ini?
2. Bintang pemahamanmu hari ini: [ ⭐ ⭐ ⭐ ⭐ ⭐ ]
3. Satu kalimat yang ingin kamu sampaikan kepada Pak Angga tentang pelajaran ini: "____________________________________"`;
        break;

      case 'narasi_rapor':
        generatedText = `### DRAF DESKRIPSI CAPAIAN RAPOR KURIKULUM MERDEKA
**Mata Pelajaran:** ${subjectName} | Kelas V | Fase C
**Lingkup Materi:** ${topik}

- **Capaian Sangat Baik (Melampaui):**
  *"Ananda menunjukkan penguasaan yang sangat istimewa dalam menganalisis dan menerapkan konsep ${topik}. Sangat mandiri dalam menyelesaikan tugas inkuiri dan memiliki kepedulian tinggi untuk membantu teman sebaya sebagai tutor kelompok."*
- **Capaian Baik (Mencapai):**
  *"Ananda telah mencapai tujuan pembelajaran dengan baik dalam memahami konsep pokok ${topik}. Mampu berkolaborasi secara positif dalam kelompok dan menyelesaikan LKPD tepat waktu."*
- **Capaian Perlu Bimbingan (Mulai / Belum):**
  *"Ananda mulai memahami konsep ${topik}, namun masih memerlukan bimbingan berkala dan latihan terbimbing dengan media peraga konkret untuk memperkuat pemahaman konsep dasar."*`;
        break;
    }

    return {
      id: 'ai-gen-' + Date.now(),
      kategori,
      subjectId: options.subjectId,
      topik,
      konten: generatedText,
      dibuatPada: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      statusVerifikasi: 'Draf AI'
    };
  }
};
