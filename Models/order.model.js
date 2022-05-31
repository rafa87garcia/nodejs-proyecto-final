const mongoose = require('mongoose');//required Mongoose for using the npm hta.
const Schema = mongoose.Schema;// for use Schema of moongose.


//to define the Schema of our orders
// let orderSchema = new Schema({
//     product: [{type: mongoose.Types.ObjectId, ref: 'Product'}],
//     user:[{type: mongoose.Types.ObjectId, ref: 'User'}]
// },{
//     timestamps: true,
//     collection: 'order'
// })

let productOrderSchema = new Schema({
    _id: String,
    quantity: Number
})


let orderSchema = new Schema({
    products: [productOrderSchema],
    userId: {type:String, required: true}
},{
    timestamps: true,
    collection: 'order'
})
// use the plugin to control and mesage of unique id.
module.exports = mongoose.model('Order', orderSchema);


