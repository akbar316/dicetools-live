import React, { useState, useMemo } from 'react';
import { ClipboardCheck, FileText, PieChart, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface AnalysisResult {
    similarityScore: number;
    matchCount: number;
    totalWords: number;
    matchedIndices: Set<number>;
}

const PlagiarismCheckerTool: React.FC = () => {
    const [textToCheck, setTextToCheck] = useState('');
    const [sourceText, setSourceText] = useState('');
    const [analyzed, setAnalyzed] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);

    // Helper: Simple tokenizer
    const tokenize = (text: string) => {
        // Split by whitespace and remove punctuation
        return text.trim().split(/\s+/).map(w => ({
            raw: w,
            clean: w.toLowerCase().replace(/[^\w]/g, '')
        }));
    };

    const handleCheck = () => {
        if (!textToCheck.trim() || !sourceText.trim()) return;

        const inputTokens = tokenize(textToCheck);
        const sourceTokens = tokenize(sourceText);
        
        // Build a set of source shingles (4-grams)
        const windowSize = 4;
        const sourceShingles = new Set<string>();
        
        for (let i = 0; i <= sourceTokens.length - windowSize; i++) {
            const shingle = sourceTokens.slice(i, i + windowSize).map(t => t.clean).join(' ');
            if (shingle.trim()) sourceShingles.add(shingle);
        }

        // Check input shingles against source
        const matchedIndices = new Set<number>();
        let matchedCount = 0;

        for (let i = 0; i <= inputTokens.length - windowSize; i++) {
            const shingle = inputTokens.slice(i, i + windowSize).map(t => t.clean).join(' ');
            if (shingle.trim() && sourceShingles.has(shingle)) {
                // Mark indices as matched
                for (let j = 0; j < windowSize; j++) {
                    matchedIndices.add(i + j);
                }
            }
        }

        const score = matchedIndices.size > 0 
            ? Math.round((matchedIndices.size / inputTokens.length) * 100) 
            : 0;

        setResult({
            similarityScore: score,
            matchCount: matchedIndices.size,
            totalWords: inputTokens.length,
            matchedIndices
        });
        setAnalyzed(true);
    };

    // Render highlighted text
    const highlightedInput = useMemo(() => {
        if (!analyzed || !result) return null;

        const tokens = tokenize(textToCheck);
        return tokens.map((token, index) => {
            const isMatched = result.matchedIndices.has(index);
            return (
                <span 
                    key={index} 
                    className={`${isMatched ? 'bg-red-200 dark:bg-red-900/50 text-red-900 dark:text-red-200 border-b border-red-400' : 'text-slate-800 dark:text-slate-300'} mr-1 inline-block transition-colors`}
                >
                    {token.raw}
                </span>
            );
        });
    }, [textToCheck, analyzed, result]);

    const reset = () => {
        setTextToCheck('');
        setSourceText('');
        setAnalyzed(false);
        setResult(null);
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                
                {/* Input Column */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col h-full min-h-[500px]">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary-500" /> Text to Check
                            </h3>
                            <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                {textToCheck.split(/\s+/).filter(Boolean).length} words
                            </span>
                        </div>
                        <textarea 
                            className="flex-1 w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 outline-none resize-none dark:text-white leading-relaxed"
                            placeholder="Paste the student's essay or text here..."
                            value={textToCheck}
                            onChange={(e) => { setTextToCheck(e.target.value); setAnalyzed(false); }}
                        />
                    </div>
                </div>

                {/* Source Column */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col h-full min-h-[500px]">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <FileText className="w-5 h-5 text-green-500" /> Reference Source
                            </h3>
                            <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                {sourceText.split(/\s+/).filter(Boolean).length} words
                            </span>
                        </div>
                        <textarea 
                            className="flex-1 w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-green-500 outline-none resize-none dark:text-white leading-relaxed"
                            placeholder="Paste the original source material here to compare against..."
                            value={sourceText}
                            onChange={(e) => { setSourceText(e.target.value); setAnalyzed(false); }}
                        />
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center">
                 <button 
                    onClick={handleCheck}
                    disabled={!textToCheck.trim() || !sourceText.trim()}
                    className="py-4 px-12 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                 >
                    <ClipboardCheck className="w-5 h-5" /> Check for Plagiarism
                 </button>
            </div>

            {/* Results Section */}
            {analyzed && result && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-fade-in">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                <PieChart className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Analysis Report</h3>
                                <p className="text-sm text-slate-500">Comparison based on 4-word sequences</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Uniqueness</div>
                                <div className="text-2xl font-bold text-green-500">{100 - result.similarityScore}%</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Similarity</div>
                                <div className={`text-2xl font-bold ${result.similarityScore > 50 ? 'text-red-500' : result.similarityScore > 20 ? 'text-yellow-500' : 'text-slate-700 dark:text-slate-300'}`}>
                                    {result.similarityScore}%
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                         <div className="flex items-start gap-4 mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                             {result.similarityScore < 10 ? (
                                 <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                             ) : (
                                 <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                             )}
                             <div>
                                 <h4 className="font-bold text-slate-900 dark:text-white mb-1">Verdict: {result.similarityScore < 10 ? 'Likely Unique' : result.similarityScore < 40 ? 'Some Similarities Found' : 'Significant Plagiarism Detected'}</h4>
                                 <p className="text-sm text-slate-600 dark:text-slate-400">
                                     {result.similarityScore === 0 
                                        ? "No duplicate phrases found between the two texts."
                                        : `Found ${result.matchCount} matched words out of ${result.totalWords} total words.`
                                     }
                                 </p>
                             </div>
                         </div>

                         <div className="space-y-2">
                             <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Detailed View (Red indicates matches)</label>
                             <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 leading-loose text-lg">
                                 {highlightedInput}
                             </div>
                         </div>
                    </div>
                    
                    <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                        <button onClick={reset} className="text-sm text-slate-500 hover:text-primary-600 flex items-center gap-2">
                            <RefreshCw className="w-4 h-4" /> Start New Analysis
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlagiarismCheckerTool;