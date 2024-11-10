const Book = require("./book.model");

const createBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save(); // save the new book to the database
    res
      .status(200)
      .send({ message: "Book created successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book: ", error);
    res.status(500).send({ message: "Failed to create book" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    console.error("Error getting books: ", error);
    res.status(500).send({ message: "Failed to get books" });
  }
};

module.exports = { createBook, getAllBooks };
