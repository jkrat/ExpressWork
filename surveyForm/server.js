var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
// var path = require("path");

var app = express();
app.use(session({
  secret: 'dortmund',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

//POSTData
app.post('/submit', function(request, response) {
  console.log("POST DATA \n\n",request.body)
  response.render('results', {data: request.body});
});




app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.listen(8000, function() {
  console.log("listening on port 8000");
})