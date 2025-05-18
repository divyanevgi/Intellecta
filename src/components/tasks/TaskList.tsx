import React, { useState } from 'react';
import { CheckCircle, Circle, Trash2, Clock } from 'lucide-react';
import type { Task } from '../../types';

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
  const [hoveredTaskId, setHoveredTaskId] = useState<string | null>(null);
  
  // Filter tasks into different categories
  const uncompletedTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  
  // Handler for toggling task completion
  const toggleTaskCompletion = (task: Task) => {
    onUpdateTask(task.id, { completed: !task.completed });
  };
  
  const renderTask = (task: Task) => {
    const isActive = task.id === activeTaskId;
    
    return (
      <div 
        key={task.id}
        className={`flex items-start p-3 rounded-md mb-2 transition-colors cursor-pointer ${
          isActive ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700/30'
        }`}
        onClick={() => onSelectTask(task)}
        onMouseEnter={() => setHoveredTaskId(task.id)}
        onMouseLeave={() => setHoveredTaskId(null)}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleTaskCompletion(task);
          }}
          className="flex-shrink-0 mt-0.5"
        >
          {task.completed ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5 text-gray-400" />
          )}
        </button>
        
        <div className="ml-3 flex-grow">
          <p className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900 dark:text-white'}`}>
            {task.title}
          </p>
          {task.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {task.description}
            </p>
          )}
          {typeof task.estimatedPomodoros === 'number' && task.estimatedPomodoros > 0 && (
            <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4 mr-1" />
              <span>{task.pomodorosCompleted} / {task.estimatedPomodoros} pomodoros</span>
            </div>
          )}

        </div>
        
        {(hoveredTaskId === task.id || isActive) && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteTask(task.id);
            }}
            className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  };
  
  return (
    <div>
      {uncompletedTasks.length > 0 ? (
        <div className="mb-6">
          {uncompletedTasks.map(renderTask)}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400">
          <p>No tasks to show. Add a new task to get started!</p>
        </div>
      )}
      
      {completedTasks.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Completed ({completedTasks.length})
          </h3>
          <div className="opacity-70">
            {completedTasks.map(renderTask)}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;