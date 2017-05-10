const chai = require('chai')
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised)
const expect = chai.expect
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
  it('should return a fake female user name from api', function() {
    let femaleFakeUserPromise = getFemaleFakeUserPromise()

    return expect(femaleFakeUserPromise).to.eventually.have.property('gender', 'female')
  })
})