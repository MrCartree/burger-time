const orm = require("../config/orm");

let burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    update: function(objCol, condition, cb) {
        orm.updateOne("burgers", objCol, condition, function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;