import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogIn } from 'lucide-react';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div className="text-center">
        <LogIn className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Sign in to your account</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Or{' '}
          <button 
            onClick={() => navigate('/signup')}
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            create a new account
          </button>
        </p>
      </div>
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative dark:bg-red-900 dark:text-red-100" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded dark:border-gray-600"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;