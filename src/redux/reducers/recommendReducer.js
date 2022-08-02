let initialState = {
  recommend: {},
  loading: true,
};

function recommendReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_RECOMMEND_REQUEST":
      return { ...state, loading: true };

    case "GET_RECOMMEND_SUCCESS":
      return {
        ...state,
        recommend: payload.MovieRecommendApi,
        loading: false,
      };

    case "GET_RECOMMEND_FALIURE":
      return { ...state, loading: false };

    default:
      return { ...state };
  }
}

export default recommendReducer;
