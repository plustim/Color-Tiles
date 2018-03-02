var mysql = require("mysql");

if( process.env.JAWSDB_URL ){
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  var connection = mysql.createConnection({
    port: 3307,
    host: "localhost",
    user: "root",
    password: "root",
    database: "color_tiles"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection.
module.exports = connection;