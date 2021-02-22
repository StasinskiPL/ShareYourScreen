import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useRoomContext } from "../../../context/RoomContext/RoomContextManager";

const Stream: React.FC = () => {
  const videoRef = useRef<any>(null!);
  const [height, setHeight] = useState(0);
  const { streamSource } = useRoomContext();

  useEffect(() => {
    const handleResize = () => {
      const calcHeight = videoRef.current.wrapper?.clientWidth;
      setHeight((calcHeight * 9) / 16);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ReactPlayer
      ref={videoRef}
      // muted={true}
      playing={true}
      url={streamSource || "https://www.youtube.com/watch?v=qVIPvJQhF4k"}
      width="100%"
      height={height}
      config={{
        file: {
          forceVideo: true,
        },
      }}
    />
  );
};

export default Stream;
