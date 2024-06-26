import { MoviesCard } from "./MovieCard";
import "./MoviesList.css";

export const MoviesList = ({ title, movies }) => {
  return (
    <div className="">
            
            <div className="flex flex-row h-[500px] pt-[5rem]   overflow-x-scroll  space-x-4 hide-scrollbar ml-[2rem]  pr-[13rem] ">
            <h1 className="text-white font-semibold text-[2rem]  mt-10 ">{title}</h1>
                {movies?.map((movie)=>(<MoviesCard key={movie.id}
              poster={movie.poster_path}
              overview={movie.overview}
              average_vote={movie.vote_average}/>))}
            </div>

        </div>
  );
};
