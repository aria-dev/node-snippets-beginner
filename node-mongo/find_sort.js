var db_module = require('./mongodb_module');
var client = db_module.getMongoDBClient();



client.connect(function (err, db) {
  if (err) throw err;
  var dbo = db.db("learn");

  // { name: 1 } // ascending
  // { name: -1 } // descending

  var mysort = { name: -1 };
  dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

