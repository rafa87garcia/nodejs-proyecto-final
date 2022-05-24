const express = require("express"); // required express for using the npm hta.
const router = express.Router();// required jsonwebtoken for using the function of espress hta.
const orderSchema = require("../Models/order.model");// required for using model hta.
const { check, validationResult } = require('express-validator');// required express-validator for using the npm hta.

// to create product
router.post("/",
    [
        check('nº', 'nº is required')
            .not()
            .isEmpty(),
        check('product')
            .not()
            .isEmpty(),
            check('product')
            .not()
            .isEmpty('user')
    ],
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json(errors.array());
        }
        else {
            const order = new orderSchema({
                nº: req.body.nº,
                product: req.body.product,
                user: rec.body.user,
            });
            order.save().then((response) => {
                res.status(201).json({
                    message: "product successfully created!",
                    result: response
                });
            }).catch(error => {
                res.status(500).json({
                    error: error
                });
            })
        };
    });
router.route('/').get((req, res) => {
    console.log("entra order");
    orderSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})
router.route('/:id').get((req, res, next) => {
    orderSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
router.route('/:id').put((req, res, next) => {
    orderSchema.findByIdAndUpdate(req.params.id, {
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
router.route('/:id').delete((req, res, next) => {
    orderSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = router;
