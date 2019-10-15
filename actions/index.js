export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL'

export const setUser = user => dispatch => dispatch({ type: SET_USER, payload: user })

export const clearUser = _ => dispatch => dispatch({ type: CLEAR_USER })

export const setCurrentChannel = channel => dispatch => dispatch({ type: SET_CURRENT_CHANNEL, payload: channel })
