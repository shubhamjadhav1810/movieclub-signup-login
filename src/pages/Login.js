import React from "react"
import Template from "../components/Template.js";
import loginimage from "../assets/login.jpg";

const Login =({setIsLoggedin})=>{
    return(
        
          <Template
          title="Welcome to Movie Club"
          desc1="Find your favourite movies here"
          desc2="Top IMDB movies"
          image={loginimage}
          formType="login"
          setIsLoggedin={setIsLoggedin}
          />
        
    )
}

export default Login;