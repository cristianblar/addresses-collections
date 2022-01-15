import { Address, Employment } from 'models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

export type CustomerAddresses = {
  employmentData: Address & Employment
  previousEmploymentData: Address & Employment
  propertyAddress: Address
  residentialAddress: Address
}

const initialState: CustomerAddresses = {
  employmentData: {
    city: '',
    code: '',
    employed: true,
    employmentType: 'Employed',
    province: '',
    streetName: '',
    streetNumber: ''
  },
  previousEmploymentData: {
    city: '',
    code: '',
    employed: false,
    employmentType: 'Employed',
    province: '',
    streetName: '',
    streetNumber: ''
  },
  propertyAddress: {
    city: '',
    code: '',
    province: '',
    streetName: '',
    streetNumber: ''
  },
  residentialAddress: {
    city: '',
    code: '',
    province: '',
    streetName: '',
    streetNumber: ''
  }
}

export const addressesSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    submitResidentialAddress: (state, action: PayloadAction<Address>) => {
      state.residentialAddress = action.payload
    },
    submitPropertyAddress: (state, action: PayloadAction<Address>) => {
      state.propertyAddress = action.payload
    },
    submitEmploymentData: (
      state,
      action: PayloadAction<Address & Employment>
    ) => {
      state.employmentData = action.payload
    },
    submitPreviousEmploymentData: (
      state,
      action: PayloadAction<Address & Employment>
    ) => {
      state.previousEmploymentData = action.payload
    }
  }
})

export const {
  submitEmploymentData,
  submitPreviousEmploymentData,
  submitPropertyAddress,
  submitResidentialAddress
} = addressesSlice.actions

export const selectResidentialAddress = (state: RootState) =>
  state.customerAddresses.residentialAddress
export const selectPropertyAddress = (state: RootState) =>
  state.customerAddresses.propertyAddress
export const selectEmploymentData = (state: RootState) =>
  state.customerAddresses.employmentData
export const selectEmploymentAddress = (state: RootState): Address => {
  const { city, code, province, streetName, streetNumber } =
    state.customerAddresses.employmentData
  return { streetNumber, streetName, city, province, code }
}
export const selectPreviousEmploymentData = (state: RootState) =>
  state.customerAddresses.previousEmploymentData
export const selectPreviousEmploymentAddress = (state: RootState): Address => {
  const { city, code, province, streetName, streetNumber } =
    state.customerAddresses.previousEmploymentData
  return { streetNumber, streetName, city, province, code }
}
export const selectCustomerAddresses = (state: RootState) =>
  state.customerAddresses

export default addressesSlice.reducer
