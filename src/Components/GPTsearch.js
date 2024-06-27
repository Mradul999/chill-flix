import { useState } from "react";
import { SearchResult } from "./SearchResult";
import { useMoviesBySearch } from "../hooks/useMoviesBySearch";
import { useMoviesByCategory } from "../hooks/useMoviesByCategory";

export const GPTsearch = () => {
    const[query,setQuery]=useState("");
    const[category,setCategory]=useState("");

    useMoviesBySearch(query);
    useMoviesByCategory(category);



    function submitHandler(e){
        e.preventDefault();
    }

    function onchangeHandler(event){
        setQuery(event.target.value)
        

    }

    function CategoryHandler(event){
      setCategory(event.target.value);

    }
  return (
    <div on  className="h-screen w-screen   ">
      <div className=" flex justify-center pt-32 sm:pt-16 pb-10 ">
        <form onSubmit={submitHandler} className="flex flex-col gap-4 mx-3   ">
        <input
        value={query}
        onChange={onchangeHandler}
          placeholder="Titles,Genres,related"
          className="focus:outline-none border-white border-[1.3px] rounded-md py-2  sm:w-[400px] w-[250px] lg:w-[500px] xl:w-[600px] text-[15px] text-white    bg-black pl-6 px-10 bg-opacity-0"
          type="text"
        ></input>
        <select value={category} onChange={CategoryHandler}  className="bg-black text-gray-300 placeholder:text-white border-white border-[1px] py-2 focus:outline-none pl-6 text-[15px] rounded-md" >
          <option value="">Select a Category</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="10749">Romance</option>
          
        </select>

        </form>
        
      </div>
      <SearchResult query={query} category={category}/>
    </div>
  );
};
