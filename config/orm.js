const connection = require("../config/connection")

const orm = {
    selectAll: (table, cb) => {
        connection.query("SELECT * FROM ??", [table], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: (table, col1, col2, val1, val2, cb) => {
        connection.query("INSERT INTO ?? (??,??) VALUES (?,?)", [table, col1, col2, val1, val2], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: (table, col1, val1, id, cb) => {
        connection.query("UPDATE ?? SET ??=? WHERE id=?", [table, col1, val1, id], (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;