import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import FeedIcon from '@mui/icons-material/Feed'

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
