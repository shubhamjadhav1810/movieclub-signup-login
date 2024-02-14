import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm =({setIsLoggedin})=>{

    const[formData,setFormData]=useState({
        firstname:"",lastname:"",email:"", password:"",confirmpassword:""
    })
    const[showPassword,setShowPassword]=useState(false);
    const[showConfirmPassword,setShowConfirmPassword]=useState(false);
    const[accountType,setAccountType]=useState("User");

    const navigate=useNavigate();

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
        if(formData.password!==formData.confirmpassword){
            toast.error("passwords do not match");
            return;
        }

        setIsLoggedin(true);
        toast.success("account created");

        const accountdata={
            ...formData,
            accountType
        }

        console.log("account info :");
        console.log(accountdata);
        navigate("/Dashboard");

        
    }
    return(
        <div>
            <div className="flex bg-richblack-700 rounded-full text-richblack-5  p-1 gap-x-2 my-6   max-w-max">
                <button
                 className={`${accountType==="User"?"bg-richblack-900 text-richblack-5"
                 :"bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200"`}
                 onClick={()=>{
                    setAccountType("User")
                }}>User</button>
                <button 
                 className={`${accountType==="Admin"?"bg-richblack-900 text-richblack-5"
                 :"bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200"`}
                onClick={()=>{
                    setAccountType("Admin")
                }}>Admin</button>
            </div>

            <form onSubmit={submitHandler} className="mt-[15px]">
                <div className="flex gap-x-4 mt-[15px]">
                    {/* for first name and lastname */}
                <label>
                    <p className="w-full">First name <sup className="text-pink-200">*</sup></p>

                    <input
                    required
                    name="firstname"
                    type="text"
                    onChange={changeHandler}
                    placeholder="enter first name"
                    value={formData.firstname}
                    className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[8px]"
                    />
                </label>

                <label>
                    <p className="w-full">Last name <sup className="text-pink-200">*</sup></p>

                    <input
                    required
                    name="lastname"
                    type="text"
                    onChange={changeHandler}
                    placeholder="enter last name"
                    value={formData.lastname}
                    className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[8px]"
                    />
                </label>
                </div>

                <div className="mt-[15px]">
                <label className="w-full ">
                    <p className="w-full">Email address <sup className="text-pink-200">*</sup></p>

                    <input
                    required
                    name="email"
                    type="email"
                    onChange={changeHandler}
                    placeholder="enter email address"
                    value={formData.email}
                    className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[8px]"
                    />
                </label>
                </div>

                <div className="flex gap-x-4 mt-[15px]">
                <label className="relative w-full">
                    <p className="w-full">Create password <sup className="text-pink-200">*</sup></p>

                    <input
                    required
                    name="password"
                    type={showPassword?("text"):("password")}
                    onChange={changeHandler}
                    placeholder="enter password"
                    value={formData.password}
                    className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[8px]"
                    />
                    <span className="absolute right-3 top-[35px] cursor-pointer" onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF"/>)
                :(<AiOutlineEye fontSize={20} fill="#AFB2BF"/>)}
                </span>
                </label>
                <label className="relative w-full">
                    <p className="w-full">Confirm password <sup className="text-pink-200">*</sup></p>

                    <input
                    required
                    name="confirmpassword"
                    type={showConfirmPassword?("text"):("password")}
                    onChange={changeHandler}
                    placeholder="confirm your password"
                    value={formData.confirmpassword}
                    className=" bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[8px]"
                    />
                    <span
                    className="absolute right-3 top-[35px] cursor-pointer"
                    onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                {showConfirmPassword?(<AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF"/>)
                :(<AiOutlineEye fontSize={20} fill="#AFB2BF"/>)}
                    </span>
                </label>
                </div>

                <button className="bg-yellow-50 w-full font-medium rounded-[8px] py-[10px] px-[8px] mt-[20px]">
                    Create Account
                </button>

            </form>

        </div>
    )
}

export default SignupForm;