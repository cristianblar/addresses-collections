import { Box, Button, Typography } from '@mui/material'
import { Link, To } from 'react-router-dom'

interface MainButtonProps {
  text: string
  toUrl: To
  icon: JSX.Element
  handleClick?: () => void
}

export default function MainButton({
  text,
  toUrl,
  icon,
  handleClick
}: MainButtonProps): JSX.Element {
  return (
    <Box textAlign="center">
      <Button
        component={Link}
        to={toUrl}
        endIcon={icon}
        variant="outlined"
        size="large"
        color="primary"
        onClick={handleClick ?? undefined}
      >
        <Typography variant="h5">{text}</Typography>
      </Button>
    </Box>
  )
}
