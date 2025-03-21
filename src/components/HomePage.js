import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <p className="mb-4">Please log in or sign up to continue.</p>
      <div>
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Login</Link>
        <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</Link>
      </div>
    </div>
  );
};

export default HomePage;
