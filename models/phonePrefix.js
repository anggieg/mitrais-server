const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const PhonePrefix = sequelize.define('phone_prefix', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    prefix: Sequelize.STRING
}, {
    timestamps: false
})

module.exports = PhonePrefix