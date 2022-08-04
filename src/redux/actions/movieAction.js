import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      const topRatedApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      const upComingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko-KR`
      );

      // 병렬 방식으로 API를 동시에 호출 한다.
      let [popular, topRated, upcoming, genreList] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi,
        genreApi,
      ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popular: popular.data,
          topRated: topRated.data,
          upcoming: upcoming.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FALIURE" });
      console.log("MOVIES_ERROR", error);
    }
  };
}

function getMovieDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_DETAIL_REQUEST" });
      const movieDetailApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=ko-KR`
      );
      const videoIdApi = api.get(
        `movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`
      );

      let [movieDetail, videoId] = await Promise.all([
        movieDetailApi,
        videoIdApi,
      ]);
      dispatch({
        type: "GET_DETAIL_SUCCESS",
        payload: { movieDetail: movieDetail.data, videoId: videoId.data },
      });
    } catch (error) {
      dispatch({ type: "GET_DETAIL_FALIURE" });
      console.log("DETAIL_ERROR", error);
    }
  };
}

function getMovieRecommend(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_RECOMMEND_REQUEST" });
      const MovieRecommendApi = await api.get(
        `movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      dispatch({
        type: "GET_RECOMMEND_SUCCESS",
        payload: {
          MovieRecommendApi: MovieRecommendApi.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_RECOMMEND_FALIURE" });
      console.log("RECOMMEND_ERROR", error);
    }
  };
}

export const movieAction = {
  getMovies,
  getMovieDetail,
  getMovieRecommend,
};
