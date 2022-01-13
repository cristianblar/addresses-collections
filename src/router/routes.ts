import { lazy } from 'react'
import { Route } from 'models'

const ResidentialAddress = lazy(() => import('pages/ResidentialAddress'))
const PropertyAddress = lazy(() => import('pages/PropertyAddress'))
const EmploymentAddress = lazy(() => import('pages/EmploymentAddress'))

export const routes: Route[] = [
  {
    Component: ResidentialAddress,
    path: 'residential-address'
  },
  {
    Component: PropertyAddress,
    path: 'property-address'
  },
  {
    Component: EmploymentAddress,
    path: 'employment-address'
  }
]
