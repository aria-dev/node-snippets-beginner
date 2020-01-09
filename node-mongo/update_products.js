var db_module = require('./mongodb_module');
var client = db_module.getMongoDBClient();



client.connect(function (err, db) {
  if (err) throw err;
  var dbo = db.db("learn");
  var myquery = { _id: 155 };
  var newvalues = { $set: {name: "Choco Banana"} };

  dbo.collection("products").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    console.log(res)
    db.close();
  });

});

