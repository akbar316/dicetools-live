import React, { useState } from 'react';
import { Hexagon, Loader2, Download, AlertCircle, RefreshCw, Palette, Layers, Sparkles, Layout, Type, Shield, Grid, Check, MousePointer2 } from 'lucide-react';
import { generateImage } from '../../../lib/gemini';

const STYLES = [
  { id: 'minimalist', label: 'Minimalist', desc: 'Clean, simple, timeless', icon: <Hexagon className="w-5 h-5"/> },
  { id: 'geometric', label: 'Geometric', desc: 'Shapes, symmetry, precision', icon: <Grid className="w-5 h-5"/> },
  { id: 'mascot', label: 'Mascot', desc: 'Character-based, friendly', icon: <Sparkles className="w-5 h-5"/> },
  { id: 'vintage', label: 'Vintage', desc: 'Retro, badge, textured', icon: <Shield className="w-5 h-5"/> },
  { id: 'abstract', label: 'Abstract', desc: 'Conceptual, unique forms', icon: <Layers className="w-5 h-5"/> },
  { id: '3d', label: '3D Gradient', desc: 'Depth, modern tech feel', icon: <Hexagon className="w-5 h-5"/> },
];

const LAYOUTS = [
    { id: 'icon_text', label: 'Icon + Text', icon: <Layout className="w-4 h-4" /> },
    { id: 'wordmark', label: 'Wordmark', icon: <Type className="w-4 h-4" /> },
    { id: 'emblem', label: 'Emblem', icon: <Shield className="w-4 h-4" /> },
];

const MOODS = [
    'Modern', 'Classic', 'Playful', 'Luxury', 'Tech', 'Organic', 'Industrial', 'Friendly'
];

const COLORS = [
  { id: 'blue', label: 'Trust (Blue)', hex: '#3B82F6', prompt: 'blue color palette' },
  { id: 'red', label: 'Passion (Red)', hex: '#EF4444', prompt: 'red color palette' },
  { id: 'green', label: 'Nature (Green)', hex: '#22C55E', prompt: 'green and earth tones' },
  { id: 'black', label: 'Luxury (B&W)', hex: '#111827', prompt: 'black and white, monochrome' },
  { id: 'purple', label: 'Creative (Purple)', hex: '#A855F7', prompt: 'purple and violet tones' },
  { id: 'orange', label: 'Energy (Orange)', hex: '#F97316', prompt: 'orange and yellow tones' },
  { id: 'gradient', label: 'Tech (Gradient)', hex: 'linear-gradient(135deg, #3B82F6, #A855F7)', prompt: 'vibrant modern gradients' },
  { id: 'gold', label: 'Premium (Gold)', hex: '#EAB308', prompt: 'gold and metallic textures' },
];

interface LogoHistoryItem {
    id: string;
    url: string;
    prompt: string;
    timestamp: number;
}

const LogoGeneratorTool: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  
  // Design Preferences
  const [selectedStyle, setSelectedStyle] = useState('minimalist');
  const [selectedLayout, setSelectedLayout] = useState('icon_text');
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedMoods, setSelectedMoods] = useState<string[]>(['Modern']);

  // Output State
  const [variations, setVariations] = useState<string[]>([]);
  const [selectedVariation, setSelectedVariation] = useState<string | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<LogoHistoryItem[]>([]);

  const toggleMood = (mood: string) => {
      if (selectedMoods.includes(mood)) {
          setSelectedMoods(prev => prev.filter(m => m !== mood));
      } else {
          if (selectedMoods.length < 3) setSelectedMoods(prev => [...prev, mood]);
      }
  };

  const handleGenerate = async () => {
    if (!brandName.trim() || !industry.trim()) {
        setError("Please enter your brand name and industry.");
        return;
    }
    
    setLoading(true);
    setError(null);
    setVariations([]);
    setSelectedVariation(null);

    try {
      const styleObj = STYLES.find(s => s.id === selectedStyle);
      const colorObj = COLORS.find(c => c.id === selectedColor);
      const layoutObj = LAYOUTS.find(l => l.id === selectedLayout);
      
      const prompt = `Design a high-quality professional vector logo for a brand named "${brandName}". 
      Industry: ${industry}. 
      Design Style: ${styleObj?.label} (${styleObj?.desc}). 
      Layout Type: ${layoutObj?.label}. 
      Color Palette: ${colorObj?.prompt}. 
      Mood/Vibe: ${selectedMoods.join(', ')}. 
      Requirements: High contrast, vector art style, white background, centered composition, scalable, professional finish. 
      ${selectedLayout === 'wordmark' ? 'Focus on creative typography.' : 'Focus on a unique symbol or icon.'}`;

      // Generate 4 variations in parallel
      const promises = Array(4).fill(0).map(() => generateImage(prompt, "1:1"));
      const results = await Promise.all(promises.map(p => p.catch(() => null)));
      
      const validResults = results.filter(res => res !== null) as string[];

      if (validResults.length > 0) {
          setVariations(validResults);
          setSelectedVariation(validResults[0]);
          
          // Add first one to history automatically
          const newItem: LogoHistoryItem = {
              id: Date.now().toString(),
              url: validResults[0],
              prompt: prompt,
              timestamp: Date.now()
          };
          setHistory(prev => [newItem, ...prev]);
      } else {
          setError("Failed to generate logos. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const loadFromHistory = (item: LogoHistoryItem) => {
      setVariations([item.url]); // Just show the one from history
      setSelectedVariation(item.url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
      
      {/* Left Sidebar: Studio Controls */}
      <div className="xl:col-span-4 space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <SettingsIcon /> Design Studio
            </h3>

            <div className="space-y-6">
                {/* Brand Info */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Brand Name</label>
                        <input 
                            type="text"
                            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white font-medium"
                            placeholder="e.g. Nexus"
                            value={brandName}
                            onChange={(e) => setBrandName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Industry</label>
                        <input 
                            type="text"
                            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
                            placeholder="e.g. Fintech"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                        />
                    </div>
                </div>

                <div className="h-px bg-slate-100 dark:bg-slate-800" />

                {/* Layout */}
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Layout</label>
                    <div className="grid grid-cols-3 gap-2">
                        {LAYOUTS.map(layout => (
                            <button
                                key={layout.id}
                                onClick={() => setSelectedLayout(layout.id)}
                                className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
                                    selectedLayout === layout.id 
                                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400' 
                                    : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:border-slate-300'
                                }`}
                            >
                                <div className="mb-1 opacity-70">{layout.icon}</div>
                                <span className="text-[10px] font-bold">{layout.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Style */}
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Aesthetic</label>
                    <div className="grid grid-cols-2 gap-2">
                        {STYLES.map(style => (
                            <button
                                key={style.id}
                                onClick={() => setSelectedStyle(style.id)}
                                className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                                    selectedStyle === style.id 
                                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 ring-1 ring-primary-500' 
                                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                                }`}
                            >
                                <div className={`mt-0.5 ${selectedStyle === style.id ? 'text-primary-600' : 'text-slate-400'}`}>
                                    {style.icon}
                                </div>
                                <div>
                                    <div className={`font-bold text-sm ${selectedStyle === style.id ? 'text-primary-900 dark:text-primary-300' : 'text-slate-700 dark:text-slate-200'}`}>{style.label}</div>
                                    <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{style.desc}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mood Tags */}
                <div>
                     <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Vibe (Max 3)</label>
                     <div className="flex flex-wrap gap-2">
                         {MOODS.map(mood => (
                             <button
                                key={mood}
                                onClick={() => toggleMood(mood)}
                                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                                    selectedMoods.includes(mood)
                                    ? 'bg-slate-800 text-white border-slate-800 dark:bg-white dark:text-slate-900'
                                    : 'bg-white text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 hover:border-slate-300'
                                }`}
                             >
                                 {mood}
                             </button>
                         ))}
                     </div>
                </div>

                {/* Color */}
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Palette</label>
                    <div className="grid grid-cols-4 gap-3">
                        {COLORS.map(color => (
                            <button
                                key={color.id}
                                onClick={() => setSelectedColor(color.id)}
                                className={`group relative w-full aspect-square rounded-full transition-transform focus:outline-none ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 ${
                                    selectedColor === color.id ? 'ring-slate-900 dark:ring-white scale-110' : 'ring-transparent hover:scale-105'
                                }`}
                                style={{ background: color.hex }}
                                title={color.label}
                            >
                                {selectedColor === color.id && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-white drop-shadow-md" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <button 
                    onClick={handleGenerate}
                    disabled={loading || !brandName || !industry}
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                    {loading ? 'Designing...' : 'Generate 4 Designs'}
                </button>

                {error && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" /> {error}
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Right Content: Preview & Variations */}
      <div className="xl:col-span-8 space-y-8">
        
        {/* Main Preview */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[600px] xl:h-[700px] sticky top-36">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                <h4 className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Layout className="w-4 h-4" /> 
                    {selectedVariation ? 'Selected Design' : 'Preview'}
                </h4>
                {variations.length > 0 && (
                    <div className="flex gap-2">
                         <button onClick={handleGenerate} className="px-3 py-1.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-primary-600 flex items-center gap-1.5 transition-colors">
                            <RefreshCw className="w-3.5 h-3.5" /> Regenerate All
                        </button>
                    </div>
                )}
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden">
                {/* Large Preview Area */}
                <div className="flex-1 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-slate-50 dark:bg-slate-950 relative flex items-center justify-center p-8 md:p-12 overflow-hidden">
                    {!selectedVariation && !loading && (
                        <div className="text-center text-slate-400">
                            <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 dark:border-slate-700 shadow-sm animate-pulse-slow">
                                <Hexagon className="w-10 h-10 opacity-30" />
                            </div>
                            <h5 className="text-lg font-medium text-slate-600 dark:text-slate-300">Your Brand Identity Awaits</h5>
                            <p className="text-sm mt-1 max-w-xs mx-auto">Configure your preferences in the studio on the left and hit Generate.</p>
                        </div>
                    )}

                    {loading && (
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md animate-pulse">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
                            ))}
                        </div>
                    )}

                    {selectedVariation && !loading && (
                        <div className="flex flex-col items-center gap-6 w-full max-w-xl z-10 animate-fade-in">
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100 w-full aspect-square flex items-center justify-center">
                                <img src={selectedVariation} alt="Selected Logo" className="w-full h-full object-contain" />
                            </div>
                            
                            <a 
                                href={selectedVariation} 
                                download={`logo-${brandName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.png`}
                                className="w-full md:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                            >
                                <Download className="w-5 h-5" /> Download Design
                            </a>
                        </div>
                    )}
                </div>

                {/* Sidebar of Variations (Desktop) or Bottom (Mobile) */}
                {variations.length > 0 && !loading && (
                    <div className="w-full md:w-48 bg-white dark:bg-slate-900 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 p-4 overflow-y-auto custom-scrollbar flex flex-row md:flex-col gap-4">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 hidden md:block">Variations</div>
                        {variations.map((v, i) => (
                            <div 
                                key={i}
                                onClick={() => setSelectedVariation(v)}
                                className={`flex-shrink-0 md:flex-shrink w-24 md:w-full aspect-square bg-white rounded-xl border-2 cursor-pointer transition-all overflow-hidden p-2 relative ${
                                    selectedVariation === v 
                                    ? 'border-primary-500 ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-slate-900' 
                                    : 'border-slate-100 dark:border-slate-800 hover:border-slate-300'
                                }`}
                            >
                                <img src={v} alt={`Variation ${i+1}`} className="w-full h-full object-contain" />
                                {selectedVariation === v && (
                                    <div className="absolute top-1 right-1 bg-primary-500 text-white rounded-full p-0.5">
                                        <Check className="w-3 h-3" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

        {/* History Strip */}
        {history.length > 0 && (
             <div className="space-y-4 animate-fade-in">
                 <h4 className="font-bold text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider px-1">Recent Variations</h4>
                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                     {history.map((item) => (
                         <div 
                            key={item.id} 
                            onClick={() => loadFromHistory(item)}
                            className={`group relative aspect-square bg-white rounded-xl shadow-sm border overflow-hidden cursor-pointer transition-all ${selectedVariation === item.url ? 'ring-2 ring-primary-500 border-primary-500' : 'border-slate-200 dark:border-slate-800 hover:border-primary-300'}`}
                         >
                             <img src={item.url} alt="History" className="w-full h-full object-contain p-4" />
                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                 <div className="text-white text-xs font-bold bg-black/50 px-2 py-1 rounded-full">Restore</div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        )}

      </div>
    </div>
  );
};

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);

export default LogoGeneratorTool;