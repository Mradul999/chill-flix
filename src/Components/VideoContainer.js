import { VideoTitle } from "./VideoTitle.js";
import { VideoBackground } from "./VideoBackground.js";

export const VideContainer = () => {
  return (
    <div className="w-screen">
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};
