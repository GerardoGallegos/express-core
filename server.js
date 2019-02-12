const express = require('express')
const app = express()
const PORT = 3000

const checkAuth = (config) => {
  const message = config.message || 'Debes iniciar Sesion 😅'

  return (req, res, next) => {
    const isAuth = false
  
    if (isAuth) {
      next()
    } else {
      res.send(message)
    }
  }
}

app.get('/publica', (req, res) => {
  res.send(`
    <h1>Ruta Publica</h1>
  `)
})

const isAuthCustom = checkAuth({
  message: 'Please Login 💂‍'
})

app.get('/privada', isAuthCustom, (req, res) => {
  res.send(`
    <h1>Ruta Privada 😎</h1>
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
