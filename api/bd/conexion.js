const mysql = require("mysql");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app"
});

db.connect(err => {
  if (!err) {
    console.log("conected");
  } else {
    console.log("error");
  }
});

module.exports = db;
