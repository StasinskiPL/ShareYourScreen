
export const getUserNick = ():string|null => {
  const nick = localStorage.getItem("usernick");
    return nick;
}

export const setUserNick = (nick:string):void=>{
    localStorage.setItem("usernick",nick)
}


