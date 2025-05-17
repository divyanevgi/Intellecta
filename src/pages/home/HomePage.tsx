import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Clock, 
  BookOpen, 
  FileText, 
  Calendar, 
  Network, 
  Lightbulb,
  CheckSquare,
  ArrowRight
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Adaptive Quiz Engine",
      description: "Dynamic difficulty scaling based on your performance, helping you learn at your optimal pace.",
      link: "/quiz"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Flashcard System",
      description: "Interactive flashcards with spaced repetition for effective memorization.",
      link: "/flashcards"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Smart Notes",
      description: "Markdown-powered note editor with real-time preview for comprehensive revision.",
      link: "/notes"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Pomodoro Task Manager",
      description: "Focus-driven task management with integrated Pomodoro timer for maximum productivity.",
      link: "/tasks"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Study Calendar",
      description: "Visual weekly planner with draggable study blocks for better time management.",
      link: "/calendar"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Quick Notes",
      description: "Capture fleeting thoughts with draggable sticky notes widget.",
      link: "/sticky-notes"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Mind Mapping",
      description: "Visualize complex concepts and their relationships with interactive mind maps.",
      link: "/mind-map"
    },
    {
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Comprehensive dashboard showing your learning progress and achievements.",
      link: "/dashboard"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to <span className="text-primary-600 dark:text-primary-500">Intellecta</span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your all-in-one platform for effective learning and productivity. Combine adaptive quizzes, 
            task management, and study tools to maximize your potential.
          </motion.p>
          
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/signup"
              className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/signin"
              className="px-8 py-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium transition-colors"
            >
              Sign In
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Powerful Features for Enhanced Learning
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <Link
                to={feature.link}
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-600 dark:bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Learning Experience?
          </motion.h2>
          <motion.p 
            className="text-primary-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of students who are already using Intellecta to achieve their learning goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/signup"
              className="inline-block px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-primary-600 font-medium transition-colors"
            >
              Start Learning Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;