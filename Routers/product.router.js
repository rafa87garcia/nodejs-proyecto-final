const { request } = require('express');
const express = require('express');
const auth = require('../middlewares/auth.middleware');
const Product = require('../Models/product.model');

const productRouter = express.Router();

productRouter.get('/', (req, res, _next) => {
    // const { title, type } = req.query;

    // let filter = {};
    // if (title) {
    //     filter = { ...filter, name: { $regex: name } };
    // }
    // if (type) {
    //     filter = { ...filter, type: { $eq: type } };
    // }
    return Product.find()
        .then(land => {
            return res.status(200).json(land);
        })
        .catch((err) => {
            const error = new Error(err);
            error.status(500);
            return error;
        });
});

productRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    return Product.findById(id)
        .then(land => {
            if (!land) {
                const error = new Error('Land not found');
                error.status = 404;
                return next(error);
            }
            return res.status(200).json(land);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});

productRouter.post('/', (req, res, next) => {


    const newProperty = new Product(req.body);

    return newProperty.save()
        .then(() => {
            return res.status(201).json("New Product");
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        })
});

productRouter.put('/:id', (req, res, next) => {
    const id = req.params.id;

    Product.findOneAndUpdate(id, { $set: req.body }, { new: true })
        .then((land) => {
            return res.status(200).json(land);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        })
})

productRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.findByIdAndDelete(id)
        .then(() => {
            return res.status(200).json(`Product deleted ${id}`);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        })
});

module.exports = productRouter;
