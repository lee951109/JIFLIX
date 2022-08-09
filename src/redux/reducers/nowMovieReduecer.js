let initialState = {
  nowMovies: {},
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
        nowMovies: payload.NowMovieApi,
        loading: false,
      };

    case "GET_NEWMOVIE_FALIURE":
      return { ...state, loading: false };

    default:
      return { ...state };
  }
}

export default nowMovieReducer;
