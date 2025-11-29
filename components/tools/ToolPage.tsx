import React, { useEffect } from 'react';
import { Tool, CategoryId } from '../../types/index';
import ToolWrapper from './ToolWrapper';

// Import Specific Tool Components
import AiTextTool from './specific/AiTextTool';
import AiImageTool from './specific/AiImageTool';
import AiImageEditorTool from './specific/AiImageEditorTool';
import AiHairstyleTool from './specific/AiHairstyleTool';
import PdfToWordTool from './specific/PdfToWordTool';
import ImageToPdfTool from './specific/ImageToPdfTool';
import PdfToImageTool from './specific/PdfToImageTool';
import PdfMergeTool from './specific/PdfMergeTool';
import PdfCompressTool from './specific/PdfCompressTool';
import PdfEditorTool from './specific/PdfEditorTool';
import RegexTesterTool from './specific/RegexTesterTool'; 
import SerpPreviewTool from './specific/SerpPreviewTool';
import SeoContentAnalyzerTool from './specific/SeoContentAnalyzerTool';
import BacklinkCheckerTool from './specific/BacklinkCheckerTool';
import RobotsTxtGeneratorTool from './specific/RobotsTxtGeneratorTool';
import SitemapGeneratorTool from './specific/SitemapGeneratorTool';
import PlagiarismCheckerTool from './specific/PlagiarismCheckerTool';
import LogoGeneratorTool from './specific/LogoGeneratorTool';
import FileConverterTool from './specific/FileConverterTool';
import UnitConverterTool from './specific/UnitConverterTool';
import { PasswordGeneratorTool, QrGeneratorTool, WordCounterTool, LoremIpsumTool } from './specific/UtilityTools';
import { AgeCalculatorTool, RandomNumberTool, PercentageCalculatorTool, BmiCalculatorTool } from './specific/CalculatorTools';
import { AlertCircle, ArrowLeft } from 'lucide-react';

interface ToolPageProps {
  tool: Tool;
  onBack: () => void;
  onSelectCategory: (id: CategoryId) => void;
}

const ToolPage: React.FC<ToolPageProps> = ({ tool, onBack, onSelectCategory }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tool]);

  // Render specific component based on ID or ActionType
  const renderToolContent = () => {
    
    // 1. Specific IDs (Utilities & Custom)
    if (tool.id === 'logo-generator') return <LogoGeneratorTool />;
    if (tool.id === 'password-gen') return <PasswordGeneratorTool />;
    if (tool.id === 'qr-generator') return <QrGeneratorTool />;
    if (tool.id === 'word-counter') return <WordCounterTool />;
    if (tool.id === 'lorem-ipsum') return <LoremIpsumTool />;
    if (tool.id === 'serp-preview') return <SerpPreviewTool />;
    if (tool.id === 'seo-content-analyzer') return <SeoContentAnalyzerTool />;
    if (tool.id === 'backlink-checker') return <BacklinkCheckerTool />;
    if (tool.id === 'robots-txt-gen') return <RobotsTxtGeneratorTool />;
    if (tool.id === 'sitemap-generator') return <SitemapGeneratorTool />;
    if (tool.id === 'plagiarism-checker') return <PlagiarismCheckerTool />;
    if (tool.id === 'file-converter') return <FileConverterTool />;
    if (tool.id === 'unit-converter') return <UnitConverterTool />;
    
    // Calculators
    if (tool.id === 'age-calculator') return <AgeCalculatorTool />;
    if (tool.id === 'random-number-gen') return <RandomNumberTool />;
    if (tool.id === 'percentage-calculator') return <PercentageCalculatorTool />;
    if (tool.id === 'bmi-calculator') return <BmiCalculatorTool />;

    // 2. Action Types (AI & Complex Tools)
    switch (tool.actionType) {
      case 'ai-text':
        return <AiTextTool tool={tool} />;
      case 'ai-image':
        return <AiImageTool tool={tool} />;
      case 'ai-image-edit':
        return <AiImageEditorTool />;
      case 'ai-hairstyle':
        return <AiHairstyleTool />;
      case 'pdf-to-word':
        return <PdfToWordTool />;
      case 'image-to-pdf':
        return <ImageToPdfTool />;
      case 'pdf-to-image':
        return <PdfToImageTool />;
      case 'pdf-merge':
        return <PdfMergeTool />;
      case 'pdf-compress':
        return <PdfCompressTool />;
      case 'pdf-editor':
        return <PdfEditorTool />;
      case 'regex-tester':
        return <RegexTesterTool />;
      case 'coming-soon':
        return (
           <div className="min-h-[40vh] flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
               <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
               <h2 className="text-2xl font-bold dark:text-white mb-2">Coming Soon</h2>
               <p className="text-slate-500">We are currently building this tool.</p>
           </div>
        );
      default:
        return (
            <div className="text-center p-12 bg-red-50 text-red-600 rounded-xl">
                Error: Tool implementation not found.
            </div>
        );
    }
  };

  return (
    <ToolWrapper tool={tool} onBack={onBack} onSelectCategory={onSelectCategory}>
      {renderToolContent()}
    </ToolWrapper>
  );
};

export default ToolPage;