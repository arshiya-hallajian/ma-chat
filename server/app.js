const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;


//imported routers
const auth_router = require("./routes/auth.router");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routers
app.use("/api/auth", auth_router);
app.get("/api/auth/login",async (req, res) => {
  res.send("welcome in the backend!");
 
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;