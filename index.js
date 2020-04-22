const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMoviesByDirectors, getMovieByTitle, saveNewMovie } = require('./controllers/movies')

const app = express()

app.get('/', getAllMovies)

app.get('/:director', getMoviesByDirectors)

app.get('/:title', getMovieByTitle)

app.post('/movies', bodyParser.json(), saveNewMovie)

app.all('*', (request, response) => {
  return response.status(404).send('Movie not found. Try another.')
})

app.listen(8008, () => {
  console.log(' Listening on port 8008...')// eslint-disable-line no-console
})
