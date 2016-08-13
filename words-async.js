var fs = require('fs');

var filetoread = 'document.txt';
var filetowrite = 'wordlist.txt';

var done = function(err){
    console.log("Done");
}

var process =  function(err, rawContents){
if (err) throw err;

var re = /\W/;
var lines = rawContents.split(re);

var findthis = "Panda";
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

console.log("i found "+findthis+" "+numfound+" times");
fs.writeFile(filetowrite,w, done)
}

fs.readFile(filetoread, 'utf-8', process);
