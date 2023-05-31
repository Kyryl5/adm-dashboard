import { Box } from '@mui/material'
import Header from '../../components/Header'
import SendingForm from '../../components/SendingForm'

export default function Form() {
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <SendingForm />
    </Box>
  )
}
