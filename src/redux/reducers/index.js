import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import genresReducer from "./genresReducer";
import movieReducer from "./movieReducer";
import nowMovieReducer from "./nowMovieReduecer";
import recommendReducer from "./recommendReducer";
import searchMovieReducer from "./searchMovieReducer";

export default combineReducers({
  movie: movieReducer,
  detail: detailReducer,
  genres: genresReducer,
  recommend: recommendReducer,
  now: nowMovieReducer,
  search: searchMovieReducer,
});
