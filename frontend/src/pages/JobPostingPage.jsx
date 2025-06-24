// import RecruiterNavbar from "../components/RecruiterNavbar";

// const RecruiterJobPosting = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <RecruiterNavbar />
//       <div className="container mx-auto px-6 py-8">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">Post a Job</h2>

//         <form className="bg-white p-6 rounded-lg shadow-md">
//           <input type="text" placeholder="Job Title" className="w-full p-2 border rounded mb-3" />
//           <input type="text" placeholder="Job ID" className="w-full p-2 border rounded mb-3" />
//           <input type="text" placeholder="Company Name" className="w-full p-2 border rounded mb-3" />
//           <textarea placeholder="Job Description" className="w-full p-2 border rounded mb-3"></textarea>
//           <input type="text" placeholder="Skills Required" className="w-full p-2 border rounded mb-3" />
//           <input type="text" placeholder="Salary (Optional)" className="w-full p-2 border rounded mb-3" />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">Post Job</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RecruiterJobPosting;

import React, { useState } from "react";
import RecruiterNavbar from "../components/RecruiterNavbar";

const RecruiterJobPosting = () => {
  // State to store form data
  const [jobData, setJobData] = useState({
    title: "",
    jobId: "",
    companyName: "",
    description: "",
    skillsRequired: "",
    salary: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        alert("Job posted successfully!");
        setJobData({
          title: "",
          jobId: "",
          companyName: "",
          description: "",
          skillsRequired: "",
          salary: "",
        });
      } else {
        alert("Failed to post job");
      }
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <RecruiterNavbar />
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Post a Job</h2>

        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <input type="text" name="title" value={jobData.title} onChange={handleChange} placeholder="Job Title" className="w-full p-2 border rounded mb-3" required />
          <input type="text" name="jobId" value={jobData.jobId} onChange={handleChange} placeholder="Job ID" className="w-full p-2 border rounded mb-3" required />
          <input type="text" name="companyName" value={jobData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded mb-3" required />
          <textarea name="description" value={jobData.description} onChange={handleChange} placeholder="Job Description" className="w-full p-2 border rounded mb-3" required></textarea>
          <input type="text" name="skillsRequired" value={jobData.skillsRequired} onChange={handleChange} placeholder="Skills Required" className="w-full p-2 border rounded mb-3" required />
          <input type="text" name="salary" value={jobData.salary} onChange={handleChange} placeholder="Salary (Optional)" className="w-full p-2 border rounded mb-3" />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default RecruiterJobPosting;
