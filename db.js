const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "studentdb",
});

db.connect((err) => {
  if (err) {
    console.log("Kết nối MySQL thất bại");
  } else {
    console.log("Kêt nối MySQL thành công");
  }
});

module.exports = db;
