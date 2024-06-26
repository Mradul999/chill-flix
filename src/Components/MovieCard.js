import { IMG_URL } from "../utils/constants";
import "./MovieCard.css";

export const MoviesCard = ({ poster, overview, vote_average }) => {
  return (
    <div className="cursor-pointer lg:w-[130px] md:w-[110px] w-[80px] mr-4 movie-tile sm:w-[100px]">
      <img
        className="w-full image-tile"
        src={IMG_URL + poster}
        alt="Movie Poster"
      />
    </div>
  );
};
