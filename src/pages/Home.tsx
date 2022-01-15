import { MainButton } from 'components'
import Box from '@mui/material/Box'
import FeedIcon from '@mui/icons-material/Feed'

export default function Home(): JSX.Element {
  return (
    <Box textAlign="center" mt={8}>
      <MainButton
        icon={<FeedIcon />}
        text="Enter information"
        toUrl="/residential-address"
      />
    </Box>
  )
}
