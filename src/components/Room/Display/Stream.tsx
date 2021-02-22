import React, { useEffect, useRef, useState, useCallback } from "react";
import ReactPlayer from "react-player";
import { useRoomContext } from "../../../context/RoomContext/RoomContextManager";

const Stream: React.FC = () => {
  const [height, setHeight] = useState(0);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const { streamSource } = useRoomContext();

  const mediaChunks = useRef<Blob[]>([]);
  const videoRef = useRef<any>(null!);
  const recorder = useRef(new MediaRecorder(streamSource));

  const onRecordingStop = () => {
    const [chunk] = mediaChunks.current;
    const blob = new Blob(mediaChunks.current, { type: chunk.type });
    const url = URL.createObjectURL(blob);
    setVideoSrc(url);
  };

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
    const stopRecording = () => {
      if (recorder?.current?.state !== "inactive") {
        recorder.current.stop();
        streamSource?.getTracks().forEach((track: any) => track.stop());
      }
    };
    recorder.current.start();

    setTimeout(() => {
      stopRecording();
    }, 2000);

    recorder.current.ondataavailable = (e) => {
      mediaChunks.current.push(e.data);
      onRecordingStop();
    };
  }, [streamSource]);

  return (
    <ReactPlayer
      ref={videoRef}
      playing={true}
      // muted={true}
      url={videoSrc || "https://www.youtube.com/watch?v=2zToEPpFEN8"}
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
