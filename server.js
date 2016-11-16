var express      = require('express');
var bodyParser   = require('body-parser');
var path         = require('path');
var cookieParser = require('cookie-parser');
var port         = process.env.PORT || 3010;

var app = express()

app.use(cookieParser()); // read cookies (needed for auth)

// get information from html forms
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use(express.static(process.cwd() ));

app.get('/', function (req, res) {
  res.render('index.html')
})

app.listen(port, function () {
  console.log('The magic happens on port ' + port)
})