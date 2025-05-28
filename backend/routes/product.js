const express = require("express");
const router = express.Router();

const products = [
  {
    id: "1",
    name: "Silhouette No. 1 – Vermilion",
    price: 7999,
  },
  {
    id: "2",
    name: "Silhouette No. 2 – Obsidian",
    price: 7299,
  }
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
