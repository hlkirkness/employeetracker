const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "password",
    database: "employee_tracker",
  },
  console.log("Connected to the Employee Watcher database.")
);

module.exports = db;