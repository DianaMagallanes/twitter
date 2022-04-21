const UserService = require('./../../app/services/UserService')

describe("Tests for UserService",()=> {

    test("1. Create a new user using the UserService",()=>{
        const user = UserService.create(1,"DianaMagallanes", "Diana")
        expect(user.username).toBe("DianaMagallanes")
        expect(user.username).toBe("Diana")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})