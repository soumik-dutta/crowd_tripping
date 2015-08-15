var gepip=require('geoip-lite');

//@class: GetLocationFromIp
//@constructor: accepts req as parameter
var GetLocationFromIp=function(req){
 
  //get the IP address from req
//  ip= req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    ip='139.130.4.5';
    
    
   return{
       //@method: public no-para
       //@return: geo details
        getGeoDetails :function(){
//             console.log(ip);
            var geoDetails=gepip.lookup(ip);
            console.log(geoDetails);
            return geoDetails;
        }
       
   }
    
    
}

module.exports=GetLocationFromIp;