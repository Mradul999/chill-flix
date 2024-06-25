import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies.js";
import { VideContainer } from "./VideoContainer.js";
import { ListContainer } from "./ListContainer.js";
import { usePopularMovies } from "../hooks/usePopularMovies.js";
import { useTopratedMovies } from "../hooks/useTopRatedMovies.js";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies.js";
import { LOGO } from "../utils/constants.js";
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
    <div className="w-screen relative hide-scrollbar  pb-10 bg-black ">
      {/* //logo and signout button  */}
      <div className=" flex  w-screen z-10 absolute bg-red-600  ">
        <img
          className="w-[10rem] h-[5rem] mx-10 mt-5 gap-2 absolute"
          src={LOGO}
          alt="logo"
        />

        {/* <div className={`absolute right-[9rem]  flex items-center     bg-black border-white border-[1.3px]  bg-opacity-50 text-white text-[15px] py-2  rounded-lg mt-[10rem]   transition-all ease-in-out duration-400 ${
            showSearchBar ? "opacity-100 scale-x-100 " : "opacity-0 scale-x-0 border-none "
          }`}>
        {showSearchBar && <input placeholder="Titles,Genres,related" className="focus:outline-none w-full  bg-black pl-2 px-10 bg-opacity-0" type="text"></input>}

        </div> */}

        <IoMdSearch
          onClick={userClickHandler}
          className={`text-[30px] ${showGPTsearch? "text-red-600 ":"text-white"} cursor-pointer   absolute mt-8 right-24`}
        />
        <div className="flex items-center mx-10 mt-8  gap-2 absolute group      right-0 ">
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

      {showGPTsearch ? <GPTsearch></GPTsearch> : <>
      <VideContainer></VideContainer>
      <ListContainer></ListContainer>
      </>}
    </div>
  );
};
