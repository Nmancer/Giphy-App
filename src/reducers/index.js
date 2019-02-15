import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import TrendingReducer from "./TrendingReducer";

export default combineReducers({
  trending: TrendingReducer,
  searchResults: SearchReducer
});
