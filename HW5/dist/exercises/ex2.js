"use strict";
class Library {
    constructor(name) {
        this.name = name;
    }
    addBook() {
        console.log(Library.totalBooks++);
    }
    getTotalBooks() {
        return Library.totalBooks;
    }
}
Library.totalBooks = 0;
const library1 = new Library("Stadt Bibliothek");
library1.addBook();
library1.addBook();
console.log(library1.getTotalBooks());
