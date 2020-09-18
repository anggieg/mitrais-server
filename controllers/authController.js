const User = require('../models/user');
const PhonePrefix = require('../models/phonePrefix');

exports.register = async (req, res) => {
  
  // populate data from frontend
  const data = {
    mobileNumber: req.body.mobileNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    email: req.body.email,
  }

  // if date, month and year exist, then date of birth fully is constructed, otherwise, date of birth will be empty
  if(req.body.dobDate.length > 0 && req.body.dobMonth.length > 0 && req.body.dobYear.length > 0){
    data.dob = req.body.dobYear+'-'+req.body.dobMonth+'-'+req.body.dobDate;
  }

  try {
    // if one of any mandatory fields is empty, return error
    if(data.mobileNumber === '' || data.firstName === '' || data.lastName === '' || data.email === ''){
      return res.status(200).json({
        status: 'error',
        message: 'The following fields are mandatory : Mobile Number, First Name, Last Name, Email'
      });
    }

    // slice first 3 characters of mobile number to extract phone number operator prefix
    const phonePrefix = data.mobileNumber.slice(0,3)

    // check phone number validity by phone number prefix
    const isMobileNoValid = await checkMobileNoValid(phonePrefix);
    if(!isMobileNoValid){
      return res.status(200).json({
        status: 'error',
        message: 'Please enter valid Indonesian mobile phone number'
      });
    }

    //check if mobile number exists
    const doesMobileNoExist = await checkMobileNoExists(data.mobileNumber);
    if(doesMobileNoExist){
      return res.status(200).json({
        status: 'error',
        message: 'Mobile number already registered'
      });
    }

    // if all mobile number checking passed, pad mobileNumber with country code (+62) and re-initialize the data object;
    const countryCode = '+62'
    data.mobileNumber = countryCode.concat(data.mobileNumber);

    // check if email is a valid email address format
    const isEmailValid = checkEmailValid(data.email);
    if(!isEmailValid){
      return res.status(200).json({
        status: 'error',
        message: 'Please enter a valid email address'
      });
    }

    //check if email exists
    const doesEmailExist = await checkEmailExists(data.email);
    if(doesEmailExist){
      return res.status(200).json({
        status: 'error',
        message: 'Email already registered'
      });
    }

    // if all checking passed, create user data in database
    await User.create(data);

    // send success response
    res.status(201).json({
      status: 'success',
      message: 'Registration success'
    });  
  }catch(error){
    // send error response
    res.status(500).json({
      status: 'error',
      message: `${error}`
    });
  }

}

// method to check if mobile number is valid Indonesian mobile phone number, 
// by looking into offically registered phone operator prefixes stored in database
const checkMobileNoValid = phonePrefix => {

  return new Promise(async(resolve, reject) => {
    try {
      const phonePrefixData = await PhonePrefix.findOne({
        where: {prefix: phonePrefix},
        raw: true
      })

      resolve(phonePrefixData !== null);
    }catch(error){
      reject(error)
    }

  })
}

// method to check if mobile phone number is already registered
const checkMobileNoExists = mobileNo => {
  return new Promise(async(resolve, reject) => {
    
    const countryCode = '+62'
    
    try{
      const mobileNoData = await User.findOne({
        where: {mobileNumber: countryCode.concat(mobileNo)},
        raw: true
      });

      resolve(mobileNoData !== null);

    }catch(error){
      reject(error);
    }

  })
}

// check email address format validity
const checkEmailValid = email => {
  const regExp = /\S+@\S+\.\S+/;
  return regExp.test(email);
}

// check if email address is already registered
const checkEmailExists = email => {
  return new Promise(async(resolve, reject) => {
    
    try{
      const emailData = await User.findOne({
        where: {email: email},
        raw: true
      });

      resolve(emailData !== null);

    }catch(error){
      reject(error);
    }

  })
}