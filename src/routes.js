const express = require('express');
const StudentController = require('./controllers/StudentController');
const CourseController = require('./controllers/CourseController');
const routes = express.Router();

const Student = require('../src/models/Student');
const Course = require('../src/models/Course');

routes.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

routes.get('/students', StudentController.getAll);
routes.get('/students/:id', StudentController.getById);
routes.post('/students', StudentController.post);

routes.get('/courses', CourseController.getAll);
routes.get('/courses/:id', CourseController.getById);
routes.post('/courses', CourseController.post);

routes.put('/students/:id', function (req, res, next) {
    Student.update(
        { name: req.body.name },
        { returning: true, where: { id: req.params.id } }
    )
        .then(function (students) {
            res.json(students)
        })
        .catch(next)
});

module.exports = routes;