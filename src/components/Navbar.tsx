import React, { useState, useEffect } from 'react';
import {
  Menu,
  Sun,
  Moon,
  Search,
  UserCheck,
  GraduationCap,
  Sparkles,
  Upload,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Shield,
  FileDown
} from 'lucide-react';
import { SchoolProfile } from '../services/storageService';

interface Props {
  schoolProfile: SchoolProfile;
  userRole: 'guru' | 'siswa';
  activeStudentName?: string;
  onToggleRole: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onToggleSidebar: () => void;
  onOpenSearch: () => void;
  onUpdateLogo: (logoUrl: string) => void;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<Props> = ({
  schoolProfile,
  userRole,
  activeStudentName,
  onToggleRole,
  darkMode,
  onToggleDarkMode,
  onToggleSidebar,
  onOpenSearch,
  onUpdateLogo,
  onNavigate
}) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');
  const [showLogoModal, setShowLogoModal] = useState<boolean>(false);
  const [logoInput, setLogoInput] = useState<string>(schoolProfile.logoUrl || '');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
      setCurrentDate(
        now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSaveLogo = () => {
    onUpdateLogo(logoInput);
    setShowLogoModal(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const res = event.target.result as string;
          setLogoInput(res);
          onUpdateLogo(res);
          setShowLogoModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Left Brand Area */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Buka Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* School Logo */}
            <div className="relative group">
              <button
                onClick={() => setShowLogoModal(true)}
                title="Klik untuk ubah logo sekolah"
                className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center overflow-hidden transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {schoolProfile.logoUrl ? (
                  <img
                    src={schoolProfile.logoUrl}
                    alt="Logo SD Negeri 1 Pujiharjo"
                    className="w-full h-full object-contain p-1"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-blue-700 dark:text-blue-400">
                    <GraduationCap className="w-6 h-6" />
                    <span className="text-[8px] font-bold tracking-tighter leading-none mt-0.5">SDN 1</span>
                  </div>
                )}
              </button>
            </div>

            {/* Title & Metadata */}
            <div className="cursor-pointer" onClick={() => onNavigate('dashboard')}>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight">
                  PUJIHARJO SMART CLASS
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded">
                  KELAS V
                </span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:flex items-center gap-2">
                <span>SD Negeri 1 Pujiharjo</span>
                <span aria-hidden="true">·</span>
                <span>Tirtoyudo, Malang</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">TA 2026/2027</span>
              </div>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Clock & Date */}
            <div className="hidden xl:flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <div className="flex items-center gap-1.5 font-medium">
                <CalendarIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{currentDate}</span>
              </div>
              <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">|</span>
              <div className="flex items-center gap-1.5 font-mono">
                <ClockIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{currentTime} WIB</span>
              </div>
            </div>

            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
              title="Cari Materi, Modul, atau Dokumen"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Cari (Ctrl+K)...</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Ubah Tema"
              title={darkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Role Switcher */}
            <button
              onClick={onToggleRole}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                userRole === 'guru'
                  ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-sm'
                  : 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 shadow-sm'
              }`}
              title="Beralih Peran Pengguna (Guru / Siswa)"
            >
              {userRole === 'guru' ? (
                <>
                  <Shield className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Pak Angga (Guru Kelas)</span>
                  <span className="sm:hidden">Guru</span>
                </>
              ) : (
                <>
                  <UserCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{activeStudentName ? `Siswa: ${activeStudentName}` : 'Mode Siswa (Kelas V)'}</span>
                  <span className="sm:hidden">{activeStudentName ? activeStudentName.split(' ')[0] : 'Siswa'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modal Upload Logo */}
      {showLogoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-xl">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Unggah Logo SD Negeri 1 Pujiharjo
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Pilih file gambar logo sekolah (PNG/JPG) atau tempel tautan gambar untuk ditampilkan di kop surat dan header aplikasi.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Unggah dari Komputer / Ponsel
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="block w-full text-xs text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-950 dark:file:text-blue-300 hover:file:bg-blue-100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Atau Tempelkan URL Gambar Logo
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={logoInput}
                  onChange={(e) => setLogoInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {logoInput && (
                <div className="flex items-center justify-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                  <img src={logoInput} alt="Pratinjau Logo" className="h-16 object-contain" />
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => setShowLogoModal(false)}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleSaveLogo}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                Simpan Logo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
