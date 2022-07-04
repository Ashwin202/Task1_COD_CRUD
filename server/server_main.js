const express = require("express");
const app = express();
const mysql = require("mysql");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json(); //to parse json
var urlencodedParser = bodyParser.urlencoded({ extended: false });

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

app.post("/getdata", jsonParser, (req, res) => {
  let id = req.body.id;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let address = req.body.address;
  let mobileno = req.body.mobileno;

  //   let qr=`insert into employee(id,firstname,lastname,address,mobileno) values('+id+','+firstname+','+lastname+','+addr+','${mobileno}')`
  let qr = `insert into employee(id,firstname,lastname,address,mobileno) values('${id}','${firstname}','${lastname}','${address}','${mobileno}')`;

  con.query(qr, (err, result) => {
    if (err) {
      res.send({ status: "Operation failed" });
    } else {
      res.send({ status: "Operation success" });
    }
    res.send(result);
  });
});

app.listen(3300, () => {
  console.log("Server Started");
});

// {
//     "id": "1",
//     "firstname":"Ram",
//     "lastname":"Govind",
//     "address": "WestBengal",
//     "mobileno":"9847745661"

// }
