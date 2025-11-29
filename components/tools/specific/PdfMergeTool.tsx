import React, { useState, useRef } from 'react';
import { Files, Loader2, Download, AlertCircle, Upload, Trash2, FilePlus, MoveUp, MoveDown } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

interface UploadedPdf {
  id: string;
  name: string;
  file: File;
}

const PdfMergeTool: React.FC = () => {
  const [pdfFiles, setPdfFiles] = useState<UploadedPdf[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: UploadedPdf[] = [];
      Array.from(e.target.files).forEach((file: File) => {
        if (file.type !== 'application/pdf') return;
        newFiles.push({
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          file
        });
      });
      
      setPdfFiles(prev => [...prev, ...newFiles]);
      setMergedPdfUrl(null); 
      setError(null);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (id: string) => {
    setPdfFiles(prev => prev.filter(f => f.id !== id));
    setMergedPdfUrl(null);
  };

  const moveFile = (index: number, direction: 'up' | 'down') => {
    const newFiles = [...pdfFiles];
    if (direction === 'up' && index > 0) {
      [newFiles[index], newFiles[index - 1]] = [newFiles[index - 1], newFiles[index]];
    } else if (direction === 'down' && index < newFiles.length - 1) {
      [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
    }
    setPdfFiles(newFiles);
  };

  const mergePdfs = async () => {
    if (pdfFiles.length < 2) {
      setError("Please upload at least 2 PDF files to merge.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const mergedPdf = await PDFDocument.create();

      for (const pdfFile of pdfFiles) {
        const fileBuffer = await pdfFile.file.arrayBuffer();
        const pdf = await PDFDocument.load(fileBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setMergedPdfUrl(url);

    } catch (err: any) {
      console.error(err);
      setError("Failed to merge PDFs. One of the files might be corrupted.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12">
            
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Merge PDF Files</h2>
                <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
                >
                    <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Upload className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Click to upload PDFs</p>
                    <p className="text-sm text-slate-500 mt-2">Select multiple files</p>
                </div>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="application/pdf" 
                    multiple 
                    onChange={handleFileChange} 
                />
            </div>

            {/* File List */}
            {pdfFiles.length > 0 && (
                <div className="space-y-3 mb-8">
                    {pdfFiles.map((pdf, index) => (
                        <div key={pdf.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded text-red-600 dark:text-red-400">
                                    <Files className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-medium text-slate-900 dark:text-white truncate">{pdf.name}</p>
                                    <p className="text-xs text-slate-500">{(pdf.file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => moveFile(index, 'up')}
                                    disabled={index === 0}
                                    className="p-2 text-slate-400 hover:text-primary-600 disabled:opacity-30 disabled:hover:text-slate-400"
                                >
                                    <MoveUp className="w-4 h-4" />
                                </button>
                                <button 
                                    onClick={() => moveFile(index, 'down')}
                                    disabled={index === pdfFiles.length - 1}
                                    className="p-2 text-slate-400 hover:text-primary-600 disabled:opacity-30 disabled:hover:text-slate-400"
                                >
                                    <MoveDown className="w-4 h-4" />
                                </button>
                                <button 
                                    onClick={() => removeFile(pdf.id)}
                                    className="p-2 text-red-400 hover:text-red-600"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-center text-sm text-slate-500 mt-2">
                        {pdfFiles.length} files selected. Drag order not supported yet, use arrows to reorder.
                    </div>
                </div>
            )}

            {/* Actions */}
            <div className="flex flex-col items-center gap-4">
                {pdfFiles.length > 0 && !mergedPdfUrl && (
                    <button 
                        onClick={mergePdfs}
                        disabled={loading || pdfFiles.length < 2}
                        className="w-full md:w-auto px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-red-500/30 flex items-center justify-center gap-2 hover:bg-red-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Files className="w-6 h-6" />}
                        {loading ? 'Merging...' : 'Merge Files'}
                    </button>
                )}

                {/* Success State */}
                {mergedPdfUrl && (
                    <div className="w-full animate-fade-in bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/50 rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Download className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Files Merged!</h3>
                        <p className="text-slate-500 mb-6">Your combined document is ready.</p>
                        <div className="flex gap-4 justify-center">
                            <a 
                                href={mergedPdfUrl} 
                                download="merged-document.pdf" 
                                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" /> Download PDF
                            </a>
                            <button 
                                onClick={() => { setMergedPdfUrl(null); setPdfFiles([]); }}
                                className="px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                            >
                                Start Over
                            </button>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        {error}
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default PdfMergeTool;