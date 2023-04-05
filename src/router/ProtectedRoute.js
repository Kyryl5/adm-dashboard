import { useSelector } from 'react-redux'
import { Route, Navigate, Routes } from 'react-router-dom'

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth)

  return isAuth ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" replace state={{ from: rest.location }} />
  )
}

export default ProtectedRoute
