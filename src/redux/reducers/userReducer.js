import { ActionTypes } from "../constants/action-type";

const initalState = {
    users:[]
}

export const userReducer = (state=initalState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_USERS:
            return {...state, users:payload}    
        default:
            return state
    }
}

export const selecteduserReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_USER:
            return {...state, payload}    
        default:
            return state
    }
}