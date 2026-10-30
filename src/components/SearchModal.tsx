import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Clock, Calendar, Users, FileText, ChevronRight } from 'lucide-react';
import { Subject, SubjectId, ScheduleItem, Student, AcademicCalendarEvent } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  schedule: ScheduleItem[];
  students: Student[];
  calendarEvents: AcademicCalendarEvent[];
  onNavigate: (view: string, subjectId?: SubjectId) => void;
}

export const SearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  subjects,
  schedule,
  students,
  calendarEvents,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle search modal
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase();

  // Search in subjects
  const matchedSubjects = q
    ? subjects.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.code.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      )
    : subjects.slice(0, 4);

  // Search in schedule
  const matchedSchedule = q
    ? schedule.filter(
        (sc) =>
          sc.kegiatan.toLowerCase().includes(q) ||
          (sc.keterangan && sc.keterangan.toLowerCase().includes(q))
      ).slice(0, 4)
    : [];

  // Search in students
  const matchedStudents = q
    ? students.filter(
        (st) =>
          st.nama.toLowerCase().includes(q) ||
          st.nis.includes(q) ||
          st.nisn.includes(q)
      ).slice(0, 4)
    : [];

  // Search in calendar
  const matchedCalendar = q
    ? calendarEvents.filter(
        (ev) =>
          ev.judul.toLowerCase().includes(q) ||
          ev.deskripsi.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const handleSelect = (view: string, sId?: SubjectId) => {
    onNavigate(view, sId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Cari mata pelajaran, modul ajar, jadwal, siswa, atau agenda..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm bg-transparent border-0 focus:outline-none text-slate-900 dark:text-white"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4 text-xs">
          
          {/* Matched Subjects */}
          {matchedSubjects.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Mata Pelajaran Kelas V
              </p>
              <div className="space-y-1">
                {matchedSubjects.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => handleSelect('mapel', sub.id)}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: sub.color }}
                      />
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {sub.name}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{sub.code}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Schedule */}
          {matchedSchedule.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Jadwal Pelajaran
              </p>
              <div className="space-y-1">
                {matchedSchedule.map((sc) => (
                  <div
                    key={sc.id}
                    onClick={() => handleSelect('jadwal')}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {sc.kegiatan}
                      </span>
                      <span className="text-slate-500 block text-[11px]">
                        Hari {sc.hari} · {sc.jamMulai} - {sc.jamSelesai} WIB
                      </span>
                    </div>
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Students */}
          {matchedStudents.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Peserta Didik
              </p>
              <div className="space-y-1">
                {matchedStudents.map((st) => (
                  <div
                    key={st.id}
                    onClick={() => handleSelect('siswa')}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {st.nama}
                      </span>
                      <span className="text-slate-400 font-mono block text-[10px]">
                        NIS: {st.nis} · NISN: {st.nisn}
                      </span>
                    </div>
                    <Users className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Calendar Events */}
          {matchedCalendar.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Agenda Kalender
              </p>
              <div className="space-y-1">
                {matchedCalendar.map((ev) => (
                  <div
                    key={ev.id}
                    onClick={() => handleSelect('kalender')}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {ev.judul}
                      </span>
                      <span className="text-slate-500 block text-[11px]">
                        {ev.tanggalMulai} · {ev.kategori.replace('_', ' ')}
                      </span>
                    </div>
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {q &&
            matchedSubjects.length === 0 &&
            matchedSchedule.length === 0 &&
            matchedStudents.length === 0 &&
            matchedCalendar.length === 0 && (
              <div className="py-8 text-center text-slate-400">
                <p>Tidak ditemukan hasil untuk "{query}"</p>
              </div>
            )}
        </div>

        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 text-center">
          Tekan <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[10px]">ESC</kbd> untuk menutup
        </div>
      </div>
    </div>
  );
};
