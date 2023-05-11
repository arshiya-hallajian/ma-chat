const express = require('express');
const router = express.Router();
const {login} = require("../controller/auth.controller");
// const authMiddleware = require("../middleware/auth.middleware")

//login router
router.post("/login",login);

module.exports = router;