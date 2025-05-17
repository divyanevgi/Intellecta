import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Brain, ChevronRight, Timer, Award } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);

  // Mock questions - in a real app, these would come from an API
  const questions: Question[] = [
    {
      id: '1',
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2,
    },
    {
      id: '2',
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
    },
    {
      id: '3',
      question: 'What is the largest mammal in the world?',
      options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 1,
    },
  ];

  React.useEffect(() => {
    if (!showResults && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, showResults]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
  };

  if (showResults) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto py-8 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <div className="mb-8">
              <Award className="w-16 h-16 mx-auto text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quiz Complete!
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Your score: {score} out of {questions.length}
            </p>
            <div className="mb-8">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-primary-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${(score / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Brain className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="flex items-center">
              <Timer className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {timeLeft}s
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border transition-colors ${
                    selectedAnswer === index
                      ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/30'
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuizPage;