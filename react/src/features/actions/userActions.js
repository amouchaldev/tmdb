export const SET_LOGIN = 'SET_LOGIN'
export function setLogin(user) {
    return {
        type: SET_LOGIN,
        payload: user
    }
}

export const SET_LOGOUT = 'SET_LOGOUT'
export function setLogout() {
    return {
        type: SET_LOGOUT
    }
}


export const SET_MY_LIST = 'SET_MY_LIST'
export function setMyList(list) {
    return {
        type: SET_MY_LIST,
        payload: list
    }
}

export const DELETE_IN_LIST = 'DELETE_IN_LIST'
export function deleteInList(data) {
    return {
        type: DELETE_IN_LIST,
        payload: data
    }
}