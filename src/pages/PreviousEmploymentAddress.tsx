import { Address, Employment } from 'models'
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography
} from '@mui/material'
import { colors, employmentTypes } from 'constant'
import { Form } from 'components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function PreviousEmploymentAddress(): JSX.Element {
  const navigate = useNavigate()

  const [employment, setEmployment] = useState<Employment>({
    employed: false,
    employmentType: 'Employed'
  })

  const handleBack = () => navigate('/employment-address')

  const handleSubmit = (values: Address) => {
    console.log(values)
    navigate('/data-sent')
  }

  return (
    <Box marginX="auto" mt={6} textAlign="center" width="80%">
      <Paper sx={{ backgroundColor: colors.light }} elevation={3}>
        <Box p={2}>
          <Box mb={4}>
            <Typography variant="h5" color="primary" mb={2}>
              Previous employment address
            </Typography>
          </Box>
          <Grid container mb={4} spacing={4}>
            <Grid
              item
              xs={12}
              sm={employment.employed ? 6 : 12}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={employment.employed}
                      onChange={(e) =>
                        setEmployment((currentEmployment) => ({
                          ...currentEmployment,
                          employed: e.target.checked
                        }))
                      }
                    />
                  }
                  label="Did you have a previous employment?"
                />
              </FormGroup>
            </Grid>
            {employment.employed && (
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="employmentType">Employment type</InputLabel>
                  <Select
                    labelId="employmentType"
                    id="employmentType"
                    name="employmentType"
                    value={employment.employmentType}
                    label="Employment type"
                    onChange={(e) =>
                      setEmployment((currentEmployment) => ({
                        ...currentEmployment,
                        employmentType: e.target.name
                      }))
                    }
                  >
                    {employmentTypes.map((employment, idx) => (
                      <MenuItem key={`${idx}-${employment}`} value={employment}>
                        {employment}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            )}
          </Grid>
          <Form
            origin="previous-employment-address"
            employed={employment.employed}
            handleSubmit={handleSubmit}
            handleBack={handleBack}
          />
        </Box>
      </Paper>
    </Box>
  )
}
