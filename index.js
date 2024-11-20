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
    origin: [
      "http://localhost:5173",
      "https://book-store-app-frontend-fp6v.vercel.app/",
    ],
    credentials: true,
  })
);

//routes
const booksRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", booksRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main()
  .then(() => console.log("mongodb connect successfully"))
  .catch((err) => console.log(err));
