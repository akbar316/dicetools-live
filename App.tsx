
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { TOOLS } from './data/tools-registry';
import { Tool, CategoryId } from './types/index';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useAuth } from './contexts/AuthContext';

// Lazy-loaded components
const HomePage = lazy(() => import('./components/home/HomePage'));
const ToolPage = lazy(() => import('./components/tools/ToolPage'));
const PrivacyPage = lazy(() => import('./components/PrivacyPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const SignInPage = lazy(() => import('./components/auth/SignInPage'));
const SignUpPage = lazy(() => import('./components/auth/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('./components/auth/ForgotPasswordPage'));
const CookiePolicyPage = lazy(() => import('./components/legal/CookiePolicyPage'));

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTool, setCurrentTool] = useState<Tool | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const { isAuthenticated, signOut, loading } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toolId = params.get('tool');
    const page = params.get('page');

    if (page === 'privacy') {
      setCurrentPage('privacy');
    } else if (page === 'contact') {
      setCurrentPage('contact');
    } else if (page === 'signin') {
      setCurrentPage('signin');
    } else if (page === 'signup') {
      setCurrentPage('signup');
    } else if (page === 'forgot-password') {
      setCurrentPage('forgot-password');
    } else if (page === 'cookie-policy') {
      setCurrentPage('cookie-policy');
    } else if (toolId) {
      const tool = TOOLS.find(t => t.id === toolId);
      if (tool) {
        setCurrentTool(tool);
        setCurrentPage('tool');
      }
    } else {
      setCurrentPage('home');
    }

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const toolId = params.get('tool');
      const page = params.get('page');

      if (page === 'privacy') {
        setCurrentPage('privacy');
        setCurrentTool(null);
      } else if (page === 'contact') {
        setCurrentPage('contact');
        setCurrentTool(null);
      } else if (page === 'signin') {
        setCurrentPage('signin');
        setCurrentTool(null);
      } else if (page === 'signup') {
        setCurrentPage('signup');
        setCurrentTool(null);
      } else if (page === 'forgot-password') {
        setCurrentPage('forgot-password');
        setCurrentTool(null);
      } else if (page === 'cookie-policy') {
        setCurrentPage('cookie-policy');
        setCurrentTool(null);
      } else if (toolId) {
        const tool = TOOLS.find(t => t.id === toolId);
        if (tool) {
          setCurrentTool(tool);
          setCurrentPage('tool');
        }
      } else {
        setCurrentTool(null);
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentPage === 'tool' && currentTool) {
      document.title = `${currentTool.name} - Dicetools.online`;
    } else if (currentPage === 'privacy') {
      document.title = 'Privacy Policy - Dicetools.online';
    } else if (currentPage === 'contact') {
      document.title = 'Contact Us - Dicetools.online';
    } else if (currentPage === 'signin') {
      document.title = 'Sign In - Dicetools.online';
    } else if (currentPage === 'signup') {
      document.title = 'Sign Up - Dicetools.online';
    } else if (currentPage === 'forgot-password') {
      document.title = 'Forgot Password - Dicetools.online';
    } else if (currentPage === 'cookie-policy') {
      document.title = 'Cookie Policy - Dicetools.online';
    } else {
      document.title = 'Dicetools.online - Smart Tools for Everything';
    }
  }, [currentPage, currentTool]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navigateTo = (page: string, tool: Tool | null = null) => {
    const url = new URL(window.location.href);
    url.search = '';
    if (page === 'tool' && tool) {
      url.searchParams.set('tool', tool.id);
      setCurrentTool(tool);
    } else if (page) {
      url.searchParams.set('page', page);
    }
    window.history.pushState({}, '', url);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const navigateToTool = (tool: Tool) => navigateTo('tool', tool);
  const navigateHome = () => navigateTo('home');
  const navigateToPrivacy = () => navigateTo('privacy');
  const navigateToContact = () => navigateTo('contact');
  const navigateToSignIn = () => navigateTo('signin');
  const navigateToSignUp = () => navigateTo('signup');
  const navigateToForgotPassword = () => navigateTo('forgot-password');
  const navigateToCookiePolicy = () => navigateTo('cookie-policy');
  const handleSignOut = () => {
    signOut();
    navigateHome();
  };

  const filteredTools = TOOLS.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.categoryId === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderContent = () => {
    if (loading) {
        return (
        <div className="flex-grow flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary-500 border-dashed rounded-full animate-spin"></div>
        </div>
        )
    }

    if (isAuthenticated && (currentPage === 'signin' || currentPage === 'signup' || currentPage === 'forgot-password')) {
      navigateHome();
      return null;
    }

    switch (currentPage) {
      case 'tool':
        return currentTool && (
          <ToolPage
            tool={currentTool}
            onBack={navigateHome}
            onSelectCategory={(id) => {
              setActiveCategory(id);
              navigateHome();
            }}
          />
        );
      case 'privacy':
        return <PrivacyPage />;
      case 'contact':
        return <ContactPage />;
      case 'cookie-policy':
        return <CookiePolicyPage />;
      case 'signin':
        return (
          <SignInPage
            onNavigateToSignUp={navigateToSignUp}
            onNavigateToForgotPassword={navigateToForgotPassword}
            onSignInSuccess={navigateHome}
          />
        );
      case 'signup':
        return <SignUpPage onNavigateToSignIn={navigateToSignIn} onSignUpSuccess={navigateHome} />;
      case 'forgot-password':
        return <ForgotPasswordPage onNavigateToSignIn={navigateToSignIn} />;
      default:
        return (
          <HomePage
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filteredTools={filteredTools}
            navigateToTool={navigateToTool}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-500/30 selection:text-primary-900">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentTool={currentTool}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onNavigateHome={navigateHome}
        onNavigateToSignIn={navigateToSignIn}
        onNavigateToSignUp={navigateToSignUp}
        isAuthenticated={isAuthenticated}
        onSignOut={handleSignOut}
      />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center"><div className="w-16 h-16 border-4 border-primary-500 border-dashed rounded-full animate-spin"></div></div>}>
        {renderContent()}
      </Suspense>
      <Footer 
        onNavigateHome={navigateHome} 
        onNavigateToPrivacy={navigateToPrivacy} 
        onNavigateToContact={navigateToContact} 
        onNavigateToCookiePolicy={navigateToCookiePolicy} 
      />
    </div>
  );
};

export default App;
