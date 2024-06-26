import { IMG_URL } from "../utils/constants";
import "./MovieCard.css";

export const MoviesCard = ({ poster, overview, vote_average }) => {
  return (
    <div className="relative group  max-w-[150px] flex-shrink-0 overflow-visible">
            <img
                className="w-full image-tile -z-2"
                src={IMG_URL + poster}
                alt="Movie Poster"
            />
            <div className="flex flex-col absolute left-[-4rem] top-[-3rem] w-[300px] shadow-sm shadow-red-600    z-10 scale-0   transition delay-300 duration-300 ease-in-out group-hover:scale-110 bg-red-900  text-white p-4 rounded-lg">
                <img src={IMG_URL + poster} alt="Hover Poster" className="w-full h-[200px] object-contain mb-2 rounded" />
                <p className="text-[12px] mb-1">{overview}</p>
                <p className="text-[12px] font-semibold">{vote_average}</p>
            </div>
        </div>
  );
};
