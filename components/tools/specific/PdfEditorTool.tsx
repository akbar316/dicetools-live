
import React, { useState, useRef, useEffect } from 'react';
import { 
  Upload, Type, Eraser, Download, Loader2, ArrowLeft, ArrowRight, 
  MousePointer2, Pencil, Highlighter, Square, Circle, Minus, Image as ImageIcon,
  PenTool, Trash2, MoveUp, MoveDown, RotateCw, Plus, ZoomIn, ZoomOut,
  Maximize, X, Check, GripVertical, Settings, Bold, Italic, Palette,
  FilePenLine, Pipette
} from 'lucide-react';
import { PDFDocument, rgb, StandardFonts, PDFFont } from 'pdf-lib';

// Declare pdfjs types from window
declare global {
    interface Window {
        pdfjsLib: any;
    }
}

// --- Types ---

type ToolType = 'select' | 'text' | 'smart-edit' | 'eyedropper' | 'draw' | 'highlight' | 'eraser' | 'rect' | 'circle' | 'line' | 'image' | 'signature';

interface PageData {
  id: string; // Unique ID for tracking
  originalIndex: number; // 0-based index in the original PDF
  rotation: number; // 0, 90, 180, 270
  thumbnail?: string; // Data URL
}

interface EditorElement {
  id: string;
  type: ToolType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  text?: string;
  color: string; // Text or Stroke color
  backgroundColor?: string; // For text boxes (whiteout effect)
  size?: number; // font size or stroke width
  opacity?: number;
  points?: {x: number, y: number}[]; // for drawing
  fontFamily?: string;
  fontWeight?: 'normal' | 'bold';
  fontStyle?: 'normal' | 'italic';
  imageData?: string; // Data URL for images/signatures
}

interface TextItem {
  str: string;
  dir: string;
  width: number;
  height: number;
  transform: number[];
  fontName: string;
}

// --- Constants ---

const FONTS = [
    { label: 'Sans Serif (Helvetica)', value: 'Helvetica' },
    { label: 'Serif (Times)', value: 'Times-Roman' },
    { label: 'Monospace (Courier)', value: 'Courier' },
];

// --- Helper Components ---

const SignatureModal = ({ isOpen, onClose, onSave }: { isOpen: boolean, onClose: () => void, onSave: (dataUrl: string) => void }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        if(isOpen && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if(ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#000000';
                ctx.lineCap = 'round';
            }
        }
    }, [isOpen]);

    const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        if(!ctx) return;
        
        const rect = canvas.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        
        ctx.beginPath();
        ctx.moveTo(clientX - rect.left, clientY - rect.top);
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if(!isDrawing) return;
        const canvas = canvasRef.current;
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        if(!ctx) return;

        const rect = canvas.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

        ctx.lineTo(clientX - rect.left, clientY - rect.top);
        ctx.stroke();
    };

    const stopDraw = () => setIsDrawing(false);

    const handleSave = () => {
        if(canvasRef.current) {
            onSave(canvasRef.current.toDataURL());
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md border border-slate-200 dark:border-slate-800">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="font-bold text-slate-900 dark:text-white">Sign Document</h3>
                    <button onClick={onClose}><X className="w-5 h-5 text-slate-500" /></button>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-950 flex justify-center">
                    <canvas 
                        ref={canvasRef} 
                        width={350} 
                        height={200} 
                        className="bg-white rounded-xl border border-slate-300 shadow-sm touch-none cursor-crosshair"
                        onMouseDown={startDraw}
                        onMouseMove={draw}
                        onMouseUp={stopDraw}
                        onMouseLeave={stopDraw}
                        onTouchStart={startDraw}
                        onTouchMove={draw}
                        onTouchEnd={stopDraw}
                    />
                </div>
                <div className="p-4 flex gap-3 justify-end border-t border-slate-200 dark:border-slate-800">
                    <button onClick={() => {
                         const canvas = canvasRef.current;
                         const ctx = canvas?.getContext('2d');
                         ctx?.clearRect(0,0, canvas!.width, canvas!.height);
                    }} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Clear</button>
                    <button onClick={handleSave} className="px-6 py-2 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700">Use Signature</button>
                </div>
            </div>
        </div>
    );
};

// --- Main Component ---

const PdfEditorTool: React.FC = () => {
    // File State
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [pages, setPages] = useState<PageData[]>([]);
    const [elements, setElements] = useState<Record<string, EditorElement[]>>({}); // pageId -> elements
    
    // View State
    const [activePageId, setActivePageId] = useState<string | null>(null);
    const [scale, setScale] = useState(1.0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [textItems, setTextItems] = useState<{item: TextItem, viewportRect: number[]}[]>([]);
    
    // Tool State
    const [activeTool, setActiveTool] = useState<ToolType>('select');
    
    // Formatting State
    const [currentColor, setCurrentColor] = useState('#000000');
    const [currentBgColor, setCurrentBgColor] = useState<string>('transparent'); // For text background (patching)
    const [currentSize, setCurrentSize] = useState(16); 
    const [currentFont, setCurrentFont] = useState('Helvetica');
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    
    const [selectedElementId, setSelectedElementId] = useState<string | null>(null);

    // Interaction State
    const [isDrawing, setIsDrawing] = useState(false);
    const [showSignatureModal, setShowSignatureModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [processing, setProcessing] = useState(false);

    // Drag / Resize State
    const [dragStart, setDragStart] = useState<{
        x: number;
        y: number;
        elId: string | null;
        initialEl: EditorElement | null;
        handle: string | null; // null for move, 'nw', 'ne', 'sw', 'se' for resize
    } | null>(null);

    // Refs
    const fileInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null); // PDF Render
    const overlayRef = useRef<HTMLDivElement>(null); // Interactive Layer
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Initialization ---

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === 'application/pdf') {
            setLoading(true);
            setPdfFile(file);
            setElements({});
            
            try {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await window.pdfjsLib.getDocument(arrayBuffer).promise;
                
                const newPages: PageData[] = [];
                // Generate thumbnails (simplified)
                for(let i=1; i<=pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale: 0.2 });
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    await page.render({ canvasContext: context!, viewport }).promise;
                    
                    newPages.push({
                        id: Math.random().toString(36).substr(2, 9),
                        originalIndex: i - 1,
                        rotation: 0,
                        thumbnail: canvas.toDataURL()
                    });
                }
                
                setPages(newPages);
                setActivePageId(newPages[0].id);

            } catch (err) {
                console.error(err);
                alert("Error loading PDF");
            } finally {
                setLoading(false);
            }
        }
    };

    // --- Rendering Active Page ---

    useEffect(() => {
        if (!pdfFile || !activePageId || !canvasRef.current) return;
        
        const activePage = pages.find(p => p.id === activePageId);
        if(!activePage) return;

        const render = async () => {
            const arrayBuffer = await pdfFile.arrayBuffer();
            const pdf = await window.pdfjsLib.getDocument(arrayBuffer).promise;
            const page = await pdf.getPage(activePage.originalIndex + 1);
            
            // Apply rotation
            const rotation = (page.rotate + activePage.rotation) % 360;
            const viewport = page.getViewport({ scale: scale, rotation: rotation });

            const canvas = canvasRef.current!;
            const context = canvas.getContext('2d');
            
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({ canvasContext: context!, viewport }).promise;

            // Load Text Content for Smart Edit
            const textContent = await page.getTextContent();
            const items = textContent.items.map((item: TextItem) => {
                const tx = window.pdfjsLib.Util.transform(viewport.transform, item.transform);
                // Calculate rough bounding box. item.height is font height. width is item.width
                // Transform[4] is x, Transform[5] is y (bottom-left)
                
                // This logic is simplified for basic hit detection
                const fontHeight = Math.hypot(tx[2], tx[3]); // Scale Y roughly
                const width = item.width * (scale); // Roughly scaled width
                
                return {
                    item: item,
                    // x, y(top), w, h
                    viewportRect: [tx[4], tx[5] - fontHeight, width, fontHeight] 
                };
            });
            setTextItems(items);
        };

        render();
    }, [pdfFile, activePageId, scale, pages]);

    // --- Tools & Interaction ---

    const getRelativeCoords = (e: React.MouseEvent | React.TouchEvent) => {
        if (!overlayRef.current) return { x: 0, y: 0 };
        const rect = overlayRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        if (!activePageId) return;
        const { x, y } = getRelativeCoords(e);

        // --- Eyedropper Logic ---
        if (activeTool === 'eyedropper') {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    // Get pixel data
                    const p = ctx.getImageData(x, y, 1, 1).data;
                    const hex = "#" + ("000000" + ((p[0] << 16) | (p[1] << 8) | p[2]).toString(16)).slice(-6);
                    setCurrentColor(hex);
                    setActiveTool('select'); 
                }
            }
            return;
        }

        if (activeTool === 'select') {
             // Clicking on empty space deselects
             setSelectedElementId(null);
             return;
        }

        // Add Text
        if (activeTool === 'text') {
            const newId = Date.now().toString();
            // Default text size logic
            const baseSize = currentSize; 
            
            const newEl: EditorElement = {
                id: newId, 
                type: 'text', 
                x, y, 
                text: 'Type here', 
                color: currentColor, 
                backgroundColor: currentBgColor === 'transparent' ? undefined : currentBgColor,
                size: baseSize, 
                fontFamily: currentFont,
                fontWeight: isBold ? 'bold' : 'normal',
                fontStyle: isItalic ? 'italic' : 'normal',
            };
            addElement(newEl);
            setSelectedElementId(newId);
            setActiveTool('select');
        }
        // Shapes & Eraser
        else if (['rect', 'circle', 'eraser', 'image', 'signature'].includes(activeTool)) {
             let width = 100 * scale;
             let height = 100 * scale;
             let color = currentColor;
             
             if (activeTool === 'eraser') { color = '#FFFFFF'; height=50 * scale; }
             if (activeTool === 'circle') { width = 50 * scale; height = 50 * scale; }
             
             const newId = Date.now().toString();
             const newEl: EditorElement = {
                 id: newId, type: activeTool as ToolType, x, y, 
                 width, height, color
             };
             addElement(newEl);
             setSelectedElementId(newId);
             setActiveTool('select');
        }
        // Drawing / Highlight
        else if (activeTool === 'draw' || activeTool === 'highlight') {
            setIsDrawing(true);
            const newId = Date.now().toString();
            const color = activeTool === 'highlight' ? '#FFFF00' : currentColor;
            const opacity = activeTool === 'highlight' ? 0.4 : 1;
            const size = activeTool === 'highlight' ? 20 : (currentSize / 4); // Scale brush size
            
            const newEl: EditorElement = {
                id: newId, type: activeTool as ToolType, x, y, 
                points: [{x, y}], color, opacity, size
            };
            addElement(newEl);
        }
    };

    const onElementMouseDown = (e: React.MouseEvent | React.TouchEvent, elId: string, handle: string | null) => {
        e.stopPropagation();
        if (activeTool !== 'select') return;
        
        const { x, y } = getRelativeCoords(e);
        const el = elements[activePageId!]?.find(e => e.id === elId) || null;
        
        setSelectedElementId(elId);
        setDragStart({
            x, y, elId, 
            initialEl: el ? {...el} : null,
            handle
        });
    };

    // --- Smart Edit Click Handler ---
    const handleSmartEditClick = (textStr: string, rect: number[]) => {
        if (activeTool !== 'smart-edit' || !activePageId) return;

        // 1. Create a "Whiteout" patch
        const patchId = Date.now().toString();
        const patch: EditorElement = {
            id: patchId,
            type: 'rect',
            x: rect[0] - 2, 
            y: rect[1] - 2,
            width: rect[2] + 4,
            height: rect[3] + 4,
            color: '#FFFFFF' // Assume white background
        };
        addElement(patch);

        // 2. Create Text Element on top
        const detectedSize = Math.round(rect[3] * 0.8); // Est font size

        const textId = (Date.now() + 1).toString();
        const newText: EditorElement = {
            id: textId,
            type: 'text',
            // Center text in rect roughly
            x: rect[0],
            y: rect[1] + (rect[3] / 2), 
            text: textStr,
            color: currentColor, 
            size: detectedSize,
            fontFamily: currentFont,
            fontWeight: isBold ? 'bold' : 'normal'
        };
        
        // Use timeout to ensure state updates sequentially
        setTimeout(() => {
            addElement(newText);
            setSelectedElementId(textId);
        }, 10);
    };

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        const { x, y } = getRelativeCoords(e);

        // 1. Handle Dragging / Resizing
        if (dragStart && dragStart.elId && activePageId && activeTool === 'select') {
            e.preventDefault();
            const deltaX = x - dragStart.x;
            const deltaY = y - dragStart.y;
            const el = dragStart.initialEl;
            
            if (!el) return;

            let updates: Partial<EditorElement> = {};

            if (!dragStart.handle) {
                // Move
                updates = {
                    x: el.x + deltaX,
                    y: el.y + deltaY
                };
            } else {
                // Resize
                const h = dragStart.handle;
                const startW = el.width || 0;
                const startH = el.height || 0;
                const startX = el.x;
                const startY = el.y;

                let newX = startX;
                let newY = startY;
                let newW = startW;
                let newH = startH;

                // Horizontal Resize
                if (h.includes('e')) newW = Math.max(20, startW + deltaX);
                if (h.includes('w')) {
                    const maxDelta = startW - 20;
                    const validDelta = Math.min(deltaX, maxDelta);
                    newW = startW - validDelta;
                    newX = startX + validDelta;
                }
                
                // Vertical Resize
                if (h.includes('s')) newH = Math.max(20, startH + deltaY);
                if (h.includes('n')) {
                     const maxDelta = startH - 20;
                     const validDelta = Math.min(deltaY, maxDelta);
                     newH = startH - validDelta;
                     newY = startY + validDelta;
                }
                
                updates = { x: newX, y: newY, width: newW, height: newH };
            }
            
            updateElement(dragStart.elId, updates);
            return;
        }

        // 2. Drawing
        if (!isDrawing || !activePageId) return;
        
        setElements(prev => {
            const pageEls = prev[activePageId] || [];
            if(pageEls.length === 0) return prev;
            
            const lastEl = pageEls[pageEls.length - 1];
            if (!lastEl.points) return prev;

            const updatedEl = { ...lastEl, points: [...lastEl.points, {x, y}] };
            const newPageEls = [...pageEls.slice(0, -1), updatedEl];
            
            return { ...prev, [activePageId]: newPageEls };
        });
    };

    const handleMouseUp = () => {
        setDragStart(null);
        setIsDrawing(false);
    };

    const addElement = (el: EditorElement) => {
        if (!activePageId) return;
        setElements(prev => ({
            ...prev,
            [activePageId]: [...(prev[activePageId] || []), el]
        }));
    };

    const updateElement = (id: string, updates: Partial<EditorElement>) => {
        if (!activePageId) return;
        setElements(prev => ({
            ...prev,
            [activePageId]: (prev[activePageId] || []).map(el => el.id === id ? { ...el, ...updates } : el)
        }));
    };

    const deleteElement = (id: string) => {
        if (!activePageId) return;
        setElements(prev => ({
            ...prev,
            [activePageId]: (prev[activePageId] || []).filter(el => el.id !== id)
        }));
        setSelectedElementId(null);
    };

    // --- Image Insertion ---
    
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && activePageId) {
            const reader = new FileReader();
            reader.onload = () => {
                const newId = Date.now().toString();
                addElement({
                    id: newId, type: 'image', x: 50, y: 50, 
                    width: 200, height: 200, color: 'transparent',
                    imageData: reader.result as string
                });
                setActiveTool('select');
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddSignature = (dataUrl: string) => {
        if(activePageId) {
             const newId = Date.now().toString();
             addElement({
                 id: newId, type: 'signature', x: 100, y: 100, 
                 width: 150, height: 80, color: 'transparent',
                 imageData: dataUrl
             });
             setActiveTool('select');
        }
    };

    // --- Page Management ---

    const rotatePage = (id: string) => {
        setPages(prev => prev.map(p => p.id === id ? { ...p, rotation: (p.rotation + 90) % 360 } : p));
    };

    const deletePage = (id: string) => {
        if(pages.length <= 1) return;
        const idx = pages.findIndex(p => p.id === id);
        const newPages = pages.filter(p => p.id !== id);
        setPages(newPages);
        if(activePageId === id) {
            setActivePageId(newPages[Math.max(0, idx - 1)].id);
        }
        const newElements = { ...elements };
        delete newElements[id];
        setElements(newElements);
    };

    const movePage = (index: number, direction: 'up' | 'down') => {
        const newPages = [...pages];
        if (direction === 'up' && index > 0) {
            [newPages[index], newPages[index - 1]] = [newPages[index - 1], newPages[index]];
        } else if (direction === 'down' && index < newPages.length - 1) {
            [newPages[index], newPages[index + 1]] = [newPages[index + 1], newPages[index]];
        }
        setPages(newPages);
    };

    // --- Saving / Exporting ---

    const handleSavePdf = async () => {
        if (!pdfFile) return;
        setProcessing(true);
        try {
            const arrayBuffer = await pdfFile.arrayBuffer();
            const srcDoc = await PDFDocument.load(arrayBuffer);
            const newDoc = await PDFDocument.create();

            const fonts: Record<string, PDFFont> = {};
            
            const getPdfFont = async (family: string = 'Helvetica', bold: boolean, italic: boolean) => {
                const key = `${family}-${bold ? 'B' : ''}${italic ? 'I' : ''}`;
                if (fonts[key]) return fonts[key];

                let standardFont = StandardFonts.Helvetica;
                
                if (family === 'Times-Roman') {
                    if (bold && italic) standardFont = StandardFonts.TimesRomanBoldItalic;
                    else if (bold) standardFont = StandardFonts.TimesRomanBold;
                    else if (italic) standardFont = StandardFonts.TimesRomanItalic;
                    else standardFont = StandardFonts.TimesRoman;
                } else if (family === 'Courier') {
                     if (bold && italic) standardFont = StandardFonts.CourierBoldOblique;
                    else if (bold) standardFont = StandardFonts.CourierBold;
                    else if (italic) standardFont = StandardFonts.CourierOblique;
                    else standardFont = StandardFonts.Courier;
                } else {
                    if (bold && italic) standardFont = StandardFonts.HelveticaBoldOblique;
                    else if (bold) standardFont = StandardFonts.HelveticaBold;
                    else if (italic) standardFont = StandardFonts.HelveticaOblique;
                    else standardFont = StandardFonts.Helvetica;
                }

                const font = await newDoc.embedFont(standardFont);
                fonts[key] = font;
                return font;
            };

            for (const pData of pages) {
                const [srcPage] = await newDoc.copyPages(srcDoc, [pData.originalIndex]);
                const newPage = newDoc.addPage(srcPage);
                
                const existingRotation = newPage.getRotation().angle;
                newPage.setRotation((existingRotation + pData.rotation) % 360);

                const { width, height } = newPage.getSize();
                const ratio = 1 / scale; 

                for (const el of (elements[pData.id] || [])) {
                    const x = el.x * ratio;
                    const y = height - (el.y * ratio); // Invert Y
                    
                    const r = parseInt(el.color.slice(1, 3), 16) / 255;
                    const g = parseInt(el.color.slice(3, 5), 16) / 255;
                    const b = parseInt(el.color.slice(5, 7), 16) / 255;
                    const color = rgb(r, g, b);

                    if (el.type === 'text' && el.text) {
                        const fontSize = (el.size || 16) * ratio;
                        const font = await getPdfFont(el.fontFamily, el.fontWeight === 'bold', el.fontStyle === 'italic');
                        
                        if (el.backgroundColor && el.backgroundColor !== 'transparent') {
                            const width = font.widthOfTextAtSize(el.text, fontSize);
                            const h = font.heightAtSize(fontSize);
                            const bgR = parseInt(el.backgroundColor.slice(1, 3), 16) / 255;
                            const bgG = parseInt(el.backgroundColor.slice(3, 5), 16) / 255;
                            const bgB = parseInt(el.backgroundColor.slice(5, 7), 16) / 255;
                            
                            newPage.drawRectangle({
                                x: x - 2, 
                                y: y - fontSize + 2,
                                width: width + 4,
                                height: h + 2,
                                color: rgb(bgR, bgG, bgB),
                            });
                        }

                        newPage.drawText(el.text, {
                            x,
                            y: y - fontSize + (fontSize * 0.2), 
                            size: fontSize,
                            font: font,
                            color
                        });
                    } 
                    else if (['rect', 'eraser'].includes(el.type)) {
                        newPage.drawRectangle({
                            x,
                            y: y - ((el.height || 0) * ratio),
                            width: (el.width || 0) * ratio,
                            height: (el.height || 0) * ratio,
                            color,
                            opacity: el.opacity ?? 1
                        });
                    }
                    else if (el.type === 'highlight' && el.points) {
                         const path = el.points.map(p => ({ x: p.x * ratio, y: height - (p.y * ratio) }));
                         for(let i=0; i<path.length-1; i++) {
                             newPage.drawLine({
                                 start: path[i],
                                 end: path[i+1],
                                 thickness: (el.size || 20) * ratio,
                                 color,
                                 opacity: el.opacity
                             });
                         }
                    }
                    else if (el.type === 'draw' && el.points) {
                        const path = el.points.map(p => ({ x: p.x * ratio, y: height - (p.y * ratio) }));
                         for(let i=0; i<path.length-1; i++) {
                             newPage.drawLine({
                                 start: path[i],
                                 end: path[i+1],
                                 thickness: (el.size || 2) * ratio,
                                 color,
                                 opacity: 1
                             });
                         }
                    }
                    else if ((el.type === 'image' || el.type === 'signature') && el.imageData) {
                        const imgBytes = await fetch(el.imageData).then(res => res.arrayBuffer());
                        let img;
                        if(el.imageData.includes('image/png')) img = await newDoc.embedPng(imgBytes);
                        else img = await newDoc.embedJpg(imgBytes);
                        
                        newPage.drawImage(img, {
                            x,
                            y: y - ((el.height || 0) * ratio),
                            width: (el.width || 0) * ratio,
                            height: (el.height || 0) * ratio,
                        });
                    }
                }
            }

            const pdfBytes = await newDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `edited_${pdfFile.name}`;
            link.click();

        } catch (err) {
            console.error(err);
            alert("Failed to export PDF.");
        } finally {
            setProcessing(false);
        }
    };

    // --- Render ---

    if (!pdfFile) {
        return (
            <div className="max-w-4xl mx-auto py-12 px-4">
                 <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-12 text-center">
                    {loading ? (
                        <div className="flex flex-col items-center">
                            <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-4" />
                            <p className="text-xl font-bold dark:text-white">Loading PDF...</p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">PDF Editor Studio</h2>
                            <p className="text-slate-500 mb-8 max-w-lg mx-auto">Upload a PDF to start editing. Edit text, sign, draw, and manage pages securely in your browser.</p>
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="border-3 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl p-16 flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
                            >
                                <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Upload className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                                </div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">Click to Upload PDF</p>
                                <p className="text-slate-500 mt-2">Max 50MB</p>
                            </div>
                            <input type="file" ref={fileInputRef} className="hidden" accept="application/pdf" onChange={handleFileChange} />
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-100px)] bg-slate-100 dark:bg-slate-950">
            {/* Toolbar */}
            <div className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 shadow-sm z-20">
                <div className="flex items-center gap-2">
                    <button 
                         onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                         className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500"
                    >
                        <GripVertical className="w-5 h-5" />
                    </button>
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2" />
                    
                    {/* Tool Group */}
                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                         {[
                             { id: 'select', icon: MousePointer2, title: 'Select' },
                             { id: 'smart-edit', icon: FilePenLine, title: 'Smart Text Edit' },
                             { id: 'eyedropper', icon: Pipette, title: 'Pick Color from Page' },
                             { id: 'text', icon: Type, title: 'Add Text' },
                             { id: 'draw', icon: Pencil, title: 'Draw' },
                             { id: 'highlight', icon: Highlighter, title: 'Highlight' },
                             { id: 'eraser', icon: Eraser, title: 'Eraser' },
                         ].map(t => (
                             <button
                                key={t.id}
                                onClick={() => setActiveTool(t.id as ToolType)}
                                className={`p-2 rounded-md transition-all ${activeTool === t.id ? 'bg-white dark:bg-slate-700 shadow text-primary-600' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
                                title={t.title}
                             >
                                 <t.icon className="w-4 h-4" />
                             </button>
                         ))}
                    </div>

                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                        <button onClick={() => setActiveTool('rect')} className={`p-2 rounded-md ${activeTool === 'rect' ? 'bg-white dark:bg-slate-700 shadow text-primary-600' : 'text-slate-500'}`}><Square className="w-4 h-4"/></button>
                        <button onClick={() => setActiveTool('circle')} className={`p-2 rounded-md ${activeTool === 'circle' ? 'bg-white dark:bg-slate-700 shadow text-primary-600' : 'text-slate-500'}`}><Circle className="w-4 h-4"/></button>
                    </div>

                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                        <button onClick={() => imageInputRef.current?.click()} className="p-2 text-slate-500 hover:text-slate-900" title="Insert Image"><ImageIcon className="w-4 h-4"/></button>
                        <button onClick={() => setShowSignatureModal(true)} className="p-2 text-slate-500 hover:text-slate-900" title="Sign"><PenTool className="w-4 h-4"/></button>
                        <input type="file" ref={imageInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </div>

                    {/* Properties */}
                    <div className="flex items-center gap-2 ml-2">
                         {/* Color Picker */}
                         <div className="relative group">
                            <button className="p-2 rounded bg-slate-100 dark:bg-slate-800 flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                                <div className="w-4 h-4 rounded-full border border-slate-300" style={{backgroundColor: currentColor}} />
                            </button>
                            <input 
                                type="color" 
                                value={currentColor} 
                                onChange={(e) => { setCurrentColor(e.target.value); if(['select','eyedropper'].includes(activeTool)) setActiveTool('text'); }} 
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" 
                            />
                         </div>

                         {(activeTool === 'text' || activeTool === 'smart-edit') && (
                             <>
                                <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1" />
                                
                                <select 
                                    value={currentFont} 
                                    onChange={(e) => setCurrentFont(e.target.value)} 
                                    className="text-xs p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white outline-none w-24"
                                >
                                     {FONTS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                                </select>
                                
                                <select 
                                    value={currentSize} 
                                    onChange={(e) => setCurrentSize(Number(e.target.value))} 
                                    className="text-xs p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white outline-none w-14"
                                >
                                     {[10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 64, 72].map(s => <option key={s} value={s}>{s}px</option>)}
                                </select>

                                <button 
                                    onClick={() => setIsBold(!isBold)} 
                                    className={`p-1.5 rounded ${isBold ? 'bg-slate-200 dark:bg-slate-700' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                                >
                                    <Bold className="w-3.5 h-3.5" />
                                </button>
                                <button 
                                    onClick={() => setIsItalic(!isItalic)} 
                                    className={`p-1.5 rounded ${isItalic ? 'bg-slate-200 dark:bg-slate-700' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                                >
                                    <Italic className="w-3.5 h-3.5" />
                                </button>

                                <div className="relative group ml-1" title="Background Color (Whiteout)">
                                    <div className={`p-1.5 rounded cursor-pointer border ${currentBgColor === 'transparent' ? 'border-dashed border-slate-300' : 'border-slate-300'}`} style={{backgroundColor: currentBgColor === 'transparent' ? 'transparent' : currentBgColor}}>
                                        <Palette className="w-3.5 h-3.5 text-slate-500" />
                                    </div>
                                    <select 
                                        value={currentBgColor} 
                                        onChange={(e) => setCurrentBgColor(e.target.value)}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    >
                                        <option value="transparent">None (Transparent)</option>
                                        <option value="#FFFFFF">White (Cover)</option>
                                        <option value="#000000">Black</option>
                                        <option value="#F1F5F9">Slate 100</option>
                                    </select>
                                </div>
                             </>
                         )}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                     <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                         <button onClick={() => setScale(s => Math.max(0.5, s - 0.25))} className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded"><ZoomOut className="w-4 h-4 text-slate-500"/></button>
                         <span className="text-xs font-medium w-12 text-center dark:text-slate-300">{Math.round(scale * 100)}%</span>
                         <button onClick={() => setScale(s => Math.min(3, s + 0.25))} className="p-1 hover:bg-white dark:hover:bg-slate-700 rounded"><ZoomIn className="w-4 h-4 text-slate-500"/></button>
                     </div>
                     <button 
                        onClick={handleSavePdf}
                        disabled={processing}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary-700 shadow-lg shadow-primary-500/20 disabled:opacity-70"
                     >
                         {processing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                         Export PDF
                     </button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                {isSidebarOpen && (
                    <div className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-slate-700 dark:text-slate-300 text-sm">Pages ({pages.length})</h3>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {pages.map((page, idx) => (
                                <div 
                                    key={page.id} 
                                    className={`relative group p-2 rounded-xl border-2 transition-all ${activePageId === page.id ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/10' : 'border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
                                    onClick={() => setActivePageId(page.id)}
                                >
                                    <div className="aspect-[3/4] bg-white shadow-sm rounded-lg overflow-hidden relative">
                                        {page.thumbnail ? (
                                            <img 
                                                src={page.thumbnail} 
                                                className="w-full h-full object-contain" 
                                                style={{ transform: `rotate(${page.rotation}deg)` }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-300"><Loader2 className="animate-spin"/></div>
                                        )}
                                        <div className="absolute top-1 left-1 bg-black/50 text-white text-[10px] px-1.5 rounded">
                                            {idx + 1}
                                        </div>
                                    </div>
                                    
                                    {/* Page Actions Overlay */}
                                    <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={(e) => {e.stopPropagation(); rotatePage(page.id);}} className="p-1.5 bg-slate-800 text-white rounded-full hover:bg-primary-600" title="Rotate"><RotateCw className="w-3 h-3"/></button>
                                        <button onClick={(e) => {e.stopPropagation(); deletePage(page.id);}} className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600" title="Delete"><Trash2 className="w-3 h-3"/></button>
                                        <button onClick={(e) => {e.stopPropagation(); movePage(idx, 'up');}} disabled={idx===0} className="p-1.5 bg-slate-800 text-white rounded-full hover:bg-primary-600 disabled:opacity-50"><MoveUp className="w-3 h-3"/></button>
                                        <button onClick={(e) => {e.stopPropagation(); movePage(idx, 'down');}} disabled={idx===pages.length-1} className="p-1.5 bg-slate-800 text-white rounded-full hover:bg-primary-600 disabled:opacity-50"><MoveDown className="w-3 h-3"/></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Workspace */}
                <div className="flex-1 overflow-auto bg-slate-100 dark:bg-slate-950 p-8 flex justify-center relative" ref={containerRef} style={{cursor: activeTool === 'eyedropper' ? 'crosshair' : 'default'}}>
                     {activePageId ? (
                         <div 
                            className="relative shadow-2xl transition-transform origin-top"
                            style={{ 
                                width: canvasRef.current?.width || 'auto',
                                height: canvasRef.current?.height || 'auto'
                            }}
                         >
                             {/* Base PDF Layer */}
                             <canvas ref={canvasRef} className="block bg-white" />
                             
                             {/* Interactive Text Layer for Smart Edit */}
                             {activeTool === 'smart-edit' && (
                                 <div className="absolute inset-0 z-10 pointer-events-none">
                                     {textItems.map((item, i) => (
                                         <div 
                                            key={i} 
                                            className="absolute bg-blue-500/10 hover:bg-blue-500/30 border border-transparent hover:border-blue-500 cursor-text pointer-events-auto transition-colors"
                                            style={{
                                                left: item.viewportRect[0],
                                                top: item.viewportRect[1],
                                                width: item.viewportRect[2],
                                                height: item.viewportRect[3],
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSmartEditClick(item.item.str, item.viewportRect);
                                            }}
                                            title="Click to Edit Text"
                                         />
                                     ))}
                                 </div>
                             )}

                             {/* Editor Overlay Layer */}
                             <div 
                                ref={overlayRef}
                                className="absolute inset-0 touch-none z-20"
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onTouchStart={handleMouseDown}
                                onTouchMove={handleMouseMove}
                                onTouchEnd={handleMouseUp}
                             >
                                 {(elements[activePageId] || []).map(el => (
                                     <div
                                        key={el.id}
                                        style={{
                                            position: 'absolute',
                                            left: el.x,
                                            top: el.y,
                                            pointerEvents: activeTool === 'select' ? 'auto' : 'none',
                                            cursor: activeTool === 'select' ? 'move' : 'none',
                                            border: selectedElementId === el.id && activeTool === 'select' ? '2px dashed #3b82f6' : 'none',
                                            transform: el.type === 'text' ? 'translate(0, -50%)' : 'none'
                                        }}
                                        onMouseDown={(e) => onElementMouseDown(e, el.id, null)}
                                        onTouchStart={(e) => onElementMouseDown(e, el.id, null)}
                                     >
                                        {el.type === 'text' ? (
                                            selectedElementId === el.id ? (
                                                <input 
                                                    autoFocus
                                                    value={el.text}
                                                    onChange={(e) => updateElement(el.id, { text: e.target.value })}
                                                    className="bg-transparent border-none outline-none p-0"
                                                    style={{ 
                                                        color: el.color, 
                                                        backgroundColor: el.backgroundColor || 'transparent',
                                                        fontSize: `${el.size}px`, 
                                                        fontFamily: el.fontFamily === 'Times-Roman' ? 'Times New Roman' : el.fontFamily === 'Courier' ? 'Courier New' : 'Arial',
                                                        fontWeight: el.fontWeight,
                                                        fontStyle: el.fontStyle,
                                                        minWidth: '20px'
                                                    }}
                                                />
                                            ) : (
                                                <span style={{ 
                                                    color: el.color, 
                                                    backgroundColor: el.backgroundColor || 'transparent',
                                                    fontSize: `${el.size}px`,
                                                    fontFamily: el.fontFamily === 'Times-Roman' ? 'Times New Roman' : el.fontFamily === 'Courier' ? 'Courier New' : 'Arial',
                                                    fontWeight: el.fontWeight,
                                                    fontStyle: el.fontStyle,
                                                    whiteSpace: 'nowrap',
                                                    userSelect: 'none',
                                                    padding: '2px' 
                                                }}>
                                                    {el.text}
                                                </span>
                                            )
                                        ) : ['rect', 'eraser'].includes(el.type) ? (
                                            <div style={{ width: el.width, height: el.height, backgroundColor: el.color, opacity: el.opacity ?? 1 }} />
                                        ) : ['circle'].includes(el.type) ? (
                                            <div style={{ width: el.width, height: el.height, backgroundColor: el.color, borderRadius: '50%' }} />
                                        ) : ['image', 'signature'].includes(el.type) ? (
                                            <img src={el.imageData} style={{ width: el.width, height: el.height }} draggable={false} />
                                        ) : el.type === 'draw' || el.type === 'highlight' ? (
                                            <svg style={{ position: 'absolute', left: -el.x, top: -el.y, overflow: 'visible', pointerEvents: 'none' }}>
                                                <polyline 
                                                    points={el.points?.map(p => `${p.x},${p.y}`).join(' ')} 
                                                    fill="none" 
                                                    stroke={el.color} 
                                                    strokeWidth={el.size} 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round"
                                                    opacity={el.opacity ?? 1}
                                                />
                                            </svg>
                                        ) : null}

                                        {/* Resize Handles (Images, Signatures, Shapes) */}
                                        {selectedElementId === el.id && activeTool === 'select' && ['image', 'signature', 'rect', 'circle'].includes(el.type) && (
                                            <>
                                                <div 
                                                    className="absolute -top-2 -left-2 w-4 h-4 bg-white border border-blue-500 rounded-full cursor-nw-resize z-50 shadow-sm"
                                                    onMouseDown={(e) => onElementMouseDown(e, el.id, 'nw')}
                                                    onTouchStart={(e) => onElementMouseDown(e, el.id, 'nw')}
                                                />
                                                <div 
                                                    className="absolute -top-2 -right-2 w-4 h-4 bg-white border border-blue-500 rounded-full cursor-ne-resize z-50 shadow-sm"
                                                    onMouseDown={(e) => onElementMouseDown(e, el.id, 'ne')}
                                                    onTouchStart={(e) => onElementMouseDown(e, el.id, 'ne')}
                                                />
                                                <div 
                                                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border border-blue-500 rounded-full cursor-sw-resize z-50 shadow-sm"
                                                    onMouseDown={(e) => onElementMouseDown(e, el.id, 'sw')}
                                                    onTouchStart={(e) => onElementMouseDown(e, el.id, 'sw')}
                                                />
                                                <div 
                                                    className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border border-blue-500 rounded-full cursor-se-resize z-50 shadow-sm"
                                                    onMouseDown={(e) => onElementMouseDown(e, el.id, 'se')}
                                                    onTouchStart={(e) => onElementMouseDown(e, el.id, 'se')}
                                                />
                                            </>
                                        )}

                                        {/* Delete Button */}
                                        {selectedElementId === el.id && activeTool === 'select' && (
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); deleteElement(el.id); }}
                                                className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 z-50"
                                                title="Delete Element"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        )}
                                     </div>
                                 ))}
                             </div>
                         </div>
                     ) : (
                         <div className="flex flex-col items-center justify-center text-slate-400">
                             <p>Select a page to edit</p>
                         </div>
                     )}
                </div>
            </div>

            <SignatureModal 
                isOpen={showSignatureModal} 
                onClose={() => setShowSignatureModal(false)}
                onSave={handleAddSignature}
            />
        </div>
    );
};

export default PdfEditorTool;
