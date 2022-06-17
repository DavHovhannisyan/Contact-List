export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface ICompany {
    name: string,
    catchPhrase: string;
    bs: string;

}

export interface IUser {
    active?:boolean;
    id: number;
    name: string;
    email: string;
    username: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}


export interface UserState {
    favorites: any;
    users: IUser[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    SET_FAVORITE = "SET_FAVORITE",
    DELETE_FAVORITE = "DELETE_FAVORITE",
    SET_ACTIVE = "SET_ACTIVE",
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface SetFavoriteAction {
    type: UserActionTypes.SET_FAVORITE;
    payload: any;
}

interface DeleteFavoriteAction {
    type: UserActionTypes.DELETE_FAVORITE;
    payload: any;
}

interface SetActiveAction {
    type: UserActionTypes.SET_ACTIVE;
    payload: any;
}

export type UserAction =
    FetchUserAction
    | FetchUserErrorAction
    | FetchUserSuccessAction
    | SetFavoriteAction
    | DeleteFavoriteAction
    | SetActiveAction;
