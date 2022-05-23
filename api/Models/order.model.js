const mongoose = require('mongoose');//required Mongoose for using the npm hta.
const Schema = mongoose.Schema;// for use Schema of moongose.


//to define the Schema of our product
let orderSchema = new Schema({
    nº: { type: number},
    
    product: [{type: mongoose.Types.ObjectId, ref: 'Product'}],
    user:[{type: mongoose.Types.ObjectId, ref: 'User'}]

},{
    collection: 'orders'
})
// use the plugin to control and mesage of unique id.
module.exports = mongoose.model('Order', orderSchema);


