var mongoose = require('mongoose');
var schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var commentSchema = new schema({
    rating:{
        type: Number,
        min:1,
        max:5,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    }
},
{
    timestamps:true
});


var dishSchema = new schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    label:{
        type: String,
        default: ''
    },
    price:{
        type: Currency,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    comments:[commentSchema]
},
{
    timestamps: true
});

var Dishes = mongoose.model("Dish",dishSchema);

module.exports = Dishes;