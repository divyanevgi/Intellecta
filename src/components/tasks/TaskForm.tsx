import React, { useState } from 'react';
import type { Task } from '../../types';

interface TaskFormProps {
  task?: Task;  // Optional task for editing
  onSubmit: (task: Omit<Task, 'id' | 'userId' | 'completed' | 'pomodorosCompleted'>) => void;
  onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [priority, setPriority] = useState<Task['priority']>(task?.priority || 'medium');
  const [dueDate, setDueDate] = useState<string>(task?.dueDate || '');
  const [category, setCategory] = useState(task?.category || 'general');
  const [pomodoros, setPomodoros] = useState(task?.pomodoros || 1);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }
    
    const taskData = {
      title,
      description,
      priority,
      dueDate: dueDate || null,
      category,
      pomodoros,
    };
    
    onSubmit(taskData);
  };

  const getPriorityClasses = (value: Task['priority'], current: Task['priority']) => {
    const baseClasses = "px-3 py-2 text-sm font-medium rounded-md focus:outline-none transition-colors";
    
    if (value === current) {
      switch (current) {
        case 'high':
          return `${baseClasses} bg-red-500 text-white`;
        case 'medium':
          return `${baseClasses} bg-yellow-500 text-white`;
        case 'low':
          return `${baseClasses} bg-green-500 text-white`;
      }
    }
    
    return `${baseClasses} bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative dark:bg-red-900 dark:text-red-100" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Task Title *
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter task title"
        />
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter task description"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Priority
        </label>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setPriority('low')}
            className={getPriorityClasses('low', priority)}
          >
            Low
          </button>
          <button
            type="button"
            onClick={() => setPriority('medium')}
            className={getPriorityClasses('medium', priority)}
          >
            Medium
          </button>
          <button
            type="button"
            onClick={() => setPriority('high')}
            className={getPriorityClasses('high', priority)}
          >
            High
          </button>
        </div>
      </div>
      
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="general">General</option>
          <option value="study">Study</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Due Date
        </label>
        <input
          id="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      
      <div>
        <label htmlFor="pomodoros" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Estimated Pomodoros
        </label>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setPomodoros(Math.max(1, pomodoros - 1))}
            className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-l-md focus:outline-none"
          >
            -
          </button>
          <input
            id="pomodoros"
            type="number"
            min="1"
            value={pomodoros}
            onChange={(e) => setPomodoros(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 px-3 py-2 border-t border-b border-gray-300 text-center focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            type="button"
            onClick={() => setPomodoros(pomodoros + 1)}
            className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-r-md focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
      
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600"
        >
          {task ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;