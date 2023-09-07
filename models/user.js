const uid = require('node-random-id');

class User {
    constructor(
        name = '',
        surname = '',
        password = '',
        email = '',
        id = uid.ranid()
    ) {
        name = name,
        surname = surname,
        password = password,
        email = email,
        id = id
    }
};

module.exports = User;