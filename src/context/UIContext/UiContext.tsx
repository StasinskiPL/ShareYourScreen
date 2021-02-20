import React, { useMemo, useState } from "react";
import { UiContextProvider } from "./UiContextManager";

const UiContext: React.FC = ({ children }) => {
  const [isOpenCreateRoomModal, setOpenCreateRoomModal] = useState(false);
  const [isOpenJoinToRoomModal, setOpenJoinToRoomModal] = useState(false);

  const contextValue = useMemo(
    () => ({
      isOpenCreateRoomModal,
      setOpenCreateRoomModal,
      isOpenJoinToRoomModal,
      setOpenJoinToRoomModal,
    }),
    [
      isOpenCreateRoomModal,
      setOpenCreateRoomModal,
      isOpenJoinToRoomModal,
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
