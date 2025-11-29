import React, { useState, useEffect } from 'react';
import { Copy, Download, Plus, Trash2, Check, Info, Bot } from 'lucide-react';

interface RobotGroup {
  id: string;
  userAgent: string;
  allow: string;
  disallow: string;
  crawlDelay: string;
}

const COMMON_BOTS = [
  { label: 'All Robots (*)', value: '*' },
  { label: 'Googlebot', value: 'Googlebot' },
  { label: 'Googlebot-Image', value: 'Googlebot-Image' },
  { label: 'Bingbot', value: 'Bingbot' },
  { label: 'Slurp (Yahoo)', value: 'Slurp' },
  { label: 'DuckDuckBot', value: 'DuckDuckBot' },
  { label: 'Baiduspider', value: 'Baiduspider' },
  { label: 'Yandex', value: 'Yandex' },
  { label: 'Twitterbot', value: 'Twitterbot' },
  { label: 'FacebookExternalHit', value: 'facebot' },
];

const RobotsTxtGeneratorTool: React.FC = () => {
  const [sitemap, setSitemap] = useState('');
  const [groups, setGroups] = useState<RobotGroup[]>([
    { id: '1', userAgent: '*', allow: '', disallow: '/admin/\n/private/', crawlDelay: '' }
  ]);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateRobotsTxt();
  }, [sitemap, groups]);

  const generateRobotsTxt = () => {
    let txt = '';

    // Groups
    groups.forEach((group, index) => {
      txt += `User-agent: ${group.userAgent}\n`;
      
      // Crawl Delay
      if (group.crawlDelay) {
        txt += `Crawl-delay: ${group.crawlDelay}\n`;
      }

      // Disallow
      const disallows = group.disallow.split('\n').filter(line => line.trim() !== '');
      if (disallows.length > 0) {
        disallows.forEach(line => {
          let path = line.trim();
          if(!path.startsWith('/')) path = '/' + path;
          txt += `Disallow: ${path}\n`;
        });
      } else if (group.allow.split('\n').filter(l => l.trim()).length === 0) {
         // If nothing is disallowed or allowed, it's open, but standard practice usually leaves Disallow empty or omit.
         // Usually Disallow: is not needed if allowing everything, but specific allow rules might exist.
      }

      // Allow
      const allows = group.allow.split('\n').filter(line => line.trim() !== '');
      allows.forEach(line => {
        let path = line.trim();
        if(!path.startsWith('/')) path = '/' + path;
        txt += `Allow: ${path}\n`;
      });

      if (index < groups.length - 1) txt += '\n';
    });

    // Sitemap (Conventionally at the end)
    if (sitemap) {
      txt += `\nSitemap: ${sitemap}`;
    }

    setOutput(txt.trim());
  };

  const addGroup = () => {
    setGroups([...groups, { 
      id: Date.now().toString(), 
      userAgent: 'Googlebot', 
      allow: '', 
      disallow: '', 
      crawlDelay: '' 
    }]);
  };

  const removeGroup = (id: string) => {
    setGroups(groups.filter(g => g.id !== id));
  };

  const updateGroup = (id: string, field: keyof RobotGroup, value: string) => {
    setGroups(groups.map(g => g.id === id ? { ...g, [field]: value } : g));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'robots.txt';
    link.click();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Configuration Column */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Sitemap Settings */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
           <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
             <Info className="w-4 h-4 text-primary-500" /> Global Settings
           </h3>
           <div className="space-y-2">
               <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Sitemap URL</label>
               <input 
                  type="url"
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
                  placeholder="https://example.com/sitemap.xml"
                  value={sitemap}
                  onChange={(e) => setSitemap(e.target.value)}
               />
           </div>
        </div>

        {/* Rules */}
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white">Bot Rules</h3>
                <button 
                  onClick={addGroup}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"
                >
                    <Plus className="w-4 h-4" /> Add Rule
                </button>
            </div>

            {groups.map((group, index) => (
                <div key={group.id} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 relative group-hover:border-primary-200 transition-colors">
                    {groups.length > 1 && (
                        <button 
                          onClick={() => removeGroup(group.id)}
                          className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500">User Agent</label>
                            <div className="relative">
                                <Bot className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                                <input 
                                    list={`bots-${group.id}`}
                                    className="w-full pl-9 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white text-sm font-mono"
                                    value={group.userAgent}
                                    onChange={(e) => updateGroup(group.id, 'userAgent', e.target.value)}
                                />
                                <datalist id={`bots-${group.id}`}>
                                    {COMMON_BOTS.map(bot => <option key={bot.value} value={bot.value}>{bot.label}</option>)}
                                </datalist>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500">Crawl Delay (Seconds)</label>
                            <input 
                                type="number"
                                className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white text-sm"
                                placeholder="Default"
                                value={group.crawlDelay}
                                onChange={(e) => updateGroup(group.id, 'crawlDelay', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-red-500">Disallow Paths (One per line)</label>
                            <textarea 
                                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-red-500/50 outline-none dark:text-white text-sm font-mono min-h-[100px]"
                                placeholder="/admin/&#10;/private/"
                                value={group.disallow}
                                onChange={(e) => updateGroup(group.id, 'disallow', e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-green-600">Allow Paths (One per line)</label>
                            <textarea 
                                className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-green-500/50 outline-none dark:text-white text-sm font-mono min-h-[100px]"
                                placeholder="/public/&#10;/images/"
                                value={group.allow}
                                onChange={(e) => updateGroup(group.id, 'allow', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Preview Column */}
      <div className="lg:col-span-5 sticky top-24">
         <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-800">
             <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                 <span className="text-slate-400 text-sm font-mono">robots.txt</span>
                 <div className="flex gap-2">
                    <button 
                        onClick={copyToClipboard}
                        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                        title="Copy to Clipboard"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button 
                        onClick={downloadFile}
                        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                        title="Download File"
                    >
                        <Download className="w-4 h-4" />
                    </button>
                 </div>
             </div>
             <div className="p-6 overflow-x-auto">
                 <pre className="font-mono text-sm text-green-400 whitespace-pre">
                     {output}
                 </pre>
             </div>
         </div>

         <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 rounded-xl p-4">
             <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                 <Info className="w-4 h-4" /> Pro Tip
             </h4>
             <p className="text-sm text-blue-700 dark:text-blue-400">
                 Place the downloaded <code>robots.txt</code> file in the root directory of your website (e.g., <code>example.com/robots.txt</code>).
             </p>
         </div>
      </div>

    </div>
  );
};

export default RobotsTxtGeneratorTool;