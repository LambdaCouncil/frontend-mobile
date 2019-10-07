import { ACTION } from '../actions'

const initialState = {
    more: true,
    actions: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION:
            console.log(action.payload)
            return {
                ...state,
                actions: action.payload
            }
        default:
            return { ...state }
    }
}
