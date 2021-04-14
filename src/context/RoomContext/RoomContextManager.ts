import { createContext, useContext } from "react";

type RoomContextTypes = {
  roomHostId: string | null;
  setRoomHostId: (u: React.SetStateAction<string | null>) => void;
  isActiveStream: boolean;
  setIsActiveStream: (u: React.SetStateAction<boolean>) => void;
  streamSource: MediaStream | null;
  setStreamSource: (u: React.SetStateAction<any>) => void;
  socket: SocketIOClient.Socket | null;
};

const initialState: RoomContextTypes = {
  roomHostId: null,
  setRoomHostId: () => void 0,
  isActiveStream: false,
  setIsActiveStream: () => void 0,
  streamSource: null,
  setStreamSource: () => void 0,
  socket: null,
};

export const RoomContextProvider = createContext<RoomContextTypes>(
  initialState
);

export const useRoomContext = () => useContext(RoomContextProvider);
