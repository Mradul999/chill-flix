import React from "react";
import { NavLink } from "react-router-dom";

export const Watch = () => {
  const videoLink =
    "https://drive.google.com/file/d/1ESMBjnE-w87gZHxrfktGgnjeBLnFgCMB/preview";

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavLink to="/browse">
        <button className="text-white bg-red-600 py-2 px-4 rounded-lg font-semibold text-[15px] mt-4 ml-4">
          Back
        </button>
      </NavLink>

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-white text-[18px] text-center mb-4">
          FullScreen for better Experience
        </h1>
        <div className="flex items-center justify-center w-full h-full ">
          <iframe
            src={videoLink}
            width="100%"
            height="500"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className=""
          >
            
          </iframe>
        </div>
      </div>
    </div>
  );
};
