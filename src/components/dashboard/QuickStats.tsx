import React from 'react';
import { Brain, Clock, BookOpen, CheckCircle } from 'lucide-react';

interface Stat {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const QuickStats: React.FC = () => {
  // Mock data
  const stats: Stat[] = [
    {
      id: '1',
      label: 'Quiz Accuracy',
      value: '82%',
      icon: <Brain size={20} />,
      color: 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
    },
    {
      id: '2',
      label: 'Study Time',
      value: '4.5 hrs',
      icon: <Clock size={20} />,
      color: 'bg-secondary-100 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400'
    },
    {
      id: '3',
      label: 'Courses',
      value: '7',
      icon: <BookOpen size={20} />,
      color: 'bg-accent-100 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400'
    },
    {
      id: '4',
      label: 'Completed Tasks',
      value: '12',
      icon: <CheckCircle size={20} />,
      color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm animate-fade-in">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div 
            key={stat.id}
            className="p-3 rounded-lg border border-gray-100 dark:border-gray-700"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${stat.color}`}>
              {stat.icon}
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;