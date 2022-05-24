const mongoose = require('mongoose');//required Mongoose for using the npm hta.
const Schema = mongoose.Schema;// for use Schema of moongose.

let productSchema = new Schema({
    name: { type: String },
    description: { type: String,},
    image: { type: String },
    pvp: { type: Number },
    Category: { type: String },  
},{
    collection: 'products'
})

module.exports = mongoose.model('Product', productSchema);// this line exports this part of our code.

