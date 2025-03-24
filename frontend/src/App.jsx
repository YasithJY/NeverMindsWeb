import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Badges from "./components/Badges";
import Progress from "./components/Progress";
import Favourites from "./components/Favourites";
import Dashboard from "./Pages/Dashboard";
import ProfileDashboard from "./components/ProfileDashboard";
import QuizzesMain from "./Pages/QuizzesMain";
import Quizzes from "./components/Quizzes";
import QuizGuideLines from "./components/QuizGuideLines";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import Account from "./components/Account";
import Services from "./components/Services";
import QuizOTPVerification from "./components/QuizOTPVerification";
import Hero from "./components/Hero";
import Contributors from "./components/Contributors";
import ContactTeam from "./components/ContactTeam";
import LatestQuizzes from "./components/LatestQuizzes";
import HowtoStart from "./components/HowtoStart";

function App() {
  //set local storage for user
  const user = {
    id: 1,
    name: "John Doe",
    email: "e@gmail.com",
  };

  //   //user null
  //   const user = null;

  localStorage.setItem("user", JSON.stringify(user));

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/dashboard" element={<ProfileDashboard />} />
        <Route path="/account" element={<Account />} />
      </Route>

      <Route path="/" element={<QuizzesMain />}>
        <Route path="home" element={<Home />} />
        <Route path="quizzes" element={<Quizzes />} />
        <Route path="quizguidelines" element={<QuizGuideLines />} />
        <Route path="quizresult" element={<QuizResult />} />
      </Route>

      <Route path="/quiz" element={<Quiz />} />
      <Route path="/services" element={<Services />} />
      <Route path="/quizotpverification" element={<QuizOTPVerification />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/contributors" element={<Contributors />} />
    </Routes>
  );
}

export default App;
