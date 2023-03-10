import { combineReducers } from "redux";
import tvShowReducer from "./tvShowReducer";
import movieReducer from "./movieReducer";
import UserReducer from "./UserReducer";
const allReducers = combineReducers({
    tvShow: tvShowReducer,
    movie: movieReducer,
    user: UserReducer
})
export default allReducers