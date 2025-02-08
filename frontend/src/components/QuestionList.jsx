import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionList = ({ questions }) => {
  return (
    <div className="mt-4">
      {questions.length > 0 ? (
        questions.map((question) => <QuestionCard key={question.id} question={question} />)
      ) : (
        <p className="text-gray-600">No questions found.</p>
      )}
    </div>
  );
};

export default QuestionList;
