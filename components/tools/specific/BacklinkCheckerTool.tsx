import React, { useState } from 'react';
import { Link2, Search, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Loader2, ShieldCheck, BarChart, ExternalLink } from 'lucide-react';
import { generateText } from '../../../lib/gemini';

interface BacklinkAnalysis {
  relevanceScore: number;
  spamRisk: 'Low' | 'Medium' | 'High';
  domainAuthorityProxy: 'Low' | 'Medium' | 'High' | 'Very High';
  pros: string[];
  cons: string[];
  verdict: 'Pursue' | 'Avoid' | 'Neutral';
  analysis: string;
}

const BacklinkCheckerTool: React.FC = () => {
  const [targetUrl, setTargetUrl] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [anchorText, setAnchorText] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BacklinkAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!targetUrl.trim() || !sourceUrl.trim()) {
        setError("Please enter both your URL and the source URL.");
        return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
        const prompt = `
            Act as a strict SEO expert. Analyze the value of a potential backlink.
            
            My Website (Target): "${targetUrl}"
            Backlink Source Page: "${sourceUrl}"
            Anchor Text: "${anchorText || 'Not specified'}"

            Infer the niche/industry of both URLs based on their structure and domain names.
            Evaluate if the source is relevant to the target.
            Estimate if the source URL looks like a high-quality site (e.g., .edu, clean slug) or spammy.

            Return a strict JSON object with this structure (no markdown):
            {
                "relevanceScore": number (0-100),
                "spamRisk": "Low" | "Medium" | "High",
                "domainAuthorityProxy": "Low" | "Medium" | "High" | "Very High",
                "pros": string[] (3 bullet points on why this link is good),
                "cons": string[] (3 bullet points on risks or downsides),
                "verdict": "Pursue" | "Avoid" | "Neutral",
                "analysis": "A concise paragraph summarizing the link's SEO value."
            }
        `;

        const responseText = await generateText(prompt, "You are an SEO analyst. Output strictly raw JSON. No markdown code blocks.");
        const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const data: BacklinkAnalysis = JSON.parse(cleanJson);
        
        setResult(data);

    } catch (err: any) {
        console.error("Backlink Analysis Error:", err);
        setError("Analysis failed. Please try again.");
    } finally {
        setLoading(false);
    }
  };

  const getVerdictColor = (verdict: string) => {
      if (verdict === 'Pursue') return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-900';
      if (verdict === 'Avoid') return 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-900';
      return 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-900';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Input Section */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Link2 className="w-5 h-5 text-primary-500" /> Link Details
            </h3>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Website (Target URL)</label>
                    <input 
                        type="url"
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white transition-all"
                        placeholder="https://mysite.com/blog/..."
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Backlink Source URL</label>
                    <input 
                        type="url"
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white transition-all"
                        placeholder="https://othersite.com/resource-page"
                        value={sourceUrl}
                        onChange={(e) => setSourceUrl(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Anchor Text <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input 
                        type="text"
                        className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none dark:text-white transition-all"
                        placeholder="e.g., Best SEO Tools"
                        value={anchorText}
                        onChange={(e) => setAnchorText(e.target.value)}
                    />
                </div>

                <button 
                    onClick={handleAnalyze}
                    disabled={loading || !targetUrl || !sourceUrl}
                    className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold shadow-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                    {loading ? 'Analyzing...' : 'Check Quality'}
                </button>

                {error && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> {error}
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="lg:col-span-7">
        {result ? (
            <div className="space-y-6 animate-fade-in">
                
                {/* Verdict Card */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">AI Recommendation</h2>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold border ${getVerdictColor(result.verdict)}`}>
                                {result.verdict === 'Pursue' ? <CheckCircle2 className="w-4 h-4" /> : 
                                 result.verdict === 'Avoid' ? <XCircle className="w-4 h-4" /> : 
                                 <AlertTriangle className="w-4 h-4" />}
                                {result.verdict}
                            </div>
                        </div>
                        <div className="text-right">
                            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Relevance Score</h2>
                            <div className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center justify-end gap-1">
                                {result.relevanceScore}<span className="text-lg text-slate-400">/100</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-sm leading-relaxed border border-slate-100 dark:border-slate-700">
                        {result.analysis}
                    </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm font-bold uppercase">
                            <ShieldCheck className="w-4 h-4" /> Spam Risk
                        </div>
                        <div className={`text-xl font-bold ${
                            result.spamRisk === 'Low' ? 'text-green-500' : 
                            result.spamRisk === 'Medium' ? 'text-yellow-500' : 'text-red-500'
                        }`}>
                            {result.spamRisk}
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm font-bold uppercase">
                            <BarChart className="w-4 h-4" /> Authority Proxy
                        </div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white">
                            {result.domainAuthorityProxy}
                        </div>
                    </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-green-600 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5" /> Pros
                        </h4>
                        <ul className="space-y-3">
                            {result.pros.map((item, i) => (
                                <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-red-500 mb-4 flex items-center gap-2">
                            <XCircle className="w-5 h-5" /> Cons
                        </h4>
                        <ul className="space-y-3">
                            {result.cons.map((item, i) => (
                                <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 mt-0.5 text-red-500 flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-8 text-center">
                 {loading ? (
                    <>
                        <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-4" />
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Evaluating Link...</h4>
                        <p className="text-slate-500">Checking niche relevance and authority signals.</p>
                    </>
                ) : (
                    <>
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                            <ExternalLink className="w-8 h-8 text-slate-400" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Backlink Analysis</h4>
                        <p className="text-slate-500 max-w-xs mx-auto mt-2">
                            Enter the source and target URLs to evaluate if a backlink is worth pursuing.
                        </p>
                    </>
                )}
            </div>
        )}
      </div>

    </div>
  );
};

export default BacklinkCheckerTool;