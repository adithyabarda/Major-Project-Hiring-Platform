import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Main Page</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
          </li>
          <li>
            <Link to="/Developersignup" className="hover:text-gray-300">Developer Signup</Link>
          </li>
          <li>
            <Link to="/Recruitersignup" className="hover:text-gray-300">Recruiter Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
