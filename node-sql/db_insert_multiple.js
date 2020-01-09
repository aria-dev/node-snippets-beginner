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

    var sql = "INSERT INTO customers (name, address, last_updated) VALUES ?";
    var values = [
        ['John', 'Highway 71', 'Jan-07'],
        ['Peter', 'Lowstreet 4', 'Jan-07'],
        ['Amy', 'Apple st 652', 'Jan-07'],
        ['Hannah', 'Mountain 21', 'Jan-07'],
        ['Michael', 'Valley 345', 'Jan-07'],
        ['Sandy', 'Ocean blvd 2', 'Jan-07'],
        ['Betty', 'Green Grass 1', 'Jan-07'],
        ['Richard', 'Sky st 331', 'Jan-07'],
        ['Susan', 'One way 98', 'Jan-07'],
        ['Vicky', 'Yellow Garden 2', 'Jan-07'],
        ['Ben', 'Park Lane 38', 'Jan-07'],
        ['William', 'Central st 954', 'Jan-07'],
        ['Chuck', 'Main Road 989', 'Jan-07'],
        ['Viola', 'Sideway 1633', 'Jan-07']
    ];

    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });

    con.end();
});