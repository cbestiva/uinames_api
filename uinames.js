var request = require('request')

getFakeUser = function() {
  let user = {
    "name":"John",
    "surname":"Doe",
    "gender":"male",
    "region":"United States"
  };
  return user
}

getTwoApiFakeUsers = function(callback) {
  var options = {
    url: 'http://uinames.com/api/?amount=2&region=united%20states'
  }

  request(options, function(err, res, body) {
    apiUsers = JSON.parse(body)
    console.log('user: ', apiUsers)
    return callback(apiUsers)
  });
}

module.exports = {
  getFakeUser,
  getTwoApiFakeUsers
}