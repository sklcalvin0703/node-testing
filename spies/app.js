var db = require('./db.js');

module.exports.handleSignup = (email, password) =>{
    //check if the email exits
    db.saveUser({
        email,
        password
    });
    //send welcome email
};
