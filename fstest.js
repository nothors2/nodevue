const fs = require('fs');
const util = require('util'); 

util.log("test log",__dirname);

fs.readFile(__dirname+'/test/test.json','utf-8',(err,data) =>{
    console.log("data",data);
});
console.log('-------------');

// let data2 = fs.readFileSync('test.j')