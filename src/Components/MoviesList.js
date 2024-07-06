import { MoviesCard } from "./MovieCard";
import "./MoviesList.css";

export const MoviesList = ({ title, movies }) => {
  return (
    <div className="sm:px-12 px-2  pb-4">
      <h1 className="text-white font-semibold sm:text-[1.7rem] text-[1.3rem] md:text-[2rem]   ">
        {title}
      </h1>
      <div className="flex flex-row items-center    overflow-x-scroll space-x-2 hide-scrollbar ">
        {movies?.map((movie) => (
          <MoviesCard
            key={movie.id}
            poster={movie.poster_path}
            movieId={movie.id}
            overview={movie.overview}
            vote_average={movie.vote_average}
            title={movie.title}
            releaseDate={movie.release_date}
            voteCount={movie.vote_count}
            popularity={movie.popularity}

          />
        ))}
      </div>
    </div>
  );
};
