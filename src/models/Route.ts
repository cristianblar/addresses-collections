import { ComponentType } from 'react'
import { CustomerAddresses } from 'store'

type Route = {
  path: string
  Component: ComponentType
  require?: keyof CustomerAddresses
}

export default Route
