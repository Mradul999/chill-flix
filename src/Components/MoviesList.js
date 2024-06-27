import React, { useEffect, useState } from "react";
import { MoviesCard } from "./MovieCard";
import "./MoviesList.css";
import { options } from "../utils/constants";

export const MoviesList = ({ title, movies }) => {
  const [trailers, setTrailers] = useState({});

  useEffect(() => {
    if (movies && movies.length > 0) {
      const fetchTrailers = async () => {
        try {
          const trailerPromises = movies.map(async (movie) => {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
              options
            );
            const json = await response.json();
            const filterData = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json.results[0];
            return { [movie.id]: trailer };
          });

          const trailersArray = await Promise.all(trailerPromises);
          const trailersObject = trailersArray.reduce((acc, trailer) => ({ ...acc, ...trailer }), {});
          setTrailers(trailersObject);
        } catch (error) {
          console.error("Error fetching trailers:", error);
        }
      };

      fetchTrailers();
    }
  }, [movies]);

  return (
    <div className="">
      <h1 className="text-white font-semibold text-[2rem] mt-10 ml-[2rem]">{title}</h1>
      <div className="flex flex-row h-[500px] pt-[5rem] overflow-x-scroll space-x-4 hide-scrollbar ml-[2rem] pr-[13rem]">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie_ID={movie.id}
              poster={movie.poster_path}
              trailer={trailers[movie.id]}
              overview={movie.overview}
              vote_average={movie.vote_average}
            />
          ))
        ) : (
          <p className="text-white">No movies available</p>
        )}
      </div>
    </div>
  );
};
