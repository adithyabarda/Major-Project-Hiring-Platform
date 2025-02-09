import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPageRecruiter = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Assume authentication is successful
    navigate("/recruiter/profile"); // Redirect to Recruiter Profile page
  };

  return (
    <div className="w-full h-screen flex justify-center items-center absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="w-full max-w-5xl flex justify-center">
        <div className="w-1/3 p-6 space-y-4 rounded-xl bg-white shadow-2xl dark:bg-white dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center mb-4">Login as Recruiter</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2 text-sm">
              <label className="block dark:text-gray-600">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-violet-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 text-sm">
              <label className="block dark:text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-300 focus:ring-violet-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-32 text-white py-2 rounded-full bg-violet-500 hover:bg-violet-700">
                Recruiter Login
              </button>
            </div>
          </form>
          <p className="text-xs text-center dark:text-gray-600">
            Don't have an account?{" "}
            <Link to="/Recruitersignup" className="underline dark:text-gray-800">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPageRecruiter;
