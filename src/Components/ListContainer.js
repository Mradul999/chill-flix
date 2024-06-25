import { useSelector } from "react-redux";
import { MoviesList } from "./MoviesList";

export const ListContainer=()=>{
    const movies=useSelector((store)=>store.movies);
    return(
        <div className=" bg-black   text-white ">
            <div className="mt-[-15rem] relative z-10">
            <MoviesList  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MoviesList title={"Popular Movies"} movies={movies.popularMovies}/>
            <MoviesList title={"TopRated "} movies={movies.topratedMovies}/>
            <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
            </div>
        </div>
    );

}