const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Darren1@",
    database: "employee_tracker",
  },
  console.log("Connected to the Employee Watcher database.")
);

module.exports = db;