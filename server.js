
const config = require('./config');
const express = require('express');
const passport = require('passport');
require('./authentication/passport')
const userRouter = require('./Routers/user.router');
const orderRouter = require('./Routers/order.router');
const productRouter = require('./Routers/product.router');
const emailRouter = require('./Routers/email.router');
const cors = require("cors");



const db = require('./db');

const server = express();
const PORT = config.PORT;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.use(cors({
  origin: "*",
  credentials: true,
}));


// Enabled body
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(passport.initialize());

server.get('/', (_req, res) => {
  res.status(200).send("Server running")
});

server.use('/orders', orderRouter);
server.use('/products', productRouter);
server.use('/users', userRouter);
server.use('/emails', emailRouter);

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

});

db.connectDB.then(() => {
  console.log("Conection to database.");
  server.listen(PORT, () => {
    console.log(`Node server listening on port ${PORT}`);
  });
});