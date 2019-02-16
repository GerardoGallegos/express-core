const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const PORT = 3000

require('./database')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})
