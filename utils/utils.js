//making test cases

module.exports.add = (a,b) =>{
    return a+b;    
};

module.exports.asyncadd = (a,b,callback) =>{
    setTimeout(()=>{
        callback(a+b);
    },1000);
};

module.exports.square = (x) => x*x;

module.exports.asyncsquare = (a,callback) =>{
    setTimeout(()=>{
        callback(a*a);
    },1000);
};


module.exports.setName = (user, fullName) =>{
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};