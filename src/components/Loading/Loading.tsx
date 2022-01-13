import styles from './Loading.module.css'

export default function Loading(): JSX.Element {
  return (
    <div className={styles['lds-ring']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
