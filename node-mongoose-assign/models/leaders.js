var mongoose = require('mongoose');
var schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var leaderSchema = new schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        default: ''
    },
    abbr:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
},
{
    timestamps: true
});

var Leaders = mongoose.model("Leader",leaderSchema);

module.exports = Leaders;