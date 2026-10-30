import React, { useState } from 'react';
import {
  ClipboardCheck,
  Printer,
  Plus,
  Filter,
  Award,
  CheckCircle,
  FileSpreadsheet,
  Edit2
} from 'lucide-react';
import { AsesmenItem, Student, StudentScore, Subject, SubjectId } from '../types';

interface Props {
  asesmenList: AsesmenItem[];
  studentScores: Record<string, StudentScore[]>;
  students: Student[];
  subjects: Subject[];
  onUpdateScore: (asmId: string, updatedScores: StudentScore[]) => void;
}

export const AssessmentsView: React.FC<Props> = ({
  asesmenList,
  studentScores,
  students,
  subjects,
  onUpdateScore
}) => {
  const [selectedAsmId, setSelectedAsmId] = useState<string>(
    asesmenList[0]?.id || ''
  );
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [scoreInput, setScoreInput] = useState<number>(80);

  const activeAsm = asesmenList.find((a) => a.id === selectedAsmId) || asesmenList[0];
  const scores = activeAsm ? studentScores[activeAsm.id] || [] : [];

  const handleEditScore = (studentId: string, currentScore: number) => {
    setEditingStudentId(studentId);
    setScoreInput(currentScore);
  };

  const handleSaveScore = (studentId: string) => {
    let kat: 'Belum Mencapai' | 'Mulai Mencapai' | 'Mencapai' | 'Melampaui' = 'Mencapai';
    if (scoreInput >= 90) kat = 'Melampaui';
    else if (scoreInput >= 75) kat = 'Mencapai';
    else if (scoreInput >= 60) kat = 'Mulai Mencapai';
    else kat = 'Belum Mencapai';

    const currentList = [...scores];
    const existingIndex = currentList.findIndex((s) => s.studentId === studentId);

    if (existingIndex >= 0) {
      currentList[existingIndex] = {
        ...currentList[existingIndex],
        score: scoreInput,
        kategori: kat
      };
    } else {
      const std = students.find((s) => s.id === studentId);
      currentList.push({
        studentId,
        studentName: std ? std.nama : 'Siswa',
        score: scoreInput,
        kategori: kat,
        tindakLanjut: kat === 'Melampaui' ? 'Pengayaan' : 'Reguler'
      });
    }

    onUpdateScore(activeAsm.id, currentList);
    setEditingStudentId(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Asesmen Formatif & Sumatif
            </h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Penilaian Tertulis, Kinerja Praktik, Produk, Portofolio & Rubrik Profil Lulusan Kelas V
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-xl transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak Rekap Asesmen</span>
          </button>
        </div>
      </div>

      {/* Select Assessment Bar */}
      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-2 rounded-xl text-xs overflow-x-auto">
        <span className="font-semibold text-slate-500 pl-2">Pilih Asesmen:</span>
        {asesmenList.map((a) => (
          <button
            key={a.id}
            onClick={() => setSelectedAsmId(a.id)}
            className={`px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap ${
              selectedAsmId === a.id
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            [{a.jenis.toUpperCase()}] {a.judul.substring(0, 32)}...
          </button>
        ))}
      </div>

      {activeAsm && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span className="font-bold text-blue-600 dark:text-blue-400 uppercase">
                {activeAsm.jenis}
              </span>
              <span>·</span>
              <span>Bentuk: {activeAsm.bentuk}</span>
              <span>·</span>
              <span>Tanggal: {activeAsm.tanggal}</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {activeAsm.judul}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              <strong>Kisi-kisi:</strong> {activeAsm.kisiKisi}
            </p>
          </div>

          {/* Scores Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-semibold">
                  <th className="p-3 w-12 text-center">No</th>
                  <th className="p-3">Nama Siswa</th>
                  <th className="p-3 text-center">Nilai (0-100)</th>
                  <th className="p-3 text-center">Kategori KKTP</th>
                  <th className="p-3">Tindak Lanjut Pembelajaran</th>
                  <th className="p-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {students.map((student, idx) => {
                  const scoreObj = scores.find((s) => s.studentId === student.id);
                  const isEditing = editingStudentId === student.id;
                  const currentVal = scoreObj ? scoreObj.score : 80;
                  const currentKat = scoreObj ? scoreObj.kategori : 'Mencapai';

                  return (
                    <tr key={student.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-3 text-center font-mono font-medium text-slate-400">
                        {idx + 1}
                      </td>
                      <td className="p-3 font-semibold text-slate-900 dark:text-white">
                        {student.nama}
                      </td>
                      <td className="p-3 text-center font-bold font-mono">
                        {isEditing ? (
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={scoreInput}
                            onChange={(e) => setScoreInput(Number(e.target.value))}
                            className="w-16 px-2 py-1 text-center font-bold border border-blue-500 rounded-md bg-white dark:bg-slate-800 text-blue-600"
                          />
                        ) : (
                          <span
                            className={`px-2.5 py-0.5 rounded-full ${
                              currentVal >= 90
                                ? 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60'
                                : currentVal >= 75
                                ? 'text-blue-700 bg-blue-50 dark:bg-blue-950/60'
                                : currentVal >= 60
                                ? 'text-amber-700 bg-amber-50 dark:bg-amber-950/60'
                                : 'text-rose-700 bg-rose-50 dark:bg-rose-950/60'
                            }`}
                          >
                            {currentVal}
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            currentKat === 'Melampaui'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : currentKat === 'Mencapai'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                              : currentKat === 'Mulai Mencapai'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          }`}
                        >
                          {currentKat}
                        </span>
                      </td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">
                        {scoreObj?.tindakLanjut || (currentVal >= 75 ? 'Melanjutkan ke TP berikutnya' : 'Bimbingan remedial')}
                      </td>
                      <td className="p-3 text-center">
                        {isEditing ? (
                          <button
                            onClick={() => handleSaveScore(student.id)}
                            className="px-2.5 py-1 text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-xs"
                          >
                            Simpan
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEditScore(student.id, currentVal)}
                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            Ubah
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
