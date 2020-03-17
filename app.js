const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// MY ROUTE HERE //

app.get('/api', (req, res, next) => {
  console.log('HIT THE BACK END IN THE OTHER REPO!')
  res.json({ route: '/api'})
})

////////////////////

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message)
})

const PORT = 1337

app.listen(PORT, function() {
  console.log(`CORS-enabled server is listening on port ${PORT}`)
})
