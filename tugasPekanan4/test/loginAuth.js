const request = require('supertest')

const baseUrl =('https://kasir-api.belajarqa.com')

describe('Post Create User', () => {
    it('success create user',async () => {
    // Assert tilisan sesuai ekspetasi
    const response = request(baseUrl) //base url
    .post('/authentications') //endopoint
    .send({
        "email": "sanber@mail.com",
        "password": "sanber123@"})

        console.log((await response).status)
        console.log((await response).body)
        
    
    })
    })

    