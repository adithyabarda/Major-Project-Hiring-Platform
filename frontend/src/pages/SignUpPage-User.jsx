const SignUpPageUser = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-10 rounded-lg shadow-md w-120">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
            <div>
              <label htmlFor="institute" className="block text-sm font-medium text-gray-700">
                Institute
              </label>
              <input
                type="text"
                id="institute"
                name="institute"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="gitProfile" className="block text-sm font-medium text-gray-700">
                GitHub Profile
              </label>
              <input
                type="url"
                id="gitProfile"
                name="gitProfile"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="codingProfile" className="block text-sm font-medium text-gray-700">
                Coding Profile (e.g., LeetCode, HackerRank)
              </label>
              <input
                type="url"
                id="codingProfile"
                name="codingProfile"
                required
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
          </div>
          <div className="mb-4 text-center">
            <button
              type="submit"
              className="w-32 dark:bg-violet-500 text-white py-2 rounded-full hover:bg-violet-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPageUser;
