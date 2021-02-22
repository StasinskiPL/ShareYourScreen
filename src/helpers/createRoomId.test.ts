import {createRoomId} from"./createRoomId"

test("return id",()=>{
    const id = createRoomId()
    // "ddd-ddd-ddd"
    expect(id).toMatch(/^\d{3}-\d{3}-\d{3}$/)
    expect(id).toHaveLength(11)
})