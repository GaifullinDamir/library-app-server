const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const loggerMiddleware = require('./middleware/logger');
const errorMiddleware = require('./middleware/error');
//routes
const { userRouter } = require('./routes/user');
const { bookRouter } = require('./routes/book');

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser());
app.use(loggerMiddleware);

//user
app.use('/api/user', userRouter);

//book
app.use('/api/book', bookRouter);

app.use(errorMiddleware);

const listener = () => {
    console.log(`Server is running. Connect: http://localhost:${PORT}/`);
};

app.listen(PORT, listener);