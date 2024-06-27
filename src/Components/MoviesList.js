import { MoviesCard } from "./MovieCard";
import "./MoviesList.css";

export const MoviesList = ({ title, movies }) => {
  return (
    <div className="">
      
      <div className="flex flex-row  pt-[5rem] pl-[1rem] pb-[10rem] overflow-x-scroll space-x-4 hide-scrollbar ml-[2rem] pr-[13rem]">
      <h1 className="text-white font-semibold text-[2rem] mt-[8rem] ">{title}</h1>
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
