const express = require("express");
const router = express.Router();

const controller = require("../controllers/studentController");

// GET /students
router.get("/", controller.getStudents);

// POST /students
router.post("/", controller.createStudent);

// DELETE /students/:id
router.delete("/:id", controller.deleteStudent);

module.exports = router;
