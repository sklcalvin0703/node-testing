const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
//make a simulation of a db object

describe('App', ()=>{
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);
    it('sohuld call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('Andrew');
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user object', ()=>{
        var email = 'andrew@example.com';
        var password = '123abc';
        
        app.handleSignup(email,password);
        //since db.saveUser is not in app.js, the db.saveUser below act as a spy
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
})