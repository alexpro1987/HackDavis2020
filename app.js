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
    res.sendFile(path.join(__dirname+'/home.html'));
});

app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname+'/login.html'));
});

app.get('/register', function(req,res){
    res.sendFile(path.join(__dirname+'/register.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');
});

app.use('/',router)
http.listen(3000, function(){
  console.log('listening on *:3000');
});

