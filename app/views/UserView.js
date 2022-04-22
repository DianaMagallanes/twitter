const User = require('./../services/UserService')

class UserView{

    static createUser(payload){
        var objMessage = {}
        if (payload===null){ 
            objMessage = {error:"payload no existe"}
        }
        return objMessage
    }
}

module.exports = UserView