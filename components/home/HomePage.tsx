
import React from 'react';
import { Search, Command, ArrowRight, Shield, Zap } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { TOOLS } from '../../data/tools-registry';
import { FAQS } from '../../data/faqs';
import { Tool, CategoryId } from '../../types/index';
import Dice from './Dice';

interface HomePageProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: CategoryId | 'all';
  setActiveCategory: (cat: CategoryId | 'all') => void;
  filteredTools: Tool[];
  navigateToTool: (tool: Tool) => void;
}

const HomePage: React.FC<HomePageProps> = ({ 
  searchQuery, setSearchQuery, activeCategory, setActiveCategory, filteredTools, navigateToTool 
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs font-medium text-primary-600 dark:text-primary-400 mb-8 animate-fade-in">
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                    </span>
                    Over 38+ Free Tools
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                  Smart Tools for Every Task
                </h1>
                
                <p className="max-w-xl mx-auto lg:mx-0 text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                  Your one-stop suite of free, powerful online tools for AI, SEO, PDFs, and more. Boost your productivity instantly.
                </p>

                {/* Search Bar */}
                <div className="max-w-lg mx-auto lg:mx-0 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-xl shadow-xl p-2 border border-slate-200 dark:border-slate-800">
                    <Search className="w-6 h-6 text-slate-400 ml-3" />
                    <input 
                        type="text"
                        placeholder="Search for tools..."
                        className="w-full p-3 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="hidden sm:block px-6 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-lg font-medium select-none">
                        Search
                    </div>
                    </div>
                </div>
              </div>
              
              {/* Right Column: 3D Dice */}
              <div className="hidden lg:flex justify-center items-center h-full">
                <Dice />
              </div>
            </div>
          </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-12 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <button
              onClick={() => setActiveCategory('all')}
              className={`p-4 rounded-xl flex flex-col items-center gap-3 transition-all ${activeCategory === 'all' ? 'bg-white dark:bg-slate-800 shadow-md ring-2 ring-primary-500' : 'hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm'}`}
              >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <Command className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">All Tools</span>
              </button>
              {CATEGORIES.map((cat) => (
              <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-4 rounded-xl flex flex-col items-center gap-3 transition-all ${activeCategory === cat.id ? 'bg-white dark:bg-slate-800 shadow-md ring-2 ring-primary-500' : 'hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm'}`}
              >
                  <div className={`w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center ${cat.color}`}>
                  <cat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{cat.name}</span>
              </button>
              ))}
          </div>
          </div>
      </section>

      {/* Tools Grid */}
      <section id="features" className="py-20 flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Introducing Our Smart AI Tools</h2>
            </div>
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {activeCategory === 'all' ? 'All Tools' : CATEGORIES.find(c => c.id === activeCategory)?.name}
                </h2>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                Showing {filteredTools.length} results
                </span>
            </div>

          {filteredTools.length === 0 ? (
              <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">No tools found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search query.</p>
              </div>
          ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                  <div 
                  key={tool.id}
                  onClick={() => navigateToTool(tool)}
                  className="group relative glass-card p-6 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 border border-slate-200 dark:border-slate-800"
                  >
                  <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
                      <tool.icon className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                      </div>
                      {tool.isNew && (
                      <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">New</span>
                      )}
                      {tool.isPopular && (
                      <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full">Hot</span>
                      )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {tool.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                      {tool.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      Open Tool <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                  </div>
              ))}
              </div>
          )}
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Essential PDF and Document Utilities</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Secure & Private</h3>
                  <p className="text-sm text-slate-500">We don't store your files. All processing happens on secure servers or your browser.</p>
              </div>
              <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <Command className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Powered by Gemini</h3>
                  <p className="text-sm text-slate-500">Leveraging Google's advanced AI for high-quality generation and analysis.</p>
              </div>
              <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Lightning Fast</h3>
                  <p className="text-sm text-slate-500">Optimized performance for instant results, even on mobile devices.</p>
              </div>
              </div>
          </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Your Questions, Answered</h2>
              <div className="space-y-6">
              {FAQS.map((faq, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-500 dark:text-slate-400">{faq.answer}</p>
                  </div>
              ))}
              </div>
          </div>
      </section>
    </>
  );
};

export default HomePage;
