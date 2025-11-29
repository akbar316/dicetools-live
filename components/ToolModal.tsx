import React, { useState, useEffect, useRef } from 'react';
import { X, Copy, Check, Wand2, Download, AlertCircle, Loader2, Upload, Image as ImageIcon, Trash2, Sliders, Palette, Zap, Plus, Minus, RefreshCcw, Eraser, Edit3 } from 'lucide-react';
import { Tool } from '../types';
import { generateText, generateImage, editImage } from '../services/geminiService';

interface ToolModalProps {
  tool: Tool;
  isOpen: boolean;
  onClose: () => void;
}

const ASPECT_RATIOS = [
  { label: 'Square (1:1)', value: '1:1' },
  { label: 'Landscape (16:9)', value: '16:9' },
  { label: 'Portrait (9:16)', value: '9:16' },
  { label: 'Standard (4:3)', value: '4:3' },
  { label: 'Tall (3:4)', value: '3:4' },
];

const EDIT_STYLES = [
  { label: 'None', value: '' },
  { label: 'Cyberpunk', value: 'in cyberpunk style, neon lights, high contrast' },
  { label: 'Anime', value: 'in anime style, vivid colors, cel shaded' },
  { label: 'Realistic', value: 'photorealistic, 8k, highly detailed' },
  { label: 'Oil Painting', value: 'oil painting style, textured brushstrokes' },
  { label: 'Sketch', value: 'pencil sketch, black and white, rough lines' },
  { label: '3D Render', value: '3D render, blender, unreal engine 5' },
];

const QUICK_ACTIONS = [
  { label: 'Enhance', prompt: 'Enhance clarity, lighting, and details to high quality.' },
  { label: 'Fix Lighting', prompt: 'Fix the lighting, improve color balance and exposure.' },
  { label: 'B&W', prompt: 'Convert to black and white artistic photography.' },
  { label: 'Remove BG', prompt: 'Isolate the main subject and remove the background.' },
];

type EditMode = 'freeform' | 'add' | 'remove' | 'replace';

const ToolModal: React.FC<ToolModalProps> = ({ tool, isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [selectedStyle, setSelectedStyle] = useState('');
  
  // AI Edit specific states
  const [editMode, setEditMode] = useState<EditMode>('freeform');
  const [editTarget, setEditTarget] = useState(''); // For add/remove/replace
  const [editReplacement, setEditReplacement] = useState(''); // For replace
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset state when tool changes
  useEffect(() => {
    setInput('');
    setOutput(null);
    setError(null);
    setLoading(false);
    setSelectedImage(null);
    setAspectRatio('1:1');
    setSelectedStyle('');
    setEditMode('freeform');
    setEditTarget('');
    setEditReplacement('');
  }, [tool]);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    // Basic validation
    if (tool.actionType !== 'utility-client' && !input.trim() && tool.actionType !== 'ai-image-edit') {
       // Allow empty prompt for some utility, but for most tools we need input.
    }
    
    if (tool.actionType === 'ai-image-edit') {
        if (!selectedImage) {
            setError("Please upload an image first.");
            return;
        }
    } else if (tool.actionType !== 'utility-client' && !input.trim()) {
         return;
    }
    
    setLoading(true);
    setError(null);
    setOutput(null);

    try {
      if (tool.actionType === 'ai-text') {
        const res = await generateText(input, tool.systemPrompt);
        setOutput(res);
      } else if (tool.actionType === 'ai-image') {
        const res = await generateImage(input, aspectRatio);
        if (res) {
            setOutput(res);
        } else {
            setError("No image data received. Please try a different prompt.");
        }
      } else if (tool.actionType === 'ai-image-edit') {
        if (selectedImage) {
            let fullPrompt = "";
            
            // Construct prompt based on mode
            switch (editMode) {
              case 'add':
                if (!editTarget.trim()) {
                   throw new Error("Please specify what you want to add.");
                }
                fullPrompt = `Add ${editTarget} to the image.`;
                break;
              case 'remove':
                 if (!editTarget.trim()) {
                   throw new Error("Please specify what you want to remove.");
                }
                fullPrompt = `Remove ${editTarget} from the image.`;
                break;
              case 'replace':
                 if (!editTarget.trim() || !editReplacement.trim()) {
                   throw new Error("Please specify both what to replace and what to replace it with.");
                }
                fullPrompt = `Replace ${editTarget} with ${editReplacement} in the image.`;
                break;
              case 'freeform':
              default:
                if (!input.trim() && !selectedStyle) {
                   throw new Error("Please describe your edits.");
                }
                fullPrompt = input;
                break;
            }

            // Append style if selected (optional for Remove mode)
            if (selectedStyle && editMode !== 'remove') {
                fullPrompt += ` ${selectedStyle}`;
            }

            const res = await editImage(selectedImage, fullPrompt, aspectRatio);
            if (res) {
                setOutput(res);
            } else {
                setError("Failed to edit image. The model might not have returned an image.");
            }
        }
      } else if (tool.actionType === 'utility-client') {
        // Client side logic based on ID
        if (tool.id === 'password-gen') {
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
            let pass = "";
            for(let i=0; i<16; i++) pass += chars.charAt(Math.floor(Math.random() * chars.length));
            setOutput(pass);
        } else if (tool.id === 'word-counter') {
            const words = input.trim().split(/\s+/).filter(Boolean).length;
            const chars = input.length;
            setOutput(`Words: ${words}\nCharacters: ${chars}`);
        } else if (tool.id === 'qr-generator') {
            if(!input) { setError("Please enter text/URL"); setLoading(false); return; }
            setOutput(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(input)}`);
        } else if (tool.id === 'lorem-ipsum') {
            setOutput("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        }
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (output && tool.actionType !== 'ai-image' && tool.actionType !== 'ai-image-edit' && tool.id !== 'qr-generator') {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError("Please upload a valid image file.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError("Image size too large. Please use an image under 5MB.");
        return;
      }
      setError(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const isImageOutput = tool.actionType === 'ai-image' || tool.actionType === 'ai-image-edit' || tool.id === 'qr-generator';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-200 dark:border-slate-800 animate-fade-in-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400`}>
              <tool.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tool.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{tool.description}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          {tool.actionType === 'coming-soon' ? (
             <div className="text-center py-12">
               <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
               <h4 className="text-lg font-semibold dark:text-white">Coming Soon</h4>
               <p className="text-slate-500">We are working hard to bring this tool to life!</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column: Inputs */}
              <div className="space-y-6">
                
                {/* Image Upload for AI Image Editor */}
                {tool.actionType === 'ai-image-edit' && (
                  <div className="space-y-2">
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                       1. Upload Source Image
                     </label>
                     {!selectedImage ? (
                       <div 
                          onClick={triggerFileInput}
                          className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group h-48"
                       >
                          <Upload className="w-8 h-8 text-slate-400 group-hover:text-primary-500 mb-2" />
                          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium text-center">Click to upload image</p>
                          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">MAX 5MB</p>
                       </div>
                     ) : (
                       <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 group bg-slate-50 dark:bg-slate-800">
                          <img src={selectedImage} alt="Source" className="w-full h-48 object-contain" />
                          <button 
                            onClick={removeImage}
                            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                            title="Remove Image"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                       </div>
                     )}
                     <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept="image/png, image/jpeg, image/jpg" 
                        onChange={handleFileChange} 
                     />
                  </div>
                )}

                {/* Aspect Ratio Selector */}
                {(tool.actionType === 'ai-image' || tool.actionType === 'ai-image-edit') && (
                   <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                         <Sliders className="w-4 h-4" /> Aspect Ratio
                      </label>
                      <div className="flex flex-wrap gap-2">
                         {ASPECT_RATIOS.map(ratio => (
                            <button
                              key={ratio.value}
                              onClick={() => setAspectRatio(ratio.value)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                                aspectRatio === ratio.value 
                                ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-500 text-primary-700 dark:text-primary-300' 
                                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary-300'
                              }`}
                            >
                               {ratio.label}
                            </button>
                         ))}
                      </div>
                   </div>
                )}

                {/* --- AI Image Editor Controls --- */}
                {tool.actionType === 'ai-image-edit' && (
                    <>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                          <Edit3 className="w-4 h-4" /> Edit Mode
                        </label>
                        <div className="grid grid-cols-4 gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                           <button
                             onClick={() => setEditMode('freeform')}
                             className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-[10px] font-medium transition-all ${editMode === 'freeform' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700/50'}`}
                           >
                              <Wand2 className="w-4 h-4 mb-1" /> Freeform
                           </button>
                           <button
                             onClick={() => setEditMode('add')}
                             className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-[10px] font-medium transition-all ${editMode === 'add' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700/50'}`}
                           >
                              <Plus className="w-4 h-4 mb-1" /> Add
                           </button>
                           <button
                             onClick={() => setEditMode('remove')}
                             className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-[10px] font-medium transition-all ${editMode === 'remove' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700/50'}`}
                           >
                              <Minus className="w-4 h-4 mb-1" /> Remove
                           </button>
                           <button
                             onClick={() => setEditMode('replace')}
                             className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-[10px] font-medium transition-all ${editMode === 'replace' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary-600 dark:text-primary-400' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700/50'}`}
                           >
                              <RefreshCcw className="w-4 h-4 mb-1" /> Replace
                           </button>
                        </div>
                      </div>

                      {/* Inputs based on Edit Mode */}
                      <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        {editMode === 'freeform' && (
                            <>
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Instructions</label>
                                <textarea 
                                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none min-h-[80px] dark:text-white text-sm"
                                    placeholder="Describe your edits (e.g., 'Make it snowy', 'Add a cat')..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                {/* Quick Actions */}
                                <div className="space-y-2 mt-2">
                                    <label className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                                        Quick Actions
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {QUICK_ACTIONS.map(action => (
                                            <button
                                                key={action.label}
                                                onClick={() => setInput(action.prompt)}
                                                className="px-2 py-1 text-[10px] border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                            >
                                                {action.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {editMode === 'add' && (
                            <div className="space-y-2">
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">What to add?</label>
                                <input 
                                    type="text"
                                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white text-sm"
                                    placeholder="e.g. A red balloon in the sky"
                                    value={editTarget}
                                    onChange={(e) => setEditTarget(e.target.value)}
                                />
                            </div>
                        )}

                        {editMode === 'remove' && (
                            <div className="space-y-2">
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">What to remove?</label>
                                <input 
                                    type="text"
                                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white text-sm"
                                    placeholder="e.g. The tree in the background"
                                    value={editTarget}
                                    onChange={(e) => setEditTarget(e.target.value)}
                                />
                            </div>
                        )}

                        {editMode === 'replace' && (
                            <div className="space-y-3">
                                <div className="space-y-1">
                                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Replace What?</label>
                                    <input 
                                        type="text"
                                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white text-sm"
                                        placeholder="e.g. The dog"
                                        value={editTarget}
                                        onChange={(e) => setEditTarget(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-center text-slate-400">
                                    <RefreshCcw className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">With What?</label>
                                    <input 
                                        type="text"
                                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white text-sm"
                                        placeholder="e.g. A cat"
                                        value={editReplacement}
                                        onChange={(e) => setEditReplacement(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                      </div>
                    </>
                )}

                {/* Style Selector (Optional for all image modes) */}
                {tool.actionType === 'ai-image-edit' && (
                    <div className="space-y-2">
                       <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                          <Palette className="w-4 h-4" /> Style Overlay <span className="text-xs font-normal text-slate-400">(Optional)</span>
                       </label>
                       <select
                         value={selectedStyle}
                         onChange={(e) => setSelectedStyle(e.target.value)}
                         className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
                       >
                          {EDIT_STYLES.map(style => (
                             <option key={style.label} value={style.value}>{style.label}</option>
                          ))}
                       </select>
                    </div>
                )}


                {/* Main Input (Standard) */}
                {tool.actionType !== 'ai-image-edit' && tool.id !== 'lorem-ipsum' && tool.id !== 'password-gen' && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      {tool.actionType === 'ai-image' ? 'Image Description' : 'Input'}
                    </label>
                    {tool.actionType === 'utility-client' && tool.id === 'qr-generator' ? (
                         <input 
                         type="text"
                         className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                         placeholder={tool.placeholder}
                         value={input}
                         onChange={(e) => setInput(e.target.value)}
                       />
                    ) : (
                      <textarea 
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none min-h-[100px] dark:text-white"
                        placeholder={tool.placeholder || "Enter text here..."}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                      />
                    )}
                  </div>
                )}

                {/* Generate Button */}
                <button 
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-xl font-medium shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {tool.actionType === 'ai-image-edit' ? (
                          editMode === 'remove' ? <Eraser className="w-5 h-5" /> :
                          editMode === 'add' ? <Plus className="w-5 h-5" /> :
                          editMode === 'replace' ? <RefreshCcw className="w-5 h-5" /> :
                          <Wand2 className="w-5 h-5" />
                      ) : <Wand2 className="w-5 h-5" />}
                      
                      {tool.id === 'password-gen' ? 'Generate' : 
                       tool.actionType === 'ai-image-edit' ? 'Apply Edits' : 'Generate'}
                    </>
                  )}
                </button>

                 {/* Error Message */}
                {error && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {error}
                    </div>
                )}
              </div>

              {/* Right Column: Output */}
              <div className="bg-slate-50 dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col h-full min-h-[300px]">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                   <h4 className="font-semibold text-slate-700 dark:text-slate-300">Result</h4>
                   {output && !isImageOutput && (
                      <button onClick={copyToClipboard} className="text-xs flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium">
                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                   )}
                </div>
                
                <div className="flex-1 p-4 flex items-center justify-center overflow-auto">
                    {!output && !loading && (
                        <div className="text-center text-slate-400 dark:text-slate-600">
                           <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2">
                              <Wand2 className="w-5 h-5 opacity-50" />
                           </div>
                           <p className="text-sm">Output will appear here</p>
                        </div>
                    )}

                    {loading && (
                        <div className="flex flex-col items-center gap-3">
                           <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                           <p className="text-sm text-slate-500 animate-pulse">AI is working on it...</p>
                        </div>
                    )}

                    {output && (
                        <div className="w-full h-full flex flex-col">
                             {isImageOutput ? (
                                <div className="flex flex-col items-center gap-4 w-full h-full justify-center">
                                    <img src={output} alt="Generated" className="rounded-lg shadow-md max-h-[400px] w-auto object-contain bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
                                    <a 
                                        href={output} 
                                        download={`dicetools-${Date.now()}.png`}
                                        className="py-2 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:opacity-90 flex items-center gap-2"
                                    >
                                        <Download className="w-4 h-4" /> Download Result
                                    </a>
                                </div>
                            ) : (
                                <pre className="whitespace-pre-wrap font-sans text-slate-800 dark:text-slate-200 text-sm leading-relaxed w-full">
                                    {output}
                                </pre>
                            )}
                        </div>
                    )}
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolModal;