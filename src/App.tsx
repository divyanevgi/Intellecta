import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import HomePage from './pages/home/HomePage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import QuizPage from './pages/education/QuizPage';
import FlashcardsPage from './pages/education/FlashcardsPage';
import NotesPage from './pages/education/NotesPage';
import CoursesPage from './pages/education/CoursesPage';
import TasksPage from './pages/productivity/TasksPage';
import CalendarPage from './pages/productivity/CalendarPage';
import NotesWidgetPage from './pages/productivity/NotesWidgetPage';
import MindMapPage from './pages/productivity/MindMapPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Education Routes */}
            <Route 
              path="/quiz" 
              element={
                <ProtectedRoute>
                  <QuizPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/flashcards" 
              element={
                <ProtectedRoute>
                  <FlashcardsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/notes" 
              element={
                <ProtectedRoute>
                  <NotesPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/courses" 
              element={
                <ProtectedRoute>
                  <CoursesPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Productivity Routes */}
            <Route 
              path="/tasks" 
              element={
                <ProtectedRoute>
                  <TasksPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/calendar" 
              element={
                <ProtectedRoute>
                  <CalendarPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/sticky-notes" 
              element={
                <ProtectedRoute>
                  <NotesWidgetPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/mind-map" 
              element={
                <ProtectedRoute>
                  <MindMapPage />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;