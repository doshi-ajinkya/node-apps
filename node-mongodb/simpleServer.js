var MongoClient = require('mongodb').MongoClient,
assert = require('assert');

//Connection URL
var url = "mongodb://localhost:27017/conFusion";
//Use Connect method to connect to mongodb server
MongoClient.connect(url, function(err,db){
    assert.equal(err, null);
    console.log("Connected successfully to the server");

    var collection = db.collection('dishes');

    collection.insertOne({name:"Biryani",description:"hyd Biryani"},
    function(err, result){
        assert.equal(err, null);
        console.log('After Insert');
        console.log(result.ops);
        collection.find({}).toArray(function (err,docs){
            assert.equal(err,null);
            console.log("Found:");
            console.log(docs);

            db.dropCollection("dishes",function(err,result){
                assert.equal(err,null);
                db.close();
            });
        });
    });
});
