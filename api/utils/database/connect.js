const dotenv = require("dotenv"); //required Dotenv for using the npm hta.
dotenv.config();// this is for use the hta dotenv in our server.
const mongoose = require("mongoose"); // required Mongoose for using the npm hta to comunicate with database.
const mongoDb = process.env.MONGO_DB;//with this line we can link the .env variable in this part of our server.
const connect = async () => {
    try {
        const db = await mongoose.connect(mongoDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const { name, host } = db.connection;
        console.log(`Connected with db: ${name}, in host: ${host}`);
    } catch (error) {
        console.log("Error to connect with BD", error);
    }
};//this function is for control the errors that can be appear while we can use or connect the server to our data base.
module.exports = { connect }; // this line exports this part of our code.