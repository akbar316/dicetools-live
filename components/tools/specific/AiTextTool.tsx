import React, { useState } from 'react';
import { Wand2, Loader2, Copy, Check, AlertCircle, Languages } from 'lucide-react';
import { Tool } from '../../../types/index';
import { generateText } from '../../../lib/gemini';

interface AiTextToolProps {
  tool: Tool;
}

const LANGUAGES = [
  "English (Standard)",
  "English (US)",
  "English (UK)",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Dutch",
  "Russian",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Hindi",
  "Turkish",
  "Indonesian",
  "Urdu",
  "Bengali",
  "Punjabi",
  "Marathi",
  "Telugu",
  "Tamil",
  "Vietnamese",
  "Thai"
];

const AiTextTool: React.FC<AiTextToolProps> = ({ tool }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English (Standard)");

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setOutput(null);

    try {
      let systemPrompt = tool.systemPrompt;
      
      // Enhance prompt for Grammar Fixer with language selection
      if (tool.id === 'ai-grammar') {
        systemPrompt = `${systemPrompt} Output the corrected text in ${selectedLanguage}.`;
      }
      // Enhance prompt for Translator if needed (optional, though tool.id usually dictates behavior)
      else if (tool.id === 'ai-translator') {
         // The default prompt is hardcoded in registry, but we could make this dynamic too if we added a selector for translator.
         // For now, we only apply to grammar fixer as requested.
      }

      const res = await generateText(input, systemPrompt);
      setOutput(res);
    } catch (err: any) {
      setError(err.message || "Failed to generate text.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
          
          {tool.id === 'ai-grammar' && (
             <div className="space-y-3 mb-6">
                <label className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <Languages className="w-4 h-4" /> Target Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                >
                   {LANGUAGES.map(lang => (
                     <option key={lang} value={lang}>{lang}</option>
                   ))}
                </select>
             </div>
          )}

          <div className="space-y-3 mb-6">
            <label className="block text-sm font-bold text-slate-900 dark:text-white">
              Input Content
            </label>
            <textarea 
              className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none min-h-[200px] dark:text-white leading-relaxed"
              placeholder={tool.placeholder || "Enter text here..."}
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
                Processing...
              </>
            ) : (
              <>
                <Wand2 className="w-6 h-6" />
                {tool.id === 'ai-grammar' ? 'Fix Grammar' : 'Generate Result'}
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

      <div className="lg:col-span-7">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col min-h-[600px] h-full sticky top-36">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
            <h4 className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">Result</h4>
            {output && (
              <button onClick={copyToClipboard} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors">
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy Text'}
              </button>
            )}
          </div>
          
          <div className="flex-1 p-6 flex flex-col items-center justify-center bg-slate-50/30 dark:bg-slate-950/30">
            {!output && !loading && (
              <div className="text-center text-slate-400 dark:text-slate-600 max-w-sm">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 dark:border-slate-700">
                  <Wand2 className="w-8 h-8 opacity-40" />
                </div>
                <h5 className="text-lg font-semibold mb-2">Ready to Create</h5>
                <p className="text-sm">Enter your inputs on the left and hit generate.</p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-700 border-t-primary-500 rounded-full animate-spin"></div>
                <div className="text-center space-y-2">
                  <h5 className="font-semibold text-slate-900 dark:text-white">Processing...</h5>
                  <p className="text-sm text-slate-500">Generating your content.</p>
                </div>
              </div>
            )}

            {output && !loading && (
              <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm overflow-auto max-h-[700px]">
                <pre dir="auto" className="whitespace-pre-wrap font-sans text-slate-800 dark:text-slate-200 text-base leading-loose">
                  {output}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTextTool;