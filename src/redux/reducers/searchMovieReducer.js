let initialState = {
  searchMovies: {},
  searchQuery: "",
};

function searchMovieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_SERACH_REQUEST":
      return { ...state, searchQuery: "" };

    case "GET_SERACH_SUCCESS":
      return {
        ...state,
        searchMovies: payload.searchMovieApi,
        searchQuery: payload.searchQuery,
      };

    case "GET_SERACH_FALIURE":
      return { ...state, searchQuery: "" };

    default:
      return { ...state };
  }
}

export default searchMovieReducer;
