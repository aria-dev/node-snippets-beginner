var connection = require('./db_connection_module');
var con = connection.connectDB();

con.connect(function (err) {
    if (err) throw err;

    var sql1 = "create table if not exists products (id int primary key, name varchar(255))";

    con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log("Table created!\nAdding data...")

        var sql2 = "insert into products (id, name) values ?";
        var values = [
            [154, 'Chocolate Heaven'],
            [155, 'Tasty Lemons'],
            [156, 'Vanilla Dreams']
        ];

        con.query(sql2, [values], function (err, result) {
            if (err) throw err;
            console.log("No of Rows. inserted: " + result.affectedRows);
            con.end();
        });
    });
});