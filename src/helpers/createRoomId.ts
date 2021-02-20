export const createRoomId = ():string =>{

    const time = new Date().getTime()

    const id = String(time).slice(4)

    return `${id.slice(0,3)}-${id.slice(3,6)}-${id.slice(6,9)}`
}