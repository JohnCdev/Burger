const orm = require("../config/orm");

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", function (data) {
            cb(data);
        })
    },
    insert: (col1, col2, val1, val2, cb) => {
        orm.selectAll("burgers", col1, col2, val1, val2, function (data) {
            cb(data);
        })
    },
    update: (col1, col2, val1, val2, id, cb) => {
        orm.selectAll("burgers", col1, col2, val1, val2, id, function (data) {
            cb(data);
        })
    }
}

module.exports = burger;