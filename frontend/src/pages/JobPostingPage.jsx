import RecruiterNavbar from "../components/RecruiterNavbar";

const RecruiterJobPosting = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <RecruiterNavbar />
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Post a Job</h2>

        <form className="bg-white p-6 rounded-lg shadow-md">
          <input type="text" placeholder="Job Title" className="w-full p-2 border rounded mb-3" />
          <input type="text" placeholder="Job ID" className="w-full p-2 border rounded mb-3" />
          <input type="text" placeholder="Company Name" className="w-full p-2 border rounded mb-3" />
          <textarea placeholder="Job Description" className="w-full p-2 border rounded mb-3"></textarea>
          <input type="text" placeholder="Skills Required" className="w-full p-2 border rounded mb-3" />
          <input type="text" placeholder="Salary (Optional)" className="w-full p-2 border rounded mb-3" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Post Job</button>
        </form>
      </div>
    </div>
  );
};

export default RecruiterJobPosting;
