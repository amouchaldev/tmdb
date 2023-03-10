import { backEndApi, csrf } from "../app/api";
import { SET_LOGIN, setLogin, setLogout, SET_LOGOUT, SET_MY_LIST, DELETE_IN_LIST } from "./actions/userActions";
const initialState = {
    user: null,
    loading: true,
    favorite: [],
    watched:  [],
    watchlist: []
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: 
            if (action.payload.status === 'success') {
                return {
                    ...state, 
                    user: action.payload.user,
                    loading: false
                }
            } 
            else {
                return {
                    ...state, 
                    loading: false
                }
            }
        case SET_LOGOUT: 
        return {
            ...state, 
            user: null,
            loading: false
        }
        case SET_MY_LIST: 
            return {
                ...state,
                [action.payload.section]: action.payload.data
            }

        case DELETE_IN_LIST: 
            if (action.payload.list === 'favorite') {
                return {
                    ...state,
                    favorite: state.favorite.filter(obj => obj.id !== action.payload._id)
                }
            } 
            else if (action.payload.list === 'watched') {
                return {
                    ...state,
                    watched: state.watched.filter(obj => obj.id !== action.payload._id)
                }
            } 
            else if(action.payload.list === 'watchlist') {
                return {
                    ...state,
                    watchlist: state.watchlist.filter(obj => obj.id !== action.payload._id)
                }
            } 
            else return state
        default:
            return state
    }
}


export const isAuthenticated = () => async (dispatch, getState) => {
      const user = getState().user.user
  if (!user) {
    try {
        console.log('trying')
      const response = await backEndApi.get("/api/user");
      if (response) dispatch(setLogin({status: "success", user: response.data}));
    //   setTimeout(() => {
    //       console.log('isAuth response: ', getState().user)
    //   }, 5000)
    } catch (err) {
        console.log('catching')
        dispatch(setLogin({status: 'failed'}));
    }
  }
};


export function logoutFn() {
    return async function (dispatch) {
        await csrf()
        try {
            const response = backEndApi.post('/logout')
            // console.log('isAuth: ', true)
            if (response) dispatch(setLogout())
        } 
        catch (err) {
            console.log('logout Errors: ', err)
        }
    }
}

export default UserReducer;