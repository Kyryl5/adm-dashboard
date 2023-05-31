
import { Box, Grid, Avatar, Typography, Container, useTheme } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { NavLink } from 'react-router-dom'
import SendingForm from './SendingForm'
import { tokens } from '../theme'
import Copyright from './Copyright'

export default function RegistrationForm() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ height: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            background: `linear-gradient(to bottom right, ${colors.primary[400]}, rgba(255, 255, 255, 0.05))`,
            boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.5), -1px -1px 2px #aaa, 1px 1px 2px #555',
            backdropFilter: 'blur(0.8rem)',
            padding: '1.5rem',
            borderRadius: '1rem',
            animation: '1s cardEnter',
            '@keyframes cardEnter': {
              from: {
                transform: 'translateX(100vw)',
                opacity: 0.1,
              },
              to: {
                transform: 'translateX(0)',
                opacity: 1,
              },
            },
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <SendingForm type="sendData" />
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <NavLink to="/login" variant="body2" style={{ color: 'inherit' }}>
                {" Already have an account? Login"}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Copyright />
    </>
  );
}
