import { checkValidData } from "../utils/validate";
import Header from "./Header";
import React, { useState,useRef } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage,setErrorMessage] = useState(null);

  const name=useRef(null);
  const email =useRef(null);
  const password =useRef(null);

  const handleButtonClick = () => {

   const message= checkValidData(email.current.value,password.current.value,name.current.value);
   setErrorMessage(message);
  }


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div class="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} class="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 class="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&(
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          class="p-4 my-4 w-full bg-gray-700"
        />
         ) }
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          class="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          class="p-4 my-4 w-full bg-gray-700"
        />
        <p class="text-red-500 p-4">{errorMessage}</p>
       <button class="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
        {isSignInForm ? "Sign In" : "Sign Up"}
       </button>
        <p class="p-4text-1l cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netfix? Sign Up Now."
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
