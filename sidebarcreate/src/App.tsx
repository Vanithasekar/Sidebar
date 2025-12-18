import Sidebar from "./Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Address from "./Pages/Address/Address";
import { Routes, Route } from "react-router-dom";   
import "./App.css";

const App = () => {
  return (
  
      <div className="sidebar-allignment">
      
      <Sidebar />
       <div className="content-allignment">
     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </div>
    </div>
  
  );
};

export default App;
