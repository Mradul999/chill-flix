import { NavLink } from "react-router-dom";
import signupBg from "./images/signupBg.jpg";

export const SignUp=()=>{
    return(
        <div className="relative  ">
      <img
        src={signupBg}
        className="w-screen h-screen absolute z-0  "
        alt="bg"
      ></img>
      {/* <div className="absolute top-0 left-0 z-10 bg-black bg-opacity-30 w-[100%] h-[100%]"></div> */}
      
      <img
        className="absolute top-0  w-[10rem] h-[5rem] m-6  "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
       <div className="mx-auto absolute right-10 top-10 text-white  flex gap-3  items-center text-xl font-semibold"> <NavLink to='/'><button  className=" bg-red-600 py-2 px-4 rounded-lg">Sign In</button></NavLink>  </div>
      <div className=" ">
        <form className="flex flex-col justify-center absolute p-14     my-40 left-0 right-0 mx-auto  rounded-lg w-3/12 bg-black bg-opacity-80  text-white ">
          <h1 className="text-white text-[25px] mb-10 font-semibold">
            Sign Up
          </h1>
          <label className="flex flex-col">

          <input
              type="text"
              placeholder=" Full Name"
              className="h-14 mb-8 rounded-md pl-2 text-[1.2rem] placeholder:text-white bg-gray-500"
            ></input>
            <input
              type="email"
              placeholder=" Email"
              className="h-14 mb-8 rounded-md pl-2 text-[1.2rem] placeholder:text-white bg-gray-500"
            ></input>
            
          </label>
          <label className="flex flex-col">
            <input
              type="password"
              placeholder=" Password"
              className="h-14 mb-8 rounded-md px-2 text-[1.2rem] placeholder:text-white  bg-gray-500"
            ></input>
          </label>

          <button className="bg-red-600 py-3 px-5 rounded-md mb-10   text-xl">
            Sign Up
          </button>
         
        </form>
      </div>
    </div>
    );
}