import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
    );

    const topRatedApi = api.get(
      `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
    );

    const upComingApi = api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
    );

    // 병렬 방식으로 API를 동시에 호출 한다.
    let [popular, topRated, upcoming] = await Promise.all([
      popularMovieApi,
      topRatedApi,
      upComingApi,
    ]);

    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popular: popular.data,
        topRated: topRated.data,
        upcoming: upcoming.data,
      },
    });
  };
}

export const movieAction = {
  getMovies,
};
