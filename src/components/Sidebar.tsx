import React, { useState } from 'react';
import {
  LayoutDashboard,
  CalendarDays,
  Clock,
  BookOpen,
  Target,
  FileQuestion,
  ClipboardCheck,
  MessageSquareHeart,
  Users,
  FolderArchive,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Sparkles,
  School,
  Database,
  Bot,
  BarChart3,
  Gamepad2
} from 'lucide-react';
import { Subject, SubjectId } from '../types';
import { SubjectIcon } from './SubjectIcon';

interface Props {
  currentView: string;
  selectedSubjectId?: SubjectId;
  subjects: Subject[];
  onNavigate: (view: string, subjectId?: SubjectId) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<Props> = ({
  currentView,
  selectedSubjectId,
  subjects,
  onNavigate,
  isOpen,
  onClose
}) => {
  const [subjectsExpanded, setSubjectsExpanded] = useState<boolean>(true);

  const mainNavItems = [
    { id: 'dashboard', label: 'Dashboard Utama', icon: LayoutDashboard },
    { id: 'kalender', label: 'Kalender Pendidikan', icon: CalendarDays },
    { id: 'jadwal', label: 'Jadwal Pelajaran', icon: Clock, badge: '30 JP' }
  ];

  const assessmentAndSystemItems = [
    { id: 'ai-assistant', label: 'AI Teaching Assistant', icon: Bot, badge: 'Cerdas' },
    { id: 'analitik', label: 'Analisis Pembelajaran', icon: BarChart3, badge: 'Metrik' },
    { id: 'kktp', label: 'Kriteria KKTP', icon: Target },
    { id: 'asesmen-awal', label: 'Asesmen Diagnostik', icon: FileQuestion },
    { id: 'asesmen-evaluasi', label: 'Asesmen Formatif/Sumatif', icon: ClipboardCheck },
    { id: 'refleksi', label: 'Refleksi Guru & Siswa', icon: MessageSquareHeart },
    { id: 'database-siswa', label: 'Database Siswa (25 Anak)', icon: Database, badge: 'Resmi' },
    { id: 'student-space', label: 'Ruang Siswa Digital', icon: Gamepad2, badge: 'Gamifikasi' },
    { id: 'siswa', label: 'Kartu & Profil Siswa', icon: Users, badge: '25 Siswa' },
    { id: 'administrasi', label: 'Laporan & Administrasi', icon: FolderArchive }
  ];

  const handleSelectNav = (viewId: string) => {
    onNavigate(viewId);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const handleSelectSubject = (sId: SubjectId) => {
    onNavigate('mapel', sId);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-18 bottom-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-200 ease-in-out lg:translate-x-0 overflow-y-auto flex flex-col justify-between ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        <div className="p-4 space-y-6">
          
          {/* School Badge Card */}
          <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-slate-800/80 dark:to-slate-800/40 rounded-xl border border-blue-100 dark:border-slate-700/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <School className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  SDN 1 PUJIHARJO
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  Kec. Tirtoyudo · Kab. Malang
                </p>
              </div>
            </div>
            <div className="mt-2.5 pt-2 border-t border-blue-100/80 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-300">
              <span>Guru: <strong className="font-semibold text-slate-800 dark:text-slate-200">Angga Yoga P.</strong></span>
              <span className="font-medium text-blue-600 dark:text-blue-400">Kelas V</span>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="space-y-1">
            <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Menu Utama
            </p>

            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectNav(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Ruang 10 Mata Pelajaran Accordion */}
            <div className="pt-2">
              <button
                onClick={() => setSubjectsExpanded(!subjectsExpanded)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  currentView === 'mapel' && !selectedSubjectId
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>10 Ruang Mata Pelajaran</span>
                </div>
                {subjectsExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                )}
              </button>

              {subjectsExpanded && (
                <div className="mt-1 ml-3 pl-3 border-l-2 border-slate-200 dark:border-slate-800 space-y-1">
                  {subjects.map((sub) => {
                    const isSubActive = currentView === 'mapel' && selectedSubjectId === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleSelectSubject(sub.id)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded-md transition-colors text-left ${
                          isSubActive
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold border-l-2 border-blue-600 -ml-[13px] pl-[11px]'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: sub.color }}
                          />
                          <span className="truncate">{sub.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono shrink-0">
                          {sub.jpPerWeek} JP
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Assessment & Administration Menu */}
            <div className="pt-3 space-y-1">
              <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Asesmen, AI & Ekosistem
              </p>
              {assessmentAndSystemItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectNav(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : item.id === 'ai-assistant'
                            ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                            : item.id === 'database-siswa'
                            ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                            : item.id === 'student-space'
                            ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                            : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Footer Deep Learning Badge */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">Pembelajaran Mendalam</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            Berkesadaran · Bermakna · Menggembirakan di bumi pertiwi Pujiharjo.
          </p>
        </div>
      </aside>
    </>
  );
};
