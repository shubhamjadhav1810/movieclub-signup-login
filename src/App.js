import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Dashboard from "./pages/Dashboard.js";
import {useState} from "react";
 


function App() {

  const [isLoggedin, setIsLoggedin] =useState(false);
  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin}/>}/>
        <Route path="/Signup" element={<Signup setIsLoggedin={setIsLoggedin}/>}/>
        <Route path="/Dashboard" element={<Dashboard/> }/>
         
         
      </Routes>
    </div>
  )
}

export default App;
