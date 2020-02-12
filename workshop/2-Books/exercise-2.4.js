// From 2.3
// Copy over all of the code from 2.3...

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
        this.upNext = book;
    }

    startReading = (title) => {
        this.currentBook = this.books.find(book => book.title === title);
        this.currentBook.read = 'yes';
        this.currentBook.startReadDate = new Date();
        (this.books.indexOf(this.currentBook) - 1 !==0) ? this.upNext = this.books[this.books.indexOf(this.currentBook) - 1] : this.upNext = null;
    }

    // i'm assuming "last in first out" in reading order, that's the only use I could inf to "upNext"
    // without upNext, I wouldn't have had that kind of assumption.
    
    finishedReading = (title) => {
        this.lastBook = title;
        this.currentBook.read = 'yes';
        this.currentBook.endReadDate = new Date();

        this.bookUnread --;
        this.booksread ++;
    }
}

const homeLibrary = new BookList();
console.log(homeLibrary);

const book1 = new Book('t', 'g', 'a', 'no');
const book2 = new Book('t2', 'g2', 'a2', 'no');
const book3 = new Book('t3', 'g3', 'a3', 'no');
const book4 = new Book('t4', 'g4', 'a4', 'no');
const book5 = new Book('t5', 'g5', 'a5', 'no');

homeLibrary.add(book1);
homeLibrary.add(book2);
homeLibrary.add(book3);
homeLibrary.add(book4);
homeLibrary.add(book5);

console.log(homeLibrary);

homeLibrary.startReading('t5');
console.log('start')
console.log("current book " , homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);

homeLibrary.finishedReading('t5');
console.log("current book " , homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);

homeLibrary.startReading('t4');
console.log('start')
console.log("current book " , homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);

homeLibrary.finishedReading('t4');
console.log("current book ", homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);

homeLibrary.startReading('t3');
console.log('start')
console.log("current book " , homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);

homeLibrary.finishedReading('t3');
console.log("current book " , homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);

homeLibrary.startReading('t2');
console.log('start')
console.log("current book " , homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);

homeLibrary.finishedReading('t2');
console.log("current book " , homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);

homeLibrary.startReading('t');
console.log('start')
console.log("current book " , homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);

homeLibrary.finishedReading('t');
console.log("current book " , homeLibrary.currentBook);
console.log("books read " + homeLibrary.booksread);
console.log("books unread " + homeLibrary.bookUnread);





// // Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
