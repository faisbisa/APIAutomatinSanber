const request = require('supertest');
const { expect } = require('chai');
const {describe} = require('mocha');
const baseUrl =('https://kasir-api.belajarqa.com')

describe('Update User', async () => {
    it('success create user',async () => {
    // Assert tilisan sesuai ekspetasi
    const response = request(baseUrl) //base url
    .put('/users/66a6cd83-36f1-441e-aca1-4c1dfcfab76d') //endopoint  
    .set({'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZjNTMyMmI0LTBlY2UtNGZmNC1iNDk1LTk3NmVjZDZmNWNjYyIsImNvbXBhbnlJZCI6ImUxNTQ2YjBkLWE0MjQtNDJiNS1iMTBhLTM5M2I1MWMxNDE1ZCIsImlhdCI6MTY3Njk2NjE5NH0.a3dsBhYxqC7PIk3Zldiae8eeXZbuTjRr19xzDnkyllw'})  
    .send({
        "name": "kasir-kedua-update",
        "email": "kasir2@mail.com",
        "password": "sanber123@"})

        console.log((await response).status)
        console.log((await response).body)
    
    })
    })
