const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const PORT = 3000

require('./database')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(routes)

// Midleware de control de errores
app.use((err, req, res, next) => {

  console.log(err)

  const errorMessage = err.message || 'Woops! Algo salio mal 🤪'
  const statusHTTP = err.statusHTTP || 500

  res
    .status(statusHTTP)
    .json({
      error: errorMessage 
    })
})


app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})
