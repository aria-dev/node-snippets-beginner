var connection = require('./db_connection_module');
var con = connection.connectDB();

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
        if (err) throw err;
        console.log(result);
        con.end();
    });
});
