import React, { useEffect, useMemo, useState } from "react";
import getUserId from "../../helpers/getUserId";
import { getUserNick } from "../../helpers/userNick";
import { useUiContext } from "../UIContext/UiContextManager";
import { UserContextProvider } from "./UserContextManager";

const UserContext: React.FC = ({ children }) => {
  const [userId, setUserId] = useState<string>(getUserId());
  const [userNick, setUserNick] = useState<string | null>(getUserNick());

  const { setOpenSetNickModal } = useUiContext();

  useEffect(() => {
    if (!userId) {
      const id = getUserId();
      setUserId(id);
    }
  }, [userId]);

  useEffect(() => {
    if (!userNick || userNick?.trim() === "" || userNick.length < 3) {
      setOpenSetNickModal(true);
    }
  }, [userNick, setOpenSetNickModal]);

  const contextValues = useMemo(
    () => ({
      userId,
      userNick,
      setUserNick,
    }),
    [userId, userNick, setUserNick]
  );

  return (
    <UserContextProvider.Provider value={contextValues}>
      {children}
    </UserContextProvider.Provider>
  );
};

export default UserContext;
