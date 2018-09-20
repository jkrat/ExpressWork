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
  response.render('index.html');
});

// //POSTData
// app.post('/users', function(request, response) {
//   console.log("POST DATA \n\n", request.body)
//   response.redirect('/')
// });

// //Session Data
// app.post('/users', function(request, response) {
//   request.session.name = request.body.name;
//   console.log(request.session.name);
//   response.redirect('/')
// });

// Get data in URL
app.get("/users/:id", function (req, res){
  console.log("The user id requested is:", req.params.id);
  res.send("You requested the user with id: " + req.params.id);
});


app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.listen(8000, function() {
  console.log("listening on port 8000");
})