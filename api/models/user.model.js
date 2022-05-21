const mongoose = require('mongoose');//required Mongoose for using the npm hta.
const Schema = mongoose.Schema;// for use Schema of moongose.
const uniqueValidator = require('mongoose-unique-validator');// for use validator of Mongoose.

//to define the Schema of our user
let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true //to indicate that can be only one user name with one email asociated.
    },
    password: {
        type: String
    },
    // emoji: {
    //     type: String
    // }
}, {
    collection: 'users'
})
userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });// use the plugin to control and mesage of unique email.
module.exports = mongoose.model('User', userSchema);// this line exports this part of our code.



