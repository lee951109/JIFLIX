let initialState = {
  nowMovies: {},
  searchMovies: {},
  loading: true,
};

function nowMovieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_NOWMOVIE_REQUEST":
      return { ...state, loading: true };

    case "GET_NOWMOVIE_SUCCESS":
      return {
        ...state,
        nowMovies: payload.nowMovieApi,
        loading: false,
      };

    case "GET_SEARCHMOVIE_SUCCESS":
      return {
        ...state,
        searchMovies: payload.searchMovieApi,
        loading: false,
      };

    case "GET_NEWMOVIE_FALIURE":
      return { ...state, loading: false };

    default:
      return { ...state };
  }
}

export default nowMovieReducer;
