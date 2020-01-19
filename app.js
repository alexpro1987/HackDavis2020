const express = require('express');
const app = express();
var http = require('http').createServer(app);
const path = require('path');
const router = express.Router();
var io = require('socket.io')(http);
app.use(express.static(path.join(__dirname, 'public')));
var mysql = require('mysql');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

app.route('/mentors').get(function(req,res)
{
    res.sendFile(path.join(__dirname+'/mentor.html'));
});

app.route('/students').get(function(req,res)
{
    res.sendFile(path.join(__dirname+'/Students.html'));
});

app.route('/students').post(function(req,res)
{
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var fName = req.body.fName;
	var lName = req.body.lname;
	//var year = req.body.year;
	var from = req.body.from;
	//var classes = req.body.classes;
	console.log('email '+email+', username '+password+ ', fName '+ fName+ ', lName '+' from,'+from)
	console.log(req.body);


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
  console.log('listening on *:8080');
});

