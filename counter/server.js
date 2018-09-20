var express = require("express");
var session = require('express-session');

var app = express();
app.use(session({
  secret: 'dortmund',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
  if (!request.session.count) {
    console.log("none")
    request.session.count = 1;
  } else {
    console.log("there")
    request.session.count++;
  }
  console.log(request.session.count)
  response.render('index', {data : request.session});
});

//Session Data
app.get('/increment', function(request, response) {
  request.session.count++;
  console.log("double");
  response.redirect('/')
});

app.get('/reset', function(request, response) {
  request.session.count = 0;
  console.log("reset");
  response.redirect('/')
});



app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.listen(8000, function() {
  console.log("listening on port 8000");
})