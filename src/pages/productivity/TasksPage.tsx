import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import TaskList from '../../components/tasks/TaskList';
import PomodoroTimer from '../../components/tasks/PomodoroTimer';
import TaskForm from '../../components/tasks/TaskForm';
import useLocalStorage from '../../hooks/UseLocalStorage';
import type { Task } from '../../types';
import { v4 as uuidv4 } from 'uuid';

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  type TaskInput = Omit<Task, 'id' | 'userId' | 'completed' | 'pomodorosCompleted'>;
  const addTask = (task: TaskInput) => {
  const newTask: Task = {
    ...task,
    id: uuidv4(),
    userId: 'demo',        // Or current user ID
    completed: false,
    pomodorosCompleted: 0,
  };
  setTasks([...tasks, newTask]);
  setIsFormOpen(false);
};

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ));
    
    // Update active task if it's being edited
    if (activeTask && activeTask.id === taskId) {
      setActiveTask({ ...activeTask, ...updates });
    }
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    if (activeTask && activeTask.id === taskId) {
      setActiveTask(null);
    }
  };

  const handlePomodoroComplete = () => {
    if (activeTask) {
      const updatedTask = { 
        ...activeTask, 
        pomodorosCompleted: activeTask.pomodorosCompleted + 1 
      };
      updateTask(activeTask.id, updatedTask);
      setActiveTask(updatedTask);
    }
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tasks & Pomodoro</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Manage your tasks and use the Pomodoro technique for focused work
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Your Tasks</h2>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                Add Task
              </button>
            </div>
            
            <TaskList 
              tasks={tasks} 
              onUpdateTask={updateTask} 
              onDeleteTask={deleteTask} 
              onSelectTask={setActiveTask}
              activeTaskId={activeTask?.id}
            />
            
            {isFormOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Add New Task</h2>
                  <TaskForm onSubmit={(task: TaskInput) => addTask(task)} onCancel={() => setIsFormOpen(false)}/>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div>
          <PomodoroTimer 
            activeTask={activeTask} 
            onPomodoroComplete={handlePomodoroComplete}
            onClearActiveTask={() => setActiveTask(null)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default TasksPage;