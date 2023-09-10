const express = require('express');
const bookRouter = express.Router();
const { Book } = require('../models/index');

const store = {
    books: []
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

bookRouter.get('/', (req, res) => {
    const { books } = store;
    res.status(200)
        .json({
            success: true,
            books
        });
});

bookRouter.get('/:id', (req, res) => {
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

bookRouter.post('/', (req, res) => {
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

bookRouter.put('/:id', (req, res) => {
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
bookRouter.delete('/:id', (req, res) => {
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


module.exports = {
    bookRouter
};