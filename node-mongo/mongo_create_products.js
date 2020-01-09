const uri = "mongodb+srv://shanu:thelastofus@whonnick-qyhdf.mongodb.net/learn?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(function (err, db) {
    if (err) throw err;
    var dbo = db.db("learn");
    var myobj = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemon' },
        { _id: 156, name: 'Vanilla Dream' }
    ];
    dbo.collection("products").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Records created! : " + res.insertedCount);
        db.close();
    });
}); 