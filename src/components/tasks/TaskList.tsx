import React from 'react';
import type { Task } from '../../types';
import { CheckCircle, Circle, Clock, Trash, Edit } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (taskId: string, updates: Partial<Task>) => void;
  onDeleteTask: (taskId: string) => void;
  onSelectTask: (task: Task) => void;
  activeTaskId?: string;
}

const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  onUpdateTask, 
  onDeleteTask, 
  onSelectTask,
  activeTaskId
}) => {
  const toggleTaskCompletion = (task: Task) => {
    onUpdateTask(task.id, { completed: !task.completed });
  };
  
  const getPriorityClasses = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    }
  };

  const formatDueDate = (dateString: string | null) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">No tasks yet. Add your first task!</p>
        </div>
      ) : (
        tasks.map((task) => (
          <div 
            key={task.id}
            className={`p-4 rounded-lg border ${
              activeTaskId === task.id 
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 dark:border-primary-700' 
                : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
            } transition-colors`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-1">
                <button
                  onClick={() => toggleTaskCompletion(task)}
                  className="mt-0.5 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
                >
                  {task.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Circle className="h-5 w-5" />
                  )}
                </button>
                
                <div className="ml-3 flex-1">
                  <h3 className={`text-sm font-medium ${
                    task.completed 
                      ? 'text-gray-500 dark:text-gray-400 line-through' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {task.title}
                  </h3>
                  
                  {task.description && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {task.description}
                    </p>
                  )}
                  
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getPriorityClasses(task.priority)}`}>
                      {task.priority}
                    </span>
                    
                    {task.dueDate && (
                      <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="inline h-3 w-3 mr-1" />
                        {formatDueDate(task.dueDate)}
                      </span>
                    )}
                    
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {task.pomodorosCompleted}/{task.pomodoros} pomodoros
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => onSelectTask(task)}
                  className="p-1 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Select task for pomodoro"
                >
                  <Clock className="h-4 w-4" />
                </button>
                
                <button
                  onClick={() => {/* Open edit form */}}
                  className="p-1 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Edit task"
                >
                  <Edit className="h-4 w-4" />
                </button>
                
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Delete task"
                >
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;