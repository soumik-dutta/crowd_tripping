var mongoose=require('mongoose');
 
//mongoose.connect('mongodb://localhost/cloud_tripper');

mongoose.connect('mongodb://root:root@localhost/cloud_tripper');
 
module.exports=mongoose.connection;
