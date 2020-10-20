const connection = require("./connection")

function objToSql(ob) {
    let arr = [];
  

    for (let key in ob) {
      let value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {

        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }

  function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
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
    
    insertOne: function(table, cols, vals, cb) {
      let queryString = "INSERT INTO " + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";

      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    updateOne: function(table, objCol, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objCol);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}



module.exports = orm
