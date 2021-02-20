import React from "react";
import UiContext from "./UIContext/UiContext";

const ContextWrapper: React.FC = ({ children }) => {
  return <UiContext>{children}</UiContext>;
};

export default ContextWrapper;
