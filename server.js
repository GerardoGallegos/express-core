const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

const checkAuth = (req, res, next) => {
  const isAuth = false

  if (isAuth) {
    next()
  } else {
    res.send('Debes iniciar Sesion 😅')
  }
}

// app.use(checkAuth)

app.get('/publica', (req, res) => {
  res.send(`
    <h1>Ruta Publica</h1>
  `)
})

app.get('/privada', checkAuth, (req, res) => {
  res.send(`
    <h1>Ruta Privada 😎</h1>
  `)
})


app.get('/', (req, res) => {
  res.send(`
    <h1>Middleware</h1>
    <h2>Ruta principal</h2>
  `)
})

app.get('*', (req, res) => {
  res
    .status(404)
    .send(`<h1>Woops pagina no existe!</h1>`)
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})
