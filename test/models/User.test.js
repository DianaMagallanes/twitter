const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

    const user = new User(1,"DianaMagallanes", "Diana", "Bio", "dateCreated", "lastUpdated")

    expect(user.id).toBe(1)
    expect(user.username).toBe("DianaMagallanes")
    expect(user.user).toBe("Diana")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).toBe("dateCreated")
    expect(user.lastUpdated).toBe("lastUpdated")
})