'use strict';
var app = require('./index.js');
describe('app.getState', ()=>{
    let actualState;
    beforeEach(()=> {
        actualState = app.getState();
    });
    it('should be a function', () => {
        expect(app.getState).to.be.a('function');
    });
    it('should return an object', () => {
        expect(actualState).to.be.a('object');
    });
    it('initial state should be valid', ()=> {
        expect(actualState).to.be.jsonSchema({
            "type": "object",
            "required": [
                "currentUser",
                "users"
            ],
            "currentUser": {
                "type": "object" // todo scheme for User
            },
            "users": {
                "type": "array",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                    "type": "object" //todo scheme for User
                }
            }
        });
    });

    it('Initial state should contain valid currentUser', () => {
        expect(actualState.currentUser).to.be.jsonSchema({
            "required": ["isAuth"],
            "isAuth": {
                "type": 'boolean'
            }
        });
    });
    it('Initial state currentUser should not be authorized', () => {
        expect(actualState.currentUser.isAuth).to.be.false;
    });

});