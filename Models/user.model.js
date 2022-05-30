const { Schema, model } = require('mongoose');


const userSchema = Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    name: { type: String },
    lastname: { type: String },
    birthdate: { type: String },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    postalCode: { type: String },
    role: { type: String, require: true, enum: ["admin", "editor", "authenticate"], default: "authenticate" }
}, {
    timestamps: true,
    collection: 'users'
}
);

module.exports = model('User', userSchema);

