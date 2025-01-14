const Sequelize = require("sequelize");
const { connect, connection } = require("mongoose");
require("dotenv").config();

let sequelize;

console.log("Starting DB connection...");

const connectionString = process.env.MONGODB_URI
console.log("Connection String: ", connectionString);
connect(connectionString);
module.exports = connection;
