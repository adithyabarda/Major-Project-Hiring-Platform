import {Link} from "react-router-dom"
const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">CareerCatalyst</h1>
      <div>
      <Link
  to="/login"
  className="px-4 py-2 dark:bg-violet-500 text-white justify-center rounded-full hover:bg-violet-600 mx-2"
>
  Login
</Link>
<Link
  to="/signup"
  className="px-4 py-2 dark:bg-violet-500 text-white justify-center rounded-full hover:bg-violet-600 mx-2"
>
  Sign Up
</Link>

      </div>
    </div>
  </nav>
);

export default Navbar;