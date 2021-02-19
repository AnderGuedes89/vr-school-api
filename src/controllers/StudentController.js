const Student = require('../models/Student');

module.exports = {
    async getAll(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        const students = await Student.findAll()

        return res.json(students)
    },

    async getById(req, res) {
        const id = req.params.id

        const student = await Student.findByPk(id)

        return res.json(student)
    },

    async post(req, res) {
        const { name } = req.body;

        const student = await Student.create({ name })

        return res.json(student)
    }
}