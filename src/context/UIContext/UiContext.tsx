import React, { useMemo, useState } from "react";
import { UiContextProvider } from "./UiContextManager";

const UiContext: React.FC = ({ children }) => {
  const [openCreateRoomModal, setOpenCreateRoomModal] = useState(false);
  const [openJoinToRoomModal, setOpenJoinToRoomModal] = useState(false);

  const contextValue = useMemo(
    () => ({
      openCreateRoomModal,
      setOpenCreateRoomModal,
      openJoinToRoomModal,
      setOpenJoinToRoomModal,
    }),
    [
      openCreateRoomModal,
      setOpenCreateRoomModal,
      openJoinToRoomModal,
      setOpenJoinToRoomModal,
    ]
  );

  return (
    <UiContextProvider.Provider value={contextValue}>
      {children}
    </UiContextProvider.Provider>
  );
};

export default UiContext;
