const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user.address);
    return res.json(user);
  } catch (error) {
    return res.json(error.message);
  }
});

module.exports = router;
