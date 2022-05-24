const mongoose = require('mongoose');//required Mongoose for using the npm hta.
const Schema = mongoose.Schema;// for use Schema of moongose.
const uniqueValidator = require('mongoose-unique-validator');// for use validator of Mongoose.

//to define the Schema of our user
let userSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: true //to indicate that can be only one user with one email asociated.
    },
<<<<<<< HEAD:api/Models/user.model.js
    password: { type: String },
=======
>>>>>>> a5ee94d124be6cf2b50cf42b82593d1c7c7d2c40:api/models/user.model.js
    roles: {
        type: String,
        enum: ['ROL_USER', 'ROL_EDIT', 'ROL_ADMIN'],
        default: 'ROL_USER'
<<<<<<< HEAD:api/Models/user.model.js
=======
    },
    image: {
        type: String
>>>>>>> a5ee94d124be6cf2b50cf42b82593d1c7c7d2c40:api/models/user.model.js
    },
   

}, {
    collection: 'users'
})
userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });// use the plugin to control and mesage of unique email.
module.exports = mongoose.model('User', userSchema);// this line exports this part of our code.



