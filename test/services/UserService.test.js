const UserService = require('./../../app/services/UserService')

describe("Tests for UserService",()=> {

    test("1. Create a new user using the UserService",()=>{
        const user = UserService.create(1,"DianaMagallanes", "Diana")
        expect(user.username).toBe("DianaMagallanes")
        expect(user.name).toBe("Diana")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all user data in a list", () =>{
        const user = UserService.create(1,"DianaMagallanes", "Diana")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("DianaMagallanes")
        expect(userInfoList[2]).toBe("Diana")
        expect(userInfoList[3]).toBe("Sin bio")
    });

    test("3. Update username", () => {
        const user = UserService.create(1,"DianaMagallanes", "Diana")
        UserService.updateUserUsername(user,"DiaMag")
        expect(user.username).toBe("DiaMag")
    });

    test("4. Given a list of users give me the list of usernames", () =>{
        
        const user1 = UserService.create(1,"DianaMagallanes1", "Diana")
        const user2 = UserService.create(1,"DianaMagallanes2", "Diana")
        const user3 = UserService.create(1,"DianaMagallanes3", "Diana")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("DianaMagallanes1")
        expect(usernames).toContain("DianaMagallanes2")
        expect(usernames).toContain("DianaMagallanes3")
    })
})