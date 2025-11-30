
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (error) {
      console.error('Error sending password reset email', error);
      setMessage('Error sending password reset email. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 p-8 border rounded-2xl shadow-sm bg-white dark:bg-slate-900 dark:border-slate-800">
      <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Forgot Password</h1>
      <p className="text-slate-500 mb-6">Enter your email to receive a password reset link.</p>

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
        <button type="submit" className="w-full py-3 bg-primary-600 text-white rounded-lg font-bold">
          Send Reset Link
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-slate-500">{message}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
