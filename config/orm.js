// Import (require) connection.js into orm.js
var connection = require("../config/connection.js");

var orm = {

	// return array of all records in 'table' where 'col' = 'val'
	selectAll: function(table, col, val, cb){
		if(cb){
			connection.query("SELECT * FROM ?? WHERE ?? = ?;", [table, col, val], cb);
		}else{
			connection.query("SELECT * FROM ??;", [table], col);
		}
	},

	// insert one record into 'table' with 'col' set to 'val'
	insertOne: function(table, col, val, cb){
		connection.query("INSERT INTO ?? ( ?? ) VALUES ( ? );", [table, col, val], cb);
	},

	// update all records in 'table' where 'whereCol' = 'whereVal' so that 'resCol' = 'resVal'
	updateOne: function(table, whereCol, whereVal, resCol, resVal, cb){
		connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?;", [table, resCol, resVal, whereCol, whereVal], cb);
	}
}

// Export the ORM object in module.exports.
module.exports = orm;