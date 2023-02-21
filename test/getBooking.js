const request = require('supertest')
const baseUrl ='https://restful-booker.herokuapp.com'

describe('App', function(){
    //Assert tilisan sesuai ekspetasi
    it('app should return welcome message', function(){
        let response = "Wellcome to My Test Automation API";
    })
})

describe('Get Booking All', function(){
    //Assert tilisan sesuai ekspetasi
    it('response status is 200', async () => {
        const response = request(baseUrl) //base url
        .get('/booking') //endopoint
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
})