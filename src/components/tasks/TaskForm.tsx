import React, { useState } from 'react';
import { Timer } from 'lucide-react';

interface TaskInput {
  title: string;
  description: string;
  estimatedPomodoros: number;
  dueDate: string | null;
  priority: 'low' | 'medium' | 'high';
  category: string;
  pomodoros: number;
}

interface TaskFormProps {
  onSubmit: (task: TaskInput) => void;
  onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel }) => {
  const [task, setTask] = useState<TaskInput>({
    title: '',
    description: '',
    estimatedPomodoros: 1,
    dueDate: null,
    priority: 'low',
    category: '',
    pomodoros: 0,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.title.trim()) {
      onSubmit(task);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Task Title
        </label>
        <input
          id="title"
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
          placeholder="What needs to be done?"
          required
          autoFocus
        />
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description (optional)
        </label>
        <textarea
          id="description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white h-24 resize-none"
          placeholder="Add details about this task..."
        />
      </div>
      
      <div>
        <label htmlFor="pomodoros" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Estimated Pomodoros
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Timer className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="pomodoros"
            type="number"
            min="1"
            max="10"
            value={task.estimatedPomodoros}
            onChange={(e) => setTask({ ...task, estimatedPomodoros: parseInt(e.target.value) })}
            className="w-full pl-10 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
          />
        </div>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          How many 25-minute focus sessions do you think this will take?
        </p>
      </div>
      
      <div className="flex justify-end space-x-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!task.title.trim()}
          className={`px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none ${!task.title.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;