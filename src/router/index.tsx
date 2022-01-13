import { routes } from './routes'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {routes.map(({ Component, path }, idx) => (
        <Route key={idx + path} element={<Component />} path={path} />
      ))}
    </Routes>
  )
}
