require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const helmet = require('helmet');

const User = require('./models/user');
const PhonePrefix = require('./models/phonePrefix');

const authRoutes = require('./routes/auth');

const app = express();

app.use(helmet());

app.use(bodyParser.json({
    limit: '20mb'
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', authRoutes);

app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const status = error.status;
    const message = error.message;
    res.status(statusCode).json({ status: status, message: message });
});

const port = process.env.port || 3000;
app.listen(port);

// sequelize
// .sync({force: true})
// .then(result => {
//     const port = process.env.port || 3000;
//     app.listen(port);
// })
// .catch(error => {
//     console.log(error)
// });
