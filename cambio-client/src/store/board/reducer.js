import {
    SET_BEEF
} from './types'

const initialState = {
    beef: "Yum"
}

const reducerActions = {
    [SET_BEEF](state, action){
        return {
            ...state,
            beef: action.payload
        }
    } 
}

const boardReducer = (state = initialState, action) => {
    return reducerActions[action.type] ? reducerActions[action.type](state, action) : state
}

export default boardReducer