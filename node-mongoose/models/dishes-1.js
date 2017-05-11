var mongoose = require('mongoose');
var schema = mongoose.Schema;

var dishSchema = new schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    }
},
{
    timestamps: true
});

var Dishes = mongoose.model("Dish",dishSchema);

module.exports = Dishes;