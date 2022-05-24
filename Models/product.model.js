const mongoose = require('mongoose');//required Mongoose for using the npm hta.
const Schema = mongoose.Schema;// for use Schema of moongose.

let productSchema = new Schema({
    name: { type: String },
    description: { type: String,},
    image: { type: String },
    pvp: { type: Number },
    category: { type: String, require: true, enum: ['Man', 'Woman', 'Child'] },  
},{
    timestamps: true,
    collection: 'products'
})

module.exports = mongoose.model('Product', productSchema);// this line exports this part of our code.

