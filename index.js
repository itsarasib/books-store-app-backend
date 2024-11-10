const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

//port
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

//routes
const booksRoutes = require("./src/books/book.route");
app.use("/api/books", booksRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main()
  .then(() => console.log("mongodb connect successfully"))
  .catch((err) => console.log(err));
