const pool = require("../../../database");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
// get config vars
dotenv.config();
// access config var
process.env.TOKEN_SECRET;

const authCtrl = {};

authCtrl.validate = (req, res) => {
try {
    const data = req.body.params;
    console.log(data);
    //const token = generateAccessToken(data.Email);
    //console.log(token);
    pool.query(
      "SELECT * FROM user o WHERE Email = ? AND Passwod = ?;",
      [data.Email, data.Password],
      (err, rows) => {
        if (err) {
          res.send({ endpoitn: "Auth", method: "Validate", errCod: err });
          throw err;
        }
        if(rows.length > 0) {
          res.send({
            endpoitn: "Auth",
            method: "Post",
            errCod: "OK-00",
            user: {IdUser: rows[0].IdUser, nombre: rows[0].Name, token: "toekn"},
          });
        }
        else{
            res.send({
              endpoitn: "Auth",
              method: "Post",
              errCod: "ERR-01",
              errMsg: "No existe el usuario",
            });
        }
      }
    );
} catch (error) {
    console.log(error);
}
}
function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

module.exports = authCtrl;
