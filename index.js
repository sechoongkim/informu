var express = require('express');
var app = express();
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');


module.exports = app;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var npmPath = path.join(__dirname, './node_modules');
var publicPath = path.join(__dirname, './public');
var browserPath = path.join(__dirname, './browser');

app.use(express.static(npmPath));
app.use(express.static(publicPath));
app.use(express.static(browserPath));


app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});

