import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API_URL="https://supabase-backend-production-5efc.up.railway.app"


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const { data, error } = await supabase
            .from("users")
            .insert([{ email, password }]);

        if (error) {
            console.error("Signup error:", error);
        } else {
            alert("User signed up successfully");
            navigate("/login");
        }
    } catch (err) {
        console.error("Unexpected error:", err);
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
