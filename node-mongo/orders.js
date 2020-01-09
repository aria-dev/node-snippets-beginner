const uri = "mongodb+srv://shanu:thelastofus@whonnick-qyhdf.mongodb.net/learn?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect( function(err, db){
    if (err) throw err;
    var dbo = db.db("learn");
    var myobj = [
        { _id: 1, product_id: 154, status: 1 },
        { _id: 2, product_id: 155, status: 1 },
        { _id: 3, product_id: 156, status: 0 },
      ];
    dbo.collection("orders").insertMany( myobj, function(err, res){
        if (err) throw err;
        console.log("Records created! : " + res.insertedCount);
        db.close();
    });
});