const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')

chai.use(chaiHttp)
chai.should()
const request = chai.request(server).keepOpen()

describe('GET /search', () => {
    it('should get movie list and insert parameter logs into database', (done) => {
        request.get(`/search?s=suicide&y=2021&type=series`)
        .end((err, result) => {
            result.should.have.status(200)
            result.should.have.property('type').eq('application/json')
            result.should.have.property('error').eq(false)
            result.should.have.property('body').haveOwnProperty('message').eq('success')
            result.should.have.property('body').haveOwnProperty('payload').a('array').length(1)
            done()
        })
    })
})

describe('GET /detail', () => {
    it('should get movie detail and insert parameter logs into database', (done) => {
        request.get(`/detail?t=suicide squad&y=2021`)
        .end((err, result) => {
            result.should.have.status(200)
            result.should.have.property('type').eq('application/json')
            result.should.have.property('error').eq(false)
            result.should.have.property('body').haveOwnProperty('message').eq('success')
            result.should.have.property('body').haveOwnProperty('payload').a('object')
            done()
        })
    })
})
