import React from 'react';
import SignInForm from '../../components/auth/SignInForm';
import { BookOpen } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const SignInPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <BookOpen className="mx-auto h-16 w-16 text-primary-600 dark:text-primary-500" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            EduFocus
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Your educational platform with Pomodoro task management
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow rounded-xl sm:px-10 animate-fade-in">
          <SignInForm />
        </div>
        
        <div className="text-center">
          <button 
            onClick={toggleTheme}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Switch to {theme === 'dark' ? 'light' : 'dark'} mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;