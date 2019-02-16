const api = require('express').Router()
const user = require('./user.controller')

api.get('/users', user.getAll)

api.route('/user/:id?')
  .get(user.get)
  .post(user.post)
  .put(user.put)
  .delete(user.delete)

module.exports = api
