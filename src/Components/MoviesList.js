import { MoviesCard } from "./MovieCard";
import "./MoviesList.css";

export const MoviesList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-white font-semibold text-[2rem] mt-10 ml-[2rem]">{title}</h1>
      <div className="flex flex-row h-[500px] pt-[5rem] overflow-x-scroll space-x-4 hide-scrollbar ml-[2rem] pr-[13rem]">
        {movies?.map((movie) => (
          <MoviesCard
            key={movie.id}
            poster={movie.poster_path}
            movieId={movie.id}
            overview={movie.overview}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};
