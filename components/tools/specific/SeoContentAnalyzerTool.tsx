import React, { useState } from 'react';
import { BarChart, CheckCircle2, AlertTriangle, XCircle, Search, Loader2, RefreshCw } from 'lucide-react';
import { generateText } from '../../../lib/gemini';

interface SeoResult {
  score: number;
  density: string;
  readability: string;
  sentiment: string;
  titleFeedback: string;
  contentFeedback: string;
  suggestions: string[];
  lsiKeywords: string[];
}

const SeoContentAnalyzerTool: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SeoResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!keyword.trim() || !content.trim()) {
        setError("Please enter both a target keyword and content to analyze.");
        return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
        const prompt = `
            Act as an expert SEO analyzer. Analyze the following content based on the target keyword.
            
            Target Keyword: "${keyword}"
            Page Title: "${title}"
            Content Body: "${content}"

            Return a strict JSON object with the following structure (do not use markdown formatting):
            {
                "score": number (0-100),
                "density": string (e.g. "1.5%"),
                "readability": string (e.g. "8th Grade", "Complex", "Easy"),
                "sentiment": string (e.g. "Positive", "Neutral"),
                "titleFeedback": string (Specific critique of the title if provided, else "No title provided"),
                "contentFeedback": string (General summary of content quality),
                "suggestions": string[] (Array of 3-5 actionable improvement tips),
                "lsiKeywords": string[] (Array of 5 relevant LSI keywords that are missing or recommended)
            }
        `;

        const responseText = await generateText(prompt, "You are an SEO expert. Output strictly raw JSON. No markdown code blocks.");
        
        // Clean response just in case
        const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const data: SeoResult = JSON.parse(cleanJson);
        
        setResult(data);

    } catch (err: any) {
        console.error("SEO Analysis Error:", err);
        setError("Failed to analyze content. Please try again.");
    } finally {
        setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
      if (score >= 80) return 'text-green-500 border-green-500';
      if (score >= 50) return 'text-yellow-500 border-yellow-500';
      return 'text-red-500 border-red-500';
  };

  const getScoreBg = (score: number) => {
      if (score >= 80) return 'bg-green-500';
      if (score >= 50) return 'bg-yellow-500';
      return 'bg-red-500';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Input Section */}
      <div className="lg:col-span-6 space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Search className="w-5 h-5 text-primary-500" /> Content Inputs
            </h3>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Target Keyword</label>
                    <input 
                        type="text"
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
                        placeholder="e.g. digital marketing"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Page Title <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input 
                        type="text"
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white"
                        placeholder="e.g. The Ultimate Guide to Digital Marketing"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Content Body</label>
                    <textarea 
                        className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none resize-y min-h-[300px] dark:text-white"
                        placeholder="Paste your article or draft here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="text-right text-xs text-slate-500 mt-2">
                        {content.split(/\s+/).filter(Boolean).length} words
                    </div>
                </div>

                <button 
                    onClick={handleAnalyze}
                    disabled={loading || !keyword || !content}
                    className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold shadow-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <BarChart className="w-5 h-5" />}
                    {loading ? 'Analyzing...' : 'Analyze Content'}
                </button>

                {error && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> {error}
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Result Section */}
      <div className="lg:col-span-6">
        {result ? (
             <div className="space-y-6 animate-fade-in">
                 
                 {/* Score Card */}
                 <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 flex items-center justify-between">
                     <div>
                         <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">SEO Score</h4>
                         <p className="text-slate-600 dark:text-slate-400 text-sm max-w-[200px]">Based on keyword usage, structure, and readability.</p>
                     </div>
                     <div className={`relative w-24 h-24 rounded-full border-8 flex items-center justify-center ${getScoreColor(result.score)}`}>
                         <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{result.score}</span>
                     </div>
                 </div>

                 {/* Metrics Grid */}
                 <div className="grid grid-cols-3 gap-4">
                     <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                         <div className="text-slate-500 text-xs font-bold uppercase mb-1">Density</div>
                         <div className="text-lg font-bold text-slate-900 dark:text-white">{result.density}</div>
                     </div>
                     <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                         <div className="text-slate-500 text-xs font-bold uppercase mb-1">Readability</div>
                         <div className="text-lg font-bold text-slate-900 dark:text-white">{result.readability}</div>
                     </div>
                     <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                         <div className="text-slate-500 text-xs font-bold uppercase mb-1">Sentiment</div>
                         <div className="text-lg font-bold text-slate-900 dark:text-white">{result.sentiment}</div>
                     </div>
                 </div>

                 {/* Feedback */}
                 <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-6">
                     <div>
                         <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                             {title ? <CheckCircle2 className="w-4 h-4 text-primary-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                             Title Analysis
                         </h4>
                         <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                             {result.titleFeedback}
                         </p>
                     </div>
                     <div>
                         <h4 className="font-bold text-slate-900 dark:text-white mb-2">Content Analysis</h4>
                         <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                             {result.contentFeedback}
                         </p>
                     </div>
                 </div>

                 {/* Suggestions */}
                 <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                     <h4 className="font-bold text-slate-900 dark:text-white mb-4">Actionable Improvements</h4>
                     <ul className="space-y-3">
                         {result.suggestions.map((tip, i) => (
                             <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                 <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">{i+1}</span>
                                 {tip}
                             </li>
                         ))}
                     </ul>
                 </div>

                 {/* LSI Keywords */}
                 <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                     <h4 className="font-bold text-slate-900 dark:text-white mb-4">Missing / Recommended Keywords</h4>
                     <div className="flex flex-wrap gap-2">
                         {result.lsiKeywords.map((kw, i) => (
                             <span key={i} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-900/50">
                                 {kw}
                             </span>
                         ))}
                     </div>
                 </div>
                 
                 <div className="text-center">
                    <button onClick={() => setResult(null)} className="text-sm text-slate-500 hover:text-primary-600 flex items-center justify-center gap-2 mx-auto">
                        <RefreshCw className="w-4 h-4" /> Analyze Another
                    </button>
                 </div>

             </div>
        ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-8 text-center">
                {loading ? (
                    <>
                        <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-4" />
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Analyzing Content...</h4>
                        <p className="text-slate-500">Checking density, readability, and structure.</p>
                    </>
                ) : (
                    <>
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                            <BarChart className="w-8 h-8 text-slate-400" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Ready to Analyze</h4>
                        <p className="text-slate-500 max-w-xs mx-auto mt-2">
                            Enter your content and target keyword to get a comprehensive SEO score and improvement tips.
                        </p>
                    </>
                )}
            </div>
        )}
      </div>

    </div>
  );
};

export default SeoContentAnalyzerTool;