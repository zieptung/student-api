const db = require("../config/db");

exports.getAllStudents = (callback) => {
  db.query("SELECT * FROM students", callback);
};

exports.createStudent = (student, callback) => {
  db.query("INSERT INTO students SET ?", student, callback);
};

exports.deleteStudent = (id, callback) => {
  db.query("DELETE FROM students WHERE id=?", [id], callback);
};
