import React from "react";

const difficultyColors = {
  Easy: "text-green-600",
  Medium: "text-yellow-600",
  Hard: "text-red-600",
};

const QuestionCard = ({ question }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg mb-2">
      <h3 className="text-lg font-semibold">{question.title}</h3>
      <div className="flex space-x-2">
        {question.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
      <span className={`font-semibold ${difficultyColors[question.difficulty]}`}>
        {question.difficulty}
      </span>
    </div>
  );
};

export default QuestionCard;
