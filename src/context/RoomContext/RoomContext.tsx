import React, { useEffect, useMemo, useState } from "react";
import socketio from "socket.io-client";
import { RoomContextProvider } from "./RoomContextManager";

const RoomContext: React.FC = ({ children }) => {
  const [roomHostId, setRoomHostId] = useState<string | null>(null);
  const [isActiveStream, setIsActiveStream] = useState(false);
  const [streamSource, setStreamSource] = useState<any>(null);
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    const socket = socketio.connect("http://localhost:5050/");
    setSocket(socket);

    return () => {
      socket.close();
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      roomHostId,
      setRoomHostId,
      isActiveStream,
      setIsActiveStream,
      streamSource,
      setStreamSource,
      socket,
    }),
    [
      roomHostId,
      setRoomHostId,
      isActiveStream,
      setIsActiveStream,
      streamSource,
      setStreamSource,
      socket,
    ]
  );

  return (
    <RoomContextProvider.Provider value={contextValue}>
      {children}
    </RoomContextProvider.Provider>
  );
};

export default RoomContext;
