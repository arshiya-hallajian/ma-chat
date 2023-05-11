// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//user login
module.exports.login = async (req, res) => {
   
const email = req.body.email;
  try { 
    //find user in database
    const user = await prisma.user.findUnique({
      where: {
        email : email
      }
    })

    //if user is not found
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
  
  } catch (err) {
    res.status(404).json({status:false, data: err, message: "error in database connection"});
  }
};
