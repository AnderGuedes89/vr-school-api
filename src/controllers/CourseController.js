const Course = require('../models/Course');

module.exports = {
    async index(req, res) {
        const courses = await Course.findAll()

        return res.json(courses)
    },

    async store(req, res) {
        const { description, menu } = req.body;

        const course = await Course.create({ description, menu })

        return res.json(course)
    }
}