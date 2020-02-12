// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2

class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title || '';
        this.genre = genre || '';
        this.author = author || '';
        this.read = read || '';
        if (read === 'yes') {
        this.startReadDate = startReadDate || '';
        this.endReadDate = endReadDate || '';
        }
    }

    
}

class BookList {
    constructor () {
        this.booksread = 0;
        this.bookUnread = 0;
        this.books = [];
        this.lastBook = null;
        this.currentBook = null;
        this.upNext = null;
    }

    add = (book) => {
        this.books.push(book);
        if (book.read === 'yes'){
            this.booksread ++;
        } else {
            this.bookUnread ++;
        }
    }
}

const homeLibrary = new BookList();
console.log(homeLibrary);

const book1 = new Book('t', 'g', 'a', 'not', 'start', 'end');
const book2 = new Book('t2', 'g2', 'a2', 'yes', 'Jan 1st', 'Jan 1st');
const book3 = new Book('t3', 'g3', 'a3', 'not');
const book4 = new Book('t4', 'g4', 'a4', 'yes', 'Jan 1at');
const book5 = new Book('t5', 'g5', 'a5', 'yes', 'yesterday', 'tomorrow');

// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.
homeLibrary.add(book1);
homeLibrary.add(book2);
homeLibrary.add(book3);
homeLibrary.add(book4);
homeLibrary.add(book5);

console.log(homeLibrary);

