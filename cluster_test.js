/**
 * New node file
 */
var cluster =require('cluster');

if(cluster.isMaster){
	var cpuCount=require('os').cpus().length;
	
	for (var int = 0; int < cpuCount; int++) {
		cluster.fork();
	}
	cluster.on('exit', function() {
		cluster.fork();
	});
}
