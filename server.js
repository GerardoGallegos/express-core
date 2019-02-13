
const express = require('express')
const app = express()
const fs = require('fs')
const PORT = 3000

app.set('views', './views')
app.set('view engine', '.ninja')

app.engine('.ninja', (filePath, data, callback) => {
  
  const myData = {}

  for (let key in data) {
    if (key !== 'settings' && key !== '_locals' && key !== 'cache') {
      myData[key] = data[key]
    }
  }

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      return callback(err)
    }

    let html = content.toString()

    for (let key in myData){
      const pattern = `\\({2}(\\s+)?${key}(\\s+)?\\){2}`
      const original = new RegExp(pattern, 'gm') // (( name))
      const final = myData[key]
      html = html.replace(original, final)
    }

    callback(null, html)
  })
})


app.get('/', (req, res) => {
  res.render('home.ninja', {
    name: 'Gerardo',
    country: 'Mexico'
  })
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})
