let initialState = {
  genres: [],
};

function genresReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_GENRES_REQUEST":
      return { ...state };

    case "GET_GENRES_SUCCESS":
      return {
        ...state,
        genres: payload.genresApi,
      };

    case "GET_GENRES_FALIURE":
      return { ...state };

    default:
      return { ...state };
  }
}

export default genresReducer;
