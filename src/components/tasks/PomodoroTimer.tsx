import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, X } from 'lucide-react';
import type { Task } from '../../types';

interface PomodoroTimerProps {
  activeTask: Task | null;
  onPomodoroComplete: () => void;
  onClearActiveTask: () => void;
}

const POMODORO_TIME = 25 * 60; // 25 minutes in seconds
const SHORT_BREAK_TIME = 5 * 60; // 5 minutes in seconds
const LONG_BREAK_TIME = 15 * 60; // 15 minutes in seconds

type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ 
  activeTask,
  onPomodoroComplete,
  onClearActiveTask
}) => {
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  
  const timerRef = useRef<number | null>(null);
  
  // Reset timer when mode changes
  useEffect(() => {
    resetTimer();
  }, [mode]);
  
  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  const startTimer = () => {
    setIsRunning(true);
    timerRef.current = window.setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimerComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  const pauseTimer = () => {
    setIsRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  
  const resetTimer = () => {
    pauseTimer();
    
    switch (mode) {
      case 'pomodoro':
        setTimeLeft(POMODORO_TIME);
        break;
      case 'shortBreak':
        setTimeLeft(SHORT_BREAK_TIME);
        break;
      case 'longBreak':
        setTimeLeft(LONG_BREAK_TIME);
        break;
    }
  };
  
  const handleTimerComplete = () => {
    // Play notification sound
    const audio = new Audio('/notification.mp3');
    audio.play().catch(e => console.log('Audio play failed:', e));
    
    pauseTimer();
    
    if (mode === 'pomodoro') {
      const newCompletedCount = completedPomodoros + 1;
      setCompletedPomodoros(newCompletedCount);
      
      // Call the completion handler for the active task
      if (activeTask) {
        onPomodoroComplete();
      }
      
      // After every 4 pomodoros, take a long break
      if (newCompletedCount % 4 === 0) {
        setMode('longBreak');
      } else {
        setMode('shortBreak');
      }
    } else {
      // If we're on a break, switch back to pomodoro
      setMode('pomodoro');
    }
  };
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const getProgressPercent = (): number => {
    let totalTime;
    switch (mode) {
      case 'pomodoro':
        totalTime = POMODORO_TIME;
        break;
      case 'shortBreak':
        totalTime = SHORT_BREAK_TIME;
        break;
      case 'longBreak':
        totalTime = LONG_BREAK_TIME;
        break;
    }
    
    return ((totalTime - timeLeft) / totalTime) * 100;
  };
  
  const getModeColor = (): string => {
    switch (mode) {
      case 'pomodoro':
        return 'text-red-600 dark:text-red-500';
      case 'shortBreak':
        return 'text-green-600 dark:text-green-500';
      case 'longBreak':
        return 'text-blue-600 dark:text-blue-500';
    }
  };
  
  const getCircleColor = (): string => {
    switch (mode) {
      case 'pomodoro':
        return 'stroke-red-600 dark:stroke-red-500';
      case 'shortBreak':
        return 'stroke-green-600 dark:stroke-green-500';
      case 'longBreak':
        return 'stroke-blue-600 dark:stroke-blue-500';
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Pomodoro Timer</h2>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setMode('pomodoro')}
            className={`px-3 py-1 text-xs font-medium rounded-md ${
              mode === 'pomodoro' 
                ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Focus
          </button>
          <button 
            onClick={() => setMode('shortBreak')}
            className={`px-3 py-1 text-xs font-medium rounded-md ${
              mode === 'shortBreak' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Short Break
          </button>
          <button 
            onClick={() => setMode('longBreak')}
            className={`px-3 py-1 text-xs font-medium rounded-md ${
              mode === 'longBreak' 
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Long Break
          </button>
        </div>
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-48 h-48">
          {/* Background circle */}
          <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#e6e6e6" 
              strokeWidth="5"
            />
            {/* Progress circle */}
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              className={getCircleColor()}
              strokeWidth="5"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * getProgressPercent() / 100)}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl font-bold ${getModeColor()}`}>
              {formatTime(timeLeft)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {mode === 'pomodoro' ? 'Focus Time' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}
            </span>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-6">
          {isRunning ? (
            <button
              onClick={pauseTimer}
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300"
            >
              <Pause className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={startTimer}
              className="p-3 bg-white dark:bg-gray-700 rounded-full shadow hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300"
            >
              <Play className="w-6 h-6" />
            </button>
          )}
          
          <button
            onClick={resetTimer}
            className="p-3 bg-white dark:bg-gray-700 rounded-full shadow hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {activeTask ? (
        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-md">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Current Task</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-[90%]">
                {activeTask.title}
              </p>
              {typeof activeTask.estimatedPomodoros === 'number' && activeTask.estimatedPomodoros > 0 && (
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {activeTask.pomodorosCompleted} / {activeTask.estimatedPomodoros} pomodoros
                </div>
              )}
            </div>
            <button 
              onClick={onClearActiveTask}
              className="p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
          Select a task to start tracking pomodoros
        </div>
      )}
      
      <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Completed today: {completedPomodoros} pomodoro{completedPomodoros !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

export default PomodoroTimer;