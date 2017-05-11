var mongoose = require('mongoose'),
assert = require('assert');
var Dishes = require('./models/dishes');

var url = "mongodb://localhost:27017/conFusion";

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("connected succesfully to MongoDB Server");

    Dishes.create(
    {
        name:"Biryani",
        image:"images/abc.png",
        category:"mains",
        price:"4.99",
        description:"Veg Biryani",
        label:"label",
        comments:[{
            rating: 5,
            comment: "Dist is good!",
            author: "abc"}]
    },
    function(err,dish){
        if(err) throw err;
        console.log("Dish Created!");
        console.log(dish);
        var id = dish._id;
        console.log(id.getTimestamp());
        setTimeout(function() {
            Dishes.findByIdAndUpdate(id,{
                $set : {
                    description: "New Veg Biryani"
                }
            },  {
                new: true
            })
            .exec(function(err, dish){
                if(err) throw err;
                console.log('Updated Dish!');
                console.log(dish);
                dish.comments.push({
                    rating:2,
                    comment:"Very bad test",
                    author:"test"
                });
                dish.save(function(err,dish){
                    console.log("Updated Comments!");
                    console.log(dish);
                    db.collection('dishes').drop(function(){
                    db.close();
                });
                });
            });
        }, 3000);
    });
});
