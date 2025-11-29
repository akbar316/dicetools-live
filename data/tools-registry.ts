import {
  Image as ImageIcon, Layers, Scissors, List, ShieldCheck, Languages,
  FileText, Hash, Code2, FileJson, Link, PenTool, Zap, Calculator,
  Search, Pencil, Lock, QrCode, FileImage, Files, Minimize2, Edit, Images, Regex, Eye, BarChart, Link2, Bot, FileCode, ClipboardCheck, Hexagon, Calendar, Shuffle, Percent, Activity, ArrowRightLeft, Scale
} from 'lucide-react';
import { Tool } from '../types/index';

export const TOOLS: Tool[] = [
  // AI Tools
  {
    id: 'ai-image-gen',
    name: 'AI Image Generator',
    description: 'Create stunning visuals from text descriptions.',
    categoryId: 'ai',
    icon: ImageIcon,
    isPopular: true,
    actionType: 'ai-image',
    placeholder: 'A futuristic city with flying cars at sunset, cyberpunk style...'
  },
  {
    id: 'logo-generator',
    name: 'AI Logo Generator',
    description: 'Design professional logos for your brand instantly.',
    categoryId: 'ai',
    icon: Hexagon,
    isNew: true,
    actionType: 'ai-image', // Will be intercepted by ID in ToolPage for custom UI
  },
  {
    id: 'ai-image-editor',
    name: 'AI Image Editor',
    description: 'Add, Remove, or Replace objects in images using AI.',
    categoryId: 'ai',
    icon: Layers,
    isNew: true,
    actionType: 'ai-image-edit',
    placeholder: 'Describe how to edit the image...'
  },
  {
    id: 'ai-hairstyle',
    name: 'AI Hairstyle Changer',
    description: 'Try new hairstyles and colors instantly.',
    categoryId: 'ai',
    icon: Scissors,
    isNew: true,
    actionType: 'ai-hairstyle',
  },
  {
    id: 'ai-summarizer',
    name: 'AI Summarizer',
    description: 'Condense long articles into short summaries.',
    categoryId: 'ai',
    icon: List,
    isPopular: true,
    actionType: 'ai-text',
    systemPrompt: 'Summarize the following text concisely. Capture the main points using bullet points where appropriate.',
    placeholder: 'Paste the long text you want to summarize here...'
  },
  {
    id: 'ai-grammar',
    name: 'Grammar Fixer',
    description: 'Correct grammar and spelling instantly.',
    categoryId: 'ai',
    icon: ShieldCheck,
    actionType: 'ai-text',
    systemPrompt: 'Correct the grammar and spelling of the following text. Do not change the tone, just fix errors.',
    placeholder: 'Paste text with errors here...'
  },
  {
    id: 'ai-translator',
    name: 'Universal Translator',
    description: 'Translate text to any major language.',
    categoryId: 'ai',
    icon: Languages,
    actionType: 'ai-text',
    systemPrompt: 'Detect the language and translate the following text into English, Spanish, French, and German.',
    placeholder: 'Enter text to translate...'
  },

  // PDF Tools
  {
    id: 'pdf-editor',
    name: 'PDF Editor',
    description: 'Edit PDF text, add images, and sign documents.',
    categoryId: 'pdf',
    icon: Edit,
    isNew: true,
    isPopular: true,
    actionType: 'pdf-editor',
  },
  {
    id: 'pdf-merger',
    name: 'Merge PDF',
    description: 'Combine multiple PDF files into a single document.',
    categoryId: 'pdf',
    icon: Files,
    isNew: true,
    actionType: 'pdf-merge',
  },
  {
    id: 'pdf-compress',
    name: 'Compress PDF',
    description: 'Reduce PDF file size by optimizing structure.',
    categoryId: 'pdf',
    icon: Minimize2,
    isPopular: true,
    actionType: 'pdf-compress',
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    description: 'Convert PDF documents to editable Word files.',
    categoryId: 'pdf',
    icon: FileText,
    isPopular: true,
    isNew: true,
    actionType: 'pdf-to-word',
  },
  {
    id: 'pdf-to-image',
    name: 'PDF to Image',
    description: 'Convert PDF pages into high-quality JPG or PNG images.',
    categoryId: 'pdf',
    icon: Images,
    isNew: true,
    actionType: 'pdf-to-image',
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF',
    description: 'Convert PNG, JPG images into a single PDF document.',
    categoryId: 'pdf',
    icon: FileImage,
    isPopular: true,
    actionType: 'image-to-pdf',
  },

  // Text Tools
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, and sentences.',
    categoryId: 'text',
    icon: Hash,
    actionType: 'utility-client',
    placeholder: 'Start typing to count...'
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Gen',
    description: 'Generate placeholder text for designs.',
    categoryId: 'text',
    icon: FileText,
    actionType: 'utility-client',
  },

  // Developer Tools
  {
    id: 'code-formatter',
    name: 'Code Formatter',
    description: 'Beautify your code snippets.',
    categoryId: 'dev',
    icon: Code2,
    actionType: 'ai-text',
    systemPrompt: 'Format the following code to be clean, readable, and follow standard conventions. Detect the language automatically.',
    placeholder: 'Paste messy code here...'
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and debug regular expressions with highlighting.',
    categoryId: 'dev',
    icon: Regex,
    isNew: true,
    actionType: 'regex-tester',
    placeholder: 'Input text to test regex against...'
  },
  {
    id: 'json-validator',
    name: 'JSON Validator',
    description: 'Validate and format JSON data.',
    categoryId: 'dev',
    icon: FileJson,
    actionType: 'ai-text',
    systemPrompt: 'Validate and format the following JSON. If there is an error, explain it.',
    placeholder: '{"key": "value"}'
  },
  {
    id: 'meta-tag-gen',
    name: 'Meta Tag Generator',
    description: 'Create SEO meta tags for your site.',
    categoryId: 'dev',
    icon: Link,
    actionType: 'ai-text',
    systemPrompt: 'Generate HTML meta tags (title, description, keywords, og:tags) for a website described as follows:',
    placeholder: 'Describe your website...'
  },

  // Student Tools
  {
    id: 'citation-gen',
    name: 'Citation Generator',
    description: 'Create APA, MLA, and Chicago citations.',
    categoryId: 'student',
    icon: PenTool,
    actionType: 'ai-text',
    systemPrompt: 'Generate citations in APA, MLA, and Chicago formats for the following source details:',
    placeholder: 'Book title, Author, Year, Publisher...'
  },
  {
    id: 'flashcard-maker',
    name: 'Flashcard Maker',
    description: 'Create study flashcards from notes.',
    categoryId: 'student',
    icon: Zap,
    actionType: 'ai-text',
    systemPrompt: 'Create a list of 5 Question/Answer pairs based on the following notes, suitable for flashcards.',
    placeholder: 'Paste your study notes here...'
  },
  {
    id: 'math-solver',
    name: 'Math Problem Solver',
    description: 'Step-by-step math solutions.',
    categoryId: 'student',
    icon: Calculator,
    actionType: 'ai-text',
    systemPrompt: 'Solve the following math problem step-by-step. Explain the logic.',
    placeholder: 'e.g. Integral of x^2...'
  },
  {
    id: 'plagiarism-checker',
    name: 'Plagiarism Checker (Basic)',
    description: 'Compare two texts to detect duplicate content.',
    categoryId: 'student',
    icon: ClipboardCheck,
    isNew: true,
    actionType: 'utility-client',
  },

  // SEO Tools
  {
    id: 'seo-content-analyzer',
    name: 'SEO Content Analyzer',
    description: 'Analyze content for keyword optimization and readability.',
    categoryId: 'seo',
    icon: BarChart,
    isNew: true,
    actionType: 'ai-text',
  },
  {
    id: 'backlink-checker',
    name: 'Backlink Quality Checker',
    description: 'Analyze the quality and relevance of potential backlinks.',
    categoryId: 'seo',
    icon: Link2,
    isNew: true,
    actionType: 'ai-text',
  },
  {
    id: 'serp-preview',
    name: 'SERP Preview Tool',
    description: 'Visualize how your website appears in Google search results.',
    categoryId: 'seo',
    icon: Eye,
    isPopular: true,
    actionType: 'utility-client',
  },
  {
    id: 'sitemap-generator',
    name: 'XML Sitemap Generator',
    description: 'Build valid XML sitemaps for search engines.',
    categoryId: 'seo',
    icon: FileCode,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'robots-txt-gen',
    name: 'Robots.txt Generator',
    description: 'Create correctly formatted robots.txt files.',
    categoryId: 'seo',
    icon: Bot,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'keyword-research',
    name: 'Keyword Research',
    description: 'Find high-volume keywords.',
    categoryId: 'seo',
    icon: Search,
    actionType: 'ai-text',
    systemPrompt: 'Suggest 10 high-traffic, low-competition SEO keywords related to the following topic. Include search intent.',
    placeholder: 'Enter a niche (e.g., "Vegan Dog Food")...'
  },
  {
    id: 'article-idea-gen',
    name: 'Blog Post Ideas',
    description: 'Generate viral blog post topics.',
    categoryId: 'seo',
    icon: Pencil,
    isPopular: true,
    actionType: 'ai-text',
    systemPrompt: 'List 10 catchy, SEO-friendly blog post titles for the following topic:',
    placeholder: 'Enter topic...'
  },

  // Utility
  {
    id: 'unit-converter',
    name: 'Advanced Unit Converter',
    description: 'Convert between thousands of units across various categories.',
    categoryId: 'utility',
    icon: Scale,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'file-converter',
    name: 'File Converter (Local)',
    description: 'Convert images, text, and audio securely in your browser.',
    categoryId: 'utility',
    icon: ArrowRightLeft,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate exact age, next birthday, and total lifespan metrics.',
    categoryId: 'utility',
    icon: Calendar,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'random-number-gen',
    name: 'Random Number Generator',
    description: 'Generate unique sequences of random numbers instantly.',
    categoryId: 'utility',
    icon: Shuffle,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, increases, and decreases easily.',
    categoryId: 'utility',
    icon: Percent,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate Body Mass Index and check health categories.',
    categoryId: 'utility',
    icon: Activity,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'password-gen',
    name: 'Password Generator',
    description: 'Create strong, secure passwords.',
    categoryId: 'utility',
    icon: Lock,
    actionType: 'utility-client',
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Convert text or URLs to QR codes.',
    categoryId: 'utility',
    icon: QrCode,
    actionType: 'utility-client',
    placeholder: 'https://dicetools.online'
  }
];