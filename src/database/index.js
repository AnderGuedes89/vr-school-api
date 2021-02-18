const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Student = require('../models/Student');
const Course = require('../models/Course');

const connection = new Sequelize(dbConfig);

Student.init(connection);
Course.init(connection);

module.exports = connection;
