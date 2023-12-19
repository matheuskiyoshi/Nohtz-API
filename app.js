var express = require('express');
var path = require('path');
var logger = require('morgan');
require('./config/database');
var cors = require('cors');
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("./swagger_output.json")

var usersRouter = require('./app/modules/user/routes/users');
var notesRouter = require('./app/modules/note/routes/notes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;
