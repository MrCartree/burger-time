const orm = require("../config/orm");

let burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
}

module.exports = burger;