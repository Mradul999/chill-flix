import { GPTSuggestion } from "./GPTSuggestion";

export const GPTsearch = () => {

    function submitHandler(e){
        e.preventDefault();
        

    }
  return (
    <div className="h-screen w-screen  ">
      <div className=" flex justify-center pt-10 ">
        <form onSubmit={submitHandler} className="flex flex-col gap-4  ">
        <input
          placeholder="Titles,Genres,related"
          className="focus:outline-none border-white border-[1.3px] rounded-md py-2 w-[600px] text-[15px] text-white    bg-black pl-6 px-10 bg-opacity-0"
          type="text"
        ></input>
        <button className="text-white bg-red-600 py-1 px-4 rounded-md  mx-auto text-[20px]">Search</button>

        </form>
        
      </div>
      <GPTSuggestion/>
    </div>
  );
};
