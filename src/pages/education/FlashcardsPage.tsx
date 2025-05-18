import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
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
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 200);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
      }, 200);
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Card
          </motion.button>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 z-10 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </motion.button>

          <div className="w-full max-w-2xl perspective-[2000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex + (isFlipped ? '-flipped' : '')}
                initial={{ rotateY: isFlipped ? -180 : 0 }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                exit={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={handleFlip}
                className="relative w-full h-[400px] cursor-pointer"
              >
                <motion.div
                  style={{
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                  }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col"
                >
                  <div className="flex-1 flex items-center justify-center">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl text-center text-gray-900 dark:text-white"
                    >
                      {flashcards[currentIndex].front}
                    </motion.p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Click to flip
                    </span>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {flashcards[currentIndex].category}
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div
                  style={{
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    rotateY: "180deg"
                  }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col"
                >
                  <div className="flex-1 flex items-center justify-center">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl text-center text-gray-900 dark:text-white"
                    >
                      {flashcards[currentIndex].back}
                    </motion.p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Click to flip back
                    </span>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                      >
                        <Trash className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            disabled={currentIndex === flashcards.length - 1}
            className="absolute right-0 z-10 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50"
          >
            <ChevronRight className="w-8 h-8" />
          </motion.button>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {flashcards.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: 1,
                  backgroundColor: index === currentIndex ? '#2563EB' : '#D1D5DB'
                }}
                transition={{ delay: index * 0.1 }}
                className={`w-2 h-2 rounded-full`}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FlashcardsPage;