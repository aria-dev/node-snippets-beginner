var db_module = require('./mongodb_module');
var client = db_module.getMongoDBClient();



client.connect(function (err, db) {
  if (err) throw err;
  var dbo = db.db("learn");
  dbo.collection('orders').aggregate([
    {
      $lookup:
      {
        from: 'products',
        localField: 'product_id',
        foreignField: '_id',
        as: 'orderdetails'
      }
    }
  ]).toArray(function (err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});

