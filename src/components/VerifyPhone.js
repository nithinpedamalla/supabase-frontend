import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyPhone = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const API_URL = "https://supabase-backend-production-5efc.up.railway.app";

  const sendOTP = async () => {
    try {
      await axios.post(`${API_URL}/send-otp`, { phone });
      alert("OTP sent to your phone!");
    } catch (error) {
      alert(error.response?.data?.error || "Failed to send OTP");
    }
  };

  const verifyOTP = async () => {
    try {
      await axios.post(`${API_URL}/verify-otp`, { phone, otp });
      alert("Phone verified! You can now login.");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.error || "OTP verification failed");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="p-6 bg-gray-100 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Verify Phone</h2>
        <input type="tel" placeholder="Phone Number" className="block w-full p-2 mb-2 border" onChange={(e) => setPhone(e.target.value)} required />
        <button onClick={sendOTP} className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Send OTP</button>
        <input type="text" placeholder="Enter OTP" className="block w-full p-2 mb-2 border" onChange={(e) => setOtp(e.target.value)} required />
        <button onClick={verifyOTP} className="bg-green-500 text-white px-4 py-2 rounded">Verify</button>
      </div>
    </div>
  );
};

export default VerifyPhone;
