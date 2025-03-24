import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const QuizGuideLines = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quiz = location.state?.quiz;

  useEffect(() => {
    console.log("Received Quiz Data in Guidelines Page:", quiz); // Debug log
  
    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
      console.error("No quiz data found! Redirecting to quizzes...");
      navigate("/quizzes");
    }
  }, [quiz, navigate]);
  
  const handleStartQuiz = () => {
    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
      console.error("No quiz data available. Cannot start quiz.");
      return;
    }
  
    console.log("Quiz data before starting:", quiz); // Debug log
    navigate("/quiz", { state: { quiz } });
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto mt-10 sm:mt-20">
      {/* Quiz Header */}
      <div className="max-w-2xl w-full flex flex-col items-center">
        <img
          src={
            quiz?.icon ||
            "https://upload.wikimedia.org/wikipedia/commons/5/5a/Animal_Cell.svg"
          }
          alt="Quiz Icon"
          className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
          {quiz?.title || "Default Quiz Title"}
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl font-semibold mt-2">
          {quiz?.description || "This is a placeholder description."}
        </p>
      </div>

      {/* Quiz Instructions */}
      <div className="mt-6 max-w-xl w-full">
        <ul className="text-gray-800 text-sm sm:text-base md:text-lg space-y-3 sm:space-y-4">
          <li>
            <b>Focus Up:</b> Read each question carefully to make the best
            choice.
          </li>
          <li>
            <b>Mind the Clock:</b> The timer is your guide—don’t let it run out.
          </li>
          <li>
            <b>One Shot:</b> You’ve got one attempt, so make it count!
          </li>
          <li>
            <b>No Do-Overs:</b> Once you answer, you can’t change your
            selection.
          </li>
        </ul>
      </div>

      {/* Quiz Details */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <p className="font-semibold text-blue-500 text-base sm:text-lg md:text-xl">
          {quiz?.numQuestions || "10"} Questions
        </p>
        <p className="font-semibold text-blue-500 text-base sm:text-lg md:text-xl">
          {quiz?.duration || "20 Min"} minutes
        </p>
      </div>

      {/* Start Button */}
      <button
        onClick={handleStartQuiz}
        className="mt-6 bg-yellow-400 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-lg rounded-xl hover:bg-yellow-300 transition duration-200"
      >
        Start
      </button>
    </div>
  );
};

export default QuizGuideLines;
