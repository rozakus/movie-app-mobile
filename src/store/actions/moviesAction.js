import axios from 'axios'
const URL = `https://api.themoviedb.org/3/movie/`
const API = `?api_key=7c98211324b5ae7edc9215da2fe380fe&language=en-US&page=1`

export function updateMovies(category = 'now_playing') {
  return async (dispatch) => {
    try {

      const { data } = await axios.get(URL + category + API)

      dispatch({
        type: 'UPDATE_MOVIES',
        payload: data.results
      })

    } catch (err) {
      console.log(err)
    }
  }
}

export function updateMovieDetail(query) {
  return async (dispatch) => {
    try {

      const { data } = await axios.get(URL + query + API)

      dispatch({
        type: 'UPDATE_MOVIE_DETAIL',
        payload: data
      })

    } catch (err) {
      console.log(err)
    }
  }
}

export function addToFavourites(movie) {
  return async (dispatch) => {
    try {
      // console.log(movie)

      dispatch({
        type: 'ADD_FAVOURITES',
        payload: movie
      })

    } catch (err) {
      console.log(err)
    }
  }
}