export const SET_POPULAR_MOVIES =  'SET_POPULAR_MOVIES'
export const setPopularMovies = (movies) => {
    return {
        type: SET_POPULAR_MOVIES,
        payload: movies
    }
}


export const SET_DISCOVER = 'SET_DISCOVER'
export const setDiscover = (movies) => {
    return {
        type: SET_DISCOVER,
        payload: movies
    }
}


export const SET_TRENDING_MOVIES = 'SET_TRENDING_MOVIES'
export const setTrendingMovies = (movies) => {
    return {
        type: SET_TRENDING_MOVIES,
        payload: movies
    }
}


export const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL'
export const setMovieDetail = (movie) => {
    return {
        type: SET_MOVIE_DETAIL,
        payload: movie
    }
}


export const SET_SIMILAR_MOVIES = 'SET_SIMILAR_MOVIES'
export const setSimilarMovies = (movies) => {
    return {
        type: SET_SIMILAR_MOVIES,
        payload: movies
    }
}