import { useState } from "react";
import { IMG_URL } from "../utils/constants";
import "./MovieCard.css";
import useFetchMovieTrailer from "../hooks/useFetchMovieTrailer";

export const MoviesCard = ({ poster, movieId, overview, vote_average }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = useFetchMovieTrailer(isHovered ? movieId : null);

  return (
    <div
      className="relative group md:w-[130px]  w-[100px] lg:w-[150px] flex-shrink-0 overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="w-full image-tile transition-transform duration-300 ease-in-out lg:group-hover:scale-105"
        src={IMG_URL + poster}
        alt="Movie Poster"
      />
      <div className="flex flex-col absolute left-[-4rem]   top-[-3rem] w-[170px] shadow-sm shadow-red-600 z-20 transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-110 bg-red-900 text-white   rounded-lg">
        {trailer ? (
          <iframe
            key={trailer.key} // Add key prop to force reload
            className="w-full mx-auto aspect-video rounded-lg p-1"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1`}
            allow="autoplay"
            frameBorder="0"
          ></iframe>
        ) : (
          <img
            src={IMG_URL + poster}
            alt="Hover Poster"
            className="w-full h-[200px] object-cover mb-2 rounded"
          />
        )}
        <p className=" text-[8px] md:text-[10px] lg:text-[12px] mt-1 mx-1 mb-1">{overview}</p>
        <p className=" text-[8px] md:text-[10px] lg:text-[12px] mx-1 mb-1 font-semibold">Average Vote: {vote_average}</p>
      </div>
    </div>
  );
};
