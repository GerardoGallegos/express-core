const express = require('express')
const app = express()
const user = require('./controllers/users')
const PORT = 3000

app.route('/user')
  .get(user.get)
  .post(user.post)
  .put(user.put)
  .delete(user.delete)


app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})
