const mongoose = require('mongoose');//required Mongoose for using the npm hta.
const Schema = mongoose.Schema;// for use Schema of moongose.


//to define the Schema of our orders
let orderSchema = new Schema({
    nº: { type: String},
    product: [{type: mongoose.Types.ObjectId, ref: 'Product'}],
    user:[{type: mongoose.Types.ObjectId, ref: 'User'}]
},{
    timestamps: true,
    collection: 'orders'
})
// use the plugin to control and mesage of unique id.
module.exports = mongoose.model('Order', orderSchema);


