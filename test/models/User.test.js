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

    test('Add getters', () =>{
        const user = new User(1,"DianaMagallanes", "Diana", "Bio")
        expect(user.getUsername).toBe("DianaMagallanes")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });

    test('Add setters', () =>{
        const user = new User(1,"DianaMagallanes", "Diana", "Bio")
        user.setUsername="Magallanes"
        expect(user.username).toBe("Magallanes")

        user.setBio="New Bio"
        expect(user.bio).toBe("New Bio")
    });
})