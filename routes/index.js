const router = require('express').Router({
  mergeParams: true
})

router.get('/perfil', (req, res) => {
  res.send(`<h1>Perfil</h1>`)
})

router.get('/fotos', (req, res) => {
  res.send(`<h1>Fotos</h1>`)
})

router.get('/foto/:id', (req, res) => {
  // req.params
  res.send(`
    <h3>Usuario ID: ${req.params.id}</h3>
    <h3>Foto ID: ${req.params.id}</h3>
  `)
})

module.exports = router
