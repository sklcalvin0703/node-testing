//test cases
const utils = require('./utils');
const expect = require('expect');

describe('Utils', ()=>{

    describe('#add', ()=>{
        it('should add two numbers', ()=>{
            var result = utils.add(33, 11);
            // if(result !== 44){
            // throw new Error(`Expected 44, but got ${result}`);
        //}
            //assertion library
            expect(result).toBe(44).toBeA('number');
        }); //provide by mocha
    });
    
    it('should async add two number', (done)=>{
        //function will be fired before callback. so the assertion never be called
        utils.asyncadd(4,3, (sum)=>{
            expect(sum).toBe(10).toBeA('number');
            done();
        });
    });
    
    it('should square a numbers', ()=>{
        var results = utils.square(2);
        // if(results !== 4){
        //     throw new Error(`Expected 4, but got ${result}`);
        // }
        expect(results).toBe(4).toBeA('number');
    });
    
    it('should async square two number', (done)=>{
        //function will be fired before callback. so the assertion never be called
        utils.asyncsquare(2, (sum)=>{
            expect(sum).toBe(4).toBeA('number');
            done();
        });
    });
});



it('should verify first and last names are set', ()=>{
    var user = {location: 'Philade', age: 25};
    var res = utils.setName(user, 'Calvin So');
    expect(res).toInclude({
        firstName: 'Calvin',
        lastName: 'So'
    });
});

// it('should expect some values', ()=>{
//     //expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//     expect([2,3,4]).toInclude(2);
// });

// nodemon --exec 'npm test' for continously testing