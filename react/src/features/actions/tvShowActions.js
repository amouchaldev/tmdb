export const SET_POPULAR_TVSHOW =  'SET_POPULAR_TVSHOW'
export const setPopularTvShow = (tv) => {
    return {
        type: SET_POPULAR_TVSHOW,
        payload: tv
    }
}


export const SET_TRENDING_TVSHOW =  'SET_TRENDING_TVSHOW'
export const setTrendingTvShow = (tv) => {
    return {
        type: SET_TRENDING_TVSHOW,
        payload: tv
    }
}


export const SET_TV_DETAIL = 'SET_TV_DETAIL'
export const setTvDetail = (tv) => {
    return {
        type: SET_TV_DETAIL,
        payload: tv
    }
}


export const SET_SIMILAR_TV = 'SET_SIMILAR_TV'
export const setSimilarTv = (tv) => {
    return {
        type: SET_SIMILAR_TV,
        payload: tv
    }
}
