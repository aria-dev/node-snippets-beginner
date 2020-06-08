const uri = "Use your mongo atlas url";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect( function(err, db){
    if (err) throw err;
    var dbo = db.db("learn");
    dbo.createCollection("customers", function(err, res){
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
