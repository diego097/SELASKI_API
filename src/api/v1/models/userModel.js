const res = require("express/lib/response");
const pool = require("../../../database");

async function getAll() {
  var context = {};
  await pool.query("SELECT * FROM User", function (err, rows, fields) {
    if (err) {
      next(err);
      return;
    }
    context = JSON.stringify(rows);
    console.log(context);
    return context;
  });
}

module.exports.getAll = getAll;
