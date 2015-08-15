var mongoose=require('mongoose');
var Schema=mongoose.Schema;


module.exports = mongoose.model('user_details',{
        'name':{
                'first_name':String,
                'last_name':String
        },
        'contact_no':String,
        'email_id':String,
        'user_id':String,
        'password':String,
        'deal_id':String,
        'home_address':{
                        'house_no':String,
                        'street':String,
                        'city':String,
                        'country':String,
                        'po_box':String
        },
        'billing_address':{
                        'house_no':String,
                        'street':String,
                        'city':String,
                        'country':String,
                        'po_box':String
        },
//        'ip_location':{
//                        'country':String,
//                        'region':String,
//                        'city':String,
//                        'lat_lng':[String]
//        },
        'browser_location':{
                        'lat_lng':[String]   
        },
        'interest':[String]
    },'user_details');

//address
/*var address=new Schema({
    'house_no':String,
    'street':String,
    'city':String,
    'country':String,
    'po_box':String
});*/