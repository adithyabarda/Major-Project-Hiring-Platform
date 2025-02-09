import React from "react";
import DevNavbar from "../components/DevNavbar";
import { User, CheckCircle, BarChart, FileCheck, Timer, Star } from "lucide-react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS Components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// Profile Data
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
  rating: 4.8,
  previousAssessments: 12,
  pendingAssessments: 3,
  metrics: {
    "Total Contests Participated": 20,
    "Average Contest Rank": 15,
    "Highest Contest Rank": 5,
    "Total Time Spent Coding": "120 hrs",
    "Max Daily Streak": "30 days",
    "Total Code Submissions": 500,
    "Bug-Free Submissions": "95%",
  },
};

// Bar Chart Data (Questions Solved by Topic)
const barChartData = {
  labels: Object.keys(profileData.solvedByTags),
  datasets: [
    {
      label: "Problems Solved",
      data: Object.values(profileData.solvedByTags),
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

// Pie Chart Data (Assessment Status)
const pieChartData = {
  labels: ["Passed", "Failed", "Pending"],
  datasets: [
    {
      data: [10, 5, profileData.pendingAssessments],
      backgroundColor: ["#36a2eb", "#ff6384", "#ffce56"],
    },
  ],
};

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <DevNavbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-purple-700 flex items-center">
          <User className="mr-2" /> My Profile
        </h1>

        {/* Total Questions Solved */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <CheckCircle className="mr-2 text-green-500" /> Total Questions Solved
          </h2>
          <p className="text-3xl font-bold">{profileData.totalSolved}</p>
        </div>

        {/* Assessments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <FileCheck className="mr-2 text-blue-500" /> Previous Assessments
            </h2>
            <p className="text-3xl font-bold">{profileData.previousAssessments}</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Timer className="mr-2 text-red-500" /> Pending Assessments
            </h2>
            <p className="text-3xl font-bold">{profileData.pendingAssessments}</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Star className="mr-2 text-yellow-500" /> Rating
            </h2>
            <p className="text-3xl font-bold">{profileData.rating} ⭐</p>
          </div>
        </div>

        {/* Additional Developer Metrics */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart className="mr-2 text-purple-500" /> Developer Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(profileData.metrics).map(([key, value]) => (
              <div key={key} className="bg-gray-200 p-4 rounded-lg shadow-md">
                <p className="text-gray-700">{key}</p>
                <h3 className="text-2xl font-bold">{value}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Questions Solved by Topic */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Questions Solved by Topic</h3>
            <Bar data={barChartData} />
          </div>

          {/* Assessment Progress */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Assessment Status</h3>
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
