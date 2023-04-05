import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoginForm from './components/LoginForm'
import { useDispatch } from 'react-redux'
import { setAuth } from './redux/reducers/authReducer'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './router/ProtectedRoute'
import RegistrationForm from './components/RegistrationForm'
import MainPage from './components/MainPage'

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const isActivated = useSelector((state) => state.auth.user.isActivated)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    dispatch(setAuth(!!token))
  }, [dispatch])

  return (
    <div className="App">
      <h1>{isAuth ? 'Authorized' : 'Unauthorized'}</h1>
      <h1>{isActivated ? 'Activated' : 'Unactivated'}</h1>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="*" element={<ProtectedRoute element={MainPage} />} />
      </Routes>
    </div>
  )
}

