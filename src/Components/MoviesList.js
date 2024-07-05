import { MoviesCard } from "./MovieCard";
import "./MoviesList.css";

export const MoviesList = ({ title, movies }) => {
  return (
    <div className="pl-12 pr-12  pb-6">
      <h1 className="text-white font-semibold  text-[2rem]   ">
        {title}
      </h1>
      <div className="flex flex-row items-center   pt-2 overflow-x-scroll space-x-4 hide-scrollbar ">
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
