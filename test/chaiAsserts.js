const { expect } = require('chai');
const { discribe, it } = require('mocha');
// const app = require('../app')

//Definisi Assert
//Cara asserts  menggunakan chai
describe('App', function(){
    //Assert tilisan sesuai ekspetasi
    it('app should return welcome message', function(){
        let response = "Wellcome to My Test Automation API";
        expect(response).to.equal("Wellcome to My Test Automation API")
    })
})