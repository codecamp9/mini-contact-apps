const db = require("../config/db");

exports.getAll = (req, res) => {
    const query = "SELECT * FROM contacts";
    db.query(query, (err, results) => {
        res.json({
            status: 200,
            payload: results,
        })
    })
}