const User = require('./../services/UserService')

class UserView{

    static createUser(payload){
        var objMessage = {}
        if (payload===null){ 
            objMessage = {error:"payload no existe"}
        }
        else if(payload.username===null || payload.name===null || payload.id===null){
            objMessage = {error:"necesitan tener un valor válido"}
        }
        else if(payload.username===null || payload.name===null || payload.id===null){
            objMessage = {error:"necesitan tener un valor válido"}
        }
        else if(payload.hasOwnProperty("username") || payload.hasOwnProperty("name")  || payload.hasOwnProperty("id") ){
            objMessage = {error:"necesitan tener un valor válido"}
        }
        return objMessage
    }
}

module.exports = UserView