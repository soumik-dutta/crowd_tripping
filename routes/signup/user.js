var express = require('express');
var router = express.Router();
//var ip=require('../classes/ip');

//var userSchema=require('../../schemas/user');


module.exports=function(app){
    
    //retrieving places from database
    app.get('/signup/user',function(req,res){
         
         res.render('login');
    });
    
    //saving the user details
   /* app.get('/signup/user/save',function(req,res){
        var first_name=req.param('first_name');
        var last_name=req.param('last_name');
        var contact_no=req.param('contact_no');
        var email=req.param('email');
        var user_id=req.param('user_id');
        var home_house_no=req.param('home_house_no');
        var home_street=req.param('home_street');
        var home_city=req.param('home_city');
        var home_country=req.param('home_country');
        var home_pin=req.param('home_pin');
        var bill_house_no=req.param('bill_house_no');
        var bill_street=req.param('bill_street');
        var bill_city=req.param('bill_city');
        var bill_country=req.param('bill_country');
        var bill_pin=req.param('bill_pin');
        var home_latitude=req.param('home_latitude');
        var home_longitude=req.param('home_longitude');
        
//        @Object of GetLocationFromIp
        var getIp=new ip(req);
        var geoDetails=getIp.getGeoDetails();
        
        var user=userSchema({
             'name':{
                'first_name':first_name,
                'last_name':last_name
            },
            'contact_no':contact_no,
            'email_id':email,
            'user_id':user_id,
            'deal_id':null,
             'home_address':{
                    'house_no':home_house_no,
                    'street':home_street,
                    'city':home_city,
                    'country':home_country,
                    'po_box':home_pin
            },
            'billing_address':{
                    'house_no':bill_house_no,
                    'street':bill_street,
                    'city':bill_city,
                    'country':bill_country,
                    'po_box':bill_pin
            },
            'ip_location':{
                    'country':geoDetails.country,
                    'region':geoDetails.region,
                    'city':geoDetails.city,
                    'lat_lng':[geoDetails.ll[0],geoDetails.ll[1]]
            },
            browser_location:{
                    'lat_lng':[home_latitude,home_longitude]   
            }
        });
        user.save(function(err,savedUser){
                if(err)
                    throw err;
                res.redirect('/');
        })
                                
    })*/
        
    
}