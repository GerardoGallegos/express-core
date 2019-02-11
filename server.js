const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send(`
    <h1>Ninja PRO ***</h1>
    <h2>Ruta principal</h2>
  `)
})

app.get('/user/:id([0-9]{4})', (req, res) => {
  res.send(`
    <h1>Ruta con RegExp ⚡️</h1>
  `)
})

app.get('*', (req, res) => {
  res
    .status(404)
    .send(`<h1>Woops no existe esta pagina!</h1>`)
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})
