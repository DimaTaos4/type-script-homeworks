class Library {
  static totalBooks: number = 0;
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  addBook() {
    console.log(Library.totalBooks++);
  }
  getTotalBooks(): number {
    return Library.totalBooks;
  }
}

const library1 = new Library("Stadt Bibliothek");
library1.addBook();
library1.addBook();

console.log(library1.getTotalBooks());
