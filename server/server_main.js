const express = require("express");
const app = express();
const mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "10As2000*",
  database: "employer",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.get("/get", (req, res) => {
  con.query("select * from employee", (err, result, field) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/get/:id", (req, res) => {
  let id = req.params.id;
  con.query("select * from employee where id=" + id, (err, result, field) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(1235, () => {
  console.log("Server Started");
});
