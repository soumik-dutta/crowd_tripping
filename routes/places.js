var express = require('express');
var router = express.Router();
planSchema = require('../schemas/plan');
var ip=require('./classes/ip');
 

/* GET places  */
module.exports=function(app){
    
    //retrieving places from database
    app.get('/getPlaces',function(req,res){
         console.log('retrieving places');
        //res.send('retrieving places')
        planSchema.find({},'place', function (err, places) {
            if (err)
                throw err;
            console.log(places);
            res.json(places);
            res.end;
        });
    });
    
    app.get('/getLocation',function(req,res){
        //@Object 
         var getIp=new ip(req);
         var geoDetails=getIp.getGeoDetails();
//         console.log(geoDetails);
    })
        
    
}


