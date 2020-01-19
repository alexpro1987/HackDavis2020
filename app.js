const express = require('express');
const app = express();
var http = require('http').createServer(app);
const path = require('path');
const router = express.Router();
var io = require('socket.io')(http);
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser')
const mysql = require('promise-mysql');
app.use(bodyParser.urlencoded({extended: false}));

let pool;
const createPool = async () => {
  pool = await mysql.createPool({
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    // If connecting via unix domain socket, specify the path
    socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
    // If connecting via TCP, enter the IP and port instead
    // host: 'localhost',
    // port: 3306,

    //...
  });
};
createPool();

app.get('/', async (req, res) => {
  // Get the 5 most recent votes.
  const recentVotesQuery = pool.query(
    'SELECT majorname from majors'
  );

    const recentVotes = await recentVotesQuery;
    console.log('poop');

    console.log(res);
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

