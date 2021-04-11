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
    default: return state
  }
}

export default moviesReducers