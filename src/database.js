const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: "localhost",
  user: "root",
  password: "",
  database: "selaski",
  debug: false,
});

pool.getConnection((err,connection) => {
  if(err) throw err;
  console.log('DB is Connected');
  connection.release();
});

module.exports = pool;
