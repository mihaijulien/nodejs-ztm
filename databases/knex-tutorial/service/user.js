const userDAO = require('../dao/user');

class UserService {
    createUser(name, email){
        return userDAO.createUser(name, email);
    }
}

module.exports = new UserService();
