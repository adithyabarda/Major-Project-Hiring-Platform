import { useState, useEffect } from "react";
import RecruiterNavbar from "../components/RecruiterNavbar";
import { FaFilter, FaEnvelope, FaStar } from "react-icons/fa";

const RecruiterStudents = () => {
  const [students, setStudents] = useState([]);
  const [minSolved, setMinSolved] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");

  // ✅ Fetch Students from Backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5001/students");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };
    fetchStudents();
  }, []);

  // ✅ Toggle Favorite Status in Database
  const toggleFavorite = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/students/${id}/favorite`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error("Failed to update favorite status");
      }
  
      const updatedStudent = await response.json();
  
      // Update the local students state with the updated favorite status
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student._id === id ? { ...student, isFavorite: updatedStudent.student.isFavorite } : student
        )
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  // ✅ Apply Filters
  const filteredStudents = students.filter((student) => {
    return (
      (minSolved === "" || student.problemsSolved >= parseInt(minSolved)) &&
      (selectedTopic === "All Topics" || student.mainTopic === selectedTopic)
    );
  });

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
                <tr key={student._id} className="border-b">
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.problemsSolved}</td>
                  <td className="p-3">{student.mainTopic}</td>
                  <td className="p-3">
                    <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center space-x-2">
                      <FaEnvelope />
                      <span>Send Assessment</span>
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button onClick={() => toggleFavorite(student._id)}>
                      <FaStar
                        className={`text-2xl ${
                          student.isFavorite ? "text-yellow-400" : "text-gray-400"
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
