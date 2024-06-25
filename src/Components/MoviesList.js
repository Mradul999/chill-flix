import { MoviesCard } from "./MovieCard";
import "./MoviesList.css";

export const MoviesList = ({ title, movies }) => {
  return (
    <div className=" pl-12   ">
        <h1 className="text-[2.3rem] mb-1 font-semibold text-white ">{title}</h1>    
      <div className="flex overflow-x-scroll hide-scrollbar  ">
        

        <div className="flex ">
          {movies?.map((movie) => (
            <MoviesCard key={movie.id} poster={movie.poster_path} />
            
          ))}
        </div>
      </div>
    </div>
  );
};
