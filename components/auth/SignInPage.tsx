
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogIn } from 'lucide-react';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate and send to a server
    console.log('Signing in with', { email, password });
    signIn(); // Update auth state
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 border rounded-2xl shadow-sm bg-white dark:bg-slate-900 dark:border-slate-800">
        <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Sign In</h1>
        <p className="text-slate-500 mb-6">Welcome back!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="w-full p-3 mt-1 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" 
                    required 
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    className="w-full p-3 mt-1 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-white" 
                    required 
                />
            </div>
            <button type="submit" className="w-full py-3 bg-primary-600 text-white rounded-lg font-bold flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" /> Sign In
            </button>
        </form>
    </div>
  );
};

export default SignInPage;
