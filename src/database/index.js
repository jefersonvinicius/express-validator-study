const { Sequelize } = require('sequelize');
const User = require('./models/User');
const dbConfig = require('../config/database');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
