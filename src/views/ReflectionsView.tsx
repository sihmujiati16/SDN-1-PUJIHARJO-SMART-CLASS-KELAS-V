import React, { useState } from 'react';
import {
  MessageSquareHeart,
  Star,
  Smile,
  Meh,
  Frown,
  HelpCircle,
  Send,
  Printer,
  Calendar,
  CheckCircle2,
  Users
} from 'lucide-react';
import { ReflectionEntry, Subject, SubjectId, Student } from '../types';

interface Props {
  reflections: ReflectionEntry[];
  subjects: Subject[];
  students: Student[];
  userRole: 'guru' | 'siswa';
  activeStudentId?: string;
  onAddReflection: (entry: ReflectionEntry) => void;
}

export const ReflectionsView: React.FC<Props> = ({
  reflections,
  subjects,
  students,
  userRole,
  activeStudentId = 'std-02',
  onAddReflection
}) => {
  const [reflectionType, setReflectionType] = useState<'guru' | 'siswa'>(
    userRole === 'siswa' ? 'siswa' : 'guru'
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('ipas');
  const [rating, setRating] = useState<number>(5);
  const [emotikon, setEmotikon] = useState<'senang' | 'paham' | 'bingung' | 'perlu_bantuan'>('senang');

  // Question Form States
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const activeStudent = students.find((s) => s.id === activeStudentId) || students[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q1) return;

    const newEntry: ReflectionEntry = {
      id: 'ref-' + Date.now(),
      tanggal: new Date().toISOString().split('T')[0],
      jenis: reflectionType,
      subjectId: selectedSubjectId,
      authorName: reflectionType === 'guru' ? 'Angga Yoga Pratama, S.Pd.' : activeStudent.nama,
      studentId: reflectionType === 'siswa' ? activeStudent.id : undefined,
      ratingPemahaman: rating,
      emotikon: reflectionType === 'siswa' ? emotikon : undefined,
      q1,
      q2,
      q3,
      q4,
      q5
    };

    onAddReflection(newEntry);
    setQ1('');
    setQ2('');
    setQ3('');
    setQ4('');
    setQ5('');
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquareHeart className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Refleksi Pembelajaran Berkesadaran (Mindful Reflection)
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Umpan Balik Tumbuh Kembang, Evaluasi Pembelajaran Guru & Refleksi Harian Peserta Didik
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Switch Guru / Siswa */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs">
            <button
              onClick={() => setReflectionType('guru')}
              className={`px-3 py-1.5 rounded-md font-medium transition ${
                reflectionType === 'guru'
                  ? 'bg-blue-600 text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Refleksi Guru
            </button>
            <button
              onClick={() => setReflectionType('siswa')}
              className={`px-3 py-1.5 rounded-md font-medium transition ${
                reflectionType === 'siswa'
                  ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Refleksi Siswa
            </button>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-xl transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak Riwayat</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Reflection Form & Reflection History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Column: Form Pengisian Refleksi */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {reflectionType === 'guru'
                ? 'Formulir Evaluasi & Refleksi Guru Kelas V'
                : `Formulir Refleksi Mandiri Siswa: ${activeStudent.nama}`}
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          </div>

          {submittedMessage && (
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Refleksi berhasil disimpan ke dalam jurnal pembelajaran!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Subject Selector */}
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mata Pelajaran yang Direfleksikan:
              </label>
              <select
                value={selectedSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value as SubjectId)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Student Mood Emoticon & Star Rating */}
            {reflectionType === 'siswa' && (
              <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-3">
                <div>
                  <label className="block font-bold text-emerald-900 dark:text-emerald-300 mb-1.5">
                    Bagaimana Perasaanmu Saat Belajar Hari Ini?
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'senang', label: 'Senang Sekali', icon: '😄' },
                      { id: 'paham', label: 'Paham & Jelas', icon: '😊' },
                      { id: 'bingung', label: 'Agak Bingung', icon: '🤔' },
                      { id: 'perlu_bantuan', label: 'Butuh Bantuan', icon: '🙋‍♂️' }
                    ].map((emo) => (
                      <button
                        key={emo.id}
                        type="button"
                        onClick={() => setEmotikon(emo.id as any)}
                        className={`p-2.5 rounded-xl border text-center transition ${
                          emotikon === emo.id
                            ? 'bg-white dark:bg-slate-800 border-emerald-500 shadow-xs'
                            : 'bg-white/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 opacity-70'
                        }`}
                      >
                        <span className="text-xl block">{emo.icon}</span>
                        <span className="text-[10px] font-semibold mt-1 block truncate">
                          {emo.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-emerald-900 dark:text-emerald-300 mb-1">
                    Skala Pemahaman Materi:
                  </label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 hover:scale-110 transition"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 font-mono font-bold text-slate-700 dark:text-slate-300">
                      {rating} / 5 Bintang
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Questions for GURU */}
            {reflectionType === 'guru' ? (
              <>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    1. Apakah tujuan pembelajaran hari ini tercapai secara optimal?
                  </label>
                  <textarea
                    rows={2}
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                    placeholder="Deskripsikan persentase pemahaman siswa dan indikator yang telah tuntas..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    2. Bagaimana keterlibatan dan respon aktif peserta didik selama proses inkuiri?
                  </label>
                  <textarea
                    rows={2}
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                    placeholder="Keaktifan kelompok, antusiasme percobaan, dan dinamika interaksi..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    3. Hal-hal baik apa yang berjalan efektif dan patut dipertahankan?
                  </label>
                  <textarea
                    rows={2}
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                    placeholder="Media peraga, teknik pernapasan STOP berkesadaran, atau kolaborasi kelompok..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    4. Kendala atau tantangan apa yang ditemukan dalam pembelajaran?
                  </label>
                  <textarea
                    rows={2}
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                    placeholder="Kesulitan spesifik beberapa anak atau kendala alokasi waktu..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    5. Apa rencana aksi perbaikan untuk pertemuan pembelajaran berikutnya?
                  </label>
                  <textarea
                    rows={2}
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                    placeholder="Strategi diferensiasi tambahan, variasi media atau ice breaking gembira..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </>
            ) : (
              /* Questions for SISWA */
              <>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    1. Apa ilmu atau hal baru yang paling penting kamu pelajari hari ini?
                  </label>
                  <textarea
                    rows={2}
                    value={q1}
                    onChange={(e) => setQ1(e.target.value)}
                    placeholder="Ceritakan dengan bahasamu sendiri..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    2. Apa hal yang paling menyenangkan atau membuatmu bersemangat saat belajar?
                  </label>
                  <textarea
                    rows={2}
                    value={q2}
                    onChange={(e) => setQ2(e.target.value)}
                    placeholder="Misal: Saat membuat periskop, kerja kelompok bareng teman..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    3. Bagian materi apa yang masih terasa sulit atau belum kamu pahami sepenuhnya?
                  </label>
                  <textarea
                    rows={2}
                    value={q3}
                    onChange={(e) => setQ3(e.target.value)}
                    placeholder="Tuliskan jujur agar Pak Angga bisa bantu menjelaskan lagi..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    4. Bagaimana kamu bisa menerapkan pengetahuan ini di rumah atau di desa Pujiharjo?
                  </label>
                  <textarea
                    rows={2}
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                    placeholder="Misal: Membantu orang tua menimbang hasil panen kopi, menjaga kebersihan pantai Sipelot..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    5. Apa yang ingin kamu pelajari atau coba lakukan pada pelajaran berikutnya?
                  </label>
                  <textarea
                    rows={2}
                    value={q5}
                    onChange={(e) => setQ5(e.target.value)}
                    placeholder="Harapan dan rasa ingin tahu belajarmu..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Simpan Catatan Refleksi</span>
            </button>
          </form>
        </div>

        {/* Right Column: Riwayat Refleksi */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Riwayat Refleksi Terdata ({reflections.length} Catatan)
            </h3>
            <span className="text-xs text-slate-500">
              Umpan balik tersimpan permanen
            </span>
          </div>

          <div className="space-y-3 max-h-[750px] overflow-y-auto pr-1">
            {reflections.map((ref) => {
              const subObj = subjects.find((s) => s.id === ref.subjectId);
              return (
                <div
                  key={ref.id}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          ref.jenis === 'guru'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        }`}
                      >
                        {ref.jenis}
                      </span>
                      <strong className="text-slate-900 dark:text-white">
                        {ref.authorName}
                      </strong>
                    </div>

                    <div className="flex items-center gap-2">
                      {subObj && (
                        <span className="text-[11px] font-medium text-slate-500">
                          {subObj.name}
                        </span>
                      )}
                      <span className="text-slate-400 font-mono">{ref.tanggal}</span>
                    </div>
                  </div>

                  {ref.ratingPemahaman && (
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(ref.ratingPemahaman)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                      {ref.emotikon && (
                        <span className="ml-2 text-slate-600 dark:text-slate-300 text-[11px] font-semibold">
                          Emotikon: {ref.emotikon}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p><strong>• Ketercapaian / Pelajaran:</strong> {ref.q1}</p>
                    <p><strong>• Keterlibatan / Hal Menarik:</strong> {ref.q2}</p>
                    <p><strong>• Yang Baik / Belum Dipahami:</strong> {ref.q3}</p>
                    <p><strong>• Kendala / Penerapan Nyata:</strong> {ref.q4}</p>
                    <p><strong>• Rencana / Keinginan Belajar:</strong> {ref.q5}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
