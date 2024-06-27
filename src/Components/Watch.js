import React from "react";

import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

export const Watch = () => {
  const videoLink =
    "https://res.cloudinary.com/dshfdzxw1/video/upload/v1719487807/video_up3a6s.mp4";

  return (
    <div className="  bg-black">
      <NavLink to="/browse"><button className="text-white bg-red-600 py-2 px-4 rounded-lg  font-semibold text-[15px] mt-4 ml-4">back</button></NavLink>
        
      <div className="w-screen h-screen  flex flex-col items-center justify-center">
        <h1 className="text-white text-[18px] text-center mb-4">
          Enjoy Your Movie
          <br />
          FullScreen for better Experience
        </h1>
        <div className="flex items-center max-w-[600px]  max-h-[500px] mx-6 justify-center">
          {/* <iframe
          src={videoLink}
          width="800"
          height="480"
          allow="autoplay"
        ></iframe>  */}
          <ReactPlayer
            url={videoLink}
            width="600"
            height="500"
            playing
            controls
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
};
