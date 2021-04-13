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
    case 'ADD_FAVOURITES':
      // let tempFav = state.favourites
      // tempFav.concat(action.payload)

      return {
        ...state,
        favourites: [...new Set(state.favourites.concat(action.payload))]
      }
    default: return state
  }
}

export default moviesReducers