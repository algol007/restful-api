const User = require('../models/User');

/**
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.name
 * @param {string} payload.password
 * @param {string} payload.role
 */
function createNewUser(payload) {
  return User.create(payload)
    .then((user) => {
      // send email
      // other things

      return user;
    })
}

module.exports = {
  createNewUser
}