var db_module = require('./mongodb_module');
var client = db_module.getMongoDBClient();



client.connect(function (err, db) {
  if (err) throw err;
  var dbo = db.db("learn");
  var query = { address: /^S/  };
  dbo.collection("customers").find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

