const userService = require('../service/user');

class UserController{
    async createUser(req, res) {
        try{
            const id = await userService.createUser(req.name, req.email);
            res.status(201).json(id);
        } catch(err){
            console.log(err);
        }
    }
}

module.exports = new UserController();
