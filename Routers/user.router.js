const express = require('express');
const { check } = require('express-validator');
const passport = require('passport');
const { signIn } = require('../authentication/jsonwebtoken');
const config = require('../config');
const { isAuthenticated } = require('../middlewares/auth.middleware');
const { validateField } = require('../middlewares/validateFields.middleware');
const User = require('../Models/user.model');

const userRouter = express.Router();

userRouter.post('/register', [
  check('email', 'El correo no es valido').isEmail(), // Validación del correo valido.
  validateField,
], (req, res, next) => {

  const callback = (error, user) => {
    if (error) {
      console.log("Error al entrar al registro", error);
      return next(error);
    }
    req.logIn(user, (errorLogin => {
      if (errorLogin) {
        next(errorLogin);
      }
    }));
    res.status(201).json(user);
  }

  passport.authenticate('register', callback)(req);
});

userRouter.post('/login', (req, res, next) => {
  const callback = (error, user) => {
    if (error) {
      console.log("Error al entrar en callback", error);
      next(error);
    }
    // Genero JWT de acceso.
    const token = signIn(user, config.JWT_SECRET);
    return res.status(200).json({ user: user, token });
  }

  passport.authenticate('login', callback)(req);
});

userRouter.post('/logout', [isAuthenticated], (req, res, _next) => {
  if (!req.user) {
    return res.sendStatus(301);
  }
  return res.status(200).json("User session close");
});

userRouter.get('/', (req, res, _next) => {

  return User.find()
    .then(user => {
      return res.status(200).json(user);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status(500);
      return error;
    });
});

module.exports = userRouter;