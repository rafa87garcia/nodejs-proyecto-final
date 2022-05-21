const mongoose = require('mongoose');//required Mongoose for using the npm hta.
const Schema = mongoose.Schema;// for use Schema of moongose.
const uniqueValidator = require('mongoose-unique-validator');// for use validator of Mongoose.

//to define the Schema of our user
let productSchema = new Schema({
    titulo: {
        type: String
    },
    precio: {
        type: Number,
        unique: true //to indicate that can be only one user name with one email asociated.
    },
    image: {
        type: String
    },
    
}, {
    collection: 'products'
})
userSchema.plugin(uniqueValidator, { message: 'Id already in use.' });// use the plugin to control and mesage of unique id.
module.exports = mongoose.model('Product', userSchema);// this line exports this part of our code.



