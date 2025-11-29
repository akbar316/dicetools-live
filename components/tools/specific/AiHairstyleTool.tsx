import React, { useState, useRef } from 'react';
import { Scissors, Loader2, Download, AlertCircle, Upload, Trash2, UserCheck, Palette, Check, Share2 } from 'lucide-react';
import { editImage } from '../../../lib/gemini';

const HAIRSTYLES = [
  { id: 'long-wavy', label: 'Long Wavy' },
  { id: 'short-bob', label: 'Short Bob' },
  { id: 'pixie-cut', label: 'Pixie Cut' },
  { id: 'buzz-cut', label: 'Buzz Cut' },
  { id: 'afro', label: 'Afro' },
  { id: 'straight-bangs', label: 'Straight + Bangs' },
  { id: 'curly-messy', label: 'Messy Curls' },
  { id: 'mohawk', label: 'Mohawk' },
  { id: 'bald', label: 'Bald' },
  { id: 'braids', label: 'Braids' },
  { id: 'undercut', label: 'Undercut' },
  { id: 'pompadour', label: 'Pompadour' },
];

const BEARD_STYLES = [
  { id: 'clean-shaven', label: 'Clean Shaven' },
  { id: 'stubble', label: 'Stubble' },
  { id: 'full-beard', label: 'Full Beard' },
  { id: 'goatee', label: 'Goatee' },
  { id: 'moustache', label: 'Moustache' },
];

const HAIR_COLORS = [
  { id: 'blonde', label: 'Blonde', hex: '#FDE68A' },
  { id: 'black', label: 'Black', hex: '#171717' },
  { id: 'brown', label: 'Brown', hex: '#78350F' },
  { id: 'red', label: 'Red', hex: '#991B1B' },
  { id: 'silver', label: 'Silver', hex: '#D4D4D8' },
  { id: 'pink', label: 'Neon Pink', hex: '#EC4899' },
  { id: 'blue', label: 'Blue', hex: '#3B82F6' },
  { id: 'green', label: 'Green', hex: '#16a34a' },
];

const AiHairstyleTool: React.FC = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const [selectedHairstyle, setSelectedHairstyle] = useState('');
  const [customHairstyle, setCustomHairstyle] = useState('');
  const [selectedHairColors, setSelectedHairColors] = useState<string[]>([]);
  const [selectedBeard, setSelectedBeard] = useState('');
  const [input, setInput] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) { setError("Invalid image"); return; }
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const toggleHairColor = (label: string) => {
      if (selectedHairColors.includes(label)) {
          setSelectedHairColors(prev => prev.filter(c => c !== label));
      } else {
          if (selectedHairColors.length >= 2) setSelectedHairColors(prev => [...prev.slice(1), label]);
          else setSelectedHairColors(prev => [...prev, label]);
      }
  };

  const handleGenerate = async () => {
    if (!selectedImage) { setError("Please upload a photo."); return; }
    
    const finalHairstyle = customHairstyle.trim() || selectedHairstyle;
    if (!finalHairstyle && selectedHairColors.length === 0 && !selectedBeard && !input) {
        setError("Please select at least one option.");
        return;
    }

    setLoading(true);
    setError(null);
    setOutput(null);

    try {
        let prompt = "Edit this image. Focus on the person's hair and facial hair. ";
        if (finalHairstyle) prompt += `Change the hairstyle to ${finalHairstyle}. `;
        if (selectedHairColors.length > 0) prompt += `Change hair color to ${selectedHairColors.join(' mixed with ')}. `;
        if (selectedBeard) prompt += `Change facial hair to ${selectedBeard}. `;
        if (input.trim()) prompt += `Additional: ${input}. `;
        prompt += "Keep facial features and background identical. Make it look realistic.";

        const res = await editImage(selectedImage, prompt, "1:1");
        if (res) setOutput(res);
        else setError("Failed to generate hairstyle.");
    } catch (err: any) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            {/* Upload */}
            <div className="space-y-4 mb-8">
                <label className="block text-sm font-bold text-slate-900 dark:text-white">1. Upload Photo</label>
                {!selectedImage ? (
                <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 h-48">
                    <Upload className="w-8 h-8 text-slate-400 mb-2" />
                    <p className="text-sm text-slate-500">Upload JPG/PNG</p>
                </div>
                ) : (
                <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 p-2 bg-slate-50 dark:bg-slate-800">
                    <img src={selectedImage} alt="Source" className="w-full h-48 object-contain" />
                    <button onClick={() => { setSelectedImage(null); if(fileInputRef.current) fileInputRef.current.value=''; }} className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full"><Trash2 className="w-4 h-4" /></button>
                </div>
                )}
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
            </div>

            {/* Controls */}
            <div className="space-y-6">
                 {/* Hairstyle */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2"><Scissors className="w-4 h-4" /> Hairstyle</label>
                    <div className="grid grid-cols-3 gap-2">
                        {HAIRSTYLES.map(s => (
                            <button key={s.id} onClick={() => { setSelectedHairstyle(s.id === selectedHairstyle ? '' : s.label); setCustomHairstyle(''); }}
                             className={`text-xs p-2 border rounded-lg ${selectedHairstyle === s.label ? 'bg-primary-50 border-primary-500 text-primary-700' : 'bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400'}`}>
                                {s.label}
                            </button>
                        ))}
                    </div>
                 </div>
                 
                 {/* Color */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2"><Palette className="w-4 h-4" /> Hair Color</label>
                    <div className="flex gap-2 flex-wrap">
                        {HAIR_COLORS.map(c => (
                            <button key={c.id} onClick={() => toggleHairColor(c.label)} className={`w-8 h-8 rounded-full border-2 ${selectedHairColors.includes(c.label) ? 'border-primary-500 ring-2 ring-primary-200' : 'border-slate-200'}`} style={{backgroundColor: c.hex}}>
                                {selectedHairColors.includes(c.label) && <Check className={`w-4 h-4 mx-auto ${['blonde','white'].includes(c.id)?'text-black':'text-white'}`} />}
                            </button>
                        ))}
                    </div>
                 </div>

                 {/* Beard */}
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2"><UserCheck className="w-4 h-4" /> Beard</label>
                    <div className="flex gap-2 flex-wrap">
                        {BEARD_STYLES.map(b => (
                            <button key={b.id} onClick={() => setSelectedBeard(b.label === selectedBeard ? '' : b.label)} className={`px-3 py-1 text-xs border rounded-full ${selectedBeard === b.label ? 'bg-primary-600 text-white' : 'bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400'}`}>
                                {b.label}
                            </button>
                        ))}
                    </div>
                 </div>
            </div>

            <button onClick={handleGenerate} disabled={loading} className="w-full mt-8 py-4 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Scissors className="w-5 h-5" />} Generate
            </button>
            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        </div>
      </div>

      <div className="lg:col-span-7">
         <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col min-h-[600px] h-full sticky top-36">
             <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                <h4 className="font-bold text-slate-700 dark:text-slate-300">New Look</h4>
                {output && <button className="text-xs flex items-center gap-1"><Share2 className="w-3 h-3"/> Share</button>}
             </div>
             <div className="flex-1 p-6 flex flex-col items-center justify-center bg-slate-50/30 dark:bg-slate-950/30">
                {!output && !loading && <p className="text-slate-400">Generated hairstyle appears here.</p>}
                {loading && <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />}
                {output && !loading && (
                    <div className="flex flex-col items-center gap-6">
                        <img src={output} alt="Hair" className="max-h-[500px] w-auto rounded-lg shadow-lg" />
                        <a href={output} download="hairstyle.png" className="py-3 px-8 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2"><Download className="w-4 h-4" /> Download</a>
                    </div>
                )}
             </div>
         </div>
      </div>
    </div>
  );
};

export default AiHairstyleTool;