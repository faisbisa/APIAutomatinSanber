const request = require('supertest')

module.export = async function(){
    const response = request ('https://kasir-api.belajarqa.com')
    .post('/authentications')
    .send({
        "email": "sanber@mail.com",
        "password": "sanber123@"})
    token = (await response).body.token
    return token

}