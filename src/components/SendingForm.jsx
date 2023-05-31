import { Box, Button, TextField, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Formik } from 'formik'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import { checkoutSchema, initialValues, checkoutLoginSchema, initialLoginValues } from '../scenes/form/formValidation';
import { useDispatch } from 'react-redux'
import { registration, login } from '../redux/actions'
import { useNavigate } from 'react-router-dom'

export default function SendingForm({ type }) {
  const [showPassword, setShowPassword] = useState(false)
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleFormSubmit = (values) => {
    dispatch(registration(values.firstName, values.lastName, values.email, values.password));
  }

  const handleFormLogin = (values) => {
    dispatch(login(values.email, values.password))
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Box m="20px">
      <Formik
        onSubmit={type === 'login' ? handleFormLogin : handleFormSubmit}
        initialValues={type === 'login' ? initialLoginValues : initialValues}
        validationSchema={type === 'login' ? checkoutLoginSchema : checkoutSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                width: "20vw",
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                marginTop: "20px",
              }}
            >
              {type !== 'login' && (
                <>
                  <Box height="64px" gridColumn={'span 2'}>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={!!touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </Box>
                  <Box height="64px" gridColumn={'span 2'}>
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={!!touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </Box>
                </>
              )}
              <Box height="64px" gridColumn={'span 4'}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Box>
              <Box height="64px" gridColumn={'span 4'  }>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px" mb="20px">
              <Button type="submit" color="secondary" variant="contained" >
                {type === "login" ? "Login" : "Create A New User"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}
