import { Address } from 'models'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import { Fragment } from 'react'
import { provinces } from 'constant'
import { SchemaOf, object as yupObject, number, string as yupString } from 'yup'
import { useFormik } from 'formik'

const validationSchema: SchemaOf<Address> = yupObject({
  streetNumber: number().required('Street number is required'),
  streetName: yupString()
    .min(2, 'Street name is not valid')
    .required('Street name is required'),
  city: yupString().min(2, 'City is not valid').required('City is required'),
  province: yupString().required('Province is required'),
  code: yupString()
    .matches(/^[A-Za-z0-9]{3}\s?[A-Za-z0-9]{3}$/m, 'Invalid postal code')
    .required('Postal code is required')
})

interface FormProps {
  origin: string
  employed?: boolean
  handleSubmit: (values: Address) => void
  handleBack: () => void
}

export default function Form({
  origin,
  employed,
  handleSubmit,
  handleBack
}: FormProps): JSX.Element {
  const formik = useFormik({
    initialValues: {
      streetNumber: '',
      streetName: '',
      city: '',
      province: '',
      code: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={4}>
        {(origin !== 'previous-employment-address' || employed) && (
          <Fragment>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="streetNumber"
                name="streetNumber"
                label="Street number"
                type="number"
                value={formik.values.streetNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.streetNumber &&
                  Boolean(formik.errors.streetNumber)
                }
                helperText={
                  formik.touched.streetNumber && formik.errors.streetNumber
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="streetName"
                name="streetName"
                label="Street name"
                value={formik.values.streetName}
                onChange={formik.handleChange}
                error={
                  formik.touched.streetName && Boolean(formik.errors.streetName)
                }
                helperText={
                  formik.touched.streetName && formik.errors.streetName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="city"
                name="city"
                label="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="province">Province</InputLabel>
                <Select
                  labelId="province"
                  id="province"
                  name="province"
                  value={formik.values.province}
                  label="Province"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.province && Boolean(formik.errors.province)
                  }
                >
                  {provinces.map((province, idx) => (
                    <MenuItem key={`${idx}-${province}`} value={province}>
                      {province}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="code"
                name="code"
                label="Postal code"
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
              />
            </Grid>
          </Fragment>
        )}
        <Grid item xs={6}>
          <Button
            color="primary"
            variant="outlined"
            fullWidth
            type="button"
            size="large"
            onClick={handleBack}
          >
            Go back
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            size="large"
            disabled={
              (origin === 'property-address' &&
                formik.values.province === 'Quebec') ||
              (origin === 'employment-address' && !employed)
            }
          >
            {origin === 'previous-employment-address' ? 'Submit' : 'Next'}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
