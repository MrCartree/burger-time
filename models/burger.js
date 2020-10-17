const orm = require("../config/orm");

let burger = {
    all: function(cb) {
        orm.selectAll("burger_name", function(res) {
            cb(res);
        });
    },
}