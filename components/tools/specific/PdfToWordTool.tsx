import React, { useState, useRef } from 'react';
import { FileText, Loader2, Download, AlertCircle, Upload, Check } from 'lucide-react';
import { processPdf } from '../../../lib/gemini';

const PdfToWordTool: React.FC = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<{name: string, data: string} | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') { setError("Only PDF files allowed."); return; }
      if (file.size > 10 * 1024 * 1024) { setError("Max file size is 10MB."); return; }
      const reader = new FileReader();
      reader.onloadend = () => setSelectedFile({ name: file.name, data: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const handleConvert = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError(null);
    try {
        const html = await processPdf(selectedFile.data);
        const wordContent = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>Doc</title></head><body>${html}</body></html>
        `;
        const blob = new Blob([wordContent], { type: 'application/msword' });
        setOutput(URL.createObjectURL(blob));
    } catch (err: any) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 text-center">
             {!output ? (
                 <>
                    <div className="mb-8">
                        <label className="block text-xl font-bold text-slate-900 dark:text-white mb-4">Upload PDF Document</label>
                        {!selectedFile ? (
                            <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 transition-all">
                                <FileText className="w-16 h-16 text-slate-400 mb-4" />
                                <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Click to upload PDF</p>
                                <p className="text-sm text-slate-500 mt-2">Max file size 10MB</p>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-red-100 rounded-lg text-red-600"><FileText className="w-8 h-8"/></div>
                                    <div className="text-left">
                                        <p className="font-bold text-slate-900 dark:text-white text-lg">{selectedFile.name}</p>
                                        <p className="text-sm text-slate-500">Ready to convert</p>
                                    </div>
                                </div>
                                <button onClick={() => { setSelectedFile(null); if(fileInputRef.current) fileInputRef.current.value=''; }} className="text-red-500 hover:text-red-700 font-medium">Remove</button>
                            </div>
                        )}
                        <input type="file" ref={fileInputRef} className="hidden" accept="application/pdf" onChange={handleFileChange} />
                    </div>

                    <button onClick={handleConvert} disabled={!selectedFile || loading} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/30 flex items-center justify-center gap-2 disabled:opacity-50">
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <FileText className="w-6 h-6" />}
                        {loading ? 'Converting...' : 'Convert to Word'}
                    </button>
                    {error && <p className="mt-4 text-red-500 font-medium flex items-center justify-center gap-2"><AlertCircle className="w-5 h-5"/> {error}</p>}
                 </>
             ) : (
                 <div className="py-12 flex flex-col items-center justify-center animate-fade-in">
                     <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                        <Check className="w-12 h-12 text-green-600" />
                     </div>
                     <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Conversion Successful!</h2>
                     <p className="text-slate-500 mb-8">Your document is ready for download.</p>
                     
                     <div className="flex gap-4">
                        <a href={output} download={`${selectedFile?.name.replace('.pdf', '')}.doc`} className="py-4 px-8 bg-primary-600 text-white rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-primary-700 transition-colors">
                            <Download className="w-5 h-5" /> Download Word File
                        </a>
                        <button onClick={() => { setOutput(null); setSelectedFile(null); }} className="py-4 px-8 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                            Convert Another
                        </button>
                     </div>
                 </div>
             )}
        </div>
    </div>
  );
};

export default PdfToWordTool;