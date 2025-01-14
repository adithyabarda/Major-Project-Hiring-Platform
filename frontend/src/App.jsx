//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import LoginPage from "./pages/LoginPage";
import SignUpPageUser from "./pages/SignUpPage-User";
import SignUpLandingPage from "./pages/SignUpLandingPage";
import SignUpPageRecruiter from "./pages/SignUpPage-Recruiter";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpLandingPage />} />
        <Route path="/Developersignup" element={<SignUpPageUser />} />
        <Route path="/Recruitersignup" element={<SignUpPageRecruiter />} />
      </Routes>
    </Router>
  );
};

export default App;
