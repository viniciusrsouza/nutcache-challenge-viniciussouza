const express = require("express");
const router = express.Router();

const employee = require("./routes/employee");

router.use("/employee", employee);

module.exports = router;
