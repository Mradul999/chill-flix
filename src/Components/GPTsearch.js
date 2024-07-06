import { useState } from "react";
import { SearchResult } from "./SearchResult";
import { useMoviesBySearch } from "../hooks/useMoviesBySearch";
import { useMoviesByCategory } from "../hooks/useMoviesByCategory";
import "./background.css";
export const GPTsearch = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const page1 = 1;
  const page2 = 2;
  const page3 = 3;

  const Categorypage1Movies = useMoviesByCategory(category, page1);
  const Categorypage2Movies = useMoviesByCategory(category, page2);
  const Categorypage3Movies = useMoviesByCategory(category, page3);

  const Searchpage1Movies = useMoviesBySearch(query, page1);
  const Searchpage2Movies = useMoviesBySearch(query, page2);
  const Searchpage3Movies = useMoviesBySearch(query, page3);

  function submitHandler(e) {
    e.preventDefault();
  }

  function onchangeHandler(event) {
    setQuery(event.target.value);
  }

  function CategoryHandler(event) {
    setCategory(event.target.value);
  }
  return (
    <div className="min-h-screen w-screen background    ">
      <div className=" flex justify-center pt-32 sm:pt-16 pb-10 ">
        <form onSubmit={submitHandler} className="flex flex-col gap-4 mx-3   ">
          <input
            value={query}
            onChange={onchangeHandler}
            placeholder="Search by movie title"
            className="focus:outline-none border-white border-[1.3px] rounded-md py-2  sm:w-[400px] w-[250px] lg:w-[500px] xl:w-[600px] text-[15px] text-white    bg-black pl-6 px-10 bg-opacity-0"
            type="text"
          ></input>
          <select
            value={category}
            onChange={CategoryHandler}
            className="bg-black text-gray-300 placeholder:text-white border-white border-[1px] py-2 focus:outline-none pl-6 text-[15px] rounded-md"
          >
            <option value="">Select a Category</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="10749">Romance</option>
            <option value="18">Drama</option>
            <option value="80">Crime</option>
            <option value="53">Thriller</option>
            <option value="99">Documentary</option>
            <option value="16">Animation</option>
            <option value="9648">Mystery</option>
            <option value="878">Sci-Fi </option>
            <option value="27">Horror</option>
          </select>
        </form>
      </div>
      <SearchResult
        query={query}
        category={category}
        Categorypage1Movies={Categorypage1Movies}
        Categorypage2Movies={Categorypage2Movies}
        Categorypage3Movies={Categorypage3Movies}
        Searchpage1Movies={Searchpage1Movies}
        Searchpage2Movies={Searchpage2Movies}
        Searchpage3Movies={Searchpage3Movies}
      />
    </div>
  );
};
