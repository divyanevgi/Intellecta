import { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signIn = async (email: string, _password: string) => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock user for demo
      const newUser = {
        id: '1',
        name: email.split('@')[0],
        email
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } finally {
      setLoading(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signUp = async (name: string, email: string, _password: string) => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock user for demo
      const newUser = {
        id: '1',
        name,
        email
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};