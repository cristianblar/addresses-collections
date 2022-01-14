import { Address } from 'models'
import { Box, Paper, Typography } from '@mui/material'
import { colors } from 'constant'
import { Form } from 'components'
import { useNavigate } from 'react-router-dom'

export default function PropertyAddress(): JSX.Element {
  const navigate = useNavigate()

  const handleBack = () => navigate('/residential-address')

  const handleSubmit = (values: Address) => {
    console.log(values)
    navigate('/employment-address')
  }

  return (
    <Box marginX="auto" mt={6} textAlign="center" width="80%">
      <Paper sx={{ backgroundColor: colors.light }} elevation={3}>
        <Box p={2}>
          <Box mb={4}>
            <Typography variant="h5" color="primary" mb={2}>
              Property address
            </Typography>
          </Box>
          <Form
            origin="property-address"
            handleSubmit={handleSubmit}
            handleBack={handleBack}
          />
        </Box>
      </Paper>
    </Box>
  )
}
