const { Model, DataTypes } = require('sequelize');

class Student extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Student;
