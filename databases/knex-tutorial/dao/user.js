const db = require('../db/knex');

class UserDAO{
    async createUser(name, email){
            const [id] = await db('users') // destructure it
                .insert({
                    name: name,
                    email: email
                }).returning('id');

            return id;
        }
}

module.exports = new UserDAO();
