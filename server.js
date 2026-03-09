const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
