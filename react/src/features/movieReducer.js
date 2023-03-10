import { SET_POPULAR_MOVIES, SET_DISCOVER, setDiscover,
     SET_TRENDING_MOVIES, SET_MOVIE_DETAIL,
    SET_SIMILAR_MOVIES } from "./actions/movieActions";
import { tmdbApi } from "../app/api";
import { api_key } from "../app/api";
const initialState = {
    popularMovies: [],
    discoverList: [],
    trendingMovies: [],
    movieDetail: {},
    similarMovies: []
}
const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES:
            return {
                ...state, 
                popularMovies: action.payload
            }
        case SET_DISCOVER: 
            return {
                ...state,
                discoverList: action.payload
            }
        case SET_TRENDING_MOVIES:
            return {
                ...state,
                trendingMovies: action.payload
            }
        case SET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        case SET_SIMILAR_MOVIES: 
            return {
                ...state,
                similarMovies: action.payload
            }
        default:
            return state;
    }
}

export const fetchDiscoverMovies = (count = 18) => async (dispatch) => {
    try {
        const response = await tmdbApi.get(`discover/movie?api_key=${api_key}`);
        dispatch(setDiscover(response.data.results.slice(0, count)));
      } catch (err) {
        console.error(err);
      }    
}
export default movieReducer;