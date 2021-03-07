const express = require("express");
const employee = require("../models/employee");
const router = express.Router();

router.get("/", (req, res) => {
  employee
    .find()
    .then((employees) => res.json(employees))
    .catch((error) => res.status(500).json(error));
});

router.post("/", (req, res) => {
  const _employee = new employee({
    ...req.body,
  });

  _employee
    .save()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json(error));
});

router.get("/:id", (req, res) => {
  employee
    .findById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json(error));
});

router.delete("/:id", (req, res) => {
  employee
    .findByIdAndDelete(req.params.id)
    .then((employee) => res.json(employee))
    .catch((error) => res.status(500).json(error));
});

router.put("/:id", (req, res) => {
  const _employee = req.body;
  employee
    .findByIdAndUpdate(req.params.id, _employee, { new: true })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json(error));
});
module.exports = router;
