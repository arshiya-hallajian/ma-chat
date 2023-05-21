const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const mongoose = require("mongoose");
const env = require("dotenv").config();

//routes
const auth_router = require("./routes/auth.router");
// const product_router = require('./routes/product.router');
// const cart_router = require('./routes/cart.router')

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connect
mongoose.connect(process.env.ADMIN_ID).then(() => {
  console.log("connect to db");
});

//use routers
app.use("/api/auth", auth_router);
// app.use("/api/product", product_router);
// app.use("/api/cart", cart_router);

app.get("/", (req, res) => {
  res.send("Welcome Shine Backend");
});

app.listen(port, () => console.log(`listening on port ${port}!`));

module.exports = app;
