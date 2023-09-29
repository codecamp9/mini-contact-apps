const db = require("../config/db");

exports.getAll = (req, res) => {
  const query = "SELECT * FROM contacts";
  db.query(query, (err, results) => {
    res.json({
      status: 200,
      payload: results,
    });
  });
};

exports.add = (req, res) => {
  const query = `INSERT INTO contacts SET name = '${req.body.name}', phone = '${req.body.phone}', note = '${req.body.note}'`;
  db.query(query, (err, results) => {
    res.json({
      status: 200,
      payload: results,
    });
  });
};
