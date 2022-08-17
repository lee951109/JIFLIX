let initialState = {
  searchMovies: {},
  loading: true,
};

function searchMovieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_SERACH_REQUEST":
      return { ...state, loading: true };

    case "GET_SERACH_SUCCESS":
      return {
        ...state,
        searchMovies: payload.searchMovieApi,
        loading: false,
      };

    case "GET_SERACH_FALIURE":
      return { ...state, loading: false };

    default:
      return { ...state };
  }
}

export default searchMovieReducer;
