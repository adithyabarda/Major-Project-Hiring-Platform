import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpPageUser = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dev-home");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-xl w-full max-w-md md:max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Developer Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="institute" className="block text-sm font-medium text-gray-700">
                Institute
              </label>
              <input
                type="text"
                id="institute"
                name="institute"
                required
                placeholder="Enter your institute"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="gitProfile" className="block text-sm font-medium text-gray-700">
                GitHub Profile
              </label>
              <input
                type="url"
                id="gitProfile"
                name="gitProfile"
                required
                placeholder="Enter GitHub URL"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="codingProfile"
                className="block text-sm font-medium text-gray-700"
              >
                Coding Profile (e.g., LeetCode)
              </label>
              <input
                type="url"
                id="codingProfile"
                name="codingProfile"
                required
                placeholder="Enter profile URL"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-32 text-white py-2 rounded-full bg-violet-500 dark:bg-violet-500 hover:bg-violet-700"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "} 
            <a
              href="/LoginPageUser"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPageUser;
