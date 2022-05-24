<<<<<<< HEAD

const config = require('./config');
const express = require('express');
const passport = require('passport');
require('./authentication/passport')
const userRouter = require('./Routers/user.router');
const prodcutRouter = require('./Routers/product.router');
const orderRouter = require('./Routers/order.router');
const { isAuthenticated } = require('./middlewares/auth.middleware');

const db = require('./db');

const server = express();
const PORT = config.PORT;

// Enabled body
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(passport.initialize());

server.get('/', (_req, res) => {
  res.status(200).send("Server running")
});

server.use('/users', userRouter);
server.use('/products', prodcutRouter);
server.use('/orders', orderRouter);


server.use('*', (_req, _res, next) => {
  const error = new Error('Ruta no encotrada');
  error.status = 404;
  return next(error);
});

// Control de errores
server.use((err, _req, res, _next) => {
  return res
    .status(err.status || 500)
    .json(err.message || 'Error inesperado en el servidor');

=======
//express
const express = require("express");
//mongoose
const mongoose = require('mongoose');
//cors
const cors = require('cors');
//body-parser
const bodyParser = require('body-parser');
//morgan
const logger = require("morgan");
//database
const { connect } = require("./api/utils/database/connect");
// routes
const user = require("./api/Routes/user.router");
//error
const HTTPSTATUSCODE = require("./api/utils/httpStatusCode");
//port to use server
PORT = 3000 || 4000;

//to use database with server
connect();

// express configutration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
// to indicate routes to use
app.use('/public', express.static('public'));
app.use('/users', user)


//use morgan
app.use(logger("dev"));

//error control
app.use((_req, _res, next) => {
    let err = new Error;
    err.status = 404;
    err.message = HTTPSTATUSCODE[404];
    next(err);
});
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "unexpected error");
});


app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
>>>>>>> a5ee94d124be6cf2b50cf42b82593d1c7c7d2c40
});

db.connectDB.then(() => {
  console.log("Conection to database.");
  server.listen(PORT, () => {
    console.log(`Node server listening on port ${PORT}`);
  });
});