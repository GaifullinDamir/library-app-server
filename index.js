const express = require('express');
const formData = require('express-form-data');
const dotenv = require('dotenv');
//routes
const { userRouter } = require('./routes/user');
const { bookRouter } = require('./routes/book');

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(formData.parse());

//user
app.use('/api/user', userRouter);

//book
app.use('/api/book', bookRouter);


const listener = () => {
    console.log(`Server is running. Connect: http://localhost:${PORT}/`);
};

app.listen(PORT, listener);