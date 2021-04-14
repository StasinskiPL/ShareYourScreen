import React from "react";
import { Button } from "react-bootstrap";
import { useRoomContext } from "../../../context/RoomContext/RoomContextManager";

const opt = {
  video: true,
};

const StreamPlaceholder: React.FC = () => {
  const { setIsActiveStream, setStreamSource } = useRoomContext();

  const startStreamHandler = async () => {
    try {
      const captureStream = await navigator.mediaDevices.getUserMedia(opt);
      setStreamSource(captureStream);
      setIsActiveStream(true);
    } catch (err) {
      console.error("Error: " + err);
    }
  };

  return (
    <div className="py-5 d-flex flex-column jc-center ai-center border border-light rounded ">
      <h3 className="text-white mb-3 mt-5"> No one is sharing screen </h3>
      <Button
        variant="outline-light"
        onClick={startStreamHandler}
        className="mb-5"
        size="lg">
        Start Streaming
      </Button>
    </div>
  );
};

export default StreamPlaceholder;
