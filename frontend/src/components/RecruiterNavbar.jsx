import { Link, useLocation } from "react-router-dom";
import { FaUserTie, FaClipboardList, FaSearch } from "react-icons/fa";

const RecruiterNavbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Career Catalyst - Recruiter</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link
              to="/recruiter/profile"
              className={`flex items-center space-x-2 ${
                location.pathname === "/recruiter/profile" ? "text-yellow-300" : ""
              }`}
            >
              <FaUserTie />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/recruiter/job-posting"
              className={`flex items-center space-x-2 ${
                location.pathname === "/recruiter/job-posting" ? "text-yellow-300" : ""
              }`}
            >
              <FaClipboardList />
              <span>Post Job</span>
            </Link>
          </li>
          <li>
            <Link
              to="/recruiter/students"
              className={`flex items-center space-x-2 ${
                location.pathname === "/recruiter/students" ? "text-yellow-300" : ""
              }`}
            >
              <FaSearch />
              <span>Search Students</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default RecruiterNavbar;
