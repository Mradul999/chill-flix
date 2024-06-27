import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import "./VideoTitle.css";
import { NavLink, Navigate } from "react-router-dom";

export const VideoTitle = ({ title, overview }) => {
  function playHandler() {
    Navigate("/watch");
  }
  return (
    <div className="w-[100%]  sm:pt-[13%] md:pt-[20%] pt-[15%] aspect-video element-with-gradient bg-cover bg-center px-10 sm:px-20 flex flex-col gap-2 sm:gap-6 absolute text-white   ">
      <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl">My Fault</h1>
      <p className="lg:text-[15px] sm:text-[13px] text-[11px] max-w-[40rem] ">
        Noah leaves her town with her mother Rafaella, leaving behind her
        boyfriend Dan and her friends, to move into the mansion of her mother's
        new husband William Leister. She meets her step brother Nick and they
        start hating each other. William organizes a dinner so that the whole
        family can get to know each other. Nick and Noah clash with each other
        during the dinner.
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
