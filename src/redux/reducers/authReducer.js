export const SET_AUTH = 'SET_AUTH'
export const SET_USER = 'SET_USER'
export const SET_LOADING = 'SET_LOADING'

const initialState = {
  user: {},
  isAuth: localStorage.getItem('token') ? true : false,
  isLoading: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.payload }
    case SET_USER:
      return { ...state, user: action.payload }
    case SET_LOADING:
      return { ...state, isLoading: action.payload }
    default:
      return state
  }
}

export const setAuth = (bool) => ({ type: SET_AUTH, payload: bool })
export const setUser = (user) => ({ type: SET_USER, payload: user })
export const setLoading = (bool) => ({ type: SET_LOADING, payload: bool })
