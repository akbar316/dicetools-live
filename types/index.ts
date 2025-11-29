import { LucideIcon } from 'lucide-react';

export type CategoryId = 'ai' | 'pdf' | 'text' | 'dev' | 'student' | 'seo' | 'utility';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  icon: LucideIcon;
  isNew?: boolean;
  isPopular?: boolean;
  // Defines how the tool handles logic
  actionType: 'ai-text' | 'ai-image' | 'ai-image-edit' | 'ai-hairstyle' | 'pdf-to-word' | 'image-to-pdf' | 'pdf-to-image' | 'pdf-merge' | 'pdf-compress' | 'pdf-editor' | 'regex-tester' | 'utility-client' | 'coming-soon'; 
  systemPrompt?: string; // For AI Text tools
  placeholder?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}