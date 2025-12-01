
import React from 'react';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateToPrivacy: () => void;
  onNavigateToContact: () => void;
  onNavigateToCookiePolicy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigateToPrivacy, onNavigateToContact, onNavigateToCookiePolicy }) => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-white font-bold">D</div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">Dicetools</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The ultimate toolkit for students, developers, and creators.
              </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><button onClick={onNavigateHome} className="hover:text-primary-600 text-left">Home</button></li>
              <li><a href="#categories" className="hover:text-primary-600">Categories</a></li>
              <li><a href="#features" className="hover:text-primary-600">Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><button onClick={onNavigateToPrivacy} className="hover:text-primary-600">Privacy Policy</button></li>
              <li><button onClick={onNavigateToCookiePolicy} className="hover:text-primary-600">Cookie Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><button onClick={onNavigateToContact} className="hover:text-primary-600">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Dicetools.online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
