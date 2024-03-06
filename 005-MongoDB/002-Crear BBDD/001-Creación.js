var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/nodejs'

mongo.connect(url,function(err,db){
    if (err) throw err;
    console.log("Base de datos creada");
    db.close();
}).catch(err){
    console.log(err)
}