export const VideoBackground = () => {
  return (
    <div className="w-screen hide-scrollbar relative">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/3CpKBAPqqM0?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=50`}
        allow="autoplay"
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
    </div>
  );
};
