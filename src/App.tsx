import './App.css'
import { Fragment } from 'react'
import { Layout } from 'components'
import { Router } from 'router'

function App() {
  return (
    <Fragment>
      <Layout>
        <Router />
      </Layout>
    </Fragment>
  )
}

export default App
