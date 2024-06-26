import { MoviesCardSearched } from "./MoviesCardSearched";
import "./MoviesListSearched.css";
export const MoviesListSearched=({movies})=>{
    return (
        <div className="">
            <h1 className="text-white font-semibold text-[2rem] mb-2">AvailableMovies</h1>
            <div className="flex flex-row h-[500px] pt-[5rem]   overflow-x-scroll  space-x-4 hide-scrollbar pl-[6rem] pr-[13rem] ">
                {movies?.map((movie)=>(<MoviesCardSearched key={movie.id}
              poster={movie.poster_path}
              overview={movie.overview}
              average_vote={movie.vote_average}/>))}
            </div>

        </div>

    );
}