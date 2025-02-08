import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import DevNavbar from "../components/DevNavbar";
import FilterBar from "../components/FilterBar";
import { questionsData } from "../data/questionsData";

const DevHomePage = () => {
  const [selectedTags, setSelectedTags] = useState([]); // Multi-select tags
  const [difficulty, setDifficulty] = useState("All");
  const navigate = useNavigate(); // Hook for navigation

  const toggleTagSelection = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredQuestions = questionsData
    .map((q, index) => ({
      ...q,
      id: index + 1,
    }))
    .filter((q) => {
      const matchesTag =
        selectedTags.length === 0 || selectedTags.some((tag) => q.tags.includes(tag));
      const matchesDifficulty = difficulty === "All" || q.difficulty === difficulty;
      return matchesTag && matchesDifficulty;
    });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar for Navigation */}
      <DevNavbar />

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">🔥 Coding Problems</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Solve curated coding problems, filter by difficulty, and track your progress.
        </p>

        {/* Filter Bar with Multi-Select Tags */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <FilterBar
            selectedTags={selectedTags}
            toggleTagSelection={toggleTagSelection}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>

        {/* Questions Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Difficulty</th>
                <th className="px-4 py-2">Tags</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((question) => (
                  <tr
                    key={question.id}
                    className="border-b hover:bg-gray-100 transition duration-200"
                  >
                    <td className="px-4 py-3 text-gray-900 font-medium">{question.id}</td>
                    <td
                      className="px-4 py-3 text-blue-600 font-semibold cursor-pointer hover:underline"
                      onClick={() => navigate(`/problem/${question.id}`)} // Navigate to problem page
                    >
                      {question.title}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-white ${
                          question.difficulty === "Easy"
                            ? "bg-green-500"
                            : question.difficulty === "Medium"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      >
                        {question.difficulty}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{question.tags.join(", ")}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-4">
                    No questions found for the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DevHomePage;
