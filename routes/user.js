const express = require('express');
const userRouter = express.Router();
const { User } = require('../models/index');

const store = {
    users: []
};

const newUser = new User(
        name = `Ivan`,
        surname = `Ivanov`,
        password = 'qwerty',
        email = `ivanov@gmail.com` 
    );
store.users.push(newUser);

userRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    const { users } = store;
    const index = users.findIndex(item => item.email === email && item.password === password);
    if (index !== -1) {
        res.status(200)
            .json({
                success: true,
                message: 'the user is loged in'
            })
    } else {
        res.status(404)
            .json({
                success: false,
                message: 'user not found',
            })
    }
});

module.exports = { userRouter };