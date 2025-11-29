import React, { useState } from 'react';
import { Wand2, Loader2, Download, AlertCircle, Sliders, Share2 } from 'lucide-react';
import { Tool } from '../../../types/index';
import { generateImage } from '../../../lib/gemini';

interface AiImageToolProps {
  tool: Tool;
}

const ASPECT_RATIOS = [
  { label: 'Square (1:1)', value: '1:1' },
  { label: 'Landscape (16:9)', value: '16:9' },
  { label: 'Portrait (9:16)', value: '9:16' },
  { label: 'Standard (4:3)', value: '4:3' },
];

const AiImageTool: React.FC<AiImageToolProps> = ({ tool }) => {
  const [input, setInput] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setOutput(null);

    try {
      const res = await generateImage(input, aspectRatio);
      if (res) setOutput(res);
      else setError("No image data received.");
    } catch (err: any) {
      setError(err.message || "Failed to generate image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
          
          {/* Aspect Ratio */}
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Sliders className="w-4 h-4" /> Dimensions
            </label>
            <div className="flex flex-wrap gap-2">
              {ASPECT_RATIOS.map(ratio => (
                <button
                  key={ratio.value}
                  onClick={() => setAspectRatio(ratio.value)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all ${
                    aspectRatio === ratio.value 
                    ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-500/30' 
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary-300'
                  }`}
                >
                  {ratio.label}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt */}
          <div className="space-y-3 mb-6">
            <label className="block text-sm font-bold text-slate-900 dark:text-white">
              Image Description
            </label>
            <textarea 
              className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none min-h-[150px] dark:text-white"
              placeholder={tool.placeholder || "Describe the image you want to create..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Wand2 className="w-6 h-6" />
                Generate Image
              </>
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-3 border border-red-100 dark:border-red-900/50">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              {error}
            </div>
          )}
        </div>
      </div>

      {/* Output */}
      <div className="lg:col-span-7">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col min-h-[600px] h-full sticky top-36">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
            <h4 className="font-bold text-slate-700 dark:text-slate-300">Generated Image</h4>
            {output && (
              <button className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors">
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            )}
          </div>
          
          <div className="flex-1 p-6 flex flex-col items-center justify-center bg-slate-50/30 dark:bg-slate-950/30">
            {!output && !loading && (
              <div className="text-center text-slate-400 dark:text-slate-600">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 dark:border-slate-700">
                   <Wand2 className="w-8 h-8 opacity-40" />
                </div>
                <p>Generated artwork will appear here.</p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center gap-6">
                 <div className="relative">
                   <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-700 border-t-primary-500 rounded-full animate-spin"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Wand2 className="w-6 h-6 text-primary-500 animate-pulse" />
                   </div>
                 </div>
                 <p className="text-sm text-slate-500">Dreaming up your image...</p>
              </div>
            )}

            {output && !loading && (
              <div className="flex flex-col items-center gap-6 w-full h-full justify-center py-8">
                 <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
                    <img src={output} alt="Generated" className="max-h-[600px] w-auto object-contain bg-white dark:bg-slate-800" />
                 </div>
                 <a 
                    href={output} 
                    download={`ai-image-${Date.now()}.png`}
                    className="py-3 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2"
                 >
                    <Download className="w-5 h-5" /> Download
                 </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiImageTool;