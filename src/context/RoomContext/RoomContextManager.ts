import { createContext, useContext } from "react";

type RoomContextTypes = {
    roomHostId: string | null;
    setRoomHostId: (u: React.SetStateAction<string | null>) => void;
};

const initialState: RoomContextTypes = {
    roomHostId: null,
    setRoomHostId: () => void 0,
};

export const RoomContextProvider = createContext<RoomContextTypes>(
  initialState
);

export const useRoomContext = () => useContext(RoomContextProvider);
