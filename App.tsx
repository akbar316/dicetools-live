import React, { useState, useEffect } from 'react';
import { TOOLS } from './data/tools-registry';
import { Tool, CategoryId } from './types/index';
import ToolPage from './components/tools/ToolPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTool, setCurrentTool] = useState<Tool | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize Route
  useEffect(() => {
    // URL Route check
    const params = new URLSearchParams(window.location.search);
    const toolId = params.get('tool');
    if (toolId) {
      const tool = TOOLS.find(t => t.id === toolId);
      if (tool) setCurrentTool(tool);
    }

    // Listen to browser back button
    const handlePopState = () => {
        const params = new URLSearchParams(window.location.search);
        const toolId = params.get('tool');
        if (toolId) {
          const tool = TOOLS.find(t => t.id === toolId);
          if (tool) setCurrentTool(tool);
        } else {
            setCurrentTool(null);
        }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic Title Update
  useEffect(() => {
    if (currentTool) {
      document.title = `${currentTool.name} - Dicetools.online`;
    } else {
      document.title = "Dicetools.online - Smart Tools for Everything";
    }
  }, [currentTool]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Routing Helpers
  const navigateToTool = (tool: Tool) => {
      setCurrentTool(tool);
      const url = new URL(window.location.href);
      url.searchParams.set('tool', tool.id);
      window.history.pushState({}, '', url);
      window.scrollTo(0,0);
  };

  const navigateHome = () => {
      setCurrentTool(null);
      const url = new URL(window.location.href);
      url.searchParams.delete('tool');
      window.history.pushState({}, '', url);
      window.scrollTo(0,0);
  };

  // Filter Tools
  const filteredTools = TOOLS.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.categoryId === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-500/30 selection:text-primary-900">
      
      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentTool={currentTool}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onNavigateHome={navigateHome}
      />

      {/* Main Content Router */}
      {currentTool ? (
          <ToolPage 
            tool={currentTool} 
            onBack={navigateHome} 
            onSelectCategory={(id) => {
              setActiveCategory(id);
              navigateHome();
            }}
          />
      ) : (
          <HomePage 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filteredTools={filteredTools}
            navigateToTool={navigateToTool}
          />
      )}

      <Footer onNavigateHome={navigateHome} />

    </div>
  );
};

export default App;