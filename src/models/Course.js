const { Model, DataTypes } = require('sequelize');

class Course extends Model {
    static init(sequelize) {
        super.init({
            description: DataTypes.STRING,
            menu: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Course;
