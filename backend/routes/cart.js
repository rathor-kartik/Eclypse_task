const express = require("express");
const router = express.Router();

let cart = [
  {
    productId: "1",
    name: "Silhouette No. 1 – Vermilion",
    price: 7999,
    quantity: 1
  }
];

router.get("/", (req, res) => {
  res.json(cart);
});

module.exports = router;
