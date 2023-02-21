const request = require('supertest')
// const { expect } = require('chai')
// // const data = require('../tugasPekanan4/data/userData.js')
// const {CREATE_USER_DATA} = require('../data/userData.js');
// const testData = data.CREATE_USER_DATA

const baseUrl =('https://kasir-api.belajarqa.com')

describe('Post Create User', () => {
    it('success create user',async () => {
    // Assert tilisan sesuai ekspetasi
    const response = request(baseUrl) //base url
    .post('/registration') //endopoint
    .send({
        "name": "TOKO SANBER",
        "email": "sanber@mail.com",
        "password": "sanber123@"})
  //9-17 > send
    
    // it('response status is 200', async () => {
    //     expect((await response).status).to.equal(200)
    //     })
    // it('message is equals is Name', async () => {
    //     expect((await response).body.message).to.equal(testData.name)// data

        console.log((await response).status)
        console.log((await response).body)
    
    })
    })