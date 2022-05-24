const { Schema, model } = require('mongoose');


const userSchema = Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    name: { type: String },
    role: { type: String, require: true, enum: ['ROL_USER', 'ROL_EDITOR', 'ROL_ADMIN'], default: 'ROL_USER' }
}, {
    timestamps: true,
    collection: 'users'
}
);

module.exports = model('User', userSchema);

