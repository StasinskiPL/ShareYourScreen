import { createContext, useContext } from "react";

export type UiContextTypes = {
  isOpenCreateRoomModal: boolean;
  isOpenJoinToRoomModal: boolean;
  setOpenCreateRoomModal: (u: React.SetStateAction<boolean>) => void;
  setOpenJoinToRoomModal: (u: React.SetStateAction<boolean>) => void;
};

const UiContextInitial: UiContextTypes = {
  isOpenCreateRoomModal: false,
  isOpenJoinToRoomModal: false,
  setOpenCreateRoomModal: () => void 0,
  setOpenJoinToRoomModal: () => void 0,
};

export const UiContextProvider = createContext<UiContextTypes>(UiContextInitial);

export const useUiContext = () => useContext(UiContextProvider);
