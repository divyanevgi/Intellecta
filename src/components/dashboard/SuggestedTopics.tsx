import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface Topic {
  id: string;
  title: string;
  description: string;
  type: 'quiz' | 'flashcard' | 'note';
}

const SuggestedTopics: React.FC = () => {
  // Mock data
  const topics: Topic[] = [
    {
      id: '1',
      title: 'Photosynthesis',
      description: 'Review this biology concept',
      type: 'flashcard'
    },
    {
      id: '2',
      title: 'Trigonometry',
      description: 'Practice these formulas',
      type: 'quiz'
    },
    {
      id: '3',
      title: 'World War II',
      description: 'Revise your notes',
      type: 'note'
    }
  ];

  const getTopicTypeClasses = (type: Topic['type']) => {
    switch (type) {
      case 'quiz':
        return 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20';
      case 'flashcard':
        return 'text-secondary-600 dark:text-secondary-400 bg-secondary-50 dark:bg-secondary-900/20';
      case 'note':
        return 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Suggested for You</h2>
        <Sparkles className="h-5 w-5 text-yellow-500" />
      </div>
      
      <div className="space-y-3">
        {topics.map((topic) => (
          <div 
            key={topic.id}
            className="p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{topic.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{topic.description}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getTopicTypeClasses(topic.type)}`}>
                {topic.type}
              </span>
            </div>
            <div className="mt-2 flex items-center text-xs font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Start studying</span>
              <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedTopics;