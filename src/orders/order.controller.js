const Order = require("./order.model");

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res
      .status(200)
      .json({ message: "Order created successfully", order: savedOrder });
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to create order from backend" });
  }
};

module.exports = { createOrder };
