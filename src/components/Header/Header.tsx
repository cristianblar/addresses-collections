import { Box, Typography } from '@mui/material'
import { colors } from 'constant'
import { Link } from 'react-router-dom'
import canadianFlag from 'assets/canadian-flag.jpeg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      p={2}
    >
      <div className={styles['image-container']}>
        <Link to="/">
          <img
            className={styles['canadian-flag']}
            src={canadianFlag}
            alt="Canadian real flag"
          />
        </Link>
      </div>
      <Typography ml={2} variant="h1" fontSize="60px" color={colors.orange}>
        Canadian Bank
      </Typography>
    </Box>
  )
}
