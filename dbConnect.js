require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

//Database Connection
const url = "mongodb+srv://admin:admin@cluster0.dbnau.mongodb.net/SIT725_2022_T1?retryWrites=true&w=majority"
const client = new MongoClient(url,{ useNewUrlParser: true })

client.connect((err,db) => {
    if(!err){
      console.log('Database Connected')
    }else{
      console.log('[error]',err)
    }
});


exports.mongoClient = client;