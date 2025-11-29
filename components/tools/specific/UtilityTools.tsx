import React, { useState } from 'react';
import { Copy, RefreshCw, Check, QrCode } from 'lucide-react';
import { Tool } from '../../../types/index';

// --- Password Generator ---
export const PasswordGeneratorTool: React.FC = () => {
    const [password, setPassword] = useState('');
    const [copied, setCopied] = useState(false);
    
    const generate = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let pass = "";
        for(let i=0; i<16; i++) pass += chars.charAt(Math.floor(Math.random() * chars.length));
        setPassword(pass);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 text-center">
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl mb-6 break-all">
                <span className="text-3xl font-mono text-slate-900 dark:text-white tracking-wider">{password || '••••••••••••••••'}</span>
            </div>
            <div className="flex gap-4 justify-center">
                <button onClick={generate} className="px-6 py-3 bg-primary-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-primary-700">
                    <RefreshCw className="w-5 h-5" /> Generate
                </button>
                {password && (
                    <button onClick={() => { navigator.clipboard.writeText(password); setCopied(true); setTimeout(()=>setCopied(false), 2000); }} className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-300">
                        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />} Copy
                    </button>
                )}
            </div>
        </div>
    );
};

// --- QR Generator ---
export const QrGeneratorTool: React.FC = () => {
    const [input, setInput] = useState('');
    const [qrUrl, setQrUrl] = useState('');

    return (
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <input 
                type="text" 
                className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 mb-6" 
                placeholder="Enter URL or text..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button 
                onClick={() => setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(input)}`)}
                disabled={!input}
                className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold mb-8 disabled:opacity-50"
            >
                Generate QR Code
            </button>
            
            {qrUrl && (
                <div className="flex justify-center">
                    <div className="p-4 bg-white rounded-xl shadow-lg border border-slate-200">
                        <img src={qrUrl} alt="QR" className="w-48 h-48" />
                    </div>
                </div>
            )}
        </div>
    );
};

// --- Word Counter ---
export const WordCounterTool: React.FC = () => {
    const [text, setText] = useState('');
    const stats = {
        words: text.trim().split(/\s+/).filter(Boolean).length,
        chars: text.length,
        charsNoSpace: text.replace(/\s/g, '').length,
        sentences: text.split(/[.!?]+/).filter(Boolean).length,
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <textarea 
                className="w-full h-96 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 resize-none focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white"
                placeholder="Type or paste your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-4 h-fit">
                {Object.entries(stats).map(([key, val]) => (
                    <div key={key} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                        <p className="text-4xl font-bold text-primary-600 mb-2">{val}</p>
                        <p className="text-slate-500 uppercase text-xs font-bold tracking-wider">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Lorem Ipsum ---
export const LoremIpsumTool: React.FC = () => {
    const [count, setCount] = useState(3);
    const [output, setOutput] = useState('');
    
    const generate = () => {
        const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        setOutput(Array(count).fill(lorem).join('\n\n'));
    };

    return (
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <div className="flex items-center gap-4 mb-6">
                <input 
                    type="number" 
                    min="1" 
                    max="20" 
                    value={count} 
                    onChange={(e) => setCount(Number(e.target.value))}
                    className="w-24 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-center"
                />
                <label className="font-bold text-slate-700 dark:text-slate-300">Paragraphs</label>
                <button onClick={generate} className="ml-auto px-6 py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700">
                    Generate
                </button>
            </div>
            {output && (
                <textarea readOnly value={output} className="w-full h-64 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400" />
            )}
        </div>
    );
};