const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

const statics = path.resolve(__dirname, 'public')

console.log(statics)

app.use('/delivery', express.static(statics))

app.listen(PORT, () => {
  console.log(`
    Servidor corriendo en:
    👉  http://localhost:${PORT}
  `)
})