import { colors } from 'constant'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import canadianFlag from 'assets/canadian-flag.jpeg'
import styles from './Header.module.css'
import Typography from '@mui/material/Typography'

export default function Header() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" p={2}>
      <div className={styles['image-container']}>
        <Link to="/">
          <img
            className={styles['canadian-flag']}
            src={canadianFlag}
            alt="Canadian real flag"
          />
        </Link>
      </div>
      <Typography ml={2} variant="h1" color={colors.red}>
        Canadian Bank
      </Typography>
    </Box>
  )
}
