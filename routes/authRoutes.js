const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Register works");
});

router.post("/login", (req, res) => {
  res.send("Login works");
});

module.exports = router;