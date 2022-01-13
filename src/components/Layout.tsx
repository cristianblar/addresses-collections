import { Fragment, ReactNode, Suspense } from 'react'
import { Loading } from '.'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <header>HEADER!</header>
        <main>{children}</main>
      </Suspense>
    </Fragment>
  )
}
