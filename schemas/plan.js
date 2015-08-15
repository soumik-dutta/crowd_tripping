
var mongoose=require('mongoose');
var Schema=mongoose.Schema;


module.exports = mongoose.model('travel_plan',
    new Schema({
        'place':String,
        'date':String
    }),
    'travel_plan');