var request = require('request')

getFakeUser = function() {
  let user = {
    "name":"John",
    "surname":"Doe",
    "gender":"male",
    "region":"United States"
  };
  return user;
}

module.exports = getFakeUser;