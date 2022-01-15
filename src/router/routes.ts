import { lazy } from 'react'
import { Route } from 'models'

const ResidentialAddress = lazy(() => import('pages/ResidentialAddress'))
const PropertyAddress = lazy(() => import('pages/PropertyAddress'))
const EmploymentAddress = lazy(() => import('pages/EmploymentAddress'))
const PreviousEmploymentAddress = lazy(
  () => import('pages/PreviousEmploymentAddress')
)
const Result = lazy(() => import('pages/Result'))

export const routes: Route[] = [
  {
    Component: ResidentialAddress,
    path: 'residential-address'
  },
  {
    Component: PropertyAddress,
    path: 'property-address',
    require: 'residentialAddress'
  },
  {
    Component: EmploymentAddress,
    path: 'employment-address',
    require: 'propertyAddress'
  },
  {
    Component: PreviousEmploymentAddress,
    path: 'previous-employment-address',
    require: 'employmentData'
  },
  {
    Component: Result,
    path: 'data-sent',
    require: 'employmentData'
  }
]
