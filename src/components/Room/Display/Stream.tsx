import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useRoomContext } from "../../../context/RoomContext/RoomContextManager";

const Stream: React.FC = () => {
  const [height, setHeight] = useState(0);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const { id: room }: { id: string } = useParams();

  const { streamSource, socket } = useRoomContext();

  const mediaChunks = useRef<Blob[]>([]);
  const videoRef = useRef<any>(null!);
  const recorder = useRef(new MediaRecorder(streamSource));

  const sendBlobAsBase64 = useCallback(() => {
    return function sendBlobAsBase64(blob: Blob) {
      const reader = new FileReader();

      const eventHandler = () => {
        const dataUrl = reader.result;
        if (typeof dataUrl === "string") {
          const base64EncodedData = dataUrl.split(",")[1];
          console.log(room);
          console.log(socket);
          socket?.emit("stream", { room, streamChunk: base64EncodedData });
        }
      };

      reader.addEventListener("load", eventHandler);
      reader.readAsDataURL(blob);
    };
  }, [room, socket]);

  useEffect(() => {
    const handleResize = () => {
      const calcHeight = videoRef.current.wrapper?.clientWidth;
      setHeight((calcHeight * 9) / 16);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (recorder.current.state !== "recording") {
      recorder.current.start();
    }

    setInterval(() => {
      if (recorder?.current?.state !== "inactive") {
        recorder.current.requestData();
      }
    }, 10000);

    recorder.current.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        sendBlobAsBase64()(e.data);
      }
    };
  }, [streamSource, socket, room, sendBlobAsBase64]);

  useEffect(() => {
    socket?.on("liveVideo", ({}) => {});
  }, [socket, room]);

  console.count("render");

  return (
    <ReactPlayer
      ref={videoRef}
      playing={true}
      pip={true}
      controls={true}
      // muted={true}
      url={videoSrc || "https://www.youtube.com/watch?v=2zToEPpFEN8"}
      // url={streamSource}
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
