import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaRegClock, FaUserCircle } from "react-icons/fa";
import Breadcrumb from "./BreadCrumb";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const quiz = location.state?.quiz;

  useEffect(() => {
    console.log("Received Quiz Data in Quiz Page:", quiz);

    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
      console.error("❌ No quiz data found! Redirecting to quizzes...");
      setTimeout(() => navigate("/quizzes"), 500);
    }
  }, [quiz, navigate]);

  if (!quiz || !quiz.questions) {
    return (
      <div className="text-center text-lg font-semibold">
        Loading quiz data...
      </div>
    );
  }

  //Ensure timer starts correctly
  const totalSeconds = isNaN(parseInt(quiz.duration))
    ? 1200
    : parseInt(quiz.duration) * 60;

  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(quiz.questions.length).fill([])
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  //Start Timer when Quiz Loads
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  //Timer Format Function
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00 : 00";
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const isMultipleAnswer =
    quiz.questions[currentQuestion].correctAnswers.length > 1;

  const handleAnswerSelect = (index) => {
    const updatedAnswers = [...selectedAnswers];

    if (isMultipleAnswer) {
      updatedAnswers[currentQuestion] = updatedAnswers[
        currentQuestion
      ].includes(index)
        ? updatedAnswers[currentQuestion].filter((i) => i !== index)
        : [...updatedAnswers[currentQuestion], index];
    } else {
      updatedAnswers[currentQuestion] = [index];
    }

    setSelectedAnswers(updatedAnswers);
  };

  const handleFinishQuiz = () => {
    navigate("/quizresult", {
      state: {
        quiz,
        selectedAnswers,
        timeSpent: totalSeconds - timeLeft,
      },
    });
  };

  const progressPercentage =
    (selectedAnswers.filter((ans) => ans.length > 0).length /
      quiz.questions.length) *
    100;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-[#fffbeb]">
      {/* Sidebar */}
      <div
        className={`bg-white p-4 transition-all duration-300 ${
          isSidebarOpen ? "w-full lg:w-96" : "w-16"
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            className="text-gray-600 text-xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
          {isSidebarOpen && <span className="text-gray-600">Hide</span>}
        </div>
        {isSidebarOpen && (
          <>
            <h2 className="mt-4 text-2xl lg:text-[34px] font-semibold">
              {quiz.title}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <FaUserCircle className="text-gray-600 text-xl lg:text-2xl" />
              <span className="text-gray-700 font-medium">User Name</span>
            </div>
            <div className="mt-4 bg-gray-200 w-full rounded-full h-2">
              <div
                className="bg-[#ffe132] h-2 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {Math.round(progressPercentage)}% completed
            </p>
            <div className="mt-4 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-7 mx-4 gap-2">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 text-sm rounded-lg font-bold transition ${
                    index === currentQuestion
                      ? "bg-[#ffe132] text-white"
                      : "bg-gray-200 hover:bg-yellow-300"
                  }`}
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm gap-4">
          <h1 className="text-lg lg:text-xl font-semibold">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-[#ffe132] text-xl lg:text-2xl" />
              <p className="text-black font-bold text-lg lg:text-[24px]">
                {formatTime(timeLeft)}
              </p>
            </div>
            {currentQuestion === quiz.questions.length - 1 ? (
              <button
                onClick={handleFinishQuiz}
                className="px-3 py-2 lg:px-4 lg:py-2 bg-[#ffe132] text-black rounded-lg text-sm lg:text-[18px]"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                className="px-3 py-2 lg:px-4 lg:py-2 bg-[#ffe132] text-black rounded-lg text-sm lg:text-[18px]"
              >
                Next Question
              </button>
            )}
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex mt-4 justify-center">
          <Breadcrumb
            currentStep={currentQuestion + 1}
            totalSteps={quiz.questions.length}
          />
        </div>

        {/* Question Card */}
        <div className="mt-6 bg-white p-4 lg:p-6 rounded-lg flex flex-col relative">
          <p className="text-lg lg:text-[24px] font-semibold mt-6 lg:mt-10">
            {quiz.questions[currentQuestion].text}
          </p>

          <hr className="my-5 h-1 border-t border-black" />

          {/* Answer Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* Answer Options */}
            <div
              className={`w-full ${
                quiz.questions[currentQuestion].hasIcon ? "md:w-3/4" : "w-full"
              }`}
            >
              {quiz.questions[currentQuestion].options.map((option, index) => (
                <label key={index} className="block mt-3 cursor-pointer">
                  <div className="flex items-center p-3 w-full rounded-md transition bg-[#fffcf2] hover:bg-gray-200">
                    {/* Custom Square Checkbox */}
                    <div
                      className={`w-5 h-5 border-2 flex items-center justify-center rounded-sm mr-3 ${
                        selectedAnswers[currentQuestion].includes(index)
                          ? "bg-[#ffe132] border-[#ffe132]"
                          : "bg-white border-gray-400"
                      }`}
                    ></div>
                    <span className="text-sm md:text-base">{option}</span>
                  </div>
                  <input
                    type={isMultipleAnswer ? "checkbox" : "radio"}
                    name={`question-${currentQuestion}`}
                    checked={selectedAnswers[currentQuestion].includes(index)}
                    onChange={() => handleAnswerSelect(index)}
                    className="hidden"
                  />
                </label>
              ))}
            </div>

            {/* Show quiz icon for specific questions */}
            {quiz.questions[currentQuestion].hasIcon && (
              <div className="flex justify-center items-center mt-4 md:mt-0 w-full md:w-1/4">
                <img
                  src={quiz.icon}
                  alt="Question Icon"
                  className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 border border-gray-300 rounded-lg p-2"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
