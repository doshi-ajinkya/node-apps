var MongoClient = require('mongodb').MongoClient,
assert = require('assert');
var dboper = require('./operations');

//Connection URL
var url = "mongodb://localhost:27017/conFusion";
//Use Connect method to connect to mongodb server
MongoClient.connect(url, function(err,db){
    assert.equal(err, null);
    console.log("Connected successfully to the server");

    dboper.insertDocument(db,{name: "Biryani",description:"Veg Biryani"},"dishes",function(result){
        console.log(result.ops);
        dboper.insertDocument(db,{name: "Misal",description:"Misal"},"dishes",function(result){
        console.log(result.ops);
        dboper.findDocuments(db,"dishes",function(docs){
            console.log(docs);
            dboper.findADocument(db,{name:"Misal"},"dishes",function(docs){
            console.log(docs);
            dboper.updateDocument(db,{name: "Biryani",description:"Veg Biryani"},
            {name: "Biryani",description:"Veg Biryani1"},"dishes",function(result){
               console.log(result.result);
                dboper.findDocuments(db,"dishes",function(docs){
                    console.log(docs);
                    db.dropCollection("dishes",function(result){
                        console.log(result);
                        db.close();
                    });
                });
                //dboper.removeDocument(db,{name: "Biryani"},"dishes",function(result){
                  //  console.log(result);
                //});
            });
            });
        });
        });
    });
});
