import { useState } from "react";
import { SearchResult } from "./SearchResult";
import { useMoviesBySearch } from "../hooks/useMoviesBySearch";

export const GPTsearch = () => {
    const[query,setQuery]=useState("");

    useMoviesBySearch(query);

    function submitHandler(e){
        e.preventDefault();
    }

    function onchangeHandler(event){
        setQuery(event.target.value)
        

    }
  return (
    <div on  className="h-screen w-screen  ">
      <div className=" flex justify-center pt-10 pb-10 ">
        <form onSubmit={submitHandler} className="flex flex-col gap-4  ">
        <input
        value={query}
        onChange={onchangeHandler}
          placeholder="Titles,Genres,related"
          className="focus:outline-none border-white border-[1.3px] rounded-md py-2 w-[600px] text-[15px] text-white    bg-black pl-6 px-10 bg-opacity-0"
          type="text"
        ></input>

        </form>
        
      </div>
      <SearchResult query={query}/>
    </div>
  );
};
