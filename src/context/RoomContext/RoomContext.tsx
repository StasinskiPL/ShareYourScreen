import React, { useMemo, useState } from "react";
import { RoomContextProvider } from "./RoomContextManager";

const RoomContext: React.FC = ({ children }) => {
  const [roomHostId, setRoomHostId] = useState<string | null>(null);
  const [isActiveStream, setIsActiveStream] = useState(false);
  const [streamSource, setStreamSource] = useState<any>(null);

  const contextValue = useMemo(
    () => ({
      roomHostId,
      setRoomHostId,
      isActiveStream,
      setIsActiveStream,
      streamSource,
      setStreamSource,
    }),
    [
      roomHostId,
      setRoomHostId,
      isActiveStream,
      setIsActiveStream,
      streamSource,
      setStreamSource,
    ]
  );

  return (
    <RoomContextProvider.Provider value={contextValue}>
      {children}
    </RoomContextProvider.Provider>
  );
};

export default RoomContext;
