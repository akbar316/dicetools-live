import React, { useState, useRef } from 'react';
import { Wand2, Loader2, Download, AlertCircle, Upload, Trash2, Sliders, Palette, Plus, Minus, RefreshCcw, Pencil, Share2 } from 'lucide-react';
import { Tool } from '../../../types/index';
import { editImage } from '../../../lib/gemini';

const ASPECT_RATIOS = [
  { label: 'Square (1:1)', value: '1:1' },
  { label: 'Landscape (16:9)', value: '16:9' },
  { label: 'Portrait (9:16)', value: '9:16' },
];

const EDIT_STYLES = [
  { label: 'None', value: '' },
  { label: 'Cyberpunk', value: 'in cyberpunk style, neon lights' },
  { label: 'Anime', value: 'in anime style, vivid colors' },
  { label: 'Realistic', value: 'photorealistic, 8k' },
  { label: 'Oil Painting', value: 'oil painting style' },
  { label: 'Sketch', value: 'pencil sketch' },
];

const QUICK_ACTIONS = [
  { label: 'Enhance', prompt: 'Enhance clarity, lighting, and details to high quality.' },
  { label: 'Fix Lighting', prompt: 'Fix the lighting, improve color balance and exposure.' },
  { label: 'B&W', prompt: 'Convert to black and white artistic photography.' },
];

type EditMode = 'freeform' | 'add' | 'remove' | 'replace';

const AiImageEditorTool: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [selectedStyle, setSelectedStyle] = useState('');
  
  const [editMode, setEditMode] = useState<EditMode>('freeform');
  const [editTarget, setEditTarget] = useState('');
  const [editReplacement, setEditReplacement] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError("Please upload a valid image file.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size too large. Max 5MB.");
        return;
      }
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage) {
      setError("Please upload an image first.");
      return;
    }
    
    setLoading(true);
    setError(null);
    setOutput(null);

    try {
      let fullPrompt = "";
      switch (editMode) {
        case 'add':
          if (!editTarget.trim()) throw new Error("Specify what to add.");
          fullPrompt = `Add ${editTarget} to the image.`;
          break;
        case 'remove':
           if (!editTarget.trim()) throw new Error("Specify what to remove.");
          fullPrompt = `Remove ${editTarget} from the image.`;
          break;
        case 'replace':
           if (!editTarget.trim() || !editReplacement.trim()) throw new Error("Specify replacement details.");
          fullPrompt = `Replace ${editTarget} with ${editReplacement} in the image.`;
          break;
        case 'freeform':
        default:
          if (!input.trim() && !selectedStyle) throw new Error("Describe your edits.");
          fullPrompt = input;
          break;
      }

      if (selectedStyle && editMode !== 'remove') {
          fullPrompt += ` ${selectedStyle}`;
      }

      const res = await editImage(selectedImage, fullPrompt, aspectRatio);
      if (res) setOutput(res);
      else setError("Failed to edit image.");
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
          
          {/* Upload */}
          <div className="space-y-4 mb-8">
            <label className="block text-sm font-bold text-slate-900 dark:text-white">1. Upload Source Image</label>
            {!selectedImage ? (
               <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group min-h-[200px]"
               >
                  <Upload className="w-10 h-10 text-slate-400 group-hover:text-primary-500 mb-3" />
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Click to upload photo</p>
                  <p className="text-xs text-slate-400 mt-1">JPG, PNG (Max 5MB)</p>
               </div>
            ) : (
               <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 group bg-slate-50 dark:bg-slate-800 p-4">
                  <img src={selectedImage} alt="Source" className="w-full h-auto max-h-[300px] object-contain mx-auto" />
                  <button 
                    onClick={() => { setSelectedImage(null); if(fileInputRef.current) fileInputRef.current.value=''; }}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
               </div>
            )}
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
          </div>

          {/* Controls */}
          <div className="space-y-6 mb-6">
            <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <Pencil className="w-4 h-4" /> Editing Mode
                </label>
                <div className="grid grid-cols-4 gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl">
                    {(['freeform', 'add', 'remove', 'replace'] as const).map((m) => (
                        <button
                            key={m}
                            onClick={() => setEditMode(m)}
                            className={`flex flex-col items-center justify-center py-3 px-1 rounded-lg text-[10px] sm:text-xs font-medium transition-all ${
                                editMode === m 
                                ? 'bg-white dark:bg-slate-700 shadow-md text-primary-600 dark:text-primary-400' 
                                : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700/50'
                            }`}
                        >
                            <span className="capitalize">{m}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  {editMode === 'freeform' && (
                    <>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Instructions</label>
                        <textarea 
                            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none resize-none min-h-[100px] dark:text-white text-sm"
                            placeholder="Describe your edits..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <div className="mt-3 flex flex-wrap gap-2">
                            {QUICK_ACTIONS.map(action => (
                                <button
                                    key={action.label}
                                    onClick={() => setInput(action.prompt)}
                                    className="px-3 py-1.5 text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:text-primary-600 transition-colors"
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>
                    </>
                )}
                  {editMode === 'add' && (
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Object to Add</label>
                        <input 
                            type="text"
                            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white text-sm"
                            placeholder="e.g. A red balloon"
                            value={editTarget}
                            onChange={(e) => setEditTarget(e.target.value)}
                        />
                    </div>
                )}
                {editMode === 'remove' && (
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Object to Remove</label>
                        <input 
                            type="text"
                            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white text-sm"
                            placeholder="e.g. The tree in the background"
                            value={editTarget}
                            onChange={(e) => setEditTarget(e.target.value)}
                        />
                    </div>
                )}
                {editMode === 'replace' && (
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Replace This</label>
                            <input 
                                type="text"
                                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white text-sm"
                                placeholder="e.g. The dog"
                                value={editTarget}
                                onChange={(e) => setEditTarget(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">With This</label>
                            <input 
                                type="text"
                                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white text-sm"
                                placeholder="e.g. A cat"
                                value={editReplacement}
                                onChange={(e) => setEditReplacement(e.target.value)}
                            />
                        </div>
                    </div>
                )}
            </div>
          </div>
          
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
          >
             {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Wand2 className="w-6 h-6" />}
             {loading ? 'Processing...' : 'Apply Edits'}
          </button>

          {error && <div className="mt-4 text-red-500 text-sm flex items-center gap-2"><AlertCircle className="w-4 h-4" /> {error}</div>}
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col min-h-[600px] h-full sticky top-36">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                <h4 className="font-bold text-slate-700 dark:text-slate-300">Result</h4>
                {output && <button className="text-xs flex items-center gap-1"><Share2 className="w-3 h-3"/> Share</button>}
            </div>
            <div className="flex-1 p-6 flex flex-col items-center justify-center bg-slate-50/30 dark:bg-slate-950/30">
                {!output && !loading && (
                    <div className="text-center text-slate-400">
                        <Wand2 className="w-10 h-10 mx-auto mb-2 opacity-30" />
                        <p>Edited image appears here.</p>
                    </div>
                )}
                {loading && (
                    <div className="flex flex-col items-center gap-4">
                        <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
                        <p className="text-sm text-slate-500">Applying magic...</p>
                    </div>
                )}
                {output && !loading && (
                    <div className="flex flex-col items-center gap-6 w-full">
                         <img src={output} alt="Edited" className="max-h-[600px] w-auto object-contain rounded-lg shadow-lg" />
                         <a href={output} download="edited-image.png" className="py-3 px-8 bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2"><Download className="w-4 h-4" /> Download</a>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AiImageEditorTool;