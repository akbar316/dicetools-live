import React, { useState, useEffect, useMemo } from 'react';
import { AlertCircle, Check, HelpCircle } from 'lucide-react';

const CHEATSHEET = [
  { token: '.', desc: 'Any character except newline' },
  { token: '\\d', desc: 'Digit (0-9)' },
  { token: '\\w', desc: 'Word character (a-z, A-Z, 0-9, _)' },
  { token: '\\s', desc: 'Whitespace' },
  { token: '[abc]', desc: 'Any character in set' },
  { token: '[^abc]', desc: 'Any character NOT in set' },
  { token: '*', desc: '0 or more' },
  { token: '+', desc: '1 or more' },
  { token: '?', desc: '0 or 1' },
  { token: '{n}', desc: 'Exactly n times' },
  { token: '^', desc: 'Start of string' },
  { token: '$', desc: 'End of string' },
  { token: '(...)', desc: 'Group' },
];

const RegexTesterTool: React.FC = () => {
  const [pattern, setPattern] = useState('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}');
  const [flags, setFlags] = useState('gm');
  const [text, setText] = useState('Contact us at support@dicetools.online or sales@example.com.\nAlso try test.email+tag@subdomain.co.uk');
  const [matches, setMatches] = useState<RegExpExecArray[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Available flags
  const availableFlags = [
    { char: 'g', name: 'Global' },
    { char: 'm', name: 'Multiline' },
    { char: 'i', name: 'Insensitive' },
  ];

  const toggleFlag = (char: string) => {
    setFlags(prev => prev.includes(char) ? prev.replace(char, '') : prev + char);
  };

  useEffect(() => {
    try {
      if (!pattern) {
        setMatches([]);
        setError(null);
        return;
      }
      const regex = new RegExp(pattern, flags);
      const foundMatches: RegExpExecArray[] = [];
      
      // Prevent infinite loop with empty matches
      let match;
      // Using loop with exec to find all matches with details
      if (flags.includes('g')) {
          let loopCount = 0;
          while ((match = regex.exec(text)) !== null && loopCount < 1000) {
            foundMatches.push(match);
            loopCount++;
            if (match.index === regex.lastIndex) {
                regex.lastIndex++;
            }
          }
      } else {
          match = regex.exec(text);
          if(match) foundMatches.push(match);
      }

      setMatches(foundMatches);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setMatches([]);
    }
  }, [pattern, flags, text]);

  // Highlight logic
  const highlightedText = useMemo(() => {
    if (!matches.length) return text;
    if (error) return text;

    let lastIndex = 0;
    const parts = [];

    matches.forEach((match, i) => {
        // Text before match
        if (match.index > lastIndex) {
            parts.push(
                <span key={`text-${i}`}>{text.substring(lastIndex, match.index)}</span>
            );
        }
        // The match itself
        parts.push(
            <span key={`match-${i}`} className="bg-blue-200 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-b-2 border-blue-500 rounded-sm">
                {match[0]}
            </span>
        );
        lastIndex = match.index + match[0].length;
    });

    // Remaining text
    if (lastIndex < text.length) {
        parts.push(<span key="text-end">{text.substring(lastIndex)}</span>);
    }

    return parts;
  }, [text, matches, error]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-8 space-y-6">
        
        {/* Input Area */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            
            {/* Regex Bar */}
            <div className="flex items-center gap-2 mb-6">
                <div className="text-2xl font-mono text-slate-400 select-none">/</div>
                <input 
                    type="text" 
                    className={`flex-1 font-mono text-lg p-2 bg-transparent border-b-2 outline-none transition-colors ${error ? 'border-red-500 text-red-600' : 'border-primary-500 text-slate-900 dark:text-white'}`}
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    placeholder="Enter regex pattern..."
                />
                <div className="text-2xl font-mono text-slate-400 select-none">/</div>
                
                {/* Flags Dropdown */}
                <div className="flex gap-1">
                    {availableFlags.map(f => (
                        <button 
                            key={f.char}
                            onClick={() => toggleFlag(f.char)}
                            className={`w-8 h-8 rounded font-mono text-sm font-bold transition-colors ${flags.includes(f.char) ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                            title={f.name}
                        >
                            {f.char}
                        </button>
                    ))}
                </div>
            </div>

            {error && (
                <div className="mb-6 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> {error}
                </div>
            )}

            {/* Test String Editor */}
            <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 min-h-[200px] font-mono text-sm overflow-hidden">
                {/* Highlight Layer */}
                <div className="absolute inset-0 p-4 whitespace-pre-wrap break-words pointer-events-none text-transparent z-10">
                    {highlightedText}
                </div>
                {/* Input Layer */}
                <textarea 
                    className="absolute inset-0 w-full h-full p-4 bg-transparent text-slate-900 dark:text-slate-300 outline-none resize-none z-20 focus:bg-white/5 transition-colors"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    spellCheck={false}
                />
            </div>
        </div>

        {/* Matches Info */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Match Information
                <span className="ml-auto text-xs font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                    {matches.length} matches found
                </span>
            </h3>
            
            {matches.length > 0 ? (
                <div className="space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                    {matches.map((m, i) => (
                        <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-sm font-mono">
                            <div className="flex justify-between mb-1 text-slate-500 text-xs">
                                <span>Match {i + 1}</span>
                                <span>Index: {m.index}</span>
                            </div>
                            <div className="text-primary-600 dark:text-primary-400 font-bold">{m[0]}</div>
                            {/* Groups */}
                            {m.length > 1 && (
                                <div className="mt-2 pl-3 border-l-2 border-slate-200 dark:border-slate-700 space-y-1">
                                    {Array.from(m).slice(1).map((g, gi) => (
                                        <div key={gi} className="flex gap-2">
                                            <span className="text-slate-400 text-xs">Group {gi + 1}:</span>
                                            <span className="text-slate-700 dark:text-slate-300">{g}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 text-slate-400">
                    No matches found.
                </div>
            )}
        </div>
      </div>

      {/* Sidebar: Cheatsheet */}
      <div className="lg:col-span-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sticky top-24">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary-500" /> Quick Reference
            </h4>
            <div className="space-y-2">
                {CHEATSHEET.map((item, i) => (
                    <div 
                        key={i} 
                        className="flex items-center justify-between text-sm p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded cursor-pointer group"
                        onClick={() => setPattern(prev => prev + item.token)}
                    >
                        <code className="font-mono text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-1.5 py-0.5 rounded">
                            {item.token}
                        </code>
                        <span className="text-slate-500 text-xs group-hover:text-slate-700 dark:group-hover:text-slate-300">{item.desc}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegexTesterTool;