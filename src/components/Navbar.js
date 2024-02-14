import React from "react"
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import toast from "react-hot-toast";

const Navbar=(props)=>{
    let isLoggedin=props.isLoggedin;
    let setIsLoggedin=props.setIsLoggedin;
  return(
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
     <Link to="/">
        <img src={logo} alt="logo" width={100} height={32} loading="lazy"/>

     </Link>

      <nav>
        <ul className="flex gap-4  " >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
       {!isLoggedin &&
        <Link to="/login"> 
        <button className="bg-richblack-700 py-[8px] px-[12px] rounded-[8px] text-white border border-richblack-400 hover:bg-blue-400">Login</button>
        </Link>
       }
        { !isLoggedin &&
        <Link to="/signup"> 
        <button className="bg-richblack-700 py-[8px] px-[12px] rounded-[8px] text-white border border-richblack-400 hover:bg-blue-400">Signup</button>
        </Link>
       }
       
        { isLoggedin &&
        <Link to="/"> 
        <button onClick={()=>{
            setIsLoggedin(false);
            toast.success("Logged Out");
        }} className="bg-richblack-700 py-[8px] px-[12px] rounded-[8px] text-white border border-richblack-400 hover:bg-blue-400">Log out</button>
        </Link>

       }
        { isLoggedin &&
        <Link to="/dashboard"> 
        <button className="bg-richblack-700 py-[8px] px-[12px] rounded-[8px] text-white border border-richblack-400 hover:bg-blue-400">Dashboard</button>
        </Link>
       }

      </div>
    </div>
  )

}

export default Navbar;