import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { Tool } from '../../types/index';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  currentTool: Tool | null;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  darkMode, setDarkMode, currentTool, mobileMenuOpen, setMobileMenuOpen, onNavigateHome 
}) => {
  return (
    <>
      <nav className="sticky top-0 z-40 w-full glass border-b border-slate-200/50 dark:border-slate-800/50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateHome}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30">
                D
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                Dicetools
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {!currentTool && (
                  <>
                    <a href="#categories" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors">Categories</a>
                    <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors">Featured</a>
                    <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors">FAQ</a>
                  </>
              )}
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              {!currentTool && (
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 dark:text-slate-300">
                    <Menu className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && !currentTool && (
          <div className="md:hidden glass border-t border-slate-200 dark:border-slate-800 p-4 space-y-4">
             <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 font-medium">Categories</a>
             <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 font-medium">All Tools</a>
             <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 font-medium">FAQ</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;