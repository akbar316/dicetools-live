import React, { useState } from 'react';
import { Monitor, Smartphone, Info, RefreshCw, CheckCircle2 } from 'lucide-react';

const SerpPreviewTool: React.FC = () => {
  const [title, setTitle] = useState('Your Page Title Goes Here - Example Site');
  const [description, setDescription] = useState('This is an example of a meta description. Google usually displays up to 160 characters. Make sure to include your main keywords to improve CTR.');
  const [url, setUrl] = useState('www.example.com/category/page-name');
  const [keyword, setKeyword] = useState('');
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');

  const titleLimit = 60;
  const descLimit = 160;

  // Helper to highlight keywords
  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() 
      ? <b key={i} className="text-slate-900 dark:text-slate-300 font-bold">{part}</b> 
      : part
    );
  };

  // Truncate logic for visual representation
  const truncatedTitle = title.length > 70 ? title.substring(0, 70) + '...' : title;
  const truncatedDesc = description.length > 320 ? description.substring(0, 320) + '...' : description;

  const getProgressColor = (current: number, max: number) => {
      if (current === 0) return 'bg-slate-200 dark:bg-slate-700';
      if (current <= max) return 'bg-green-500';
      return 'bg-red-500';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      
      {/* Editor Column */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary-500" /> SEO Content
            </h3>
            
            <div className="space-y-6">
                {/* Title Input */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <label className="font-semibold text-slate-700 dark:text-slate-300">Page Title</label>
                        <span className={`${title.length > titleLimit ? 'text-red-500 font-bold' : 'text-slate-500'}`}>
                            {title.length} / {titleLimit} px
                        </span>
                    </div>
                    <input 
                        type="text"
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter page title..."
                    />
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                            className={`h-full transition-all duration-300 ${getProgressColor(title.length, titleLimit)}`} 
                            style={{ width: `${Math.min(100, (title.length / titleLimit) * 100)}%` }}
                        />
                    </div>
                </div>

                {/* Description Input */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <label className="font-semibold text-slate-700 dark:text-slate-300">Meta Description</label>
                        <span className={`${description.length > descLimit ? 'text-red-500 font-bold' : 'text-slate-500'}`}>
                            {description.length} / {descLimit} px
                        </span>
                    </div>
                    <textarea 
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none min-h-[120px] dark:text-white"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter meta description..."
                    />
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                            className={`h-full transition-all duration-300 ${getProgressColor(description.length, descLimit)}`} 
                            style={{ width: `${Math.min(100, (description.length / descLimit) * 100)}%` }}
                        />
                    </div>
                </div>

                {/* URL Input */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">URL / Slug</label>
                    <input 
                        type="text"
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="example.com/page"
                    />
                </div>

                {/* Keyword Input */}
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Focus Keyword (Bolded)</label>
                    <input 
                        type="text"
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="e.g. example"
                    />
                    <p className="text-xs text-slate-500">Keywords in the description matching this will be bolded in preview.</p>
                </div>

                {/* Reset Button */}
                <button 
                    onClick={() => {
                        setTitle('');
                        setDescription('');
                        setUrl('');
                        setKeyword('');
                    }}
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-red-500 transition-colors"
                >
                    <RefreshCw className="w-4 h-4" /> Reset Fields
                </button>
            </div>
        </div>
      </div>

      {/* Preview Column */}
      <div className="space-y-6">
          
          {/* View Toggles */}
          <div className="flex bg-white dark:bg-slate-900 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 w-fit">
              <button 
                onClick={() => setView('desktop')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === 'desktop' ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                  <Monitor className="w-4 h-4" /> Desktop
              </button>
              <button 
                onClick={() => setView('mobile')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${view === 'mobile' ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                  <Smartphone className="w-4 h-4" /> Mobile
              </button>
          </div>

          {/* Preview Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-600">Google Search Preview</span>
                  <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  </div>
              </div>
              
              <div className="p-8 min-h-[200px] bg-white">
                  {view === 'desktop' ? (
                      // Desktop Preview
                      <div className="max-w-[600px] font-sans">
                          <div className="flex items-center gap-3 mb-1">
                                <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-500 border border-slate-200">
                                    Fav
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-sm text-slate-800">Site Name</span>
                                    <cite className="text-xs text-slate-500 not-italic">{url || 'www.example.com'}</cite>
                                </div>
                                <div className="ml-auto text-slate-400">
                                    <div className="w-1 h-1 bg-slate-400 rounded-full mb-0.5"></div>
                                    <div className="w-1 h-1 bg-slate-400 rounded-full mb-0.5"></div>
                                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                </div>
                          </div>
                          <h3 className="text-xl text-[#1a0dab] hover:underline cursor-pointer mb-1 leading-snug">
                              {truncatedTitle || 'Page Title'}
                          </h3>
                          <div className="text-sm text-[#4d5156] leading-relaxed">
                              {getHighlightedText(truncatedDesc || 'Meta description goes here...', keyword)}
                          </div>
                      </div>
                  ) : (
                      // Mobile Preview
                      <div className="max-w-[360px] mx-auto font-sans border border-slate-100 rounded-lg p-3 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-500 border border-slate-200">
                                    Fav
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-sm text-slate-800 font-medium">Site Name</span>
                                    <cite className="text-xs text-slate-500 not-italic">{url || 'example.com'}</cite>
                                </div>
                                <div className="ml-auto text-slate-400">
                                    <div className="w-1 h-1 bg-slate-400 rounded-full mb-0.5"></div>
                                    <div className="w-1 h-1 bg-slate-400 rounded-full mb-0.5"></div>
                                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                </div>
                          </div>
                          <h3 className="text-lg text-[#1967d2] font-medium cursor-pointer mb-2 leading-snug">
                              {truncatedTitle || 'Page Title'}
                          </h3>
                          <div className="text-sm text-[#4d5156] leading-relaxed">
                              {getHighlightedText(truncatedDesc || 'Meta description goes here...', keyword)}
                          </div>
                      </div>
                  )}
              </div>
          </div>

          {/* Analysis */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Analysis</h4>
              <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${title.length > 0 && title.length <= titleLimit ? 'text-green-500' : 'text-slate-300'}`} />
                      <span className="text-slate-600 dark:text-slate-400">
                          Title length is optimal (under 60 chars).
                      </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${description.length >= 50 && description.length <= descLimit ? 'text-green-500' : 'text-slate-300'}`} />
                      <span className="text-slate-600 dark:text-slate-400">
                          Description length is optimal (between 50-160 chars).
                      </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${keyword && (title.toLowerCase().includes(keyword.toLowerCase()) || description.toLowerCase().includes(keyword.toLowerCase())) ? 'text-green-500' : 'text-slate-300'}`} />
                      <span className="text-slate-600 dark:text-slate-400">
                          Focus keyword appears in title or description.
                      </span>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default SerpPreviewTool;