const express = require("express");
const { createOrder, getOrdersByEmail } = require("./order.controller");

const router = express.Router();

//create order endpoint
router.post("/", createOrder);

router.get("/email/:email", getOrdersByEmail);

module.exports = router;
