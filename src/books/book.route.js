const express = require("express");
const Book = require("./book.model");
const { createBook, getAllBooks } = require("./book.controller");
const router = express.Router();

//create a new book
router.post("/create-book", createBook);

//get all books
router.get("/get-all-books", getAllBooks);

module.exports = router;
