import { useSelector } from "react-redux";
import { MoviesList } from "./MoviesList";
import "./background.css";

export const ListContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="background text-white">
      <div className="relative mt-[-15rem]">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />
        <MoviesList title={"TopRated"} movies={movies.topratedMovies} />
        <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};
