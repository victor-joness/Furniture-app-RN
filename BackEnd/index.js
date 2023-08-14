const express = require("express");
const dontenv = require("dotenv");
const mongoose = require("mongoose");
const productsRoutes = require("./Routes/Products");
const authRoutes = require("./Routes/Auth");
const userRoutes = require("./Routes/User");
const cartRoutes = require("./Routes/Cart");
const orderRoutes = require("./Routes/Order");
const app = express();
const port = 3000;

dontenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected!"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products", productsRoutes);
app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
