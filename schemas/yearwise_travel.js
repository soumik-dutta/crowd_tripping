/**
 * New node file
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;


module.exports = mongoose.model('yearwise_travel',
    new Schema({
        'year':Number,
        'data':[Number]
    }),
    'yearwise_travel');