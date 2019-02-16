const Datastore = require('nedb')

const userDB = new Datastore({
  filename: 'users.db'
})

userDB.loadDatabase((err) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
})

module.exports = {
  userDB
}
