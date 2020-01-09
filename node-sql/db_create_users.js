var connection = require('./db_connection_module');
var con = connection.connectDB();

con.connect(function (err) {
    if (err) throw err;

    var sql1 = "create table if not exists users (id int auto_increment primary key, name varchar(255), favorite_product int)";

    con.query(sql1, function (err, result) {
        if (err) throw err;
        console.log("Table created!\nAdding data...")

        var sql2 = "insert into users (name, favorite_product) values ?";
        var values = [
            ['John', 154],
            ['Peter', 154],
            ['Amy', 155],
            ['Michael', null],
            ['Hannah', null]
        ];

        con.query(sql2, [values], function (err, result) {
            if (err) throw err;
            console.log("No of Rows. inserted: " + result.affectedRows);
            con.end();
        });
    });
});