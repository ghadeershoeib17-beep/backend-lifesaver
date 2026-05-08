const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Emergency created");
});

router.get("/", (req, res) => {
  res.send("All emergencies");
});

module.exports = router;