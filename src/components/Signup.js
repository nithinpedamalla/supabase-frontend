import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API_URL="https://railway.com/project/d2b4c7e5-40ba-40d3-b5b1-f62fc8b45ebb/service/e1f7d103-a56e-496f-b7f6-713a063ab93a?environmentId=2e9790b4-825a-4927-9a47-1e8e8e2ddc49"


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/signup`, { email, password });
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={handleSignup} className="p-6 bg-gray-100 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input type="email" placeholder="Email" className="block w-full p-2 mb-2 border" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="block w-full p-2 mb-2 border" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
