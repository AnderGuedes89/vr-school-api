const Course = require('../models/Course');

module.exports = {
    async index(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        const courses = await Course.findAll()

        return res.json(courses)
    },

    async store(req, res) {
        const { description, menu } = req.body;

        const course = await Course.create({ description, menu })

        return res.json(course)
    }
}