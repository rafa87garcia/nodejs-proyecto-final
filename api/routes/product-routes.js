const express = require("express"); // required express for using the npm hta.
const router = express.Router();// required jsonwebtoken for using the function of espress hta.
const userSchema = require("../models/product.model");// required for using model hta.
const { check, validationResult } = require('express-validator');// required express-validator for using the npm hta.

// to create product
router1.post("/create-product",
[
    check('id', 'id is required')
        .not()
        .isEmpty(),
    check('name')
        .not()
        .isEmpty()    
],
(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    else {
        const product = new productSchema({
        titulo: req.body.titulo,
        precio: req.body.precio,
        imagen: rec.body.imagen,                       
    });
    product.save().then((response) => {
        res.status(201).json({
            message: "product successfully created!",
            result: response
        });
    }).catch(error => {
        res.status(500).json({
            error: error
        });
    })};        
});
router1.route('/products').get((req, res) => {
    productSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})
router1.route('/product/:id').get((req, res, next) => {
    productSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
router1.route('/edit-product/:id').put((req, res, next) => {
    productSchema.findByIdAndUpdate(req.params.id, {
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
router1.route('/delete-product/:id').delete((req, res, next) => {
    productSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = router1;
