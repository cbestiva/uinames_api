var request = require('request')

getFakeUser = function() {
  let user = {
    "name":"John",
    "surname":"Doe",
    "gender":"male",
    "region":"United States"
  }
  return user
}

getTwoApiFakeUsers = function(callback) {
  var options = {
    url: 'http://uinames.com/api/?amount=2'
  }

  request(options, function(err, res, body) {
    apiUsers = JSON.parse(body)
    console.log('user: ', apiUsers)
    return callback(apiUsers)
  })
}

getFemaleFakeUserPromise = function() {
  var options ={
    url: 'http://uinames.com/api/?gender=female',
    json: true
  }

  return apiPromise = new Promise((resolve, reject) => {
    request(options, function(err, res, body) {
      if(err) {
        reject(err)
      } else {
        resolve(body)
      }
    })
    // femaleApiUser is whatever was passed in resolve()
  }).then((femaleApiUser) => {
    console.log('female api user = ', femaleApiUser)
    return femaleApiUser;
  })
}

module.exports = {
  getFakeUser,
  getTwoApiFakeUsers,
  getFemaleFakeUserPromise
}