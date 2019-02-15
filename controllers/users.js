
// Controlador de /user

module.exports = {
  get (req, res) {
    res.send(`<h1>GET</h1>`)
  },

  post (req, res) {
    res.send(`<h1>POST</h1>`)
  },

  put (req, res) {
    res.send(`<h1>PUT</h1>`)
  },

  delete (req, res) {
    res.send(`<h1>DELETE</h1>`)
  }
}