import React from "react";

const FilterBar = ({ selectedTags, toggleTagSelection, difficulty, setDifficulty }) => {
  const allTags = ["Array", "String", "Graph", "DP", "Tree", "Sorting", "Searching"];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Multi-Select Tags */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTagSelection(tag)}
            className={`px-3 py-1 rounded-lg ${
              selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Difficulty Filter */}
      <select
        className="border border-gray-300 px-4 py-2 rounded-lg"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="All">Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
};

export default FilterBar;
