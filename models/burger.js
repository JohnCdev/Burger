const orm = require("../config/orm");

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", data => {
            cb(data);
        })
    },
    insert: (val1, cb) => {
        orm.insertOne("burgers", "burger_name", "devoured", val1, false, data => {
            cb(data);
        })
    },
    devour: (id, cb) => {
        orm.updateOne("burgers", "devoured", true, id, function (data) {
            cb(data);
        })
    }
}

module.exports = burger;