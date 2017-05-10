const expect = require('chai').expect
const uinames = require('../uinames.js')

describe('getFakeUser()', function() {
  it('should return a fake user object', function() {
    let user = getFakeUser()
    expect(user).to.have.property('name')
  })
})

describe('getTwoApiFakeUsers()', function() {
  it('should return a fake user from api', function(done) {
    function callback(apiUsers) {
      console.log('user test = ', apiUsers)
      expect(apiUsers).to.have.lengthOf(2)
      done()
    }
    let apiUsers = getTwoApiFakeUsers(callback)
  })
})

describe('getFemaleFakeUserPromise()', function() {
  it('should return a fake female user name from api', function(done) {
    let femaleFakeUserPromise = getFemaleFakeUserPromise()

    femaleFakeUserPromise.then(function(apiUser) {
      console.log('female test user = ', apiUser)
      expect(apiUser.gender).to.equal('female')
      done()
    })
  })
})