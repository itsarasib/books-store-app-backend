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
    const books = await Book.find().sort({ createdAt: -1 }); // descending order
    res.status(200).send({ message: "Get all books successfully", books });
  } catch (error) {
    console.error("Error getting books: ", error);
    res.status(500).send({ message: "Failed to get books" });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Get book by id successfully", book });
  } catch (error) {
    console.error("Error getting book by id: ", error);
    res.status(500).send({ message: "Failed to get book by id" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book updated successfully", updatedBook });
  } catch (error) {
    console.error("Error updating book: ", error);
    res.status(500).send({ message: "Failed to update book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book deleted successfully", deletedBook });
  } catch (error) {
    console.error("Error deleting book: ", error);
    res.status(500).send({ message: "Failed to delete book" });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
