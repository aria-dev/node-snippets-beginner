var connection = require('./db_connection_module');
var con = connection.connectDB();

con.connect(function (err) {
    if (err) throw err;
    var sql = "drop table if exists customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        con.end();
    });
});