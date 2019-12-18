const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', ()=>{
    describe('GET /', ()=>{
        it('should return hello world response', (done)=>{
            request(app)
            .get('/')
            .expect(404)
            //.expect('Hello World') //assertion
            .expect((res) =>{
                expect((res.body)).toInclude({
                    error: 'Page not found'
                });
            })
            .end(done); //async test
        });
    });
    describe('GET /users', ()=>{
        it('should include me', (done)=>{
            request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude({
                    firstName: 'A',
                    age: 21
                });
            })
            .end(done);
        });
    });
})

