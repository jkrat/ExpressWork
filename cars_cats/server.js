var express = require("express");
var app = express();

app.get('/cats', function(request, response) {
  response.render('cats');
});
app.get('/cat1', function(request, response) {
  var cat_info = {
    number: 1,
    name: "john", 
    age: 3, 
    catFriends: ["jerry", "tom", "phil"]
  };
  response.render('cars', {cat : cat_info});
});
app.get('/cat2', function(request, response) {
  var cat_info = {
    number: 2,
    name: "Ryan", 
    age: 2, 
    catFriends: ["jerry", "tom", "phil"]
    };
    response.render('cars', {cat : cat_info});
});
app.get('/cat3', function(request, response) {
  var cat_info = {
    number: 3,
    name: "charles", 
    age: 13, 
    catFriends: ["jerry", "tom", "phil"]
  };
  response.render('cars', {cat : cat_info});
});

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.listen(8000, function() {
  console.log("listening on port 8000");
})