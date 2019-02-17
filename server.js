const express = require('express')
const app = express()
const session = require('express-session')
const NedbStore = require('nedb-session-store')(session)
const PORT = 3000

app.use(session({
  secret: process.env.EXPRESS_SECRET,
  store: new NedbStore({
    filename: 'sessions.db'
  })
}))

app.get('/', (req, res) => {

  if (typeof req.session.count !== 'number') {
    req.session.count = 0
  } else {
    req.session.count ++
  }

  res.send(`
    <h1>
      Manejo de Sessiones <br/>
      Aplicando un Store  💾  
    </h1>
    <h2>Visitas: ${req.session.count}</h2>
  `)
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})