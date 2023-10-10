const uid = require('node-random-id');

class Book {
    constructor(
        title = '',
        description = '',
        authors = '',
        favorite = '',
        fileCover = '',
        fileName = '',
        fileBook = '',
        id = uid.ranid()
    ) {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
        this.id = id;
    }
}

module.exports = Book;