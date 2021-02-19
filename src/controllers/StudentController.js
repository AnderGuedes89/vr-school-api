const Student = require('../models/Student');

module.exports = {
    async index(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        const students = await Student.findAll()

        return res.json(students)
    },

    async store(req, res) {
        console.log("VAI!!");
        console.log(req.body);
        const { name } = req.body;

        const student = await Student.create({ name })

        return res.json(student)
    }
}