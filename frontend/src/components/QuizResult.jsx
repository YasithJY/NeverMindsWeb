import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import avatarImg from "../assets/girl.jpg";
import { FaArrowRight } from "react-icons/fa";

const QuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const correctAnswers = location.state?.correct || 8;
  const totalQuestions = location.state?.total || 10;
  const name = location.state?.name || "Your Name";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9] px-4 text-center">
      {/* Avatar with Progress Ring */}
      <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[196px] md:h-[196px] mb-6">
        <CircularProgressbarWithChildren
          value={score}
          strokeWidth={3}
          styles={buildStyles({
            pathColor: "#facc15",
            trailColor: "#e5e7eb",
            strokeLinecap: "round",
          })}
        >
          <img
            src={avatarImg}
            alt="User Avatar"
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-full object-cover"
          />
        </CircularProgressbarWithChildren>
      </div>

      {/* Score */}
      <div className="text-[40px] sm:text-[48px] md:text-[64px] font-bold bg-yellow-400 px-6 py-2 rounded-md mb-4">
        {score}%
      </div>

      {/* Greeting */}
      <h1 className="text-[24px] sm:text-[32px] md:text-[44px] font-semibold mb-2">
        Great Job, <span className="font-bold">{name}</span> 🧚‍♀️
      </h1>

      {/* Summary */}
      <p className="text-gray-700 text-[16px] sm:text-[18px] md:text-[20px] mb-1">
        You’ve completed the quiz with {correctAnswers}/{totalQuestions} correct answers.
        <button
          className="ml-2 text-blue-600 underline text-sm inline-flex items-center"
          onClick={() => navigate("/review")}
        >
          Review Answers <FaArrowRight className="ml-1" />
        </button>
      </p>

      <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-[20px] mb-8 px-2 sm:px-4">
        Keep up the great work and continue improving your knowledge with more quizzes!
      </p>

      <button
        onClick={() => navigate("/quizzes")}
        className="bg-yellow-400 hover:bg-yellow-300 text-black text-[18px] sm:text-[20px] md:text-[24px] font-semibold px-6 py-2 rounded-md transition"
      >
        Try Another Quiz
      </button>
    </div>
  );
};

export default QuizResult;
