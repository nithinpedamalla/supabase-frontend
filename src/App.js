import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Welcome  from "./components/Welcome";
import HomePage from "./components/HomePage";


function App() {
  return (
  
      <Router>
         <Routes>
         <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-phone" element={<VerifyPhone />} />
        <Route path="/welcome" element={<Welcome />} />

      </Routes>
      </Router>
     
   
  );
}

export default App;
