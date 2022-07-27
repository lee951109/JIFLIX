import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  movie: movieReducer,
  detail: detailReducer,
});
