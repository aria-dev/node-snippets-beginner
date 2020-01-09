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

    var sql = 'create table customers (id int auto_increment primary key, name varchar(255), address varchar(255), last-updated varchar(255))';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});