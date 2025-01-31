const SignUpPageRecruiter = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-10 rounded-lg shadow-md w-120">
        <h2 className="text-2xl font-bold text-center mb-6">Recruiter Sign Up</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">
                Work Email
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Experience (in years)
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="w-32 text-white py-2 rounded-full bg-violet-500 dark:bg-violet-500 hover:bg-violet-700"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "} 
            <a
              href="/LoginPageRecruiter"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPageRecruiter;
