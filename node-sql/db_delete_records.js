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

    var sql = "delete from customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Query processed!");
    });
    con.end();
});