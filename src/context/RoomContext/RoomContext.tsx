import React, { useMemo, useState } from "react";
import { RoomContextProvider } from "./RoomContextManager";

const RoomContext: React.FC = ({ children }) => {
  const [roomHostId, setRoomHostId] = useState<string | null>(null);

  const contextValue = useMemo(
    () => ({
      roomHostId,
      setRoomHostId,
    }),
    [roomHostId, setRoomHostId]
  );

  return (
    <RoomContextProvider.Provider value={contextValue}>
      {children}
    </RoomContextProvider.Provider>
  );
};

export default RoomContext;
