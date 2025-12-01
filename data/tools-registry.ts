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
    description: 'Unleash your creativity with our AI Image Generator. Simply describe the image you want, and our advanced AI will create stunning, unique visuals from your text. Perfect for artists, marketers, and anyone in need of high-quality, custom images.',
    categoryId: 'ai',
    icon: ImageIcon,
    isPopular: true,
    actionType: 'ai-image',
    placeholder: 'A futuristic city with flying cars at sunset, cyberpunk style...'
  },
  {
    id: 'logo-generator',
    name: 'AI Logo Generator',
    description: 'Create a professional logo for your business in seconds. Our AI Logo Generator designs unique and memorable logos tailored to your brand\'s identity. No design skills needed—just tell us your vision.',
    categoryId: 'ai',
    icon: Hexagon,
    isNew: true,
    actionType: 'ai-image', // Will be intercepted by ID in ToolPage for custom UI
  },
  {
    id: 'ai-image-editor',
    name: 'AI Image Editor',
    description: 'Transform your photos with the power of AI. Our AI Image Editor allows you to effortlessly add, remove, or replace objects in your images. It\'s like having a professional photo editor in your browser.',
    categoryId: 'ai',
    icon: Layers,
    isNew: true,
    actionType: 'ai-image-edit',
    placeholder: 'Describe how to edit the image...'
  },
  {
    id: 'ai-hairstyle',
    name: 'AI Hairstyle Changer',
    description: 'Find your perfect look with our AI Hairstyle Changer. Experiment with different hairstyles and colors in real-time. Upload your photo and discover a new you, instantly and risk-free.',
    categoryId: 'ai',
    icon: Scissors,
    isNew: true,
    actionType: 'ai-hairstyle',
  },
  {
    id: 'ai-summarizer',
    name: 'AI Summarizer',
    description: 'Save time and get the key insights, fast. Our AI Summarizer condenses long articles, reports, and documents into concise, easy-to-read summaries. Ideal for students, researchers, and busy professionals.',
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
    description: 'Write with confidence. Our Grammar Fixer instantly corrects spelling mistakes, grammatical errors, and punctuation issues in your text, helping you communicate clearly and professionally.',
    categoryId: 'ai',
    icon: ShieldCheck,
    actionType: 'ai-text',
    systemPrompt: 'Correct the grammar and spelling of the following text. Do not change the tone, just fix errors.',
    placeholder: 'Paste text with errors here...'
  },
  {
    id: 'ai-translator',
    name: 'Universal Translator',
    description: 'Break down language barriers with our Universal Translator. Translate text between dozens of major languages accurately and instantly. Perfect for work, travel, and communication.',
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
    description: 'Take full control of your PDF documents. Our online PDF Editor lets you edit text, add images and signatures, and annotate your files directly in your browser. Simple, secure, and free.',
    categoryId: 'pdf',
    icon: Edit,
    isNew: true,
    isPopular: true,
    actionType: 'pdf-editor',
  },
  {
    id: 'pdf-merger',
    name: 'Merge PDF',
    description: 'Combine multiple PDF files into one organized document. Our PDF Merger tool is fast, easy to use, and maintains the quality of your original files. Simplify your document management.',
    categoryId: 'pdf',
    icon: Files,
    isNew: true,
    actionType: 'pdf-merge',
  },
  {
    id: 'pdf-compress',
    name: 'Compress PDF',
    description: 'Reduce the size of your PDF files without losing quality. Our PDF Compressor makes it easy to share and store your documents by optimizing them for the smallest possible file size.',
    categoryId: 'pdf',
    icon: Minimize2,
    isPopular: true,
    actionType: 'pdf-compress',
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    description: 'Convert your PDF documents into editable Microsoft Word files. Our PDF to Word converter accurately preserves the layout, formatting, and text of your original document.',
    categoryId: 'pdf',
    icon: FileText,
    isPopular: true,
    isNew: true,
    actionType: 'pdf-to-word',
  },
  {
    id: 'pdf-to-image',
    name: 'PDF to Image',
    description: 'Easily convert each page of a PDF document into high-quality JPG or PNG images. Our PDF to Image tool is perfect for sharing, presentations, or web use.',
    categoryId: 'pdf',
    icon: Images,
    isNew: true,
    actionType: 'pdf-to-image',
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF',
    description: 'Combine multiple JPG, PNG, or other image formats into a single, professional PDF document. Our Image to PDF converter is perfect for creating portfolios, reports, and archives.',
    categoryId: 'pdf',
    icon: FileImage,
    isPopular: true,
    actionType: 'image-to-pdf',
  },

  // Text Tools
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Instantly count the number of words, characters, and sentences in your text. Our Word Counter is an essential tool for writers, students, and anyone working with word limits.',
    categoryId: 'text',
    icon: Hash,
    actionType: 'utility-client',
    placeholder: 'Start typing to count...'
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Gen',
    description: 'Generate placeholder text for your designs and layouts. Our Lorem Ipsum Generator creates customizable dummy text to help you visualize your projects before the final content is ready.',
    categoryId: 'text',
    icon: FileText,
    actionType: 'utility-client',
  },

  // Developer Tools
  {
    id: 'code-formatter',
    name: 'Code Formatter',
    description: 'Clean up your code with a single click. Our Code Formatter automatically beautifies your HTML, CSS, JavaScript, and other code snippets, making them readable and easy to maintain.',
    categoryId: 'dev',
    icon: Code2,
    actionType: 'ai-text',
    systemPrompt: 'Format the following code to be clean, readable, and follow standard conventions. Detect the language automatically.',
    placeholder: 'Paste messy code here...'
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and debug your regular expressions in real-time. Our Regex Tester provides instant feedback and visual highlighting, helping you build and validate complex patterns with ease.',
    categoryId: 'dev',
    icon: Regex,
    isNew: true,
    actionType: 'regex-tester',
    placeholder: 'Input text to test regex against...'
  },
  {
    id: 'json-validator',
    name: 'JSON Validator',
    description: 'Validate and format your JSON data instantly. Our JSON Validator helps you identify syntax errors and beautify your code, ensuring your JSON is well-formed and easy to read.',
    categoryId: 'dev',
    icon: FileJson,
    actionType: 'ai-text',
    systemPrompt: 'Validate and format the following JSON. If there is an error, explain it.',
    placeholder: '{\'key\': \'value\'}'
  },
  {
    id: 'meta-tag-gen',
    name: 'Meta Tag Generator',
    description: 'Improve your website\'s SEO with our Meta Tag Generator. Create optimized meta titles, descriptions, and keywords to help search engines understand and rank your content.',
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
    description: 'Create accurate citations for your research papers and essays. Our Citation Generator supports APA, MLA, Chicago, and other popular formats, making academic writing easier.',
    categoryId: 'student',
    icon: PenTool,
    actionType: 'ai-text',
    systemPrompt: 'Generate citations in APA, MLA, and Chicago formats for the following source details:',
    placeholder: 'Book title, Author, Year, Publisher...'
  },
  {
    id: 'flashcard-maker',
    name: 'Flashcard Maker',
    description: 'Boost your learning with custom digital flashcards. Our Flashcard Maker helps you create and study from your notes, making it easy to memorize key concepts and prepare for exams.',
    categoryId: 'student',
    icon: Zap,
    actionType: 'ai-text',
    systemPrompt: 'Create a list of 5 Question/Answer pairs based on the following notes, suitable for flashcards.',
    placeholder: 'Paste your study notes here...'
  },
  {
    id: 'math-solver',
    name: 'Math Problem Solver',
    description: 'Get step-by-step solutions to your math problems. Our Math Problem Solver handles everything from basic algebra to complex calculus, helping you understand the process behind the answers.',
    categoryId: 'student',
    icon: Calculator,
    actionType: 'ai-text',
    systemPrompt: 'Solve the following math problem step-by-step. Explain the logic.',
    placeholder: 'e.g. Integral of x^2...'
  },
  {
    id: 'plagiarism-checker',
    name: 'Plagiarism Checker (Basic)',
    description: 'Ensure your work is original. Our basic Plagiarism Checker compares two texts to help you identify any overlapping content and avoid unintentional duplication.',
    categoryId: 'student',
    icon: ClipboardCheck,
    isNew: true,
    actionType: 'utility-client',
  },

  // SEO Tools
  {
    id: 'seo-content-analyzer',
    name: 'SEO Content Analyzer',
    description: 'Optimize your content for search engines. Our SEO Content Analyzer evaluates your text for keyword density, readability, and other critical factors to improve your search rankings.',
    categoryId: 'seo',
    icon: BarChart,
    isNew: true,
    actionType: 'ai-text',
  },
  {
    id: 'backlink-checker',
    name: 'Backlink Quality Checker',
    description: 'Evaluate the strength of your backlink profile. Our Backlink Quality Checker analyzes the authority and relevance of your backlinks to help you build a healthier SEO strategy.',
    categoryId: 'seo',
    icon: Link2,
    isNew: true,
    actionType: 'ai-text',
  },
  {
    id: 'serp-preview',
    name: 'SERP Preview Tool',
    description: 'See how your website appears on Google. Our SERP Preview Tool lets you visualize and optimize your title tags and meta descriptions to improve click-through rates.',
    categoryId: 'seo',
    icon: Eye,
    isPopular: true,
    actionType: 'utility-client',
  },
  {
    id: 'sitemap-generator',
    name: 'XML Sitemap Generator',
    description: 'Create a search-engine-friendly XML sitemap for your website. Our Sitemap Generator helps Google and other search engines crawl and index your pages more effectively.',
    categoryId: 'seo',
    icon: FileCode,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'robots-txt-gen',
    name: 'Robots.txt Generator',
    description: 'Control how search engines crawl your site. Our Robots.txt Generator helps you create a properly formatted file to guide search engine bots and protect sensitive areas.',
    categoryId: 'seo',
    icon: Bot,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'keyword-research',
    name: 'Keyword Research',
    description: 'Discover high-traffic keywords for your niche. Our Keyword Research tool helps you find valuable long-tail keywords to attract more organic traffic and grow your audience.',
    categoryId: 'seo',
    icon: Search,
    actionType: 'ai-text',
    systemPrompt: 'Suggest 10 high-traffic, low-competition SEO keywords related to the following topic. Include search intent.',
    placeholder: 'Enter a niche (e.g., \'Vegan Dog Food\')...'
  },
  {
    id: 'article-idea-gen',
    name: 'Blog Post Ideas',
    description: 'Never run out of content ideas again. Our Blog Post Ideas generator provides fresh, engaging, and SEO-friendly topics to keep your blog active and your readers interested.',
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
    description: 'Convert between thousands of different units effortlessly. Our Advanced Unit Converter covers length, weight, volume, temperature, and much more, with instant and accurate results.',
    categoryId: 'utility',
    icon: Scale,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'file-converter',
    name: 'File Converter (Local)',
    description: 'Convert your files securely on your own device. Our local File Converter supports various image, audio, and text formats without uploading anything to a server. Fast, private, and free.',
    categoryId: 'utility',
    icon: ArrowRightLeft,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate your age down to the day. Our Age Calculator provides your exact age, your next birthday countdown, and fun facts about your life in years, months, and days.',
    categoryId: 'utility',
    icon: Calendar,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'random-number-gen',
    name: 'Random Number Generator',
    description: 'Generate random numbers for any purpose. Our Random Number Generator allows you to create customizable sequences with specific ranges, quantities, and uniqueness.',
    categoryId: 'utility',
    icon: Shuffle,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Solve percentage problems in seconds. Our Percentage Calculator makes it easy to find percentages, calculate increases and decreases, and handle other common percentage tasks.',
    categoryId: 'utility',
    icon: Percent,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Check your Body Mass Index (BMI) with our simple calculator. Our BMI Calculator helps you understand where you stand on the health spectrum and provides insights based on your results.',
    categoryId: 'utility',
    icon: Activity,
    isNew: true,
    actionType: 'utility-client',
  },
  {
    id: 'password-gen',
    name: 'Password Generator',
    description: 'Create strong, unique, and secure passwords with a single click. Our Password Generator helps you protect your online accounts with randomized passwords that are difficult to crack.',
    categoryId: 'utility',
    icon: Lock,
    actionType: 'utility-client',
  },
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Create custom QR codes for your website, contact information, or any other text. Our QR Code Generator is fast, free, and allows you to generate codes instantly for print or web.',
    categoryId: 'utility',
    icon: QrCode,
    actionType: 'utility-client',
    placeholder: 'https://dicetools.online'
  }
];
