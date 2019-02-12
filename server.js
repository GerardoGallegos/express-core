const express = require('express')
const app = express()
const PORT = 3000
const consolidate = require('consolidate')

app.set('views', './views')
app.engine('hbs', consolidate.handlebars)
app.set('view engine', 'hbs')

app.get('/perfil', (req, res) => {
  res.render('perfil', {
    name: 'Gerardo Gallegos',
    favorites: [
       'React',
       'Vue',
       'Angular',
       'RXjs',
       'Node.js',
       'Typescript'
    ],

    courses: [
      { title: 'React Avanzado' },
      { title: 'React Router' },
      { title: 'Node.js Fundamentos' },
      { title: 'Angular Fundamentos' }
    ]
  })
})

app.get('/', (req, res) => {
  res.send(`
    <h1>Motores de Plantillas ⚡️</h1>
    <h2>Template Engines</h2>
  `)
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})
