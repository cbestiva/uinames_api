const expect = require('chai').expect
const uinames = require('../uinames.js')

describe('getFakeUser()', function() {
  it('should return a fake user object', function() {
    let user = getFakeUser();
    expect(user).to.have.property('name')
  })
})

describe('getTwoApiFakeUsers()', function() {
  it('should return a fake user from api', function(done) {
    function callback(apiUsers) {
      console.log('user test = ', apiUsers)
      expect(apiUsers).to.have.lengthOf(2);
    }
    let apiUsers = getTwoApiFakeUsers(callback)
    done()
  })
})