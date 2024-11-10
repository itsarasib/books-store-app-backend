const express = require("express");
const Book = require("./book.model");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
} = require("./book.controller");
const router = express.Router();

//create a new book
router.post("/create-book", createBook);

//get all books
router.get("/get-all-books", getAllBooks);

//get book by id
router.get("/:id", getBookById);

//update book by id
router.put("/edit/:id", updateBook);

module.exports = router;
