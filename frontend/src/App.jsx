import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import LoginLandingPage from "./pages/LoginLandingPage";
import LoginPageUser from "./pages/LoginPage-User";
import LoginPageRecruiter from "./pages/LoginPage-Recruiter";
import SignUpPageUser from "./pages/SignUpPage-User";
import SignUpLandingPage from "./pages/SignUpLandingPage";
import SignUpPageRecruiter from "./pages/SignUpPage-Recruiter";
import DevHomePage from "./pages/DevHomePage";

const App = () => {
  const isDeveloperLoggedIn = true;

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<LoginLandingPage />} />
          <Route path="/signup" element={<SignUpLandingPage />} />
          <Route path="/LoginPageRecruiter" element={<LoginPageRecruiter />}/>
          <Route path="/LoginPageUser" element={<LoginPageUser />}/>
          <Route path="/Developersignup" element={<SignUpPageUser />} />
          <Route path="/Recruitersignup" element={<SignUpPageRecruiter />} />
          {isDeveloperLoggedIn && (
            <Route path="/dev-home" element={<DevHomePage />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
