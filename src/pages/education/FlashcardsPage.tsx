import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { motion} from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, Edit, Trash } from 'lucide-react';

interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
}

const FlashcardsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [, setShowForm] = useState(false);

  // Mock flashcards - in a real app, these would come from an API
  const flashcards: Flashcard[] = [
    {
      id: '1',
      front: 'What is the capital of France?',
      back: 'Paris',
      category: 'Geography',
    },
    {
      id: '2',
      front: 'What is photosynthesis?',
      back: 'The process by which plants convert light energy into chemical energy',
      category: 'Biology',
    },
    {
      id: '3',
      front: 'What is the Pythagorean theorem?',
      back: 'a² + b² = c²',
      category: 'Mathematics',
    },
  ];

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Flashcards
          </h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Card
          </button>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 z-10 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="w-full max-w-2xl perspective-1000">
            <motion.div
              className={`relative w-full h-[400px] cursor-pointer transform-style-3d transition-transform duration-500 ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              onClick={handleFlip}
            >
              <div
                className={`absolute inset-0 backface-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col ${
                  isFlipped ? 'hidden' : ''
                }`}
              >
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-2xl text-center text-gray-900 dark:text-white">
                    {flashcards[currentIndex].front}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Click to flip
                  </span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm">
                    {flashcards[currentIndex].category}
                  </span>
                </div>
              </div>

              <div
                className={`absolute inset-0 backface-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col rotate-y-180 ${
                  !isFlipped ? 'hidden' : ''
                }`}
              >
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-2xl text-center text-gray-900 dark:text-white">
                    {flashcards[currentIndex].back}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Click to flip back
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === flashcards.length - 1}
            className="absolute right-0 z-10 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {flashcards.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex
                    ? 'bg-primary-600'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FlashcardsPage;