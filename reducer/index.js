import { ACTION } from '../actions'

const initialState = {
    more: true,
    action: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION:
            console.log(action.payload)
            return {
                ...state,
                action: action.payload
            }
        default:
            return state
    }
}
