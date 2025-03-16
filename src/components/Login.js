import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API_URL="supabase-backend-production-5efc.up.railway.app"
 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      alert(res.data.message);
      navigate("/signup");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={handleLogin} className="p-6 bg-gray-100 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="block w-full p-2 mb-2 border" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="block w-full p-2 mb-2 border" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
      </form>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Login;
