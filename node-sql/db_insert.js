var mysql = require('mysql');

//Declare connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});


//Connect with Database
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "insert into customers (name, address, last_updated) values ('Company Inc.', 'Highway 37', 'Jan-06')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Query processed!");
    });
});