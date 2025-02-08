import React from "react";
import { Link } from "react-router-dom";
import { Home, Briefcase, User, Code } from "lucide-react"; // Importing icons

const DevNavbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <Code className="mr-2" /> Career Catalyst
        </h1>

        <div className="flex space-x-6">
          <Link to="/dev-home" className="flex items-center hover:text-gray-300">
            <Home className="mr-1" /> Problems
          </Link>
          <Link to="/companies" className="flex items-center hover:text-gray-300">
            <Briefcase className="mr-1" /> Companies
          </Link>
          <Link to="/profile" className="flex items-center hover:text-gray-300">
            <User className="mr-1" /> Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DevNavbar;
