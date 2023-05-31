
import { useEffect } from 'react'
import LoginForm from './components/LoginForm'
import { useDispatch } from 'react-redux'
import { setAuth } from './redux/reducers/authReducer'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './router/ProtectedRoute'
import RegistrationForm from './components/RegistrationForm'
import MainPage from './components/MainPage'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'

export default function App() {
  const dispatch = useDispatch()
  const [theme, colorMode] = useMode()

  useEffect(() => {
    const token = localStorage.getItem('token')
    dispatch(setAuth(!!token))
  }, [dispatch])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="*" element={<ProtectedRoute element={MainPage} />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}
