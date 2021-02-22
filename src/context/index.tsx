import React from "react";
import RoomContext from "./RoomContext/RoomContext";
import UiContext from "./UIContext/UiContext";
import UserContext from "./UserContext/UserContext";

const ContextWrapper: React.FC = ({ children }) => {
  return (
    <UiContext>
      <UserContext>
        <RoomContext>{children}</RoomContext>
      </UserContext>
    </UiContext>
  );
};

export default ContextWrapper;
