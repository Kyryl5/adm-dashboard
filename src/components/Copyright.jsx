import { Link, Typography } from '@mui/material'

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center"  >
    {'Copyright © '}
    <Link color="inherit" href="#">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  )
}