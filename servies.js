const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./books.json");

class BookService {
  getAllBooks() {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  }

  getBookById(id) {
    const books = this.getAllBooks();
    return books.find((book) => book.id === id);
  }

  addBook(newBook) {
    const books = this.getAllBooks();
    books.push(newBook);
    this.writeBooksToFile(books);
    return newBook;
  }

  updateBook(id, updatedData) {
    const books = this.getAllBooks();
    const index = books.findIndex((book) => book.id === id);

    if (index === -1) return null;

    books[index] = { ...books[index], ...updatedData };
    this.writeBooksToFile(books);
    return books[index];
  }

  deleteBook(id) {
    const books = this.getAllBooks();
    const index = books.findIndex((book) => book.id === id);

    if (index === -1) return false;

    const deletedBook = books.splice(index, 1)[0];
    this.writeBooksToFile(books);
    return deletedBook;
  }
  
  writeBooksToFile(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

module.exports = BookService;
