// @@ THIS FILE CONTAIN COMMON  ACTION BETWEEN REDUCERS
import { api_key, backEndApi } from "../app/api";
import { tmdbApi } from "../app/api";
import { setPopularMovies, setTrendingMovies, setSimilarMovies } from "./actions/movieActions";
import { setPopularTvShow, setTrendingTvShow, setTvDetail, setSimilarTv } from "./actions/tvShowActions";
import { setMovieDetail } from "./actions/movieActions";
import { deleteInList, setMyList } from "./actions/userActions";
import Swal from "sweetalert2";
// function fetch popular movies, tv show ...
// posters refer to movies and tv shows
export const fetchPopularPosters = (section, count = 10) => async (dispatch) => {
    try {
        const response = await tmdbApi.get(
          `${section}/popular?api_key=${api_key}`
        );
        switch(section) {
            case 'movie':
                return dispatch(setPopularMovies(response.data.results.slice(0, count)))
            case 'tv':
                return dispatch(setPopularTvShow(response.data.results.slice(0, count)))
            default:
                return console.error('fetchPosters action error');
        }        
      } catch (err) {
        console.error(err);
}}

// function fetch trending movies, tv show ...
export const fetchTrendingPosters = (section) => async (dispatch) => {
  try {
      const response = await tmdbApi.get(
        `trending/${section}/day?api_key=${api_key}`
      );
      switch(section) {
          case 'movie':
            // console.log('from trending fn: ', response.data.results)
              return dispatch(setTrendingMovies(response.data.results))
          case 'tv':
              return dispatch(setTrendingTvShow(response.data.results))
          default:
              return console.error('fetchPosters action error');
      }        
    } catch (err) {
      console.error(err);
}}

// get movie or tv show detail
export const getDetail = (section, id) => async (dispatch) => {
  try {
    const response = await tmdbApi.get(
      `/${section}/${id}?api_key=${api_key}`
    );
    switch(section) {
        case 'movie':
          // console.log('from reducer fn: ', response.data)
            return dispatch(setMovieDetail(response.data))
        case 'tv':
            return dispatch(setTvDetail(response.data))
        default:
            // console.error('fetchPosters action error');
    }        
  } catch (err) {
    console.error(err);
}   
} 


// get similar movies or tv show 
export const getSimilar = (section, id) => async (dispatch) => {
  try {
    const response = await tmdbApi.get(
      `/${section}/${id}/similar?api_key=${api_key}`
    );
    switch(section) {
        case 'movie':
          // console.log('from reducer fn: ', response.data)
            return dispatch(setSimilarMovies(response.data.results))
        case 'tv':
            return dispatch(setSimilarTv(response.data.results))
        default:
            console.error('fetchPosters action error ,,');
    }        
  } catch (err) {
    console.error(err);
}   
} 


export function addToLibrary(media_type, media_id, section, user_id) {
  return async function () {
    const data = {
      media_type,
      media_id,
      section,
      user_id
    }
    try {
      await backEndApi.post(`/api/library`, data)
      // console.log(response)
      Swal.fire(
        'Great',
        'Added Successfully to ' + section + ' list',
        'success'
      )
      // return alert('added successfully')
    }
    catch (err) {
      Swal.fire(`already in ${section} list`)
      // return alert('already in library')
    }
  }
}


export function deleteFromLibrary(list, _id) {
  return async function (dispatch) {
    try {
      const response = await backEndApi.delete(`/api/library/${_id}`)
      console.log('try delete res: ', response)
      dispatch(deleteInList({list, _id}))
      Swal.fire(
        'Great',
        'Deleted Successfully from ' + list + ' list',
        'success'
      )
    }
    catch (err) {
      Swal.fire(`failed! please try again`)
    }
  }
}

export function getMyList(section, userId) {
  return async function(dispatch) {
    const response = await backEndApi.get(`/api/library/${section}/${userId}`)
    console.log('from get mylist() => ', {section, data: response.data})
    dispatch(setMyList({section, data:response.data}))
  } 
}

