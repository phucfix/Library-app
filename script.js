"use strict";

const myLibrary = [];

// DOM
const bookContainer = document.querySelector(".books");

function Book(author, title, pages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(author, title, pages, isRead) {
    // take params, create a book then store it in the array
    const newBook = new Book(author, title, pages, isRead);
    myLibrary.push(newBook);
}

// Add some books to test
addBookToLibrary("Brian Kernighan", "The C Programing Language", 300, false);
addBookToLibrary("J. K. Rowling", "Harry Potter", 500, false);

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        createBookCard(myLibrary[i]);
    }
}

function createBookCard(book) {
    // Create book card container
    const bookCardContainer = document.createElement("div");
    bookCardContainer.classList.add("book-card");

    // Add content to book card
    Object.keys(book).forEach(key => {
        console.log(`${key} : ${book[key]}`);

        const bookInfo = document.createElement("p");
        bookInfo.textContent = `${key} : ${book[key]}`
        bookCardContainer.appendChild(bookInfo);
    })

    bookContainer.appendChild(bookCardContainer);
}

// Display the books
displayBook();

// Modal
const showButton = document.getElementById("show-dialog");
const bookDialog = document.getElementById("book-dialog");
const confirmBtn = bookDialog.querySelector("#confirm-btn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  bookDialog.showModal();
});


// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form 
  bookDialog.close();  
});

