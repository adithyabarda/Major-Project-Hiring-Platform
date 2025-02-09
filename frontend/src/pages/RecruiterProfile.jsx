import { useState } from "react";
import RecruiterNavbar from "../components/RecruiterNavbar";
import {
  FaChartLine, FaUsers, FaClipboardCheck, FaSuitcase, FaCheckCircle,
  FaBriefcase, FaClock, FaUserTie, FaFileAlt, FaUserCheck, FaTimes
} from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const RecruiterProfile = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobPostings = [
    { id: 1, title: "Software Engineer", date: "Jan 15, 2025", applicants: 50, description: "Develop scalable applications using React and Node.js." },
    { id: 2, title: "Frontend Developer", date: "Dec 20, 2024", applicants: 40, description: "Work on UI/UX improvements and implement React components." },
    { id: 3, title: "Data Scientist", date: "Nov 10, 2024", applicants: 60, description: "Analyze large datasets and build ML models." },
    { id: 4, title: "Backend Developer", date: "Oct 5, 2024", applicants: 35, description: "Develop REST APIs and optimize database queries." },
  ];

  const favoriteStudents = [
    { id: 1, name: "John Doe", problemsSolved: 250, mainTopic: "Dynamic Programming" },
    { id: 2, name: "Jane Smith", problemsSolved: 300, mainTopic: "Graph Theory" },
    { id: 3, name: "Alice Brown", problemsSolved: 270, mainTopic: "Data Structures" },
  ];

  // Metrics
  const metrics = {
    totalJobPostings: { value: 15, icon: <FaBriefcase className="text-blue-500 text-4xl" /> },
    candidatesAssessed: { value: 120, icon: <FaClipboardCheck className="text-green-500 text-4xl" /> },
    hiredCandidates: { value: 35, icon: <FaUserCheck className="text-purple-500 text-4xl" /> },
    avgApplicantsPerJob: { value: 50, icon: <FaUsers className="text-yellow-500 text-4xl" /> },
    interviewSuccessRate: { value: "29%", icon: <FaChartLine className="text-indigo-500 text-4xl" /> },
    avgTimeToHire: { value: "15 days", icon: <FaClock className="text-orange-500 text-4xl" /> },
    pendingInterviews: { value: 8, icon: <FaUserTie className="text-red-500 text-4xl" /> },
    rejectedCandidates: { value: 85, icon: <FaTimes className="text-gray-500 text-4xl" /> },
    offersAccepted: { value: 30, icon: <FaCheckCircle className="text-green-500 text-4xl" /> },
    totalAssessmentsSent: { value: 180, icon: <FaFileAlt className="text-blue-600 text-4xl" /> },
  };

  // Graph Data
  const jobPostingData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Job Postings Over Time",
        data: [3, 2, 4, 5, 1],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const assessmentData = {
    labels: ["Technical Round", "HR Round", "Final Interview"],
    datasets: [
      {
        label: "Candidates in Each Round",
        data: [80, 50, 35],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <RecruiterNavbar />
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Recruiter Dashboard</h2>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(metrics).map(([key, { value, icon }]) => (
            <div key={key} className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4">
              {icon}
              <div>
                <p className="text-gray-600">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                <h3 className="text-2xl font-bold">{value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Job Postings Trend</h3>
            <Bar data={jobPostingData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Assessment Progress</h3>
            <Pie data={assessmentData} />
          </div>
        </div>

        {/* Favorite Students */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Favorite Students</h3>
          <ul className="space-y-3">
            {favoriteStudents.map((student) => (
              <li key={student.id} className="border-b pb-2 flex justify-between">
                <span>
                  <strong>{student.name}</strong> - {student.problemsSolved} Problems Solved - {student.mainTopic}
                </span>
                <button className="bg-green-500 text-white px-3 py-1 rounded">View Profile</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Previous Job Postings */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Previous Job Postings</h3>
          <ul className="space-y-3">
            {jobPostings.map((job) => (
              <li key={job.id} className="border-b pb-2 flex justify-between">
                <span>
                  <strong>{job.title}</strong> - {job.date} - {job.applicants} Applicants
                </span>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => setSelectedJob(job)}
                >
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal for Job Posting Details */}
      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedJob.title}</h3>
              <button className="text-gray-500" onClick={() => setSelectedJob(null)}>
                <FaTimes />
              </button>
            </div>
            <p className="text-gray-700"><strong>Date Posted:</strong> {selectedJob.date}</p>
            <p className="text-gray-700"><strong>Applicants:</strong> {selectedJob.applicants}</p>
            <p className="text-gray-700 mt-2">{selectedJob.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruiterProfile;
