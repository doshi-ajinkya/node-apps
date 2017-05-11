var mongoose = require('mongoose'),
assert = require('assert');
var Leaders = require('./models/leaders');

var url = "mongodb://localhost:27017/conFusion";

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("connected succesfully to MongoDB Server");

    Leaders.create(
    {
        name:"Leader1",
        image:"images/abc.png",
        designation:"Sr Associate",
        abbr:"abc",
        description:"New Leader1"
    },
    function(err,leader){
        if(err) throw err;
        console.log("Leader Created!");
        console.log(leader);
        var id = leader._id;
        console.log(id.getTimestamp());
        setTimeout(function() {
            Leaders.findByIdAndUpdate(id,{
                $set : {
                    description: "New Leader2"
                }
            },  {
                new: true
            })
            .exec(function(err, leader){
                if(err) throw err;
                console.log('Updated Leader!');
                console.log(leader);
                db.collection('leaders').drop(function(){
                db.close();
               });
            });
        }, 3000);
    });
});
