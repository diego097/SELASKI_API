const pool = require("../../../database");
const orderCtrl = {};

orderCtrl.create = async (req, res) => {
  try {
    const data = req.body;
    pool.query(
      "INSERT INTO orders (IdUser, OrderNumber, DateTime, ProviderName, DateCreated, Observation, TotalValue, Status) VALUES (?,?,?,?,?,?,?,?)",
      [
        data.IdUser,
        data.OrderNumber,
        data.DateTime,
        data.ProviderName,
        data.DateCreated,
        data.Observation,
        data.TotalValue,
        data.Status,
      ],
      (err, data) => {
        if (err) {
          res.send({ endpoitn: "Orders", method: "Add", errCod: err });
          throw err;
        }
        res.send({ endpoitn: "Orders", method: "Add", errCod: "OK-00" });
      }
    );
  } catch (e) {
    console.log(e);
  }
};

orderCtrl.delete = async (req, res) => {
  try {
    const data = req.body;
    pool.query(
      "UPDATE orders SET Status = 0 WHERE IdOrder = ?",
      [data.IdOrder],
      (err, data) => {
        if (err) {
          res.send({ endpoitn: "Orders", method: "Delete", errCod: err });
          throw err;
        }
        res.send({ endpoitn: "Orders", method: "Delete", errCod: "OK-00" });
      }
    );
  } catch (e) {
    console.log(e);
  }
};

orderCtrl.update = async (req, res) => {
  try {
    const data = req.body;
    pool.query(
      'UPDATE orders SET IdUser = ?, OrderNumber = ?, DateTime = ?, ProviderName = ?, DateCreated = ?, Observation  = ?, TotalValue = ?,   Status = ? WHERE IdOrder = ?',
      [data.IdUser,data.OrderNumber,data.DateTime, data.ProviderName, data.DateCreated, data.Observation, data.TotalValue, data.Status, data.IdOrder],
      (err, data) => {
        if (err) {
          res.send({ endpoitn: "Orders", method: "Update", errCod: err });
          throw err;
        }
        res.send({ endpoitn: "Orders", method: "Update", errCod: "OK-00"});
      }
    );
  } catch (e) {
    console.log(e);
  }
};

orderCtrl.get = async (req, res) => {
  try {
    pool.query("SELECT * FROM orders o WHERE o.Status != 0;", (err, data) => {
      if (err) {
        res.send({ endpoitn: "Orders", method: "Get", errCod: err });
        throw err;
      }
      res.send({ endpoitn: "Orders", method: "Get", errCod: "OK-00", orders: data });
    });
  } catch (e) {}
};

module.exports = orderCtrl;
