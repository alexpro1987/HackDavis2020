const express = require('express');
const app = express();
var http = require('http').createServer(app);
const path = require('path');
const router = express.Router();
var io = require('socket.io')(http);
app.use(express.static(path.join(__dirname, 'public')));

app.route('/mentor').get(function(req,res)
{
    res.sendFile(path.join(__dirname+'/mentor.html'));
});

app.route('/students').get(function(req,res)
{
    res.sendFile(path.join(__dirname+'/Students.html'));
});

app.route('/index').get(function(req,res)
{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');
});

app.use('/',router)
http.listen(8080, function(){
  console.log('listening on *:3000');
});

