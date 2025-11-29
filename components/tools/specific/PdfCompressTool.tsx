import React, { useState, useRef } from 'react';
import { Minimize2, Loader2, Download, AlertCircle, Upload, Check, Settings, FileText, Shield } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

const PdfCompressTool: React.FC = () => {
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<{name: string, data: ArrayBuffer, size: number} | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  
  // Options
  const [removeMetadata, setRemoveMetadata] = useState(true);
  const [flattenForms, setFlattenForms] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') { setError("Only PDF files allowed."); return; }
      const arrayBuffer = await file.arrayBuffer();
      setSelectedFile({ name: file.name, data: arrayBuffer, size: file.size });
      setOutput(null);
      setCompressedSize(null);
      setError(null);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleCompress = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError(null);
    try {
        // Load the existing PDF
        const pdfDoc = await PDFDocument.load(selectedFile.data);
        
        // 1. Flatten Forms if requested
        if (flattenForms) {
            try {
                const form = pdfDoc.getForm();
                form.flatten();
            } catch (e) {
                // Ignore if no form exists
            }
        }

        // 2. Create a new PDF (Garbage Collection strategy)
        // Copying pages to a new document removes unused objects and history
        const newPdf = await PDFDocument.create();
        const copiedPages = await newPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => newPdf.addPage(page));

        // 3. Remove Metadata if requested
        if (removeMetadata) {
            newPdf.setTitle('');
            newPdf.setAuthor('');
            newPdf.setSubject('');
            newPdf.setKeywords([]);
            newPdf.setCreator('');
            newPdf.setProducer('');
        } else {
             // Try to preserve metadata if not removing (basic copy)
             newPdf.setTitle(pdfDoc.getTitle() || '');
             newPdf.setAuthor(pdfDoc.getAuthor() || '');
             newPdf.setSubject(pdfDoc.getSubject() || '');
        }

        // Save with default compression
        const pdfBytes = await newPdf.save();
        
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        
        setCompressedSize(pdfBytes.byteLength);
        setOutput(url);
    } catch (err: any) {
        console.error(err);
        setError("Failed to process PDF. The file might be corrupted or password protected.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12">
             {!output ? (
                 <>
                    <div className="mb-8 text-center">
                        <label className="block text-xl font-bold text-slate-900 dark:text-white mb-4">Upload PDF to Optimize</label>
                        {!selectedFile ? (
                            <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                                <Minimize2 className="w-16 h-16 text-slate-400 mb-4" />
                                <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Click to upload PDF</p>
                                <p className="text-sm text-slate-500 mt-2">Optimizes structure & removes metadata</p>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600"><Minimize2 className="w-8 h-8"/></div>
                                    <div className="text-left">
                                        <p className="font-bold text-slate-900 dark:text-white text-lg">{selectedFile.name}</p>
                                        <p className="text-sm text-slate-500">Original size: {formatSize(selectedFile.size)}</p>
                                    </div>
                                </div>
                                <button onClick={() => { setSelectedFile(null); if(fileInputRef.current) fileInputRef.current.value=''; }} className="text-red-500 hover:text-red-700 font-medium">Remove</button>
                            </div>
                        )}
                        <input type="file" ref={fileInputRef} className="hidden" accept="application/pdf" onChange={handleFileChange} />
                    </div>

                    {selectedFile && (
                        <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                             <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <Settings className="w-4 h-4" /> Optimization Settings
                             </h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary-500 transition-colors">
                                    <input 
                                        type="checkbox" 
                                        checked={removeMetadata}
                                        onChange={(e) => setRemoveMetadata(e.target.checked)}
                                        className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" 
                                    />
                                    <div>
                                        <span className="block font-medium text-slate-700 dark:text-slate-200">Remove Metadata</span>
                                        <span className="block text-xs text-slate-500">Strips Author, Title, Creator info</span>
                                    </div>
                                </label>
                                <label className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary-500 transition-colors">
                                    <input 
                                        type="checkbox" 
                                        checked={flattenForms}
                                        onChange={(e) => setFlattenForms(e.target.checked)}
                                        className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" 
                                    />
                                    <div>
                                        <span className="block font-medium text-slate-700 dark:text-slate-200">Flatten Forms</span>
                                        <span className="block text-xs text-slate-500">Makes fields non-editable</span>
                                    </div>
                                </label>
                             </div>
                        </div>
                    )}

                    <button onClick={handleCompress} disabled={!selectedFile || loading} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/30 flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-primary-700 transition-colors">
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Minimize2 className="w-6 h-6" />}
                        {loading ? 'Optimizing...' : 'Compress PDF'}
                    </button>
                    {error && <p className="mt-4 text-red-500 font-medium flex items-center justify-center gap-2"><AlertCircle className="w-5 h-5"/> {error}</p>}
                 </>
             ) : (
                 <div className="py-12 flex flex-col items-center justify-center animate-fade-in text-center">
                     <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                        <Check className="w-12 h-12 text-green-600" />
                     </div>
                     <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Optimization Complete!</h2>
                     
                     <div className="flex items-center gap-4 mb-8 text-sm justify-center">
                        <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 line-through">
                            {selectedFile && formatSize(selectedFile.size)}
                        </div>
                        <div className="text-slate-400">→</div>
                        <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-bold">
                             {compressedSize && formatSize(compressedSize)}
                        </div>
                     </div>

                     <p className="text-slate-500 mb-8 max-w-md mx-auto">
                        {compressedSize && selectedFile && compressedSize < selectedFile.size 
                            ? `File size reduced by ${Math.round(((selectedFile.size - compressedSize) / selectedFile.size) * 100)}%. Structure cleaned.`
                            : "Structure optimized. No further reduction possible without quality loss."}
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={output} download={`optimized-${selectedFile?.name}`} className="py-4 px-8 bg-primary-600 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors">
                            <Download className="w-5 h-5" /> Download PDF
                        </a>
                        <button onClick={() => { setOutput(null); setSelectedFile(null); }} className="py-4 px-8 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                            Optimize Another
                        </button>
                     </div>
                 </div>
             )}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3 text-blue-600">
                    <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Structure Cleanup</h4>
                <p className="text-sm text-slate-500">Removes unused objects, edit history, and redundant data streams to save space.</p>
             </div>
             <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3 text-green-600">
                    <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Privacy Enhanced</h4>
                <p className="text-sm text-slate-500">Optionally strips hidden metadata like author name and creation dates.</p>
             </div>
             <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-3 text-purple-600">
                    <Minimize2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">No Quality Loss</h4>
                <p className="text-sm text-slate-500">Optimization focuses on file structure, so images and text remain crisp.</p>
             </div>
        </div>
    </div>
  );
};

export default PdfCompressTool;