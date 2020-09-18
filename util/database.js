const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'mitrais',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',
    { 
        dialect: 'mysql',
        host: process.env.DB_HOST || 'localhost' ,
        logging: false
    }
);

module.exports = sequelize;