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
        const StoredBooks = [
            {
                title: "Harry Potter and the Goblet of Fire",
                author: "J. K. Rowling",
                pages: 464,
                read: false
            },
            {
                title: "Harry Potter and the Deathly Hallows",
                author: "J. K. Rowling",
                pages: 759,
                read: true
            }
        ];

        const books = StoredBooks;

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

        // Clear fields
        Display.clearFields();
    }
});

// Feature: remove button
document.querySelector('#book-list').addEventListener('click', (e) => {
    Display.deleteBook(e.target)
});