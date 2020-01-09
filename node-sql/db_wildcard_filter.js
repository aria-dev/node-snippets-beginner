var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    var adr = "Mountain 21"
    var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    var sql1 = 'Select * from customers where address = ?';
    con.query(sql1, [adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    var sql2 = 'select * from customers where name = ? or address = ?';
    con.query(sql2, ['Amy', 'Mountain 21'], function (err, result) {
        if (err) throw err;
        console.log(result);
        con.end();
    })
});
