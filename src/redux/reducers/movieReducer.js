let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popular,
        topRatedMovies: payload.topRated,
        upComingMovies: payload.upcoming,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
