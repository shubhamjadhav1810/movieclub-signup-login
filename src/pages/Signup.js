import React from "react"
import signupimage from "../assets/signup.jpg";
import Template from "../components/Template.js";


const Signup =({setIsLoggedin})=>{
    return(
        <Template
          title="Welcome to Movie Club"
          desc1="Find your favourite movies here"
          desc2="Sign Up here"
          image={signupimage}
          formType="signup"
          setIsLoggedin={setIsLoggedin}
          />
    )
}

export default Signup;