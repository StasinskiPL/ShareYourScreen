import { createContext, useContext } from "react";

export type UserContextTypes = {
    userId : string | null;
    userNick: string | null;
    setUserNick : (u:React.SetStateAction<string|null>) => void
};

const UserInitialState: UserContextTypes = {
    userId: null,
    userNick: null,
    setUserNick: () => void 0,
};

export const UserContextProvider = createContext<UserContextTypes>(UserInitialState);

export const useUserContext = () => {
   const context = useContext(UserContextProvider);
   if(!context.userId){
       throw new Error("User Id is not defined")
   }else{
       return context
   }
}
