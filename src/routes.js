const express = require('express');
const StudentController = require('./controllers/StudentController');
const CourseController = require('./controllers/CourseController');
const routes = express.Router();

routes.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);

routes.get('/courses', CourseController.index);
routes.post('/courses', CourseController.store);

module.exports = routes;