var db_module = require('./mongodb_module');
var client = db_module.getMongoDBClient();



client.connect(function (err, db) {
  if (err) throw err;
  var dbo = db.db("learn");


  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

