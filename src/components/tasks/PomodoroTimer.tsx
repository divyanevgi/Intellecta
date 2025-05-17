import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, X } from 'lucide-react';
import type { Task } from '../../types';

interface PomodoroTimerProps {
  activeTask: Task | null;
  onPomodoroComplete: () => void;
  onClearActiveTask: () => void;
}

type TimerState = 'pomodoro' | 'shortBreak' | 'longBreak';

const TIMER_SETTINGS = {
  pomodoro: 25 * 60, // 25 minutes
  shortBreak: 5 * 60, // 5 minutes
  longBreak: 15 * 60, // 15 minutes
};

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ 
  activeTask, 
  onPomodoroComplete,
  onClearActiveTask
}) => {
  const [timerState, setTimerState] = useState<TimerState>('pomodoro');
  const [timeRemaining, setTimeRemaining] = useState(TIMER_SETTINGS.pomodoro);
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  // Reset timer when changing timer state
  useEffect(() => {
    setTimeRemaining(TIMER_SETTINGS[timerState]);
    setIsRunning(false);
    clearInterval(intervalRef.current || undefined);
  }, [timerState]);
  
  // Reset timer when active task changes
  useEffect(() => {
    if (activeTask) {
      setTimerState('pomodoro');
      setTimeRemaining(TIMER_SETTINGS.pomodoro);
      setIsRunning(false);
      clearInterval(intervalRef.current || undefined);
    }
  }, [activeTask]);
  
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = window.setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current || undefined);
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };
  
  const pauseTimer = () => {
    clearInterval(intervalRef.current || undefined);
    setIsRunning(false);
  };
  
  const resetTimer = () => {
    clearInterval(intervalRef.current || undefined);
    setTimeRemaining(TIMER_SETTINGS[timerState]);
    setIsRunning(false);
  };
  
  const handleTimerComplete = () => {
    // Play sound
    const audio = new Audio('/notification.mp3');
    audio.play().catch(() => console.log('Audio play failed - user interaction required'));
    
    // Show notification
    if (Notification.permission === 'granted') {
      new Notification('Timer Complete', {
        body: timerState === 'pomodoro' 
          ? 'Time for a break!' 
          : 'Break is over. Back to work!',
      });
    }
    
    if (timerState === 'pomodoro') {
      // Increment pomodoro count
      const newCount = pomodoroCount + 1;
      setPomodoroCount(newCount);
      
      // Call the onPomodoroComplete callback
      onPomodoroComplete();
      
      // Determine next timer state
      if (newCount % 4 === 0) {
        setTimerState('longBreak');
      } else {
        setTimerState('shortBreak');
      }
    } else {
      // After break, go back to pomodoro
      setTimerState('pomodoro');
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const getProgressPercentage = () => {
    const total = TIMER_SETTINGS[timerState];
    return ((total - timeRemaining) / total) * 100;
  };
  
  const getTimerColor = () => {
    switch (timerState) {
      case 'pomodoro':
        return 'text-red-600 dark:text-red-500';
      case 'shortBreak':
        return 'text-green-600 dark:text-green-500';
      case 'longBreak':
        return 'text-blue-600 dark:text-blue-500';
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 animate-fade-in">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Pomodoro Timer</h2>
      
      {activeTask ? (
        <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800 flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Current Task</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{activeTask.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {activeTask.pomodorosCompleted}/{activeTask.pomodoros} pomodoros
            </p>
          </div>
          <button 
            onClick={onClearActiveTask}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Select a task from the list to focus on
          </p>
        </div>
      )}
      
      <div className="flex justify-center space-x-2 mb-6">
        <button
          onClick={() => setTimerState('pomodoro')}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            timerState === 'pomodoro'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => setTimerState('shortBreak')}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            timerState === 'shortBreak'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          Short Break
        </button>
        <button
          onClick={() => setTimerState('longBreak')}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            timerState === 'longBreak'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          Long Break
        </button>
      </div>
      
      <div className="relative h-64 w-64 mx-auto mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="5"
              className="dark:stroke-gray-700"
            />
            
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={timerState === 'pomodoro' ? '#ef4444' : timerState === 'shortBreak' ? '#10b981' : '#3b82f6'}
              strokeWidth="5"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * getProgressPercentage()) / 100}
              transform="rotate(-90 50 50)"
              className={`transition-all duration-300 ${isRunning ? 'ease-linear' : 'ease-out'}`}
            />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-5xl font-semibold ${getTimerColor()}`}>
              {formatTime(timeRemaining)}
            </span>
            <span className="text-xs uppercase text-gray-500 dark:text-gray-400 mt-2">
              {timerState === 'pomodoro' ? 'Focus Time' : timerState === 'shortBreak' ? 'Short Break' : 'Long Break'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        {isRunning ? (
          <button
            onClick={pauseTimer}
            className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <Pause className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        ) : (
          <button
            onClick={startTimer}
            className="p-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors"
          >
            <Play className="h-6 w-6" />
          </button>
        )}
        
        <button
          onClick={resetTimer}
          className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          <RotateCcw className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Pomodoros completed today: <span className="font-semibold">{pomodoroCount}</span>
        </p>
      </div>
    </div>
  );
};

export default PomodoroTimer;