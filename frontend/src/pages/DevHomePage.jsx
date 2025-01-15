import React from "react";
import Navbar from "../components/Navbar";

const DevHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, Developer!</h1>
        <p className="text-gray-700">
          This is your dashboard where you can manage your profile, view job openings, 
          participate in online assessments, and track your progress on leaderboards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <p className="text-gray-600">Update your personal details and skills.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Job Openings</h2>
            <p className="text-gray-600">Explore job opportunities that match your profile.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Online Assessments</h2>
            <p className="text-gray-600">Test your skills and prepare for interviews.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Leaderboards</h2>
            <p className="text-gray-600">See where you stand among your peers.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p className="text-gray-600">Customize your account and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevHomePage;
