var mysql = require('mysql');

exports.connectDB = function () {
    return con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mydb"
    });
}