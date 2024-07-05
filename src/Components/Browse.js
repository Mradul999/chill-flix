import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { removeUser } from "../utils/userSlice";
import {  useNavigate } from "react-router-dom";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies.js";
import { VideContainer } from "./VideoContainer.js";
import { ListContainer } from "./ListContainer.js";
import { usePopularMovies } from "../hooks/usePopularMovies.js";
import { useTopratedMovies } from "../hooks/useTopRatedMovies.js";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies.js";

import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { toggleGPTsearch } from "../utils/gptSlice.js";
import { GPTsearch } from "./GPTsearch.js";



export const Browse = () => {
  const user = useSelector((store) => store.user);
  const showGPTsearch = useSelector((store) => store.gpt.showGPTsearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  // const [showSearchBar, setShowSearchBar] = useState(false);

  const userClickHandler = () => {
    dispatch(toggleGPTsearch());
  };

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
    <div className="w-screen relative hide-scrollbar  pb-10 bg-black  hide-scrollbar  ">
      {/* //logo and signout button  */}
      <div className=" flex  w-screen z-40 absolute   ">
        <h1 className="text-red-600 font-bold text-[2.3rem]  ml-12 mt-3 ">CHILLFLIX</h1>

        

        <IoMdSearch
          onClick={userClickHandler}
          className={`text-[30px] ${
            showGPTsearch ? "text-red-600 " : "text-white"
          } cursor-pointer   absolute mt-6 right-20`}
        />
        <div className="flex items-center mx-6 mt-6  gap-2 absolute group      right-0 ">
          <FaUserCircle
            // onClick={userClickHandler}
            className="text-[30px] text-red-600  cursor-pointer"
          />
          <div className=" scale-0   group-hover:scale-110 transition-all duration-300    ">
            <div className="absolute bg-black  bg-opacity-80  p-4 rounded-md top-1 right-2 mt-5 ">
              <p className="text-white text-[13px]">{user.displayName}</p>,
              <button
                onClick={signOutHandler}
                className="bg-red-600 py-2   w-[6rem]      rounded-md  text-white font-semibold text-[13px]"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {showGPTsearch ? (
        <GPTsearch></GPTsearch>
      ) : (
        <>
          <VideContainer></VideContainer>
          <ListContainer></ListContainer>
        </>
      )}
    </div>
  );
};
