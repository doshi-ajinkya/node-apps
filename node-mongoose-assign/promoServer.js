var mongoose = require('mongoose'),
assert = require('assert');
var Promos = require('./models/promos');

var url = "mongodb://localhost:27017/conFusion";

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("connected succesfully to MongoDB Server");

    Promos.create(
    {
        name:"Promo1",
        image:"images/abc.png",
        price:"4.99",
        description:"New Promo1",
        label:"label"
    },
    function(err,promo){
        if(err) throw err;
        console.log("Promotion Created!");
        console.log(promo);
        var id = promo._id;
        console.log(id.getTimestamp());
        setTimeout(function() {
            Promos.findByIdAndUpdate(id,{
                $set : {
                    description: "New Promo2"
                }
            },  {
                new: true
            })
            .exec(function(err, promo){
                if(err) throw err;
                console.log('Updated Promotion!');
                console.log(promo);
                db.collection('Promos').drop(function(){
                db.close();
                });
            });
        }, 3000);
    });
});
