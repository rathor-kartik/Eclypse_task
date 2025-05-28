const express = require("express");
const cors = require("cors");

const productsRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
