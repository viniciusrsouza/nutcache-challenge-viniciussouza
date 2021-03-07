const express = require("express");
const router = express.Router();

const employee = require("./routes/employee");

router.use("/nutemployee", employee);

module.exports = router;
