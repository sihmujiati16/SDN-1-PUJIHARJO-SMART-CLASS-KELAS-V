import React from 'react';
import {
  BookOpen,
  Calculator,
  Compass,
  ShieldCheck,
  Globe,
  Palette,
  Activity,
  Moon,
  HeartHandshake,
  Languages,
  Calendar,
  Clock,
  Award,
  Users,
  FileText,
  CheckCircle,
  HelpCircle,
  FolderKanban,
  Library,
  GraduationCap
} from 'lucide-react';

interface Props {
  name: string;
  className?: string;
  size?: number;
}

export const SubjectIcon: React.FC<Props> = ({ name, className = 'w-5 h-5', size }) => {
  switch (name) {
    case 'BookOpen':
      return <BookOpen className={className} size={size} />;
    case 'Calculator':
      return <Calculator className={className} size={size} />;
    case 'Compass':
      return <Compass className={className} size={size} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} size={size} />;
    case 'Globe':
      return <Globe className={className} size={size} />;
    case 'Palette':
      return <Palette className={className} size={size} />;
    case 'Activity':
      return <Activity className={className} size={size} />;
    case 'Moon':
      return <Moon className={className} size={size} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} size={size} />;
    case 'Languages':
      return <Languages className={className} size={size} />;
    case 'Calendar':
      return <Calendar className={className} size={size} />;
    case 'Clock':
      return <Clock className={className} size={size} />;
    case 'Award':
      return <Award className={className} size={size} />;
    case 'Users':
      return <Users className={className} size={size} />;
    case 'FileText':
      return <FileText className={className} size={size} />;
    case 'FolderKanban':
      return <FolderKanban className={className} size={size} />;
    case 'Library':
      return <Library className={className} size={size} />;
    case 'CheckCircle':
      return <CheckCircle className={className} size={size} />;
    case 'GraduationCap':
      return <GraduationCap className={className} size={size} />;
    default:
      return <HelpCircle className={className} size={size} />;
  }
};
