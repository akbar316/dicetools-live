import React, { useState, useEffect } from 'react';
import { Copy, Download, Plus, Trash2, Check, Globe, Calendar, RefreshCcw, BarChart3, FileCode } from 'lucide-react';

interface SitemapEntry {
  id: string;
  path: string;
  lastMod: string;
  changeFreq: string;
  priority: number;
}

const FREQUENCIES = [
  'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'
];

const SitemapGeneratorTool: React.FC = () => {
  const [baseUrl, setBaseUrl] = useState('https://example.com');
  
  // Entry Form State
  const [currentPath, setCurrentPath] = useState('/');
  const [currentFreq, setCurrentFreq] = useState('monthly');
  const [currentPriority, setCurrentPriority] = useState(0.8);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);

  // List State
  const [entries, setEntries] = useState<SitemapEntry[]>([
    { id: '1', path: '/', lastMod: new Date().toISOString().split('T')[0], changeFreq: 'daily', priority: 1.0 },
    { id: '2', path: '/about', lastMod: new Date().toISOString().split('T')[0], changeFreq: 'monthly', priority: 0.8 },
    { id: '3', path: '/contact', lastMod: new Date().toISOString().split('T')[0], changeFreq: 'yearly', priority: 0.5 },
  ]);

  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateXML();
  }, [baseUrl, entries]);

  const generateXML = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Ensure base url doesn't end with slash
    const domain = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

    entries.forEach(entry => {
      // Ensure path starts with slash
      const path = entry.path.startsWith('/') ? entry.path : '/' + entry.path;
      
      xml += `  <url>\n`;
      xml += `    <loc>${domain}${path}</loc>\n`;
      xml += `    <lastmod>${entry.lastMod}</lastmod>\n`;
      xml += `    <changefreq>${entry.changeFreq}</changefreq>\n`;
      xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;
    setOutput(xml);
  };

  const addEntry = () => {
    if(!currentPath) return;
    
    setEntries(prev => [...prev, {
        id: Date.now().toString(),
        path: currentPath,
        changeFreq: currentFreq,
        priority: currentPriority,
        lastMod: currentDate
    }]);

    // Reset some form fields
    setCurrentPath('');
    setCurrentPriority(0.5);
  };

  const removeEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([output], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    link.click();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Configuration Column */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Domain Settings */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
           <div className="space-y-2">
               <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                   <Globe className="w-4 h-4 text-primary-500" /> Website URL
               </label>
               <input 
                  type="url"
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
                  placeholder="https://example.com"
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
               />
           </div>
        </div>

        {/* Add Entry Form */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Add Page</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Path</label>
                    <input 
                        type="text"
                        className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white text-sm"
                        placeholder="/blog/post-1"
                        value={currentPath}
                        onChange={(e) => setCurrentPath(e.target.value)}
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Last Modified</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                        <input 
                            type="date"
                            className="w-full pl-9 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white text-sm"
                            value={currentDate}
                            onChange={(e) => setCurrentDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Frequency</label>
                    <div className="relative">
                        <RefreshCcw className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                        <select 
                            className="w-full pl-9 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white text-sm appearance-none"
                            value={currentFreq}
                            onChange={(e) => setCurrentFreq(e.target.value)}
                        >
                            {FREQUENCIES.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 flex justify-between">
                        Priority <span>{currentPriority}</span>
                    </label>
                    <div className="flex items-center gap-2 h-[42px]">
                        <BarChart3 className="w-4 h-4 text-slate-400" />
                        <input 
                            type="range"
                            min="0" max="1" step="0.1"
                            className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                            value={currentPriority}
                            onChange={(e) => setCurrentPriority(parseFloat(e.target.value))}
                        />
                    </div>
                </div>
            </div>
            <button 
                onClick={addEntry}
                disabled={!currentPath}
                className="w-full py-3 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
                <Plus className="w-5 h-5" /> Add to Map
            </button>
        </div>

        {/* Entries List */}
        <div className="space-y-3">
             <h3 className="font-bold text-slate-900 dark:text-white px-1">Pages Included ({entries.length})</h3>
             <div className="max-h-[300px] overflow-y-auto space-y-2 custom-scrollbar pr-1">
                 {entries.length === 0 && (
                     <div className="text-center py-8 text-slate-500 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                         No pages added yet.
                     </div>
                 )}
                 {entries.map((entry) => (
                     <div key={entry.id} className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm group">
                         <div className="flex items-center gap-3 overflow-hidden">
                             <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                                 <FileCode className="w-4 h-4" />
                             </div>
                             <div className="min-w-0">
                                 <p className="font-medium text-slate-900 dark:text-white text-sm truncate">{entry.path}</p>
                                 <p className="text-xs text-slate-500 flex gap-2">
                                     <span>{entry.lastMod}</span>
                                     <span>•</span>
                                     <span>{entry.priority}</span>
                                     <span>•</span>
                                     <span>{entry.changeFreq}</span>
                                 </p>
                             </div>
                         </div>
                         <button 
                             onClick={() => removeEntry(entry.id)}
                             className="p-2 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                         >
                             <Trash2 className="w-4 h-4" />
                         </button>
                     </div>
                 ))}
             </div>
        </div>

      </div>

      {/* Preview Column */}
      <div className="lg:col-span-5 sticky top-24">
         <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-800 flex flex-col h-[500px]">
             <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                 <span className="text-slate-400 text-sm font-mono">sitemap.xml</span>
                 <div className="flex gap-2">
                    <button 
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                        title="Copy"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button 
                        onClick={downloadFile}
                        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                        title="Download"
                    >
                        <Download className="w-4 h-4" />
                    </button>
                 </div>
             </div>
             <div className="flex-1 p-4 overflow-auto custom-scrollbar">
                 <pre className="font-mono text-xs md:text-sm text-blue-300 whitespace-pre leading-relaxed">
                     {output}
                 </pre>
             </div>
         </div>
      </div>

    </div>
  );
};

export default SitemapGeneratorTool;