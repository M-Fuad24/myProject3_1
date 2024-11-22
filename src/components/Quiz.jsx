import React, { useState } from 'react';
import mockQuestions from './mockQuestions'; // Import the mock questions

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track the current question index
  const [score, setScore] = useState(0); // Track the score
  const [selectedChoice, setSelectedChoice] = useState(null); // Track selected answer
  const [showResult, setShowResult] = useState(false); // Show final result

  // Handle selecting an answer
  const handleAnswerClick = (choiceIndex) => {
    if (selectedChoice !== null) return; // Prevent multiple clicks

    setSelectedChoice(choiceIndex);

    // Check if the answer is correct
    if (choiceIndex === mockQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    setSelectedChoice(null);
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // Handle going back to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setSelectedChoice(null);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Reset the quiz
  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setSelectedChoice(null);
  };

  // Progress percentage for the slider
  const progressPercentage = ((currentQuestion + 1) / mockQuestions.length) * 100;

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-lg">Your Score: {score} / {mockQuestions.length}</p>
        <button
          onClick={resetQuiz}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-6">
          Question {currentQuestion + 1}/{mockQuestions.length}
        </h2>

        {/* Progress slider */}
        <input
          type="range"
          min="1"
          max={mockQuestions.length}
          value={currentQuestion + 1}
          className="w-full mb-6"
          readOnly
        />
        <div className="flex justify-between text-sm text-gray-500 mb-6">
          <span>{progressPercentage.toFixed(0)}% Completed</span>
        </div>

        <p className="text-lg mb-4">{mockQuestions[currentQuestion].question}</p>

        <div className="grid grid-cols-1 gap-4 mb-6">
          {[1, 2, 3, 4].map((choiceIndex) => (
            <button
              key={choiceIndex}
              onClick={() => handleAnswerClick(choiceIndex)}
              className={`w-full py-3 px-4 rounded-lg border ${
                selectedChoice === choiceIndex
                  ? selectedChoice === mockQuestions[currentQuestion].answer
                    ? 'bg-green-500 text-white border-green-500'
                    : 'bg-red-500 text-white border-red-500'
                  : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {mockQuestions[currentQuestion][`choice${choiceIndex}`]}
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className="py-3 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous Question
          </button>

          <button
            onClick={handleNextQuestion}
            disabled={selectedChoice === null}
            className="py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {currentQuestion < mockQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
