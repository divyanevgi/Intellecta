import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Clock, 
  BookOpen, 
  FileText, 
  ArrowRight,
  GraduationCap
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <GraduationCap className="h-20 w-20 text-blue-600 mx-auto" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to <span className="text-blue-600">Intellecta</span>
            </motion.h1>
            
            <motion.p 
              className="max-w-2xl mx-auto text-xl text-gray-600 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your learning experience with our comprehensive educational platform.
              Master any subject with interactive tools and proven study techniques.
            </motion.p>
            
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/signup"
                className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                to="/signin"
                className="px-8 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
              alt="Students learning"
              className="rounded-lg shadow-xl mx-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Powerful tools designed to enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using Intellecta to achieve their learning goals.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-blue-600 font-medium transition-colors"
          >
            Start Learning Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;