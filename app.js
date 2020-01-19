const express = require('express');
const app = express();
var http = require('http').createServer(app);
const path = require('path');
const router = express.Router();
var io = require('socket.io')(http);

app.route('/hellobruce').get(function(req,res)
{
    res.sendFile(path.join(__dirname+'/hellobruce.html'));
});

app.route('/Angular').get(function(req,res)
{
    res.send("Tutorial on Angular");
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/mentor', function(req,res){
    res.sendFile(path.join(__dirname+'/mentor.html'));
});

app.get('/student', function(req,res){
    res.sendFile(path.join(__dirname+'/Students.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');
});

app.use('/',router)
http.listen(3000, function(){
  console.log('listening on *:3000');
});

