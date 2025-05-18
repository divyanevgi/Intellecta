import type { ReactNode } from "react";

// Common Types
export interface User {
  id: string;
  name: string;
  email: string;
}

// Quiz Types
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  date: string;
  score: number;
  totalQuestions: number;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

// Flashcard Types
export interface Flashcard {
  id: string;
  userId: string;
  front: string;
  back: string;
  category: string;
  lastReviewed: string | null;
  nextReview: string | null;
  repetitionLevel: number;
}

// Notes Types
export interface Note {
  id: string;
  userId: string;
  title: string;
  content: string;
  created: string;
  lastModified: string;
  category: string;
}

// Task Types
export interface Task {
  estimatedPomodoros: ReactNode;
  id: string;
  userId: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string | null;
  priority: 'low' | 'medium' | 'high';
  category: string;
  pomodoros: number;
  pomodorosCompleted: number;
  tags?: string[];
}

// Pomodoro Types
export interface PomodoroSession {
  id: string;
  userId: string;
  taskId: string | null;
  startTime: string;
  endTime: string | null;
  duration: number;
  completed: boolean;
}

// Calendar Types
export interface CalendarEvent {
  id: string;
  userId: string;
  title: string;
  start: string;
  end: string;
  category: string;
  taskId?: string;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  estimatedHours: number;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
}

// Sticky Note Types
export interface StickyNote {
  id: string;
  userId: string;
  content: string;
  color: string;
  position: { x: number; y: number };
  created: string;
}

// Mind Map Types
export interface MindMapNode {
  id: string;
  label: string;
  children: MindMapNode[];
}

export interface MindMap {
  id: string;
  userId: string;
  title: string;
  rootNode: MindMapNode;
  created: string;
  lastModified: string;
}

// Progress Types
export interface ProgressData {
  quizAccuracy: number;
  pomodorosCompleted: number;
  revisionConsistency: number;
  learningStreak: number;
}

export interface Note {
  id: string;
  content: string;
  color: string;
}