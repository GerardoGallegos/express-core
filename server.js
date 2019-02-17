const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const PORT = 3000

app.use(cookieParser())

const generateID = () => {
  return Math
    .random()
    .toString(16)
    .substr(2)
}

let users = []

app.get('/', (req, res) => {

  const { user } = req.cookies

  console.log(users)

  if (!user) {
    const user = {
      id: generateID(),
      count: 0
    }

    users.push(user)

    res.cookie('user', user, {
      httpOnly: true
    })
  } else {
    // Actualizamos el usuario con una visita
    users = users.map(user => {
      if (user.id === req.cookies.user.id) {
        user.count ++
      }

      return user
    })

    // Enviamos cookie user actualizada
    user.count ++
    res.cookie('user', user, {
      httpOnly: true
    })
  }

  res.send(`
    <h1>
      Creando un sistema de sesiones con Cookies 🍪
    </h1>
    <h2>
      Has visitado ${ user ? user.count : 0 }
    </h2>
  `)
})

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})