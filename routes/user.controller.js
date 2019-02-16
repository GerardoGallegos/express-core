const { userDB: DB } = require('../database')

module.exports = {
  getAll (req, res, next) {

    const err = new Error('No tienes los permisos')

    err.statusHTTP = 401

    throw err

    DB.find({}, (err, users) => {

      if (err) {
        return next(err)
      }

      res.json(users)
    })
  },

  get (req, res) {
    const _id = req.params.id

    DB.findOne({ _id }, (err, user) =>{
      res.json(user)
    })
  },

  post (req, res) {
    const user = req.body

    DB.insert(user, (err, user) => {
      res.json(user)
    })
  },

  put (req, res) {
    const _id = req.params.id
    const user = req.body

    DB.update({ _id }, user, (err) => {
      DB.findOne({ _id }, (err, user) =>{
        res.json(user)
      })
    })
  },

  delete (req, res) {
    const _id = req.params.id

    DB.remove({ _id }, (err) => {
      res.json({
        message: `El usuario con id: ${_id} fue eliminado exitosamente!`
      })
    })
  }
}
