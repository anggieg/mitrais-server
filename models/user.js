const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mobileNumber: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    dob: Sequelize.DATEONLY,
    gender: {
        type: Sequelize.ENUM,
        values: ['MALE', 'FEMALE']
    },
    email: Sequelize.STRING
})

module.exports = User