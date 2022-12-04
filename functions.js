
var books = [{
    bookTitle: "Harry Potter and the Goblet of Fire",
    author: "J. K. Rowling",
    numberOfPages: "464",
    bookRead: false,
    releaseYear: "2019"
},
{
    bookTitle: "Harry Potter and the Deathly Hallows",
    author: "J. K. Rowling",
    numberOfPages: "759",
    bookRead: true,
    releaseYear: "2007"
}];


function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
} 

const myLibrary  = [];

const myBook = {
    bookId: "",
    bookTitle: "",
    author: "",
    numberOfPages: "",
    bookRead: false,
    releaseYear: ""
}


function addBook(bookId, bookTitle, author, numberOfPages, releaseYear) {
    var newBook = new Object()
    newBook.bookId = bookId,
    newBook.bookTitle = bookTitle,
    newBook.author = author,
    newBook.numberOfPages = numberOfPages,
    newBook.bookRead = false,
    newBook.releaseYear = releaseYear
    myLibrary.push(newBook)
    console.log("New Book: ", myLibrary)
    localStorage.setItem("Books", JSON.stringify(myLibrary))
}
