const express = require('express');
const StudentController = require('./controllers/StudentController');
const CourseController = require('./controllers/CourseController');
const routes = express.Router();

routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);

routes.get('/courses', CourseController.index);
routes.post('/courses', CourseController.store);

module.exports = routes;