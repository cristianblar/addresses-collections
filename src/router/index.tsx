import { routes } from './routes'
import { Routes, Route } from 'react-router-dom'
import { useAppSelector, selectCustomerAddresses } from 'store'
import Home from 'pages/Home'
import { NotFound } from 'components'

export function Router(): JSX.Element {
  const customerData = useAppSelector(selectCustomerAddresses)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {routes
        .filter(({ require }) =>
          !require
            ? true
            : Object.entries(customerData[require]).every((tuple) => !!tuple[1])
        )
        .map(({ Component, path }, idx) => (
          <Route key={idx + path} element={<Component />} path={path} />
        ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
