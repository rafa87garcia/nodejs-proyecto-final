const dotenv = require('dotenv');
dotenv.config();
const config = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = config;
