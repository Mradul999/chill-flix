import { IMG_URL } from "../utils/constants";
import "./MovieCard.css";

export const MoviesCard = ({ poster, trailer, overview, vote_average }) => {
  return (
    <div className="relative group max-w-[150px] flex-shrink-0 overflow-visible">
      <img
        className="w-full image-tile -z-2"
        src={IMG_URL + poster}
        alt="Movie Poster"
      />
      <div className="flex flex-col absolute left-[-4rem] top-[-3rem] w-[300px] shadow-sm shadow-red-600 z-10 scale-0 transition delay-300 duration-300 ease-in-out group-hover:scale-110 bg-red-900 text-white p-4 rounded-lg">
        {trailer && (
          <iframe
            className="w-full mx-auto aspect-video"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1`}
            allow="autoplay"
          ></iframe>
        )}
        <p className="text-[12px] mb-1">{overview}</p>
        <p className="text-[12px] font-semibold">{vote_average}</p>
      </div>
    </div>
  );
};
