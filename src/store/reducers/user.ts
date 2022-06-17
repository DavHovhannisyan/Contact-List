import {UserAction, UserActionTypes, UserState} from "../../types/user";

const initialState: UserState = {
    favorites: JSON.parse(localStorage.getItem("cart") || "{}"),
    users: [],
    loading: false,
    error: null
}

export const user = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                ...state,
                loading: true,
                error: null,
                users: []
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            const UsersData = action.payload.map(u => {
                return {
                    ...u,
                    active: true
                }
            })
            return {
                ...state,
                loading: false,
                error: null,
                users: UsersData
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                users: []
            }
        case UserActionTypes.SET_FAVORITE:
            if (!localStorage.getItem("card")) {
                localStorage.setItem("card", JSON.stringify({}));
            }
            const object = JSON.parse(localStorage.getItem("card") || "{}");
            object[action.payload.id] = {
                ...action.payload
            };
            delete object[action.payload.id].id;
            localStorage.setItem("card", JSON.stringify(object))

            return {
                ...state,
                favorites: object
            }
        case UserActionTypes.DELETE_FAVORITE:
            const FavoriteData = JSON.parse(localStorage.getItem("card") || "{}");
            delete FavoriteData[action.payload];
            localStorage.setItem("card", JSON.stringify(FavoriteData));

            return {
                ...state,
                favorites: FavoriteData
            }
        case UserActionTypes.SET_ACTIVE:
            const setUsers = state.users.map(e => {
                if (e.id === action.payload) {
                    e.active = !e.active
                }
                return e;
            })
            return {
                ...state,
                users: setUsers
            }

        default :
            return state

    }
}
