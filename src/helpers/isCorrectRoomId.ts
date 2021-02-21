export const isCorrectRoomId = (id:string):boolean=>{
     const regex = /^\d{3}-\d{3}-\d{3}$/;
     
     return regex.test(id)
}