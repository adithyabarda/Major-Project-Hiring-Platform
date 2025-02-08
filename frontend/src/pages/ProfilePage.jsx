import React from "react";
import DevNavbar from "../components/DevNavbar";
import { User, CheckCircle, BarChart, Star } from "lucide-react";

const profileData = {
  totalSolved: 350,
  solvedByTags: {
    "Arrays": 80,
    "Linked List": 60,
    "Dynamic Programming": 50,
    "Graphs": 40,
    "Trees": 70,
    "Greedy": 50,
  },
  rating: 4.8, // New Rating Feature
};

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <DevNavbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-purple-700 flex items-center">
          <User className="mr-2" /> My Profile
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <CheckCircle className="mr-2 text-green-500" /> Total Questions Solved
          </h2>
          <p className="text-3xl font-bold">{profileData.totalSolved}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart className="mr-2 text-blue-500" /> Tag-wise Breakdown
          </h2>
          <table className="w-full bg-gray-100 rounded-lg">
            <thead className="bg-purple-500 text-white">
              <tr>
                <th className="p-3 text-left">Tag</th>
                <th className="p-3 text-left">Solved Count</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(profileData.solvedByTags).map(([tag, count]) => (
                <tr key={tag} className="border-b hover:bg-gray-200 transition">
                  <td className="p-3">{tag}</td>
                  <td className="p-3">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
