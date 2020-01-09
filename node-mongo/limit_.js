var db_module = require('./mongodb_module');
var client = db_module.getMongoDBClient();



client.connect(function (err, db) {
  if (err) throw err;
  var dbo = db.db("learn");
  dbo.collection("products").find().limit(5).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });

});

