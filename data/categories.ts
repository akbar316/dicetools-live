import {
  BrainCircuit, FileText, Type, Code2, GraduationCap, Search, Settings
} from 'lucide-react';
import { Category } from '../types/index';

export const CATEGORIES: Category[] = [
  { id: 'ai', name: 'AI Tools', description: 'Generate & Edit with AI', icon: BrainCircuit, color: 'text-purple-500' },
  { id: 'pdf', name: 'PDF Tools', description: 'Manage Documents', icon: FileText, color: 'text-red-500' },
  { id: 'text', name: 'Text Tools', description: 'Write & Format', icon: Type, color: 'text-blue-500' },
  { id: 'dev', name: 'Developer', description: 'Code & Debug', icon: Code2, color: 'text-green-500' },
  { id: 'student', name: 'Student', description: 'Study Helpers', icon: GraduationCap, color: 'text-yellow-500' },
  { id: 'seo', name: 'SEO Tools', description: 'Optimize Ranking', icon: Search, color: 'text-orange-500' },
  { id: 'utility', name: 'Utilities', description: 'Everyday Tools', icon: Settings, color: 'text-gray-500' },
];