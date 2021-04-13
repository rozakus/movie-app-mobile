const initalState = {
  movies: [],
  movieDetail: {},
  favourites: []
}

const moviesReducers = (state = initalState, action) => {
  switch (action.type) {
    case 'UPDATE_MOVIES': return {
      ...state,
      movies: action.payload
    }
    case 'UPDATE_MOVIE_DETAIL': return {
      ...state,
      movieDetail: action.payload
    }
    default: return state
  }
}

export default moviesReducers