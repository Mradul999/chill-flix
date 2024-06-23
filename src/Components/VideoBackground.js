import { useSelector } from "react-redux";

import { useMovieTrailer } from "../hooks/useMovieTrailer";
export const VideoBackground = ({ movie_ID }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movie_ID);

  return (
    <div className="w-screen    ">
      <iframe 
        className="w-screen iframe aspect-video   "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=20`  }
        allow="autoplay"
      ></iframe>
       <div className="absolute "></div>
    </div>
  );
};
