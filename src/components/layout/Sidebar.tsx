import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  GraduationCap,
  Brain, 
  Calendar, 
  CheckSquare, 
  ClipboardList, 
  FileText, 
  Home, 
  Layout, 
  Lightbulb, 
  Network
} from 'lucide-react';

interface SidebarLink {
  to: string;
  icon: React.ReactNode;
  text: string;
  category: 'main' | 'education' | 'productivity';
}

const Sidebar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const links: SidebarLink[] = [
    { to: '/dashboard', icon: <Home size={18} />, text: 'Dashboard', category: 'main' },
    { to: '/quiz', icon: <Brain size={18} />, text: 'Quiz', category: 'education' },
    { to: '/flashcards', icon: <ClipboardList size={18} />, text: 'Flashcards', category: 'education' },
    { to: '/notes', icon: <FileText size={18} />, text: 'Notes', category: 'education' },
    { to: '/courses', icon: <GraduationCap size={18} />, text: 'Courses', category: 'education' },
    { to: '/tasks', icon: <CheckSquare size={18} />, text: 'Tasks', category: 'productivity' },
    { to: '/calendar', icon: <Calendar size={18} />, text: 'Calendar', category: 'productivity' },
    { to: '/sticky-notes', icon: <Lightbulb size={18} />, text: 'Sticky Notes', category: 'productivity' },
    { to: '/mind-map', icon: <Network size={18} />, text: 'Mind Map', category: 'productivity' },
  ];

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto">
          <div className="flex-shrink-0 flex items-center px-4 py-5">
            <GraduationCap className="h-8 w-8 text-primary-600 dark:text-primary-500" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Intellecta
            </span>
          </div>
          
          <div className="flex-grow flex flex-col">
            <nav className="flex-1 px-2 py-4 space-y-8">
              <div>
                <div className="px-3 mb-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Main
                  </p>
                </div>
                {links.filter(link => link.category === 'main').map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 my-1 text-sm font-medium rounded-md transition-colors ${
                        isActive 
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`
                    }
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.text}
                  </NavLink>
                ))}
              </div>
              
              <div>
                <div className="px-3 mb-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Education
                  </p>
                </div>
                {links.filter(link => link.category === 'education').map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 my-1 text-sm font-medium rounded-md transition-colors ${
                        isActive 
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`
                    }
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.text}
                  </NavLink>
                ))}
              </div>
              
              <div>
                <div className="px-3 mb-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Productivity
                  </p>
                </div>
                {links.filter(link => link.category === 'productivity').map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center px-3 py-2 my-1 text-sm font-medium rounded-md transition-colors ${
                        isActive 
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`
                    }
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.text}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar button */}
      <div className="fixed md:hidden bottom-4 left-4 z-10">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-700 text-white shadow-lg focus:outline-none"
        >
          <Layout size={20} />
        </button>
      </div>
      
      {/* Mobile sidebar */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          ></div>
          
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800 shadow-xl animate-slide-up">
            <div className="flex-shrink-0 flex items-center px-4 py-5">
              <GraduationCap className="h-8 w-8 text-primary-600 dark:text-primary-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Intellecta
              </span>
            </div>
            
            <div className="flex-grow overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-8">
                <div>
                  <div className="px-3 mb-2">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Main
                    </p>
                  </div>
                  {links.filter(link => link.category === 'main').map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 my-1 text-sm font-medium rounded-md transition-colors ${
                          isActive 
                            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.text}
                    </NavLink>
                  ))}
                </div>
                
                <div>
                  <div className="px-3 mb-2">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Education
                    </p>
                  </div>
                  {links.filter(link => link.category === 'education').map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 my-1 text-sm font-medium rounded-md transition-colors ${
                          isActive 
                            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.text}
                    </NavLink>
                  ))}
                </div>
                
                <div>
                  <div className="px-3 mb-2">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Productivity
                    </p>
                  </div>
                  {links.filter(link => link.category === 'productivity').map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 my-1 text-sm font-medium rounded-md transition-colors ${
                          isActive 
                            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.text}
                    </NavLink>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;