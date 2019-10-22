import { CLEAR_USER, SET_USER, SET_CURRENT_CHANNEL, SUDN } from '../actions'

const initialUserState = {
    currentUser: undefined,
    isLoading: true,
    channels: []
}

export default (state = initialUserState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                currentUser: state.displayName ? {
                    ...action.payload,
                    displayName: state.displayName
                } : action.payload,
                isLoading: false
            }
        case SUDN:
            return {
                ...state,
                displayName: action.payload
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
