const express = require("express");
const BookService = require("./servies");

const router = express.Router();
const bookService = new BookService();

// GET all books
router.get("/", (req, res) => {
  const books = bookService.getAllBooks();
  res.json(books);
});

// GET book by id
router.get("/:id", (req, res) => {
  const book = bookService.getBookById(Number(req.params.id));

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});

// ADD book
router.post("/", (req, res) => {
  const newBook = {
    id: Date.now(),
    ...req.body,
  };

  const result = bookService.addBook(newBook);
  res.status(201).json(result);
});

// UPDATE book
router.put("/:id", (req, res) => {
  const updatedBook = bookService.updateBook(Number(req.params.id), req.body);

  if (!updatedBook) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(updatedBook);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const success = bookService.deleteBook(id);

  if (!success) {
    return res.status(404).json({ message: "Book not found" });
  }

  return res.json({ message: "Book deleted successfully" });
});

module.exports = router;
