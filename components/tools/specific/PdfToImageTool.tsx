import React, { useState, useRef } from 'react';
import { Images, Loader2, Download, AlertCircle, Upload, Check, Settings } from 'lucide-react';

declare global {
    interface Window {
        pdfjsLib: any;
    }
}

const PdfToImageTool: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<{name: string, data: ArrayBuffer} | null>(null);
  
  // Options
  const [format, setFormat] = useState<'png' | 'jpeg'>('png');
  const [quality, setQuality] = useState(1.0); // High quality by default

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') { setError("Only PDF files allowed."); return; }
      const arrayBuffer = await file.arrayBuffer();
      setSelectedFile({ name: file.name, data: arrayBuffer });
      setImages([]);
      setError(null);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleConvert = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError(null);
    setImages([]);

    try {
        const pdf = await window.pdfjsLib.getDocument(selectedFile.data).promise;
        const totalPages = pdf.numPages;
        const newImages: string[] = [];

        for (let i = 1; i <= totalPages; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 2.0 }); // 2x scale for better quality
            
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({ canvasContext: context!, viewport }).promise;
            
            // Convert to format
            const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
            const dataUrl = canvas.toDataURL(mimeType, quality);
            newImages.push(dataUrl);
        }

        setImages(newImages);

    } catch (err: any) {
        console.error(err);
        setError("Failed to convert PDF. The file might be corrupted or password protected.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12">
             {images.length === 0 ? (
                 <>
                    <div className="mb-8 text-center">
                        <label className="block text-xl font-bold text-slate-900 dark:text-white mb-4">Upload PDF</label>
                        {!selectedFile ? (
                            <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                                <Images className="w-16 h-16 text-slate-400 mb-4" />
                                <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Click to upload PDF</p>
                                <p className="text-sm text-slate-500 mt-2">Converts each page to an image</p>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600"><Images className="w-8 h-8"/></div>
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

                    {selectedFile && (
                        <div className="mb-8 flex justify-center gap-6">
                             <div className="flex items-center gap-2">
                                 <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Format:</label>
                                 <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                                     <button onClick={() => setFormat('png')} className={`px-3 py-1 text-xs font-bold rounded-md ${format === 'png' ? 'bg-white dark:bg-slate-700 shadow text-primary-600' : 'text-slate-500'}`}>PNG</button>
                                     <button onClick={() => setFormat('jpeg')} className={`px-3 py-1 text-xs font-bold rounded-md ${format === 'jpeg' ? 'bg-white dark:bg-slate-700 shadow text-primary-600' : 'text-slate-500'}`}>JPG</button>
                                 </div>
                             </div>
                        </div>
                    )}

                    <button onClick={handleConvert} disabled={!selectedFile || loading} className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/30 flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-primary-700 transition-colors">
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Images className="w-6 h-6" />}
                        {loading ? 'Converting...' : 'Convert to Images'}
                    </button>
                    {error && <p className="mt-4 text-red-500 font-medium flex items-center justify-center gap-2"><AlertCircle className="w-5 h-5"/> {error}</p>}
                 </>
             ) : (
                 <div className="animate-fade-in text-center">
                     <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8 text-green-600" />
                     </div>
                     <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Conversion Complete!</h2>
                     <p className="text-slate-500 mb-8">{images.length} pages converted successfully.</p>
                     
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 max-h-[500px] overflow-y-auto custom-scrollbar p-2">
                         {images.map((img, idx) => (
                             <div key={idx} className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                                 <img src={img} alt={`Page ${idx + 1}`} className="w-full h-auto object-contain" />
                                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                     <a href={img} download={`${selectedFile?.name.replace('.pdf', '')}-page-${idx+1}.${format}`} className="p-2 bg-white rounded-full text-primary-600 hover:text-primary-700 shadow-lg">
                                         <Download className="w-5 h-5" />
                                     </a>
                                 </div>
                                 <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Page {idx + 1}</div>
                             </div>
                         ))}
                     </div>

                     <button onClick={() => { setImages([]); setSelectedFile(null); }} className="py-3 px-8 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Convert Another
                     </button>
                 </div>
             )}
        </div>
    </div>
  );
};

export default PdfToImageTool;