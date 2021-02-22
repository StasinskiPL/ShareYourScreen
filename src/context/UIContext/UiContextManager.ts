import { createContext, useContext } from "react";

export type UiContextTypes = {
  isOpenCreateRoomModal: boolean;
  isOpenJoinToRoomModal: boolean;
  isOpenSetNickModal: boolean;
  setOpenCreateRoomModal: (u: React.SetStateAction<boolean>) => void;
  setOpenJoinToRoomModal: (u: React.SetStateAction<boolean>) => void;
  setOpenSetNickModal: (u: React.SetStateAction<boolean>) => void;
};

const UiContextInitial: UiContextTypes = {
  isOpenCreateRoomModal: false,
  isOpenJoinToRoomModal: false,
  isOpenSetNickModal: false,
  setOpenCreateRoomModal: () => void 0,
  setOpenJoinToRoomModal: () => void 0,
  setOpenSetNickModal: () => void 0,
};

export const UiContextProvider = createContext<UiContextTypes>(UiContextInitial);

export const useUiContext = () => useContext(UiContextProvider);
