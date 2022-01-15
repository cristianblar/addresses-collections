import { Address } from 'models'
import { Box, Paper, Typography } from '@mui/material'
import { colors } from 'constant'
import { Form } from 'components'
import {
  useAppSelector,
  useAppDispatch,
  selectResidentialAddress,
  submitResidentialAddress
} from 'store'
import { useNavigate } from 'react-router-dom'

export default function ResidentialAddress(): JSX.Element {
  const navigate = useNavigate()
  const address = useAppSelector(selectResidentialAddress)
  const dispatch = useAppDispatch()

  const handleBack = () => navigate('/')

  const handleSubmit = (values: Address) => {
    const cleanedValues = Object.entries(values).reduce(
      (cleanedObject, tuple) => {
        if (typeof tuple[1] === 'string') {
          if (tuple[0] === 'code')
            cleanedObject[tuple[0]] = tuple[1].replaceAll(' ', '').toUpperCase()
          else cleanedObject[tuple[0]] = tuple[1].trim().toUpperCase()
        } else {
          cleanedObject[tuple[0]] = tuple[1]
        }
        return cleanedObject
      },
      {} as Record<PropertyKey, unknown>
    )
    dispatch(submitResidentialAddress(cleanedValues as Address))
    navigate('/property-address')
  }

  return (
    <Box marginX="auto" mt={6} textAlign="center" width="80%">
      <Paper sx={{ backgroundColor: colors.light }} elevation={3}>
        <Box p={2}>
          <Box mb={4}>
            <Typography variant="h5" color="primary" mb={2}>
              Residential address
            </Typography>
          </Box>
          <Form
            origin="residential-address"
            currentAddress={address}
            handleSubmit={handleSubmit}
            handleBack={handleBack}
          />
        </Box>
      </Paper>
    </Box>
  )
}
