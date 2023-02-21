const request = require('supertest');
const { expect } = require('chai')
const testData = {
    "id": "1212",
    "username": "Fais14",
    "firstName": "Fais",
    "lastName": "al",
    "email": "al@mail.com",
    "password": "12345678",
    "phone": "09897890987",
    "userStatus": 1
}
const baseUrl =('https://petstore.swagger.io/v2')
describe('Post Create User', () => {
    // it('success create user',async () => {
    //Assert tilisan sesuai ekspetasi
    const response = request(baseUrl) //base url
    .post('/user') //endopoint
    .send(testData)
  //9-17 > send
    
    it('response status is 200', async () => {
        expect((await response).status).to.equal(200)
        })
    it('message is equals is ID', async () => {
        expect((await response).body.message).to.equal(testData.id)// data
    
    })
    })