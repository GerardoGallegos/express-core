const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send(`
    <h1>Ninja PRO ***</h1>
    <h2>Ruta principal</h2>
  `)
})

app.get('/degradado', (req, res) => {
  const {
    color1 = 'black',
    color2 = 'gray',
    rotacion = 60
  } = req.query

  res.send(`
  <style>
  
    body {
      background: linear-gradient(${rotacion}deg, ${color1}, ${color2});
    }

  </style>
  <body>
    
  </body>
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
