import {Link} from "react-router-dom";
const LoginLandingPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="flex justify-between items-center w-11/12 max-w-7xl p-8">
        
        {/* For Companies Section */}
        <div className="bg-white p-10 rounded-lg shadow-md w-1/3">
          <h2 className="text-3xl font-bold text-center mb-4">For Recruiters</h2>
          <p className="text-center mb-6">
            We are the market-leading technical interview platform to identify and hire developers with the right skills.
          </p>
          <div className="text-center">
            <Link to="/LoginPageRecruiter">
            <button className="w-32 text-white py-2 rounded-full bg-violet-500 dark:bg-violet-500 hover:bg-violet-700">
              Login
            </button>
            </Link>
          </div>
        </div>

        {/* For Developers Section */}
        <div className="bg-white p-10 rounded-lg shadow-md w-1/3">
          <h2 className="text-3xl font-bold text-center mb-4">For Developers</h2>
          <p className="text-center mb-6">
            Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.
          </p>
          <div className="text-center">
            <Link to="/LoginPageUser">
            <button className="w-32 text-white py-2 rounded-full bg-violet-500 dark:bg-violet-500 hover:bg-violet-700">
              Login
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLandingPage;
