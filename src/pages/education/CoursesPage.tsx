import React from 'react';
import Layout from '../../components/layout/Layout';
import { Clock, BookOpen, Star, ChevronRight } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  lessons: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  enrolled: number;
  thumbnail: string;
  progress: number;
}

const CoursesPage: React.FC = () => {
  // Mock courses - in a real app, these would come from an API
  const courses: Course[] = [
    {
      id: '1',
      title: 'Introduction to Web Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
      instructor: 'Sarah Johnson',
      duration: '8 hours',
      lessons: 24,
      level: 'Beginner',
      rating: 4.8,
      enrolled: 1234,
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      progress: 35,
    },
    {
      id: '2',
      title: 'Advanced React Patterns',
      description: 'Master advanced React concepts and design patterns for scalable applications.',
      instructor: 'Michael Chen',
      duration: '12 hours',
      lessons: 36,
      level: 'Advanced',
      rating: 4.9,
      enrolled: 856,
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
      progress: 0,
    },
    {
      id: '3',
      title: 'Data Structures and Algorithms',
      description: 'Comprehensive guide to fundamental data structures and algorithms.',
      instructor: 'David Smith',
      duration: '15 hours',
      lessons: 42,
      level: 'Intermediate',
      rating: 4.7,
      enrolled: 2156,
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      progress: 75,
    },
  ];

  const getLevelColor = (level: Course['level']) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'Intermediate':
        return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
      case 'Advanced':
        return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Courses
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Continue learning or start something new
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              Browse All
            </button>
            <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
              My Learning
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {course.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-full bg-primary-600"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(
                      course.level
                    )}`}
                  >
                    {course.level}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {course.lessons} lessons
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        course.instructor
                      )}&background=random`}
                      alt={course.instructor}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {course.instructor}
                    </span>
                  </div>
                  <button className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                    {course.progress > 0 ? 'Continue' : 'Start'}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;