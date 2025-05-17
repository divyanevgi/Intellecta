import React from 'react';
import { File, CheckSquare, Clock, Award } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'quiz' | 'note' | 'task' | 'flashcard';
  title: string;
  time: string;
  description: string;
  icon: React.ReactNode;
}

const RecentActivity: React.FC = () => {
  // Mock data
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'quiz',
      title: 'Biology Quiz',
      time: '2 hours ago',
      description: 'Completed with 85% accuracy',
      icon: <Award className="h-10 w-10 p-2 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" />
    },
    {
      id: '2',
      type: 'note',
      title: 'Physics Notes',
      time: '3 hours ago',
      description: 'Updated notes on thermodynamics',
      icon: <File className="h-10 w-10 p-2 rounded-full bg-secondary-100 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400" />
    },
    {
      id: '3',
      type: 'task',
      title: 'Math Assignment',
      time: 'Yesterday',
      description: 'Completed 3 pomodoros',
      icon: <CheckSquare className="h-10 w-10 p-2 rounded-full bg-accent-100 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400" />
    },
    {
      id: '4',
      type: 'flashcard',
      title: 'History Terms',
      time: 'Yesterday',
      description: 'Reviewed 20 flashcards',
      icon: <Clock className="h-10 w-10 p-2 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" />
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm animate-fade-in">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            {activity.icon}
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{activity.time}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;