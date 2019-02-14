const express = require('express')
const app = express()
const PORT = 3000

// send
app.get('/send', (req, res) => {
  res.send([ 12, true, 'Fresa' ])
})

// json
app.set('json spaces', 10)
app.set('json replacer', (key, value) => {
  if (key === 'password') {
    return undefined
  }

  return value
})

app.get('/json', (req, res) => {
  res
  .status(200)
  .json({
    name: 'Geraro',
    age: 29,
    country: 'Mexico',
    password: '123'
  })
})

// download
app.get('/download', (req, res) => {
  res.download('./documento.pdf', 'reporte.pdf', (err) => {
    // manejar error
  })
})

// end
app.get('/end', (req, res) => {
  res.status(404).end()
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})
