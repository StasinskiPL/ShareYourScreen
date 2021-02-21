import React from "react";
import RoomContext from "./RoomContext/RoomContext";
import UiContext from "./UIContext/UiContext";

const ContextWrapper: React.FC = ({ children }) => {
  return (
    <UiContext>
      <RoomContext>{children}</RoomContext>
    </UiContext>
  );
};

export default ContextWrapper;
