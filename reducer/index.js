import { CLEAR_USER, SET_USER, SET_CURRENT_CHANNEL } from '../actions'

const initialUserState = {
    currentUser: undefined,
    isLoading: true
}

export default (state = initialUserState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                currentUser: action.payload,
                isLoading: false
            }
        case CLEAR_USER:
            return {
                ...state,
                isLoading: false
            }
        case SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload
            }
        default:
            return state
    }
}
