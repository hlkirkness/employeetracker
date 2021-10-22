// const mysql = require("mysql2");
// const db = mysql.createConnection(
//   {
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "employeetracker_db",
//   },
//   console.log("Connected to the Employee Watcher database.")
// );

// module.exports = db;
const mysql = require('mysql2');
 const inquirer = require("inquirer");
 const db = mysql.createConnection(
   {
     host: 'localhost',
     // MySQL username,
     user: 'root',
     // {TODO: Add your MySQL password}
     password: 'password',
     database: 'employeetracker_db'
   },
   console.log(`Connected to the employeetracker_db database.`)
 );
 // Query database
 // let deletedRow = 2;
 // db.query(`DELETE FROM books WHERE id = ?`, deletedRow, (err, result) => {
 //   if (err) {
 //     console.log(err);
 //   }
 //   console.log(result);
 // });
 // Query database
 db.query('SELECT * FROM employee', function (err, results) {
   console.log(results);
 });