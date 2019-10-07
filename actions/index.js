export const ACTION = 'ACTION'

export const action = term => dispatch => dispatch({ type: ACTION, payload: term })
