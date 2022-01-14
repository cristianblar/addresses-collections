import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FeedIcon from '@mui/icons-material/Feed'
import Typography from '@mui/material/Typography'

export default function MainButton(): JSX.Element {
  return (
    <Box textAlign="center">
      <Button
        component={Link}
        to="/residential-address"
        endIcon={<FeedIcon />}
        variant="outlined"
        size="large"
        color="primary"
      >
        <Typography variant="h5">Enter information</Typography>
      </Button>
    </Box>
  )
}