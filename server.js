const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send(`
    <h1>Ninja PRO ***</h1>
    <h2>Ruta principal</h2>
  `)
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})
