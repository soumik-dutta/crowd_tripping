/**
 * New node file
 */
var express = require('express');
var router = express.Router();
var yearwiseTravelSchema=require('../../schemas/yearwise_travel');
//var userSchema=request('../../schemas/user');


module.exports=function(app){
	
	/**
	 * @accepts year
	 * @sends json data which feeds highcharts
	 */
	app.get('/ajax/getData',function(req,res){
        var year=req.param('year');
        console.log('called /ajax/getData');
        yearwiseTravelSchema.findOne({
        	'year':year
        },function(err,data){
        	if(err)
        		throw err;
        	console.log(data)
        	res.send(data.data);
        }); 
   });
	
	/*app.get('/ajax/saveInterest',function(req,res){
		var interest=req.param('interest');
		userSchema.findOne({
			'user_id':
		})
	});*/
}