import React from "react";
import { NavLink } from "react-router-dom";

export const Watch = () => {
  const videoLink = "https://drive.google.com/file/d/1ESMBjnE-w87gZHxrfktGgnjeBLnFgCMB/preview";

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavLink to="/browse">
        <button className="text-white bg-red-600 py-2 px-4 rounded-lg font-semibold text-[15px] mt-4 ml-4">
          Back
        </button>
      </NavLink>
        
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-white text-[18px] text-center mb-4">
          Enjoy Your Movie
          <br />
          FullScreen for better Experience
        </h1>
        <div className="flex items-center justify-center w-full h-full">
          <iframe
            src={videoLink}
            width="100%"
            height="500"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="max-w-[600px] w-full max-h-[500px] relative mx-6"
          ><div className=" absolute z-10 right-0 top-0 w-[40px] h-[40px] bg-black"></div></iframe>
        </div>
      </div>
    </div>
  );
};
