const uid = require('node-random-id');

class User {
    constructor(
        name = '',
        surname = '',
        password = '',
        email = '',
        id = uid.ranid()
    ) {
        this.name = name,
        this.surname = surname,
        this.password = password,
        this.email = email,
        this.id = id
    }
};

module.exports = User;