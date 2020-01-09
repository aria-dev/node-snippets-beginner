var connection = require('./db_connection_module');
var con = connection.connectDB();

con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Rows Deleted: ' + result.affectedRows);
        con.end();
    });
});