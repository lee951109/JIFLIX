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

function getGenres() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_GENRES_REQUEST" });
      const genresApi = await api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko-KR`
      );

      dispatch({
        type: "GET_GENRES_SUCCESS",
        payload: { genresApi: genresApi.data.genres },
      });
    } catch (error) {
      dispatch({ type: "GET_GENRES_FALIURE" });
      console.log("GENRES_ERROR", error);
    }
  };
}

function getMovieRecommend(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_RECOMMEND_REQUEST" });
      const MovieRecommendApi = api.get(
        `movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko-KR`
      );

      let [recommendMovie, genre] = await Promise.all([
        MovieRecommendApi,
        genreApi,
      ]);

      dispatch({
        type: "GET_RECOMMEND_SUCCESS",
        payload: {
          recommendMovie: recommendMovie.data,
          genre: genre.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_RECOMMEND_FALIURE" });
      console.log("RECOMMEND_ERROR", error);
    }
  };
}

function getNowMovie() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_NOWMOVIE_REQUEST" });

      const nowMovieApi = await api.get(
        `/movie/now_playing?api_key=${API_KEY}&language=ko-KR&region=KR&page=1`
      );
      dispatch({
        type: "GET_NOWMOVIE_SUCCESS",
        payload: { nowMovieApi: nowMovieApi.data },
      });
    } catch (error) {
      dispatch({ type: "GET_NEWMOVIE_FALIURE" });
      console.log("NowMovie_ERROR", error);
    }
  };
}

function getSearchMovie(query) {
  console.log("query ? ", query);
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_SEARCH_REQUEST" });

      const searchMovieApi = await api.get(
        `/search/movie?api_key=${API_KEY}&language=ko-KR&page=1&query=${query}`
      );
      console.log("searchMovieApi", searchMovieApi);

      dispatch({
        type: "GET_SEARCH_SUCCESS",
        payload: { searchMovieApi: searchMovieApi.data },
      });
    } catch (error) {
      dispatch({ type: "GET_SEARCH_FALIUER" });
      console.log("searchMovie_ERROR", error);
    }
  };
}

export const movieAction = {
  getMovies,
  getMovieDetail,
  getGenres,
  getMovieRecommend,
  getNowMovie,
  getSearchMovie,
};
