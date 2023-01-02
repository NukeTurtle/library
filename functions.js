// Book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// Display books, tasks handle
class Display {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => Display.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.form-container');
        const form = document.querySelector('#form');
        container.insertBefore(div, form);

        // Vanish in 3 sec.
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').checked = false;
    }
    
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

// Local Storage handling
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(id) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.id === id) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Display to list
document.addEventListener('DOMContentLoaded', Display.displayBooks);

// Getting form values
document.querySelector('#form').addEventListener('submit', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    
    // Form validation
    if (title === '' || author === '' || pages === '') {
        Display.showAlert('Please fill in all fields!', 'danger');
    } else {
        // create new object book
        const book = new Book(title, author, pages, read);
        console.log(book);
        
        // Add to list
        Display.addBookToList(book);

        // Add Book to Storage
        Store.addBook(book);

        // Success message
        Display.showAlert('Book Added', 'success');

        // Clear fields
        Display.clearFields();
    }
});

// Feature: remove button
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from Display
    Display.deleteBook(e.target);

    // Remove book from local storage
    Store.removeBook();

    // Success message
    Display.showAlert('Book Removed', 'success');
});
=======
// TODO:
// -store myLibrary in local Storage
// -check why Book is always added in console
