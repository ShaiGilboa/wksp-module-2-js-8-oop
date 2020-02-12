// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title || '';
        this.genre = genre || '';
        this.author = author || '';
        this.read = read || '';
        if (read !== 'not') {
        this.startReadDate = startReadDate || '';
        this.endReadDate = endReadDate || '';
        }
    }
}

const book1 = new Book('t', 'g', 'a', 'not', 'start', 'end');
const book2 = new Book('t2', 'g2', 'a2', 'yes', 'Jan 1st', 'Jan 1st');
const book3 = new Book('t3', 'g3', 'a3', 'not');
const book4 = new Book('t4', 'g4', 'a4', 'working on it', 'Jan 1at');
const book5 = new Book('t5', 'g5', 'a5', 'done', 'yesterday', 'tomorrow');


console.log(book1, book2, book3, book4, book5);