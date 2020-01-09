const uri = "mongodb+srv://shanu:thelastofus@whonnick-qyhdf.mongodb.net/learn?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


exports.getMongoDBClient = function(){
    return client;
} 
