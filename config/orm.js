const connection = require("./connection")

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  

    for (var key in ob) {
      var value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {

        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }


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
    
    updateOne: function(table, objCol, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objCol);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString)
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}



module.exports = orm
