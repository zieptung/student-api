const Student = require("../models/studentModel");
exports.getStudents = (req, res) => {
  Student.getAllStudents((err, results) => {
    if (err) res.send(err);
    else res.json(results);
  });
};

exports.createStudent = (req, res) => {
  const student = req.body;

  Student.createStudent(student, (err) => {
    if (err) res.send(err);
    else res.json({ message: "Tạo sinh viên thành công" });
  });
};

exports.deleteStudent = (req, res) => {
  const id = req.params.id;

  Student.deleteStudent(id, (err) => {
    if (err) res.send(err);
    else res.json({ message: "Xoá sinh viên thành công" });
  });
};
