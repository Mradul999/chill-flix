import { useSelector } from "react-redux";

import { MoviesList } from "./MoviesList";


export const SearchResult = ({ query }) => {
  const movies = useSelector((store) => store.movies);
  let message = "Try Searching some Movies";
  if (query) {
    message = "No Available Movies";
  }
  return (
    <div className="px-4 ">
      {movies.moviesBySearch && movies.moviesBySearch.length > 0 ? (
        <MoviesList title={"Available Results"} movies={movies.moviesBySearch} />
      ) : (
        <h1 className="text-white text-center mt-10 text-lg font-semibold">
          {message}
        </h1>
      )}
    </div>
  );
};
