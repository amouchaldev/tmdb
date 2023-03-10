import { SET_POPULAR_TVSHOW, SET_TRENDING_TVSHOW, SET_TV_DETAIL, SET_SIMILAR_TV } from "./actions/tvShowActions"
import { api_key } from "../app/api";
import { tmdbApi } from "../app/api";
const initialState = {
    popularTvShow: [],
    trendingTvShow: [],
    tvDetail: {},
    similarTv: []
}
const tvShowReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_TVSHOW:
            return {
                ...state,
                popularTvShow: action.payload
            }
        case SET_TRENDING_TVSHOW:
            return {
                ...state,
                trendingTvShow: action.payload
            }
        case SET_TV_DETAIL:
        return {
            ...state,
            tvDetail: action.payload
        }
        case SET_SIMILAR_TV:
        return {
            ...state,
            similarTv: action.payload
        }
        default:
            return state
    }
}
export default tvShowReducer;