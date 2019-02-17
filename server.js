const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const PORT = 3000

app.use(cookieParser()) // req.cookies

app.get('/', (req, res) => {

  console.log(req.cookies)

  // Set-Cookie: --
  res.cookie('xxxxxx', '********', {
    // expires: new Date(Date.now() + 5000)
    // maxAge: 5000
    // path: '/ruta'
    // secure: true
    httpOnly: true
  })

  res.send(`
    <h1>Manejando Cookies: 🍪 🍪</h1>
  `)
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})