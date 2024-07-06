import { useSelector } from "react-redux";

import { MoviesList } from "./MoviesList";

export const SearchResult = ({
  query,
  
  Categorypage1Movies,
  Categorypage2Movies,
  Categorypage3Movies,
  Searchpage1Movies,
  Searchpage2Movies,
  Searchpage3Movies,
}) => {
  const movies = useSelector((store) => store.movies);
  let message = "Try Searching some Movies";
  if (query) {
    message = "No Available Movies";
  }

  return (
    <div className="   ">
      {query ? (
        <div>
          {movies.moviesBySearch && movies.moviesBySearch.length > 0 ? (
            <div>
              <h1 className="font-semibold  text-white sm:text-[2rem] text-[1.3rem] ml-2 sm:ml-12">
                Available Movies
              </h1>
              <MoviesList movies={Searchpage1Movies} />
              <MoviesList movies={Searchpage2Movies} />
              <MoviesList movies={Searchpage3Movies} />
            </div>
          ) : (
            <h1 className="text-white text-center mt-10 text-lg font-semibold">
              <span className="text-[18px]">{message}</span>
            </h1>
          )}
        </div>
      ) : (
        <div>
          {movies.moviesByCategory && movies.moviesByCategory.length > 0 ? (
            <div className="">
              <h1 className="font-semibold  text-white sm:text-[2rem] text-[1.3rem] ml-2 sm:ml-12">
                Available Movies
              </h1>

              <MoviesList movies={Categorypage1Movies} />
              <MoviesList movies={Categorypage2Movies} />
              <MoviesList movies={Categorypage3Movies} />
            </div>
          ) : (
            <h1 className="text-white text-center mt-10 text-lg font-semibold">
              <span className="text-[18px]">{message}</span>
            </h1>
          )}
        </div>
      )}
    </div>
  );
};
