import { ActionTypes } from "../constants/action-type";

export const setusers = (users) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: users
    }
}

export const selecteduser = (user) => {
    return {
        type: ActionTypes.SELECTED_USER,
        payload: user
    }
}