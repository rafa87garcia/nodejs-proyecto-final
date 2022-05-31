const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcrypt');

const User = require('../Models/user.model');

const LocalStrategy = passportLocal.Strategy;

const SKIP = 15;
passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        const userCurrent = await User.findOne({ email: username });
        if (userCurrent) {
          const error = new Error("User exist");
          return done(error);
        }
        const passEncry = await bcrypt.hash(password, SKIP);
        const role = req.body.isAdmin ? 'admin' : 'authenticate'

        const newUser = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: passEncry,
            phoneNumber: req.body.phone,
            birthDate: req.body.birthdate,
            address: req.body.address,
            city: req.body.city,
            postal_code: req.body.postalCode,
            province: req.body.province,
            country: req.body.country,
            role: role
        });
        const userSave = await newUser.save();
        userSave.password = undefined;
        done(null, userSave);
      } catch (error) {
        return done(error);
      }
    }
  ));

passport.use(
  'login',
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
    async (_req, username, password, done) => {
      try {
        const currentUser = await User.findOne({ email: username });

        // 2. Si el usuario no existe fallamos (porque no puede logearse nadie que no esté registrado)
        if (!currentUser) {
          const error = new Error('User not register');
          return done(error);
        }

        const passValid = await bcrypt.compare(
          password,
          currentUser.password
        );


        if (!passValid) {
          const error = new Error('The email & password combination is incorrect!');
          return done(error);
        }

        currentUser.password = undefined;
        return done(null, currentUser);
      } catch (error) {
        return done(error);
      }
    })
);
passport.serializeUser((user, done) => {
  return done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findById(userId);
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});