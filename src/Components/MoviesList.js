import { MoviesCard } from "./MovieCard";
import "./MoviesList.css";

export const MoviesList = ({ title, movies }) => {
  return (
    <div className="pl-4 overflow-visible ">
      <h1 className="text-[20px] mb-1 font-semibold text-white ">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex relative overflow-visible">
          {movies?.map((movie) => (
            <MoviesCard
              key={movie.id}
              poster={movie.poster_path}
              overview={movie.overview}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
