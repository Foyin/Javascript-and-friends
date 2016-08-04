var fs = require('fs')

var file = 'document.txt';
var rawContents = fs.readfileSync(file, 'utf-8');
var re = /\W/;
var lines = rawContents.split(re);

var findthis = "panda";
var numfound = 0;

var words = new Array();

for(i=0; i<lines.length; i++){
	console.log(lines[i]);
	words.push(lines[i]);

	if(findthis==lines[i]){
	numfound++;
	}
}

var w = words.sort().join('\n');
var callback = console.log("Finished");
console.log("i found this many: "+numfound);
fs.writeFileSync('wordlist.txt',w);
