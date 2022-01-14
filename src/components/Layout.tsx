import { Fragment, ReactNode, Suspense } from 'react'
import { Header, Loading } from '.'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Loading />}>
        <main>{children}</main>
      </Suspense>
    </Fragment>
  )
}
