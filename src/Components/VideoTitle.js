import { FaPlay } from "react-icons/fa";

import { NavLink, Navigate } from "react-router-dom";

export const VideoTitle = ({ title, overview }) => {
  function playHandler() {
    Navigate("/watch");
  }
  return (
    <div className="max-w-[40%]    pt-[15%] aspect-video   pl-12 flex flex-col gap-2 sm:gap-6 absolute text-white z-10   ">
      <h1 className="text-4xl  font-bold ">My Fault</h1>
      <p  className=" text-gray-400 ] text-2xl  ">
        A young woman who moves into a mansion with her mother, Rafaella, and
        her new billionaire husband. Amid this change, she finds herself
        navigating a potential conflict-fuelled romance with her stepbrother
        Nick.
      </p>
      <div className="flex flex-row gap-3">
        <NavLink to="/watch">
          <button className="bg-red-600 hover:bg-red-400 py-[4px] px-[8px] flex items-center gap-1 rounded text-white font-semibold text-[10px] sm:text-[16px] sm:px-5 sm:py-1 md:text-[17px]">
            <FaPlay
              onClick={playHandler}
              className="text-[10px] sm:text-[20px]"
            />
            Play
          </button>
        </NavLink>
      </div>
    </div>
  );
};
