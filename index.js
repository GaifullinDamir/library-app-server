const express = require('express');
const formData = require('express-form-data');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT;

const { Book } = require('./models/index');

const store = {
    books : [],
};

[1, 2, 3].map(item => {
    const newBook = new Book(
        title = `title ${item}`,
        description = `description ${item}`,
        authors = `authors ${item}`,
        favorite = `favorite ${item}`,
        fileCover = `fileCover ${item}`,
        fileName = `fileName ${item}`
        );
    store.books = [...store.books, newBook];
});

const app = express();

app.use(formData.parse());

app.get('/api/book/', (req, res) => {
    const { books } = store;
    res.status(200)
        .json({
            success: true,
            books
        });
});
app.get('/api/book/:id', (req, res) => {
    const { books } = store;
    const { id } = req.params;
    const index = books.findIndex(item => item.id === id);

    if(index !== -1) {
        res.status(200)
            .json({
                success: true,
                book: books[index]
            });
    } else {
        res.status(404)
            .json({
                success: false,
                message: 'book not found.'
            });
    }
});
app.post('/api/book/', (req, res) => {
    const { books } = store;
    const { 
        title, 
        description, 
        authors, 
        favorite, 
        fileCover, 
        fileName 
    } = req.body;
    const newBook = new Book(
        title, 
        description, 
        authors,
        favorite,
        fileCover,
        fileName);
    books.push(newBook);
    
    res.status(201)
        .json({
            success: true,
            message: 'book succesfully added.'
        });
});
app.put('/api/book/:id', (req, res) => {
    const { books } = store;
    const { 
        title, 
        description, 
        authors, 
        favorite, 
        fileCover, 
        fileName 
    } = req.body;
    const { id } = req.params;
    const index = books.findIndex(item => item.id === id);

    if (index !== -1) {
        books[index] = {
            ...books[index],
            title, 
            description, 
            authors, 
            favorite, 
            fileCover, 
            fileName 
        };
        res.status(200)
            .json({
                success: true,
                message: 'book succesfully changed.'
            });
    } else {
        res.status(404)
            .json({
                success: false,
                message: 'book not found.'
            });
    }
});
app.delete('/api/book/:id', (req, res) => {
    const { books } = store;
    const { id } = req.params;
    const index = books.findIndex(item => item.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        res.status(200)
            .json({
                success: true,
                index: index,
                message: `book with id: ${id} succesfully deleted.`
            });
    } else {
        res.status(404)
            .json({
                success: false,
                message: 'book not found.'
            });
    }
});

const listener = () => {
    console.log(`Server is running. Connect: http://localhost:${PORT}/`);
};

app.listen(PORT, listener);