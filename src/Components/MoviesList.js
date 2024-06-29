import { MoviesCard } from "./MovieCard";
import "./MoviesList.css";

export const MoviesList = ({ title, movies }) => {
  return (
    <div className="">
      <div className="flex flex-row items-center   pt-[5rem] pl-[1rem]  overflow-x-scroll space-x-4 hide-scrollbar ml-[0.5rem] pr-[3rem]">
        <h1 className="text-white font-semibold md:text-[1.5rem] sm:text-[1.2rem] text-[1rem] lg:text-[2rem]  ">
          {title}
        </h1>
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
