var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "alter table customers drop last_updated";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table dropped " + result.query);
    });

    con.end();
});
