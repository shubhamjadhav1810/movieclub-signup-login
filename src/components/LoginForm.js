import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm =({setIsLoggedin})=>{

    const navigate=useNavigate();

    const[formData,setFormData]=useState({
        email:"",password:""
    })

    const[showPassword,setShowPassword]=useState(false);


    function changeHandler(event){
        setFormData((prevdata)=>(
        {
            ...prevdata,
            [event.target.name]:event.target.value
        })

        )
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedin(true);
        toast.success("Logged In");
        navigate("/Dashboard");
    }

    return(
        <form className="flex flex-col w-full gap-y-4 mt-6"onSubmit={submitHandler}>
            <label className="w-full">
                <p>Email Address<sup className="text-pink-200">*</sup></p>
            <input
             required
             type="email"
             value={formData.email}
             onChange={changeHandler}
             name="email"
             placeholder="enter email address"
             className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[8px]"
             />
            </label>

             

            <label className="w-full relative">
                <p>Password<sup className="text-pink-200">*</sup></p>

            <input
             required
             type={showPassword?("text"):("password")}
             value={formData.password}
             onChange={changeHandler}
             name="password"
             placeholder="enter password"
             className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[8px]"
             />

             <span
             className="absolute right-3 top-[35px] cursor-pointer"
             onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF"/>)
                :(<AiOutlineEye fontSize={20} fill="#AFB2BF"/>)}
             </span>
             <Link to="#">
               <p className="mt-1 text-xs text-blue-100 max-w-max ml-auto">forgot password</p>
             </Link>
            </label>

            <button className="bg-yellow-50 font-medium rounded-[8px] py-[10px] px-[8px]">
                Sign In
            </button>

             
        </form>
    )
}

export default LoginForm;