import { useState } from "react";
import RecruiterNavbar from "../components/RecruiterNavbar";
import { FaFilter, FaEnvelope, FaStar } from "react-icons/fa";

const RecruiterStudents = () => {
  // Sample student data
  const studentsData = [
    { id: 1, name: "John Doe", problemsSolved: 250, topic: "Dynamic Programming" },
    { id: 2, name: "Jane Smith", problemsSolved: 300, topic: "Graph" },
    { id: 3, name: "Alice Johnson", problemsSolved: 180, topic: "Sorting & Searching" },
    { id: 4, name: "Bob Brown", problemsSolved: 350, topic: "Graph" },
    { id: 5, name: "Charlie Davis", problemsSolved: 120, topic: "Dynamic Programming" },
    { id: 6, name: "Daniel Wilson", problemsSolved: 270, topic: "Tree" },
  ];

  // State for filters
  const [minSolved, setMinSolved] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [favorites, setFavorites] = useState([]);

  // Filtering logic
  const filteredStudents = studentsData.filter((student) => {
    return (
      (minSolved === "" || student.problemsSolved >= parseInt(minSolved)) &&
      (selectedTopic === "All Topics" || student.topic === selectedTopic)
    );
  });

  // Toggle favorite student
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <RecruiterNavbar />
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Search Students</h2>

        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <input
            type="number"
            placeholder="Min Problems Solved"
            className="p-2 border rounded w-48"
            value={minSolved}
            onChange={(e) => setMinSolved(e.target.value)}
          />
          <select
            className="p-2 border rounded w-48"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option>All Topics</option>
            <option>Dynamic Programming</option>
            <option>Graph</option>
            <option>Sorting & Searching</option>
            <option>Tree</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2">
            <FaFilter />
            <span>Apply Filters</span>
          </button>
        </div>

        {/* Student List */}
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">Student Name</th>
              <th className="p-3">Problems Solved</th>
              <th className="p-3">Main Topic</th>
              <th className="p-3">Actions</th>
              <th className="p-3">Favorite</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.problemsSolved}</td>
                  <td className="p-3">{student.topic}</td>
                  <td className="p-3">
                    <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center space-x-2">
                      <FaEnvelope />
                      <span>Send Assessment</span>
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button onClick={() => toggleFavorite(student.id)}>
                      <FaStar
                        className={`text-2xl ${
                          favorites.includes(student.id) ? "text-yellow-400" : "text-gray-400"
                        }`}
                      />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No students match the filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecruiterStudents;
