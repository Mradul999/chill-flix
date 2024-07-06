import React from "react";
import { IMG_URL } from "../utils/constants";
import "./CastCard.css";

export default function CastCard({ profilePath, name, character }) {
    const gradientBackground = {
        background: "#606c88", // Fallback for old browsers
        background: "-webkit-linear-gradient(to right, #3f4c6b, #606c88)", // Chrome 10-25, Safari 5.1-6
        background: "linear-gradient(to right, #3f4c6b, #606c88)" // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+
      };
  return (
    <div style={gradientBackground} className="max-w-[150px] rounded-lg flex flex-col   p-1 pb-2 justify-between card-bg    gap-1 text-[13px]">
      {profilePath ? (
        <img
          className="object-cover rounded-lg "
          src={`${IMG_URL}${profilePath}`}
          alt=""
        />
      ) : (
        <img
          className="object-cover rounded-lg "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHQwqkMCFJNzg5kqxX53SYntdXJihJfMUcaAvHm3kT_OAekY-GBLEP-E5N-rGi62_H4c&usqp=CAU"
          alt=""
        />
      )}
      <div>
      <h3 className="font-serif sm:text-[12px] text-[10px]">{name}</h3>
      <p className="font-serif sm:text-[12px] text-[10px]"><span className="font-bold">as</span> {character}</p>

      </div>

      
    </div>
  );
}
