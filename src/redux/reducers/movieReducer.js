let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  loading: true,
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };

    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popular,
        topRatedMovies: payload.topRated,
        upcomingMovies: payload.upcoming,
        loading: false,
      };

    case "GET_MOVIES_FALIURE":
      return { ...state, loading: false };

    default:
      return { ...state };
  }
}

export default movieReducer;
