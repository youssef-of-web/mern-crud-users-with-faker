var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')
var RouterUsers = require('./routes/routerusers');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB CONNECTED"))
.catch(err=>console.log(err.message))

app.use('/api/', RouterUsers);


module.exports = app;
