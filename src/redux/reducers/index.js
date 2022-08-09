import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import movieReducer from "./movieReducer";
import nowMovieReducer from "./nowMovieReduecer";
import recommendReducer from "./recommendReducer";

export default combineReducers({
  movie: movieReducer,
  detail: detailReducer,
  recommend: recommendReducer,
  now: nowMovieReducer,
});
