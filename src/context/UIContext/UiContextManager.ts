import { createContext, useContext } from "react";

export type UiContextTypes = {
  openCreateRoomModal: boolean;
  openJoinToRoomModal: boolean;
  setOpenCreateRoomModal: (u: React.SetStateAction<boolean>) => void;
  setOpenJoinToRoomModal: (u: React.SetStateAction<boolean>) => void;
};

const UiContextInitial: UiContextTypes = {
  openCreateRoomModal: false,
  openJoinToRoomModal: false,
  setOpenCreateRoomModal: () => void 0,
  setOpenJoinToRoomModal: () => void 0,
};

export const UiContextProvider = createContext<UiContextTypes>(UiContextInitial);

export const useUiStateContext = () => useContext(UiContextProvider);
