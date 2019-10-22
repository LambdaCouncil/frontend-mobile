export const
    SET_USER = 'SET_USER',
    CLEAR_USER = 'CLEAR_USER',
    SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL',
    SUDN = 'SUDN'

export const
    setUser = user => dispatch => dispatch({ type: SET_USER, payload: user }),
    signUpDisplayName = dn => dispatch => dispatch({ type: SUDN, payload: dn }),
    clearUser = _ => dispatch => dispatch({ type: CLEAR_USER }),
    setCurrentChannel = channel => dispatch => dispatch({ type: SET_CURRENT_CHANNEL, payload: channel })
