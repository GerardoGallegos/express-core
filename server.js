const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

 // x-www-form-urlencoded
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`
    <h1>Metodos HTTP</h1>
    <h2>Ruta principal</h2>
  `)
})

app.get('/foto', (req, res) => {
  res.send('<h1>Obtengo Foto 📷</h1>')
})

app.post('/foto', (req, res) => {
  console.log(req.body)
  res.send('<h1>Creo Foto 📷</h1>')
})

app.put('/foto', (req, res) => {
  res.send('<h1>Actualizo Foto 📷</h1>')
})

app.delete('/foto', (req, res) => {
  res.send('<h1>Elimino Foto 📷</h1>')
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
