import { IMG_URL } from "../utils/constants";

export const MoviesCard = ({ poster }) => {
  return (
    <div className=" w-[190px] mr-4 ">
      <img className="w-full h-full " src={IMG_URL + poster} alt="Movie Poster" />
    </div>
  );
};
