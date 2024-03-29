const isEmpty = require('./isEmpty');
const validator = require('validator');


//data = req.body
module.exports = function ValidateUsers(data){
    let errors = {}
    data.Email  = !isEmpty(data.Email) ? data.Email : ""
    data.Lastname  = !isEmpty(data.Lastname) ? data.Lastname : ""
    data.Firstname  = !isEmpty(data.Firstname) ? data.Firstname : ""
    data.Age  = !isEmpty(data.Age) ? data.Age : ""

    if(!validator.isEmail(data.Email)){
        errors.Email = "Format Email required"
    }
    if(validator.isEmpty(data.Email)){
        errors.Email = "Required Email"
    }

    if(validator.isEmpty(data.Lastname)){
        errors.Lastname = "Required Lastname"
    }
    if(validator.isEmpty(data.Firstname)){
        errors.Firstname = "Required Firstname"
    }
    if(validator.isEmpty(data.Age)){
        errors.Age = "Required Age"
    }
   
    return {
        errors,
        isValid: isEmpty(errors) // true if no content  
    }
}