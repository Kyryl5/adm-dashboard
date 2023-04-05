import AuthService from '../../services/AuthService'
import axios from 'axios'
import { setAuth, setUser, setLoading } from '../reducers/authReducer'
import { API_URL } from '../../http'

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await AuthService.login(email, password)
    console.log('login resp >>', response)
    localStorage.setItem('token', response.data.accessToken)
    dispatch(setAuth(true))
    dispatch(setUser(response.data.user))
  } catch (e) {
    console.log(e.response?.data?.message)
  }
}

export const registration = (firstName, lastName, email, password) => async (dispatch) => {
  try {
    const response = await AuthService.registration(firstName, lastName, email, password)
    console.log('registration res >>', response)
    localStorage.setItem('token', response.data.accessToken)
    dispatch(setAuth(true))
    dispatch(setUser(response.data.user))
  } catch (e) {
    console.log(e.response?.data?.message)
  }
}

export const logout = () => async (dispatch) => {
  try {
    const response = await AuthService.logout()
    localStorage.removeItem('token')
    dispatch(setAuth(false))
    dispatch(setUser({}))
  } catch (e) {
    console.log(e.response?.data?.message)
  }
}

export const checkAuth = () => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const response = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    })
    console.log('checkAuth resp >>', response)
    localStorage.setItem('token', response.data.accessToken)
    dispatch(setAuth(true))
    dispatch(setUser(response.data.user))
  } catch (e) {
    console.log(e.response?.data?.message)
  } finally {
    dispatch(setLoading(false))
  }
}
