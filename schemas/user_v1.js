/**
 * New node file
 */
var mongoose=require('mongoose');
var Schema=mongoose.Schema;


module.exports = mongoose.model('user_details',{
        '_id':String ,
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
        payment_details:[pay_pal_payment],
        'interest':[String],
        'user_nearest_loction':[String],
        'user_interest':[ObjectId]    //list of user interest Object ID                             
    },'user_details');
//address
/*var address=new Schema({
    'house_no':String,
    'street':String,
    'city':String,
    'country':String,
    'po_box':String
});*/


/**
 * @Object JSON as response from Paypal
 */
var pay_pal_payment=new Schema({
	'id': String,
	  'create_time': String,
	  'update_time': String,
	  'state': String,
	  'intent': String,
	  'payer': {
	    'payment_method': String,
	    'payer_info': {
	      'email': String,
	      'first_name': String,
	      'last_name':String,
	      'payer_id': String
	    }
	  },
	  'transactions': [
	                   {
	                     'amount': {
	                       'total': Number,
	                       'currency': String,
	                       'details': {
	                         'tax': Number,
	                         'shipping': Number
	                       }
	                     },
	                     'description': String,
	                     'related_resources': [
	                       {
	                         'sale': {
	                           'id': String,
	                           'create_time': String,//'2013-01-30T23:44:26Z'
	                           'update_time': String,
	                           'state': String,
	                           'amount': {
	                             'currency': String,
	                             'total': Number
	                           },
	                           'transaction_fee': {
	                             'value': Number,//'0.50',
	                             'currency': String //'USD'
	                           },
	                           'parent_payment': String ,//'PAY-34629814WL663112AKEE3AWQ',
	                           'links': [
	                             {
	                               'href': String, //'https://api.sandbox.paypal.com/v1/payments/sale/1KE4800207592173L',
	                               'rel': String,  //'self',
	                               'method': String //'GET'
	                             },
	                             {
	                               'href': String, //'https://api.sandbox.paypal.com/v1/payments/sale/1KE4800207592173L/refund',
	                               'rel': String, //'refund',
	                               'method': String //'POST'
	                             },
	                             {
	                               'href': String, //'https://api.sandbox.paypal.com/v1/payments/payment/PAY-34629814WL663112AKEE3AWQ',
	                               'rel': String, //'parent_payment',
	                               'method': String  //'GET'
	                             }
	                           ]
	                         }
	                       }
	                     ]
	                   }
	                 ]
});