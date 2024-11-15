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

const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders by email", error);
    res.status(500).json({ message: "Failed to fetch orders by email" });
  }
};

module.exports = { createOrder, getOrdersByEmail };
