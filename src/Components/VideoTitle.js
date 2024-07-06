import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

import { NavLink, useNavigate } from "react-router-dom";

export const VideoTitle = () => {
  const navigate = useNavigate();
  function clickhandler() {
    navigate("/movieinfo", {
      state: {
        poster: "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
        movieId: 1010581,
        overview:
          "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
        vote_average: 7.97,
        releaseDate: "2023-06-8",
        voteCount: 2661,
        popularity: 498.481,
        title: "My Fault",
      },
    });
  }
  return (
    <div className="sm:max-w-[40%] pt-[25%]  sm:pt-[15%] aspect-video  pl-3 sm:pl-12 flex flex-col gap-5 sm:gap-6 absolute text-white z-10   ">
      <h1 className="sm:text-4xl text-xl  font-bold ">My Fault</h1>
      <p className=" text-gray-400 ] text-[10px] sm:text-2xl hidden sm:block  ">
        A young woman who moves into a mansion with her mother, Rafaella, and
        her new billionaire husband. Amid this change, she finds herself
        navigating a potential conflict-fuelled romance with her stepbrother
        Nick.
      </p>
      <div className="flex flex-row gap-4  items-center">
        <NavLink to="/watch">
          <button className="bg-red-600 hover:bg-red-400 py-[4px] px-[8px] flex items-center gap-1 rounded text-white font-semibold text-[13px] sm:text-[16px] sm:px-5 sm:py-1 md:text-[17px]">
            <FaPlay className="text-[13px] sm:text-[20px]" />
            Play
          </button>
        </NavLink>

        <button
          onClick={clickhandler}
          className="bg-red-600 hover:bg-red-400 py-[4px] px-[8px] flex items-center gap-1 rounded text-white font-semibold text-[13px] sm:text-[16px] sm:px-5 sm:py-1 md:text-[17px]"
        >
          <MdInfoOutline className="text-[15px] sm:text-[23px]" />
          More Info
        </button>
      </div>
    </div>
  );
};
