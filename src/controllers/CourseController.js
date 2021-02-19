const Course = require('../models/Course');

module.exports = {
    async getAll(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        const courses = await Course.findAll()

        return res.json(courses)
    },

    async getById(req, res) {
        const id = req.params.id

        const course = await Course.findByPk(id)

        return res.json(course)
    },

    async post(req, res) {

        const { description, menu } = req.body;

        const course = await Course.create({ description, menu })

        return res.json(course)
    }
}