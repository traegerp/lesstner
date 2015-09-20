#! /usr/bin/env node

if(process.argv[2] && process.argv[3]){
	var util = require('util');
	var exec = require('child_process').exec;
	var fs 	 = require('fs');
	var file = process.argv[2];
	var out  = process.argv[3];
	if(file.match(/less/g) && out.match(/css/g)){

		fs.watchFile(file.toString(), function(curr, prev){

			var child = exec('lessc ' + file.toString() + ' ' + out.toString(),
			  function (error, stdout, stderr) {

				if(stdout){
					console.log('stdout: ' + stdout);
				}

				if(stderr){
					console.log('stderr: ' + stderr);
				}

			    if (error !== null) {
			      console.log('exec error: ' + error);
			    }
			    var timeStamp = new Date();
			    console.log('     * Updated at ' + timeStamp);
			});
		});

		console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n');
		console.log(' Lesstner - the less to css live compiler \n');
		console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n');
		console.log(' Running... \n');
		console.log(' automatic compiler is watching ' + file + ' and outputting to ' + out);
		console.log('\n Change Log: \n');

	}
	else{
		console.log('ERROR: file must type .less and output must type .css');
	}
}
else{
	console.log('ERROR: Please supply a file name and output file!');
}
