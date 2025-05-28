const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Order endpoint is active. Use POST to place an order." });
});

router.post("/", (req, res) => {
  const { items, address } = req.body;

  if (!items || !address) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  return res.json({
    message: "Order placed successfully",
    orderId: Math.floor(Math.random() * 100000),
    items,
    address
  });
});

module.exports = router;
