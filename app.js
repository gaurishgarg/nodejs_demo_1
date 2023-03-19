const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

var x = 5;
dotenv.config({
    path: './.env'
});
var myport = {PORT: process.env.PORT||3000};    
    console.log(myport.PORT);

app = express();
app.use(bodyParser.urlencoded({
    extended: true
})); //express uses bodyparser
app.use(cors());

app.use(express.static(path.join(__dirname, '/')));
app.get('/*.glb', cors(), function (req, res){   
    console.log(req.path);
    const glbFile = fs.readFileSync(__dirname+req.path);
    res.setHeader('Content-Type', 'model/gltf-binary');
    res.set('Content-Type', 'model/gltf-binary');

    res.send(glbFile);

});
app.get("/assets",cors(),async function(req,res){


});
app.get('/', function (req, res){   
    console.log(req.body);
    res.send("Hi from front end");

});
app.post('/saveresponse',cors(), async function(req,res){
    console.log(req.body);
    x = 10;
    res.send(req.body);
    // res.redirect("/responsesaved");
});
app.get('/responsesaved', async function(req,res){
    console.log("Communication success");
    res.send("Communication Successful"+x);

});
module.exports = app;


