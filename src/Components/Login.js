import loginBg from "./images/loginBg.jpg";
import { NavLink } from "react-router-dom";
export const Login = () => {

    function signupHandler(){

    }
  return (
    <div className="relative  ">
      <img
        src={loginBg}
        className="w-screen h-screen absolute  "
        alt="bg"
      ></img>
      {/* <div className="absolute w-full h-full bg-black  opacity top-0"></div> */}
      <img
        className="absolute top-0  w-[10rem] h-[5rem] m-6 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      <div className=" ">
        <form className="flex flex-col justify-center absolute p-14    my-52 left-0 right-0 mx-auto  rounded-lg w-3/12 bg-black bg-opacity-80  text-white ">
          <h1 className="text-white text-[25px] mb-10 font-semibold">
            Sign In
          </h1>
          <label className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your Email"
              className="h-14 mb-8 rounded-md pl-2 text-[1.2rem] placeholder:text-white bg-gray-500"
            ></input>
          </label>
          <label className="flex flex-col">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="h-14 mb-8 rounded-md px-2 text-[1.2rem] placeholder:text-white  bg-gray-500"
            ></input>
          </label>

          <button className="bg-red-600 py-3 px-5 rounded-md mb-10   text-xl">
            Sign In
          </button>
          <div className="mx-auto flex gap-3  items-center text-xl font-semibold">New to Chillflix?<NavLink to='/signup'><button  className=" bg-red-600 py-2 px-4 rounded-lg">Sign Up</button></NavLink>  </div>
        </form>
      </div>
    </div>
  );
};
