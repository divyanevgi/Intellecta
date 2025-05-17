import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Moon, Sun, Menu, X, GraduationCap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSignOut = () => {
    signOut();
    navigate('/signin');
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard': return 'Dashboard';
      case '/quiz': return 'Quiz';
      case '/flashcards': return 'Flashcards';
      case '/notes': return 'Notes';
      case '/courses': return 'Courses';
      case '/tasks': return 'Tasks';
      case '/calendar': return 'Calendar';
      case '/sticky-notes': return 'Sticky Notes';
      case '/mind-map': return 'Mind Map';
      default: return 'Intellecta';
    }
  };

  return (
    <nav className="ml-60 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex md:items-center">
            <GraduationCap className="h-8 w-8 text-primary-600 dark:text-primary-500" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              {getPageTitle()}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user.name}
                </span>
              </div>
            )}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {user && (
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {user && (
              <div className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                {user.name}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;