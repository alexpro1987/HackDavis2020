const express = require('express');
const app = express();
var http = require('http').createServer(app);
const path = require('path');
const router = express.Router();
var io = require('socket.io')(http);

app.route('/profile').get(function(req,res)
{
    res.sendFile(path.join(__dirname+'/profile.html'));
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

