import {Dispatch} from "redux";
import {UserAction, UserActionTypes} from "../../types/user";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 800)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: "Texi e unecel sxal "
            })
        }
    }
}

export const setFavorite = (user:any):UserAction => {
    return {
        type: UserActionTypes.SET_FAVORITE,
        payload: user
    }
}

export const deleteFavorite = (id:any):UserAction => {
    return {
        type: UserActionTypes.DELETE_FAVORITE,
        payload: id
    }
}

export const setActive = (id:any):UserAction => {
    return {
        type: UserActionTypes.SET_ACTIVE,
        payload: id
    }
}
