import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { questionsData } from "../data/questionsData";
import DevNavbar from "../components/DevNavbar";
import { FaPlay, FaUpload, FaTerminal } from "react-icons/fa";
import AceEditor from "react-ace";

// Import language modes & themes
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

const ProblemDetailPage = () => {
  const { id } = useParams();
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState("");

  useEffect(() => {
    const problem = questionsData.find((q) => q.id === parseInt(id));
    setSelectedProblem(problem);
  }, [id]);

  const handleRunCode = () => {
    setShowTerminal(true);
    setTerminalOutput("✅ Code compiled successfully! No syntax errors.");
  };

  const handleSubmitCode = () => {
    setShowTerminal(true);
    setTerminalOutput("🚀 Code submitted! Processing test cases...");
  };

  return (
    <div className="h-screen bg-gray-100">
      <DevNavbar />

      <div className="h-full flex">
        {/* Left Side - Problem Statement */}
        <div className="w-1/2 p-8 bg-white overflow-y-auto">
          {selectedProblem ? (
            <>
              <h1 className="text-4xl font-bold text-gray-900 flex items-center">
                {selectedProblem.title}
                <span
                  className={`ml-3 px-4 py-1 text-lg rounded-full text-white ${
                    selectedProblem.difficulty === "Easy"
                      ? "bg-green-500"
                      : selectedProblem.difficulty === "Medium"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {selectedProblem.difficulty}
                </span>
              </h1>

              <p className="text-gray-700 text-lg mt-4">
                🔹 <b>Tags:</b> {selectedProblem.tags.join(", ")}
              </p>

              <h2 className="text-2xl font-semibold mt-6">📝 Problem Statement</h2>
              <p className="text-gray-600 text-lg mt-2">
                Implement the function to solve "{selectedProblem.title}". You are given...
              </p>

              <h2 className="text-2xl font-semibold mt-6">📌 Example Test Case</h2>
              <pre className="bg-gray-100 p-4 rounded-md text-lg mt-2">
                <code>
                  Input: [2, 7, 11, 15], target = 9{"\n"}
                  Output: [0, 1]{"\n"}
                  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                </code>
              </pre>

              <h2 className="text-2xl font-semibold mt-6">📥 Input Format</h2>
              <p className="text-gray-600 text-lg mt-2">An array of integers and a target value.</p>

              <h2 className="text-2xl font-semibold mt-6">📤 Output Format</h2>
              <p className="text-gray-600 text-lg mt-2">Return indices of the two numbers that add up to target.</p>
            </>
          ) : (
            <p className="text-gray-700 text-center text-2xl">⚠️ Problem not found!</p>
          )}
        </div>

        {/* Right Side - Code Editor */}
        <div className="w-1/2 p-8 bg-gray-200">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
            {/* Header with Language Selector */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">💻 Code Editor</h2>
              <select
                className="border p-2 rounded text-gray-700 text-lg"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
              </select>
            </div>

            {/* Code Editor */}
            <div className="flex-grow">
              <AceEditor
                mode={language}
                theme="monokai"
                value={code}
                onChange={(newCode) => setCode(newCode)}
                name="codeEditor"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                height="500px"
                className="border rounded-lg"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-6 mt-6">
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg flex items-center hover:bg-blue-600 transition"
                onClick={handleRunCode}
              >
                <FaPlay className="mr-3" /> Run
              </button>
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg flex items-center hover:bg-green-600 transition"
                onClick={handleSubmitCode}
              >
                <FaUpload className="mr-3" /> Submit
              </button>
            </div>

            {/* Terminal Output - Visible Only After Run/Submit */}
            {showTerminal && (
              <div className="bg-black text-white p-6 mt-6 rounded-lg">
                <h3 className="text-xl font-semibold flex items-center">
                  <FaTerminal className="mr-3" /> Terminal Output
                </h3>
                <pre className="mt-3 text-lg">{terminalOutput}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetailPage;
