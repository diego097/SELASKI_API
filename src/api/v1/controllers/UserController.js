const pool = require("../../../database");
const userCtrl = {};

userCtrl.get = (req, res) => {
  try {
    pool.query("SELECT * FROM User", (err, data) => {
      if (err) throw err;
      res.send({endpoitn: 'Users', method: 'GET',users:data});
    });
  } catch (e) {
    console.log("Error ", e);
  }
};

module.exports = userCtrl;
