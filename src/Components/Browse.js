import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {usenowPlayingMovies} from "../hooks/usenowPlayingMovies.js";
import { VideContainer } from "./VideoContainer.js";
import { ListContainer } from "./ListComponent.js";




export const Browse = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  usenowPlayingMovies();







 

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
    <div className="w-screen relative ">
        {/* //logo and signout button  */}
      <div className=" flex  w-screen z-10   absolute bg-red-600  ">
        <img
          className="w-[10rem] h-[5rem] mx-10 my-10 gap-2 absolute "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <div className="flex items-center mx-10 my-10 gap-2 absolute  right-0 ">
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
      {/* <ListContainer/> */}

    </div>
  );
};
