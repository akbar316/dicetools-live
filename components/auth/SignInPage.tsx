
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error signing in with email and password', error);
      alert('Error signing in. Please check your credentials and try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  if (currentUser) {
    navigate('/');
    return null;
  }

  return (
    <div className="max-w-md mx-auto my-12 p-8 border rounded-2xl shadow-sm bg-white dark:bg-slate-900 dark:border-slate-800">
        <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Sign In</h1>
        <p className="text-slate-500 mb-6">Welcome back!</p>

        <form onSubmit={handleEmailSignIn} className="space-y-4">
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
            <div className="text-right">
              <a href="/forgot-password" className="text-sm text-primary-600 hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full py-3 bg-primary-600 text-white rounded-lg font-bold flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" /> Sign In
            </button>
        </form>
        <div className="flex items-center my-6">
            <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
            <span className="mx-4 text-sm text-slate-500">OR</span>
            <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
        </div>
        <button onClick={handleGoogleSignIn} className="w-full py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold flex items-center justify-center gap-2 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
            <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20c0-1.341-.138-2.65-.389-3.917z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.522-3.447-11.088-8.107l-6.703,5.198C9.531,39.551,16.225,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.012,35.245,44,30.028,44,24C44,22.659,43.862,21.34,43.611,20.083z"/>
            </svg>
            Sign in with Google
        </button>
    </div>
  );
};

export default SignInPage;
