import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRoomContext } from "../../../context/RoomContext/RoomContextManager";

const Stream: React.FC = () => {
  const { id: room } = useParams<{ id: string }>();

  const { streamSource, socket } = useRoomContext();

  const videoRef = useRef<HTMLVideoElement>(null!);

  // const recorder = useRef(new MediaRecorder(streamSource));

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.srcObject = streamSource;
    }
  }, [streamSource]);

  useEffect(() => {
    // if (recorder.current.state !== "recording") {
    //   recorder.current.start();
    // }
    // setInterval(() => {
    //   if (recorder?.current?.state !== "inactive") {
    //     recorder.current.requestData();
    //   }
    // }, 10000);
    // recorder.current.ondataavailable = (e) => {
    //   if (e.data && e.data.size > 0) {
    //     setVideoSrc(e.data);
    //   }
    // };
  }, [streamSource, socket, room]);

  return (
    <>
      <video width="100%" autoPlay ref={videoRef} />
    </>
  );
};

export default Stream;
