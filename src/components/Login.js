import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API_URL="https://railway.com/project/d2b4c7e5-40ba-40d3-b5b1-f62fc8b45ebb/service/e1f7d103-a56e-496f-b7f6-713a063ab93a?environmentId=2e9790b4-825a-4927-9a47-1e8e8e2ddc49"
 

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
