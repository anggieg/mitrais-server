const expect = require('chai').expect;
const sinon = require('sinon');
const Sequelize = require('sequelize');

const User = require('../models/user');
const AuthController = require('../controllers/authController');

// initalize request body with complete parameter
const req = {
    body: {
        mobileNumber:"82112345678",
        firstName:"Anggie",
        lastName:"Gunawan",
        dobDate:"20",
        dobMonth:"01",
        dobYear:"1988",
        email:"anggie.gunawan@email.com"
    }
}

// mock response from express
const res = {
    statusCode: 500,
    status: '',
    message: '',
    status: function(code){
        this.statusCode = code;
        return this;
    },
    json: function(data){
        this.status = data.status;
        this.message = data.message;
    }
};

describe('Testing Auth Controller', () => {
    it('should returns an error if required any of the fields is empty', function(done){
        req.body.firstName = '';
        AuthController.register(req, res).then(() => {
            expect(res.status).eq('error');
            expect(res.message).eq('The following fields are mandatory : Mobile Number, First Name, Last Name, Email');
            done();
        })
    });
})
