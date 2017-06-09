// require express
var express = require("express");
// path module
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));//body parser
app.use(express.static(path.join(__dirname, "./static")));//static content

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {// root route - index.ejs view

    res.render("index");
});
app.post('/result', function(req, res) {// post route for adding a user
    console.log("*****");
    console.log("POST DATA", req.body);
    // This is where we would add the user to the database
    // Then redirect to the root route

    //res.redirect('/result'); //not ready to redirect yet
    res.render("result", req.body);
});


app.listen(8000, function() {// tell express app to listen on port 8000
    console.log("listening on port 8000");
});