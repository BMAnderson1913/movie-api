const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMoviesByDirectors = ('/:director', (request, response) => {
  const { director } = request.params

  const allMoviesByDirectors = movies.filter((movies) => {
    return movies.director.toLowerCase().includes(director.toLowerCase())
  })

  if (!movies.length) return response.sendStatus(404)

  return response.send(allMoviesByDirectors)
})

const getMovieByTitle = ('/:title', (request, response) => {
  const { title } = request.params

  const listMovieByTitle = movies.filter((movies) => {
    return movies.title.toLowerCase().includes(title.toLowerCase())
  })

  if (!movies.length) return response.sendStatus(404)

  return response.send(listMovieByTitle)
})

const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    // eslint-disable-next-line max-len
    return response.status(400).send('The following fields are required: Title, Directors, Release Date, Rating, Run Time, Genres')
  }

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMoviesByDirectors, getMovieByTitle, saveNewMovie }
