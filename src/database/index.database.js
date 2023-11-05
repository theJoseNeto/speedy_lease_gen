const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../models/User");
const connection = new Sequelize(dbConfig);

const models = [User];

models.forEach(model => model.init(connection))


module.exports = connection;
