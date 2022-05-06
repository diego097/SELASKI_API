const pool = require("../../../database");
const productCtrl = {};

productCtrl.create = async (req, res) => {
  try {
    const data = req.body.params;
    console.log(data);
    pool.query(
      "INSERT INTO ordersproducts (IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark, Status) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [
        data.IdOrder,
        data.ValueUnit,
        data.Unit,
        data.Description,
        data.SKU,
        data.Quantity,
        data.QtyBox,
        data.Weight,
        data.Volumen,
        data.Mark,
        data.Status,
      ],
      (err, data) => {
        if (err) {
          res.send({ endpoitn: "ordersproducts", method: "Add", errCod: err });
          throw err;
        }
        res.send({
          endpoitn: "ordersproducts",
          method: "Add",
          errCod: "OK-00",
        });
      }
    );
  } catch (e) {
    console.log(e);
  }
};

productCtrl.delete = async (req, res) => {
  try {
    const data = req.query;
    console.log(data);
    pool.query(
      "UPDATE ordersproducts SET Status = 0 WHERE IdOrdersProducts  = ?",
      [data.IdOrdersProducts ],
      (err, data) => {
        if (err) {
          res.send({ endpoitn: "Products", method: "Delete", errCod: err });
          throw err;
        }
        res.send({ endpoitn: "Products", method: "Delete", errCod: "OK-00" });
      }
    );
  } catch (e) {
    console.log(e);
  }
};
productCtrl.update = async (req, res) => {
    try {
        const data = req.body;
        pool.query(
          'UPDATE ordersproducts SET IdOrder = ?, ValueUnit = ?, Unit = ?, Description = ?, SKU = ?, Quantity  = ?, QtyBox = ?, Weight = ?, Volumen = ?, Mark = ?,   Status = ? WHERE IdOrdersProducts = ?',
          [data.IdOrder,data.ValueUnit,data.Unit, data.Description, data.SKU, data.Quantity, data.QtyBox, data.Weight, data.Volumen, data.Mark, data.Status, data.IdOrdersProducts],
          (err, data) => {
            if (err) {
              res.send({ endpoitn: "Products", method: "Update", errCod: err });
              throw err;
            }
            res.send({ endpoitn: "Products", method: "Update", errCod: "OK-00"});
          }
        );
      } catch (e) {
        console.log(e);
      }
};

productCtrl.get = async (req, res) => {
  try {
    pool.query(
      "SELECT * FROM ordersproducts o WHERE o.Status != 0;",
      (err, data) => {
        if (err) {
          res.send({ endpoitn: "Products", method: "Get", errCod: err });
          throw err;
        }
        res.send({
          endpoitn: "Products",
          method: "Get",
          errCod: "OK-00",
          products: data,
        });
      }
    );
  } catch (e) {}
};

module.exports = productCtrl;
