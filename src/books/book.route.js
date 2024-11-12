const express = require("express");
const Book = require("./book.model");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("./book.controller");
const router = express.Router();

//create a new book
router.post("/create-book", createBook);

//get all books
router.get("/", getAllBooks);

//get book by id
router.get("/:id", getBookById);

//update book by id
router.put("/edit/:id", updateBook);

//delete book by id
router.delete("/:id", deleteBook);

module.exports = router;
