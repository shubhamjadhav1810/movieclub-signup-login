import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm.js";
import SignupForm from "./SignupForm.js";
import {FcGoogle} from "react-icons/fc";

const Template =({title,desc1,desc2,image,formType, setIsLoggedin})=>{
    return(
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
         <div className="w-11/12 max-w-[450px]"> 
           <h1 className="font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>

           <p className="text-[1.125rem] leading-[1.625rem] mt-4">
            <span>{desc1}</span>
            <br/>
            <span className="text-blue-100 italic">{desc2}</span>
           </p>

           {formType==="signup"?
           (<SignupForm setIsLoggedin={setIsLoggedin}/>):
           (<LoginForm setIsLoggedin={setIsLoggedin}/>)}

           <div className="flex w-full items-center my-4 gap-x-2">
            <div className="w-full h-[1px] bg-richblack-700"></div>
            <p className=" font-medium leading-[1.375rem]">OR</p>
            <div className="w-full h-[1px] bg-richblack-700"></div>
           </div>

           <button className="w-full flex justify-center text-white border border-richblack-400 bg-richblack-700 hover:bg-blue-400 py-[8px] px-[12px] rounded-[8px] 
           items-center gap-x-2">
            <FcGoogle/>
            <p> Continue with GOOGLE</p>
           </button>

         </div>

         <div className="relative w-11/12 max-w-[450px]">
           <img src={frameImage} alt="frame" className="width-[558] height-[504] loading-lazy"/>
           <img src={image} alt="loginImage" className="width-[558] height-[490] loading-lazy absolute -top-4 right-4"/>
         </div>
        </div>
    )
}

export default Template;