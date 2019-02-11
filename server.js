const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send(`
    <h1>Ninja PRO ***</h1>
    <h2>Ruta principal</h2>
  `)
})

app.get('/cervezas', (req, res) => {
  res.send(`
    <style>

    a {
      display: block;
    }
    
    </style>
    <div>
      <a href="/cerveza/Corona">🍺 Corona</a>
      <a href="/cerveza/Duff">🍺 Duff</a>
      <a href="/cerveza/Heineken">🍺 Heineken</a>
      <a href="/cerveza/Budweiser">🍺 Budweiser</a>
    </div>
  `)
})

app.get('/cerveza/:marca?', (req, res) => {
  const { marca } = req.params

  if (!marca) {
    return res.send(`<h1>Debes indicar el nombre de la 🍺</h1>`)
  }

  res.send(`<h1>🍺: ${marca}</h1>`)
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
