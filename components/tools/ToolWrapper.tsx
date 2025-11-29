import React from 'react';
import { ArrowLeft, ChevronRight, Home } from 'lucide-react';
import { Tool, CategoryId } from '../../types/index';
import { CATEGORIES } from '../../data/categories';

interface ToolWrapperProps {
  tool: Tool;
  onBack: () => void;
  onSelectCategory: (id: CategoryId) => void;
  children: React.ReactNode;
}

const ToolWrapper: React.FC<ToolWrapperProps> = ({ tool, onBack, onSelectCategory, children }) => {
  const category = CATEGORIES.find(c => c.id === tool.categoryId);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 animate-fade-in">
      {/* Breadcrumb / Nav */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
            <button onClick={onBack} className="hover:text-primary-600 flex items-center">
              <Home className="w-4 h-4" />
            </button>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <button 
              onClick={() => category ? onSelectCategory(category.id) : onBack()}
              className="hover:text-primary-600 cursor-pointer font-medium text-slate-600 dark:text-slate-400 hover:underline transition-all"
            >
              {category?.name || 'Tools'}
            </button>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <span className="font-medium text-slate-900 dark:text-white">{tool.name}</span>
          </div>
          <button onClick={onBack} className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Tool Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center mx-auto mb-6">
            <tool.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3">
             {tool.name}
             {tool.isNew && <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded-full font-bold uppercase tracking-wider">New</span>}
             {tool.isPopular && <span className="text-xs px-2 py-1 bg-orange-500 text-white rounded-full font-bold uppercase tracking-wider">Hot</span>}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">{tool.description}</p>
        </div>

        {/* Tool Content */}
        {children}
        
      </div>
    </div>
  );
};

export default ToolWrapper;