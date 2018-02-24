
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.Promise = Promise;

var app = express();


app.use(express.static(path.join(__dirname, 'public')));

var PORT = process.env.PORT || 3000;


app.use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.png')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var routes = require('./controllers/controller');
app.use('/', routes);

var connectionString;

if (process.env.PORT) {
    connectionString = '';
} else {
    connectionString = 'mongodb://localhost/nytreact';
}

mongoose.connect(connectionString).then(function() {
    app.listen(PORT, function() {
        console.log('listening on port ' + PORT);
    });
});
