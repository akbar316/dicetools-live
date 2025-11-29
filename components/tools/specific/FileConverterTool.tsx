import React, { useState, useRef } from 'react';
import { 
    Image as ImageIcon, FileText, Music, Upload, Download, Loader2, 
    RefreshCcw, Check, AlertCircle, Volume2
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import lamejs from 'lamejs';

type TabType = 'image' | 'text' | 'audio';

const FileConverterTool: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('image');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Image State
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const [imgFormat, setImgFormat] = useState<'image/jpeg'|'image/png'|'image/webp'>('image/jpeg');
  const [imgQuality, setImgQuality] = useState(0.8);
  const [imgOutput, setImgOutput] = useState<string | null>(null);

  // Text State
  const [textFile, setTextFile] = useState<File | null>(null);
  const [textContent, setTextContent] = useState('');
  const [pdfOutput, setPdfOutput] = useState<string | null>(null);

  // Audio State
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [mp3Output, setMp3Output] = useState<string | null>(null);

  const imgInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);
  const audioInputRef = useRef<HTMLInputElement>(null);

  // --- Image Logic ---
  const handleImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if(file) {
          if(!file.type.startsWith('image/')) { setError("Invalid image file"); return; }
          setImgFile(file);
          setImgPreview(URL.createObjectURL(file));
          setImgOutput(null);
          setError(null);
      }
  };

  const convertImage = async () => {
      if(!imgFile || !imgPreview) return;
      setLoading(true);
      try {
          const img = new Image();
          img.src = imgPreview;
          await new Promise(r => img.onload = r);
          
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if(!ctx) throw new Error("Canvas error");
          
          // Fill white background for JPEG
          if(imgFormat === 'image/jpeg') {
              ctx.fillStyle = '#FFFFFF';
              ctx.fillRect(0,0, canvas.width, canvas.height);
          }
          
          ctx.drawImage(img, 0, 0);
          const dataUrl = canvas.toDataURL(imgFormat, imgQuality);
          setImgOutput(dataUrl);
      } catch(err: any) {
          setError("Failed to convert image: " + err.message);
      } finally {
          setLoading(false);
      }
  };

  // --- Text Logic ---
  const handleTextUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if(file) {
          if(file.type !== 'text/plain') { setError("Please upload a .txt file"); return; }
          setTextFile(file);
          const text = await file.text();
          setTextContent(text);
          setPdfOutput(null);
          setError(null);
      }
  };

  const convertTextToPdf = () => {
      if(!textContent) return;
      setLoading(true);
      try {
          const doc = new jsPDF();
          const splitText = doc.splitTextToSize(textContent, 180); // Wrap text
          
          // Simple pagination loop
          let y = 10;
          const lineHeight = 7;
          const pageHeight = doc.internal.pageSize.height;
          
          for(let i=0; i<splitText.length; i++) {
              if (y > pageHeight - 10) {
                  doc.addPage();
                  y = 10;
              }
              doc.text(splitText[i], 10, y);
              y += lineHeight;
          }
          
          const blob = doc.output('blob');
          setPdfOutput(URL.createObjectURL(blob));
      } catch(err: any) {
          setError("PDF Generation failed");
      } finally {
          setLoading(false);
      }
  };

  // --- Audio Logic ---
  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if(file) {
          if(!file.type.startsWith('audio/')) { setError("Invalid audio file"); return; }
          setAudioFile(file);
          setMp3Output(null);
          setError(null);
      }
  };

  const convertAudioToMp3 = async () => {
      if(!audioFile) return;
      setLoading(true);
      setError(null);
      
      try {
          const arrayBuffer = await audioFile.arrayBuffer();
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
          
          // Encoding Logic using lamejs
          const channels = 1; // Mono for simplicity/speed in browser
          const sampleRate = 44100;
          const kbps = 128;
          
          const mp3encoder = new lamejs.Mp3Encoder(channels, sampleRate, kbps);
          const samples = audioBuffer.getChannelData(0);
          
          // Convert float samples to 16-bit PCM
          const sampleBlockSize = 1152;
          const mp3Data = [];
          
          // Float32 to Int16
          const pcmSamples = new Int16Array(samples.length);
          for(let i=0; i<samples.length; i++) {
              let s = Math.max(-1, Math.min(1, samples[i]));
              pcmSamples[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
          }
          
          for(let i=0; i<pcmSamples.length; i += sampleBlockSize) {
              const chunk = pcmSamples.subarray(i, i + sampleBlockSize);
              const mp3buf = mp3encoder.encodeBuffer(chunk);
              if(mp3buf.length > 0) mp3Data.push(mp3buf);
          }
          
          const endBuf = mp3encoder.flush();
          if(endBuf.length > 0) mp3Data.push(endBuf);
          
          const blob = new Blob(mp3Data, { type: 'audio/mp3' });
          setMp3Output(URL.createObjectURL(blob));

      } catch(err: any) {
          console.error(err);
          setError("Audio conversion failed. File might be too large or format unsupported.");
      } finally {
          setLoading(false);
      }
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 dark:border-slate-800">
                <button 
                    onClick={() => setActiveTab('image')}
                    className={`flex-1 py-4 flex items-center justify-center gap-2 font-bold text-sm transition-colors ${activeTab === 'image' ? 'bg-primary-50 dark:bg-primary-900/10 text-primary-600 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    <ImageIcon className="w-4 h-4" /> Image Converter
                </button>
                <button 
                    onClick={() => setActiveTab('text')}
                    className={`flex-1 py-4 flex items-center justify-center gap-2 font-bold text-sm transition-colors ${activeTab === 'text' ? 'bg-primary-50 dark:bg-primary-900/10 text-primary-600 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    <FileText className="w-4 h-4" /> Text to PDF
                </button>
                <button 
                    onClick={() => setActiveTab('audio')}
                    className={`flex-1 py-4 flex items-center justify-center gap-2 font-bold text-sm transition-colors ${activeTab === 'audio' ? 'bg-primary-50 dark:bg-primary-900/10 text-primary-600 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    <Music className="w-4 h-4" /> Audio to MP3
                </button>
            </div>

            <div className="p-8">
                {/* --- Image Tab --- */}
                {activeTab === 'image' && (
                    <div className="space-y-6">
                         {!imgFile ? (
                             <div onClick={() => imgInputRef.current?.click()} className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                                 <ImageIcon className="w-12 h-12 text-slate-400 mb-4" />
                                 <p className="font-bold text-slate-700 dark:text-slate-300">Upload Image</p>
                                 <p className="text-sm text-slate-500">JPG, PNG, WEBP, GIF</p>
                                 <input type="file" ref={imgInputRef} onChange={handleImgUpload} accept="image/*" className="hidden" />
                             </div>
                         ) : (
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div className="space-y-4">
                                     <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center relative group border border-slate-200 dark:border-slate-700">
                                         <img src={imgPreview!} alt="Preview" className="max-w-full max-h-full object-contain" />
                                         <button onClick={() => { setImgFile(null); setImgOutput(null); }} className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                             <RefreshCcw className="w-4 h-4" />
                                         </button>
                                     </div>
                                 </div>
                                 <div className="space-y-4">
                                     <div>
                                         <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Target Format</label>
                                         <select value={imgFormat} onChange={(e) => setImgFormat(e.target.value as any)} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white">
                                             <option value="image/jpeg">JPG (Joint Photographic Experts Group)</option>
                                             <option value="image/png">PNG (Portable Network Graphics)</option>
                                             <option value="image/webp">WebP (Modern Web Format)</option>
                                         </select>
                                     </div>
                                     <div>
                                         <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Quality ({Math.round(imgQuality * 100)}%)</label>
                                         <input type="range" min="0.1" max="1" step="0.1" value={imgQuality} onChange={(e) => setImgQuality(parseFloat(e.target.value))} className="w-full" />
                                     </div>
                                     <button onClick={convertImage} disabled={loading} className="w-full py-3 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700">
                                         {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCcw className="w-4 h-4" />} Convert
                                     </button>
                                 </div>
                             </div>
                         )}
                         {imgOutput && (
                             <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 flex items-center justify-between">
                                 <div className="flex items-center gap-3">
                                     <Check className="w-6 h-6 text-green-500" />
                                     <div>
                                         <p className="font-bold text-slate-900 dark:text-white">Conversion Ready</p>
                                         <p className="text-sm text-slate-500">Format: {imgFormat.split('/')[1].toUpperCase()}</p>
                                     </div>
                                 </div>
                                 <a href={imgOutput} download={`converted-image.${imgFormat.split('/')[1]}`} className="px-4 py-2 bg-green-500 text-white rounded-lg font-bold flex items-center gap-2 hover:bg-green-600">
                                     <Download className="w-4 h-4" /> Download
                                 </a>
                             </div>
                         )}
                    </div>
                )}

                {/* --- Text Tab --- */}
                {activeTab === 'text' && (
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                             <div className="flex-1 space-y-4">
                                 <textarea 
                                    className="w-full h-64 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white resize-none font-mono text-sm"
                                    placeholder="Type your text here or upload a file..."
                                    value={textContent}
                                    onChange={(e) => setTextContent(e.target.value)}
                                 />
                                 <div className="flex gap-3">
                                     <button onClick={() => textInputRef.current?.click()} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-medium flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700">
                                         <Upload className="w-4 h-4" /> Upload .txt
                                     </button>
                                     <input type="file" ref={textInputRef} onChange={handleTextUpload} accept=".txt" className="hidden" />
                                     <button onClick={() => setTextContent('')} className="px-4 py-2 text-red-500 hover:text-red-600 font-medium">Clear</button>
                                 </div>
                             </div>
                             <div className="w-full md:w-64 space-y-4">
                                 <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-sm text-blue-800 dark:text-blue-300">
                                     <p className="font-bold mb-1">Convert to PDF</p>
                                     <p>Takes plain text and paginates it into a clean PDF document.</p>
                                 </div>
                                 <button onClick={convertTextToPdf} disabled={loading || !textContent} className="w-full py-3 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 disabled:opacity-50">
                                     {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />} Generate PDF
                                 </button>
                                 {pdfOutput && (
                                     <a href={pdfOutput} download="converted.pdf" className="w-full py-3 bg-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600">
                                         <Download className="w-4 h-4" /> Download PDF
                                     </a>
                                 )}
                             </div>
                        </div>
                    </div>
                )}

                {/* --- Audio Tab --- */}
                {activeTab === 'audio' && (
                    <div className="space-y-6">
                        {!audioFile ? (
                            <div onClick={() => audioInputRef.current?.click()} className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                                <Music className="w-12 h-12 text-slate-400 mb-4" />
                                <p className="font-bold text-slate-700 dark:text-slate-300">Upload Audio File</p>
                                <p className="text-sm text-slate-500">WAV, OGG, WEBM</p>
                                <input type="file" ref={audioInputRef} onChange={handleAudioUpload} accept="audio/*" className="hidden" />
                            </div>
                        ) : (
                             <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                                 <div className="flex items-center gap-3">
                                     <Volume2 className="w-6 h-6 text-primary-500" />
                                     <div>
                                         <p className="font-bold text-slate-900 dark:text-white">{audioFile.name}</p>
                                         <p className="text-sm text-slate-500">{(audioFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                     </div>
                                 </div>
                                 <button onClick={() => { setAudioFile(null); setMp3Output(null); }} className="text-red-500 hover:text-red-600 font-bold text-sm">Remove</button>
                             </div>
                        )}

                        {audioFile && (
                            <div className="flex flex-col items-center gap-4">
                                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-100 dark:border-yellow-800 text-sm text-yellow-800 dark:text-yellow-400 w-full flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold">Browser-based Conversion</p>
                                        <p>This runs locally in your browser. Large files may freeze the page temporarily. Please be patient.</p>
                                    </div>
                                </div>
                                
                                {!mp3Output ? (
                                    <button onClick={convertAudioToMp3} disabled={loading} className="w-full md:w-auto px-8 py-3 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 disabled:opacity-70">
                                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCcw className="w-4 h-4" />}
                                        {loading ? 'Encoding MP3...' : 'Convert to MP3'}
                                    </button>
                                ) : (
                                    <div className="w-full p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 text-center animate-fade-in">
                                         <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                                             <Check className="w-6 h-6 text-green-600" />
                                         </div>
                                         <h4 className="font-bold text-slate-900 dark:text-white mb-4">MP3 Ready!</h4>
                                         <a href={mp3Output} download="converted.mp3" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg transition-all">
                                             <Download className="w-5 h-5" /> Download MP3
                                         </a>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
                
                {error && (
                    <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-2 text-sm border border-red-100 dark:border-red-800">
                        <AlertCircle className="w-5 h-5" /> {error}
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default FileConverterTool;