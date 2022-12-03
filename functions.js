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


