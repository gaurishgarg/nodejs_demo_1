const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const hbs = require('hbs');

var x = 5;
dotenv.config({
    path: './.env'
});
var myport = {PORT: process.env.PORT||3000};    
    console.log(myport.PORT);

app = express();
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({
    extended: true
})); //express uses bodyparser
// app.use(function(req,res,next){
//     res.setHeader("Content-Encoding", "gzip");
//     next();
// });
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function (req, res){    
    // res.setHeader("Content-Type", "application/json");
    // res.setHeader("Content-Type", "application/wasm");
    // res.setHeader("Content-Encoding", "gzip");
    res.render('game.hbs',myport);


});
app.post('/saveresponse',async function(req,res){
    console.log(req.body);
    x = 10;
    res.redirect("/responsesaved");
});
app.get('/responsesaved', async function(req,res){
    console.log("Communication success");
    res.send("Communication Successful"+x);

});
module.exports = app;

console.log("PATH = "+path.join(__dirname, '/game.hbs'));
