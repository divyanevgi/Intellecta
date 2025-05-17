import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  
  // Show a loading state if still checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-pulse-subtle">
          <div className="h-12 w-12 rounded-full bg-primary-600 dark:bg-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }
  
  // Redirect to signin if not authenticated
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  
  // Render children if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;