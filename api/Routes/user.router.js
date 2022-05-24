const express = require("express"); // required express for using the npm hta.
const jwt = require("jsonwebtoken"); // required jsonwebtoken for using the npm hta.
const bcrypt = require("bcrypt");// required bcrypt for using the npm hta.
const router = express.Router();// required jsonwebtoken for using the function of espress hta.
const userSchema = require("../Models/user.model");// required jsonwebtoken for using the npm hta.
const authorize = require("../utils/middlewares/auth.middleware");// required authorize for using the function .
const { check, validationResult } = require('express-validator');// required express-validator for using the npm hta.
// to Sign-up
router.post("/register",
    [
        check('name')
            .not() 
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),
        check('email', 'Email is required')
            .not()
            .isEmpty(),
        check('password', 'Password should be between 5 to 8 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 8 })
    ],
        (req, res, next) => {
            console.log(req);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }
        else {
            // console.log("2");
            bcrypt.hash(req.body.password, 5).then((hash) => {
                const user = new userSchema({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                });
                user.save().then((response) => {
                    response.password = undefined;
                    res.status(201).json({
                        message: "User successfully created!",
                        result: response
                    });
                }).catch(error => {
                    res.status(500).json({
                        error: error
                    });
                });
            });
        }
    }
    );


// to Sign-in
router.post("/login", (req, res, next) => {
    let getUser;
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        let jwtToken = jwt.sign({
            email: getUser.email,
            userId: getUser._id
        }, "longer-secret-is-better", {
            expiresIn: "1h"
        });
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            _id: getUser._id
        });
    }).catch(err => {
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
});
// to log-out
router.post('/logout', [ isAuthenticated],function (req, res) {
    console.log(!req.user);
    if (!req.user) {
        return res.sendStatus(301);
    }
    return res.status(200).json("User session close");
});

// to Get Users
router.route('/').get((req, res) => {
    userSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

// to Get Single User
router.route('/:id').get(authorize, (req, res, next) => {
    userSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// to Update User
router.route('/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('User successfully updated!')
        }
    })
})


// to Delete User
router.route('/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;//  // this line exports this part of our code.