const expect = require('chai').expect
const uinames = require('../uinames.js')

describe('getFakeUser()', function() {
  it('should return a fake user object', function() {
    let user = getFakeUser();
    expect(user).to.have.property('name')
  });
});