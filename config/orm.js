const connection = require("./connection")


let orm = {
    selectAll: function(table, cb){
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    
    insertOne() {
        console.log("This is the insert one function!")
    },
    
    updateOne() {
        console.log("This is the update one function!")
    }
}



module.exports = orm
