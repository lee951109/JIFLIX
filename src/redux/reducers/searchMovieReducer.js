let initialState = {
  searchMovies: {},
};

function searchMovieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_SERACH_REQUEST":
      return { ...state };

    case "GET_SERACH_SUCCESS":
      return {
        ...state,
        searchMovies: payload.searchMovieApi,
      };

    case "GET_SERACH_FALIURE":
      return { ...state };

    default:
      return { ...state };
  }
}

export default searchMovieReducer;
