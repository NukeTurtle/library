//     {
//         bookTitle: "Harry Potter and the Goblet of Fire",
//         author: "J. K. Rowling",
//         numberOfPages: "464",
//         bookRead: false,
//         releaseYear: "2019"
//     },
//     {
//         bookTitle: "Harry Potter and the Deathly Hallows",
//         author: "J. K. Rowling",
//         numberOfPages: "759",
//         bookRead: true,
//         releaseYear: "2007"
//     }

class Book {
    constructor(bookId, bookTitle, bookAuthor, bookPages, bookRead, bookYear) {
        this.id = bookId,
        this.title = bookTitle,
        this.author = bookAuthor,
        this.pages = bookPages,
        this.read = bookRead,
        this.year = bookYear

        // this.myBook = function() {
        //     return this.bookId + this.title + this.author + this.pages + this.read + this.year;
        // };
    }
}
const myLibrary = [];
const currentLibrary = [];
console.log(currentLibrary)
function addBookToLibrary(bookId, bookTitle, bookAuthor, bookPages, bookRead, bookYear) {
    let newBook = new Book(bookId, bookTitle, bookAuthor, bookPages, bookRead, bookYear)
    // newBook.id = bookId,
    // newBook.title = bookTitle,
    // newBook.author = bookAuthor,
    // newBook.pages = bookPages,
    // newBook.read = false,
    // newBook.year = bookYear
    var currentLibrary = myLibrary + myLibrary.push(newBook)
    // console.log("New Book: ", addBook.name)
    // localStorage.setItem("Books", JSON.stringify(currentLibrary))
    console.log("current lib",currentLibrary)
    return myLibrary;
}
console.log("current lib 2",currentLibrary)

// TODO:
// -store myLibrary in local Storage
// -check why Book is always added in console