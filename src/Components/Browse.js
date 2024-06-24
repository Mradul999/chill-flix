import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {useNowPlayingMovies} from "../hooks/useNowPlayingMovies.js";
import { VideContainer } from "./VideoContainer.js";
import { ListContainer } from "./ListContainer.js";
import { usePopularMovies } from "../hooks/usePopularMovies.js";
import { useTopratedMovies } from "../hooks/useTopRatedMovies.js";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies.js";
import { LOGO } from "../utils/constants.js";






export const Browse = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();






 

  function signOutHandler() {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  }

  return (
    
    <div className="w-screen relative hide-scrollbar pb-10 bg-black ">
        {/* //logo and signout button  */}
      <div className=" flex  w-screen z-10   absolute bg-red-600  ">
      <img
        className="w-[10rem] h-[5rem] mx-10 mt-36 gap-2 absolute"
        src={LOGO}
        alt="logo"
      />
        <div className="flex items-center mx-10 mt-40 gap-2 absolute  right-0 ">
          {user?.photoURL && (
            <img src={user.photoURL} alt="User" className="rounded-sm h-12" />
          )}
          <button
            onClick={signOutHandler}
            className="bg-red-600 py-2 px-4 rounded-md  text-white font-semibold text-[13px]"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* //video container */}
      <VideContainer/>
      <ListContainer/>

    </div>
  );
};
