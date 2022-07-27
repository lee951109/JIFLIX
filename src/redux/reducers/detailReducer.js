let initialState = {
  movieDetail: {},
  loading: true,
};

function detailReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_DETAIL_REQUEST":
      return { ...state, loading: true };

    case "GET_DETAIL_SUCCESS":
      return {
        ...state,
        movieDetail: payload.response,
        loading: false,
      };

    case "GET_DETAIL_FALIURE":
      return { ...state, loading: false };

    default:
      return { ...state };
  }
}

export default detailReducer;
