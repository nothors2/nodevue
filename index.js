const express = require('express');
const app = express(), testJson = require('./test/test.json');

app.use(express.static('public'));
app.set('views',__dirname+'/view');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);


app.get('/',(req,res) => {
    // res.send("안녕 바보 똥멍충이 하륜아 !!");
    //res.json(testJson);
    // res.render('index',{"name":"송하륜",});
    res.render('index',testJson);
});
app.get('/test/:email',(req,res) => {
    testJson.email = req.params.email;
    testJson.qr = req.query;
    res.json(testJson);
});

const server = app.listen(7000,function(){
    console.log("Express start 7000!");
});