import React, { useState, useRef } from 'react';
import { FileImage, Loader2, Download, AlertCircle, Upload, Trash2, FilePlus, X } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface UploadedImage {
  id: string;
  url: string;
  file: File;
}

const ImageToPdfTool: React.FC = () => {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages: UploadedImage[] = [];
      Array.from(e.target.files).forEach((file: File) => {
        if (!file.type.startsWith('image/')) return;
        if (file.size > 10 * 1024 * 1024) return; // 10MB max per file

        const url = URL.createObjectURL(file);
        newImages.push({
          id: Math.random().toString(36).substr(2, 9),
          url,
          file
        });
      });
      
      setImages(prev => [...prev, ...newImages]);
      setPdfUrl(null); // Reset output if new images added
      setError(null);
    }
    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
    setPdfUrl(null);
  };

  const convertToPdf = async () => {
    if (images.length === 0) return;
    setLoading(true);
    setError(null);

    try {
      // Initialize PDF (A4 size by default, but we can adapt)
      const doc = new jsPDF();
      
      // Page dimensions (A4 in mm)
      const pageWidth = 210;
      const pageHeight = 297;

      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        
        // Add new page for subsequent images
        if (i > 0) doc.addPage();

        // Get image dimensions
        const imgProps = doc.getImageProperties(img.url);
        
        // Calculate aspect ratio to fit page
        const imgRatio = imgProps.width / imgProps.height;
        const pageRatio = pageWidth / pageHeight;
        
        let finalWidth = pageWidth;
        let finalHeight = pageWidth / imgRatio;

        if (finalHeight > pageHeight) {
            finalHeight = pageHeight;
            finalWidth = pageHeight * imgRatio;
        }

        // Center image
        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;

        doc.addImage(img.url, 'JPEG', x, y, finalWidth, finalHeight);
      }

      const pdfBlob = doc.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      setPdfUrl(url);

    } catch (err: any) {
      console.error(err);
      setError("Failed to generate PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12">
            
            {/* Header / Upload Area */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Convert Images to PDF</h2>
                <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
                >
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Upload className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Click to upload images</p>
                    <p className="text-sm text-slate-500 mt-2">JPG, PNG supported</p>
                </div>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/png, image/jpeg, image/jpg" 
                    multiple 
                    onChange={handleFileChange} 
                />
            </div>

            {/* Image Grid */}
            {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {images.map((img, index) => (
                        <div key={img.id} className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 aspect-square bg-slate-50 dark:bg-slate-800">
                            <img src={img.url} alt={`Upload ${index}`} className="w-full h-full object-contain" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button 
                                    onClick={() => removeImage(img.id)}
                                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                    <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl aspect-square cursor-pointer hover:border-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                        <FilePlus className="w-6 h-6 text-slate-400" />
                        <span className="text-xs text-slate-500 mt-2">Add More</span>
                    </div>
                </div>
            )}

            {/* Actions */}
            <div className="flex flex-col items-center gap-4">
                {images.length > 0 && !pdfUrl && (
                    <button 
                        onClick={convertToPdf}
                        disabled={loading}
                        className="w-full md:w-auto px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary-500/30 flex items-center justify-center gap-2 hover:bg-primary-700 transition-all disabled:opacity-70"
                    >
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <FileImage className="w-6 h-6" />}
                        {loading ? 'Converting...' : `Convert ${images.length} Images to PDF`}
                    </button>
                )}

                {/* Success State */}
                {pdfUrl && (
                    <div className="w-full animate-fade-in bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/50 rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Download className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">PDF Ready!</h3>
                        <p className="text-slate-500 mb-6">Your images have been combined successfully.</p>
                        <div className="flex gap-4 justify-center">
                            <a 
                                href={pdfUrl} 
                                download="converted-images.pdf" 
                                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" /> Download PDF
                            </a>
                            <button 
                                onClick={() => { setPdfUrl(null); setImages([]); }}
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

export default ImageToPdfTool;