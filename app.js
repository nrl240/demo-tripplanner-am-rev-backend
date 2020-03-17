const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// MY ROUTE HERE //

app.get('/api', (req, res, next) => {
  console.log('HIT THE BACK END!')
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

app.listen(3000, function() {
  console.log('The server is listening on port 3000');
})
