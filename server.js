const express = require('express')
const app = express()
const session = require('express-session')
const PORT = 3000

app.use(session({
  secret: process.env.EXPRESS_SECRET,
  saveUninitialized: true,
  resave: true,
  name: 'patito',
  cookie: {
    // expires: new Date(Date.now + 5000)
    // maxAge: 5000
    // path: '/'
    // domain: ''
    // secure: true // https
    // httpOnly: true
  }
}))

app.get('/', (req, res) => {

  if (typeof req.session.count !== 'number') {
    req.session.count = 0
  } else {
    req.session.count++
  }

  res.send(`
    <h1>Manejo de Sessiones 👀</h1>
    <h2>Visitas: ${req.session.count}</h2>
  `)
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})