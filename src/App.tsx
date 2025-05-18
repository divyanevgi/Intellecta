import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Cursor from './components/Cursor';
import { Navigation } from './components/Navigation';
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
import LearnMore from './pages/home/LearnMore';
import Navbar from './components/layout/Navbar';


function AppWrapper() {
  const location = useLocation();
  const publicRoutes = ['/', '/learn-more', '/signin', '/signup'];

  return (
    <>
      <Cursor />
      {publicRoutes.includes(location.pathname) ? <Navigation /> : <Navbar />}
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/learn-more" element={<LearnMore />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
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
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppWrapper />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;