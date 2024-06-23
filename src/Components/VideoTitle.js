import { FaPlay } from "react-icons/fa6";
import { GrCircleInformation } from "react-icons/gr";
export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen pt-[25%] bg-gradient-to-r aspect-video  from-black   px-20 flex gap-6 flex-col absolute text-white ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-[14px] max-w-[30rem]">{overview}</p>
      <div className="flex flex-row gap-3">
        <button className="bg-red-600 hover:bg-red-400 py-2 px-7 items-center gap-1 rounded flex text-white font-semibold text-[18px] ">
          <FaPlay className="text-[23px]" />
          Play
        </button>
        <button className="bg-red-600 hover:bg-red-400 py-1 px-7 flex items-center gap-1 rounded text-white font-semibold text-[18px] ">
        <GrCircleInformation className="text-[23px]" />

          More Info
        </button>
      </div>
    </div>
  );
};
