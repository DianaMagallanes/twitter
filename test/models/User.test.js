const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

    test('Create an User object',() => {
    const user = new User(1,"DianaMagallanes", "Diana", "Bio")

    expect(user.id).toBe(1)
    expect(user.username).toBe("DianaMagallanes")
    expect(user.name).toBe("Diana")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
        
    });
})